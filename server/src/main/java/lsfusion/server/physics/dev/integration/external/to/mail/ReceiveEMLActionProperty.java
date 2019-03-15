package lsfusion.server.physics.dev.integration.external.to.mail;

import com.sun.mail.pop3.POP3Folder;
import com.sun.mail.util.FolderClosedIOException;
import com.sun.mail.util.MailSSLSocketFactory;
import lsfusion.base.col.MapFact;
import lsfusion.base.col.interfaces.immutable.ImMap;
import lsfusion.base.col.interfaces.immutable.ImOrderMap;
import lsfusion.base.col.interfaces.immutable.ImRevMap;
import lsfusion.base.file.FileData;
import lsfusion.base.file.RawFileData;
import lsfusion.interop.action.MessageClientAction;
import lsfusion.server.physics.admin.logging.ServerLoggers;
import lsfusion.server.data.DataObject;
import lsfusion.server.data.SQLHandledException;
import lsfusion.server.data.expr.KeyExpr;
import lsfusion.server.data.query.QueryBuilder;
import lsfusion.server.logics.action.ExecutionContext;
import lsfusion.server.logics.classes.ValueClass;
import lsfusion.server.logics.property.classes.ClassPropertyInterface;

import javax.mail.*;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.*;

import static lsfusion.base.BaseUtils.nullTrim;
import static lsfusion.server.base.thread.ThreadLocalContext.localize;

public class ReceiveEMLActionProperty extends EmailActionProperty {
    private final ClassPropertyInterface accountInterface;

    public ReceiveEMLActionProperty(EmailLogicsModule LM, ValueClass... classes) {
        super(LM, classes);

        Iterator<ClassPropertyInterface> i = interfaces.iterator();
        accountInterface = i.next();
    }

