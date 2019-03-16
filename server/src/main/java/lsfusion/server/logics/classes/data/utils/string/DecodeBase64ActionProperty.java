package lsfusion.server.logics.classes.data.utils.string;

import com.google.common.base.Throwables;
import lsfusion.server.data.sql.exception.SQLHandledException;
import lsfusion.server.language.ScriptingErrorLog;
import lsfusion.server.logics.UtilsLogicsModule;
import lsfusion.server.logics.action.controller.context.ExecutionContext;
import lsfusion.server.logics.classes.ValueClass;
import lsfusion.server.logics.property.classes.ClassPropertyInterface;
import lsfusion.server.physics.dev.integration.internal.to.InternalAction;
import org.apache.commons.codec.binary.Base64;

import java.nio.charset.Charset;
import java.sql.SQLException;
import java.util.Iterator;

public class DecodeBase64ActionProperty extends InternalAction {
    private final ClassPropertyInterface stringInterface;

    public DecodeBase64ActionProperty(UtilsLogicsModule LM, ValueClass... classes) {
        super(LM, classes);

        Iterator<ClassPropertyInterface> i = interfaces.iterator();
        stringInterface = i.next();
    }

    @Override
    public void executeCustom(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {
        String value = (String) context.getDataKeyValue(stringInterface).getValue();
        try {
            String decoded = new String(Base64.decodeBase64(value.getBytes()), Charset.forName("UTF-8"));
            findProperty("decodedBase64[]").change(decoded, context);
        } catch (ScriptingErrorLog.SemanticErrorException e) {
            throw Throwables.propagate(e);
        }
    }
}