    public void executeCustom(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {

        if(context.getDbManager().isServer()) {

            try {

                DataObject accountObject = context.getDataKeyValue(accountInterface);
                if (emailLM.disableAccount.read(context, accountObject) != null) {
                    logError(context, localize("{mail.disabled}"));
                    return;
                }

                String receiveHostAccount = (String) emailLM.receiveHostAccount.read(context, accountObject);
                Integer receivePortAccount = (Integer) emailLM.receivePortAccount.read(context, accountObject);
                String nameAccount = (String) emailLM.nameAccount.read(context, accountObject);
                String passwordAccount = (String) emailLM.passwordAccount.read(context, accountObject);
                String nameReceiveAccountTypeAccount = (String) emailLM.nameReceiveAccountTypeAccount.read(context, accountObject);
                boolean isPop3Account = nameReceiveAccountTypeAccount == null || nullTrim(nameReceiveAccountTypeAccount).equals("POP3");
                boolean deleteMessagesAccount = emailLM.deleteMessagesAccount.read(context, accountObject) != null;
                Integer lastDaysAccount = (Integer) emailLM.lastDaysAccount.read(context, accountObject);
                Integer maxMessagesAccount = (Integer) emailLM.maxMessagesAccount.read(context, accountObject);

                if (receiveHostAccount == null) {
                    logError(context, localize("{mail.pop3.host.not.specified.letters.will.not.be.received}"));
                    return;
                }

                boolean ignoreExceptions = LM.findProperty("ignoreExceptions[Account]").read(context, accountObject) != null;

                Set<Long> skipEmails = getSkipEmails(context, nameAccount);

                Map<Long, FileData> emlMap = receiveEML(context, skipEmails, ignoreExceptions, isPop3Account, receivePortAccount, nameAccount, passwordAccount, receiveHostAccount, lastDaysAccount, maxMessagesAccount, deleteMessagesAccount);
                for (Map.Entry<Long, FileData> entry : emlMap.entrySet()) {
                    DataObject entryObject = new DataObject(entry.getKey());
                    LM.findProperty("emlFile[LONG]").change(entry.getValue(), context, entryObject);
                }

            } catch (Exception e) {
                logger.error(localize("{mail.failed.to.receive.mail}"), e);
                context.delayUserInterfaction(new MessageClientAction(localize("{mail.failed.to.receive.mail}") + " : " + e.toString(), localize("{mail.receiving}")));
            }
        } else {
            logger.info("Email Server disabled, change serverComputer() to enable");
        }
    }

    private Set<Long> getSkipEmails(ExecutionContext context, String nameAccount) {
        Set<Long> skipEmails = new HashSet<>();
        try {
            KeyExpr emailExpr = new KeyExpr("email");
            ImRevMap<Object, KeyExpr> emailKeys = MapFact.singletonRev((Object) "email", emailExpr);

            QueryBuilder<Object, Object> emailQuery = new QueryBuilder<>(emailKeys);
            emailQuery.addProperty("uid", LM.findProperty("uid[Email]").getExpr(emailExpr));
            emailQuery.and(LM.findProperty("uid[Email]").getExpr(emailExpr).getWhere());

            ImOrderMap<ImMap<Object, Object>, ImMap<Object, Object>> emailResult = emailQuery.execute(context);
            for (ImMap<Object, Object> entry : emailResult.values()) {
                skipEmails.add((Long) entry.get("uid"));
            }

        } catch (Exception e) {
            ServerLoggers.mailLogger.error(String.format("Account %s: read emails from base failed", nameAccount), e);
        }
        return skipEmails;
    }

    public Map<Long, FileData> receiveEML(ExecutionContext context, Set<Long> skipEmails, boolean ignoreExceptions, boolean isPOP3, Integer receivePort, String user, String password, String receiveHost, Integer lastDays, Integer maxMessages, boolean deleteMessages) throws MessagingException, IOException, GeneralSecurityException {

        Map<Long, FileData> emlMap = new HashMap<>();

        Session emailSession = Session.getInstance(getMailProperties(receiveHost, isPOP3));
        Store emailStore = emailSession.getStore(isPOP3 ? "pop3" : "imaps");
        if (receivePort != null) emailStore.connect(receiveHost, receivePort, user, password);
        else emailStore.connect(receiveHost, user, password);

        List<Folder> folders = getSubFolders(emailStore.getFolder("INBOX"));

        for (Folder folder : folders) {

            folder.open(Folder.READ_WRITE);

            Timestamp minDateTime = null;
            if (lastDays != null) {
                Calendar calendar = Calendar.getInstance();
                calendar.add(Calendar.DATE, -lastDays);
                minDateTime = new Timestamp(calendar.getTime().getTime());
            }

            int count = 0;
            int messageCount = folder.getMessageCount();
            while (count < messageCount && (maxMessages == null || count < maxMessages)) {
                try {
                    Message message = folder.getMessage(messageCount - count);
                    Timestamp dateTimeSentEmail = getSentDate(message);
                    if (minDateTime == null || dateTimeSentEmail == null || minDateTime.compareTo(dateTimeSentEmail) <= 0) {
                        Long uid = getUID(folder, message);
                        if (!skipEmails.contains(uid)) {
                            message.setFlag(deleteMessages ? Flags.Flag.DELETED : Flags.Flag.SEEN, true);
                            FileData emlFileEmail = new FileData(getEMLByteArray(message), "eml");
                            emlMap.put(uid, emlFileEmail);

                        }
                    }
                    count++;
                } catch (FolderClosedIOException e) {
                    ServerLoggers.mailLogger.error("Ignored exception :", e);
                    folder.open(Folder.READ_WRITE);
                } catch (Exception e) {
                    if (ignoreExceptions) {
                        ServerLoggers.mailLogger.error("Ignored exception :", e);
                        context.delayUserInterfaction(new MessageClientAction(e.toString(), localize("{mail.receiving}")));
                        count++;
                    } else throw e;
                }
            }

            folder.close(true);
        }
        emailStore.close();

        return emlMap;
    }

    private List<Folder> getSubFolders(Folder folder) throws MessagingException {
        List<Folder> folders = new ArrayList<>();
        folders.add(folder);
        //pop3 doesn't allow subfolders
        if (!(folder instanceof POP3Folder)) {
            for (Folder f : folder.list()) {
                folders.addAll(getSubFolders(f));
            }
        }
        return folders;
    }

    public Properties getMailProperties(String receiveHost, boolean isPOP3) throws GeneralSecurityException {
        Properties mailProps = new Properties();
        mailProps.setProperty(isPOP3 ? "mail.pop3.host" : "mail.imap.host", receiveHost);

        //options to increase downloading big attachments
        mailProps.put("mail.imaps.partialfetch", "true");
        mailProps.put("mail.imaps.fetchsize", "819200");

        if (!isPOP3) { //imaps
            MailSSLSocketFactory socketFactory = new MailSSLSocketFactory();
            socketFactory.setTrustAllHosts(true);
            mailProps.put("mail.imaps.ssl.socketFactory", socketFactory);
            mailProps.setProperty("mail.store.protocol", "imaps");
            mailProps.setProperty("mail.imaps.timeout", "5000");
        }
        return mailProps;
    }

    private Long getUID(Folder folder, Message message) throws MessagingException {
        UIDFolder uf = (UIDFolder) folder; // cast folder to UIDFolder interface
        return uf.getUID(message); // get message Id
    }

    private RawFileData getEMLByteArray(Message msg) throws IOException, MessagingException {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        msg.writeTo(out); //вообще, out сначала необходимо MimeUtility.encode, а при открытии - decode, чтобы всё сохранялось корректно
        return new RawFileData(out);
    }
}