package lsfusion.server.logics.property.actions.file;

import lsfusion.base.BaseUtils;
import lsfusion.interop.action.SaveFileClientAction;
import lsfusion.server.classes.DynamicFormatFileClass;
import lsfusion.server.classes.FileClass;
import lsfusion.server.classes.StaticFormatFileClass;
import lsfusion.server.classes.ValueClass;
import lsfusion.server.data.SQLHandledException;
import lsfusion.server.data.type.Type;
import lsfusion.server.logics.DataObject;
import lsfusion.server.logics.ObjectValue;
import lsfusion.server.logics.i18n.LocalizedString;
import lsfusion.server.logics.property.ClassPropertyInterface;
import lsfusion.server.logics.property.ExecutionContext;

import java.sql.SQLException;

import static lsfusion.base.BaseUtils.trim;

public class SaveActionProperty extends FileActionProperty {
    private final boolean isAbsolutPath;
    private final boolean noDialog;

    public SaveActionProperty(LocalizedString caption, boolean isAbsolutPath, boolean noDialog, ValueClass... valueClasses) {
        super(caption, valueClasses);
        this.isAbsolutPath = isAbsolutPath;
        this.noDialog = noDialog;

        drawOptions.setImage("save.png");
    }

    @Override
    protected void executeCustom(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {
        ObjectValue filesObject = context.getKeys().getValue(0);
        if (filesObject instanceof DataObject) {
            Object files = filesObject.getValue();
            Type dataClass = ((DataObject) filesObject).getType();

            if (dataClass instanceof FileClass) {
                boolean isDynamic = dataClass instanceof DynamicFormatFileClass;
                for (byte[] file : ((FileClass) dataClass).getFiles(files)) {
                    byte[] saveFile = isDynamic ? BaseUtils.getFile(file) : file;
                    if (isAbsolutPath) {
                        String filePath = trim((String) context.getKeys().getValue(1).getValue());
                        context.delayUserInterfaction(new SaveFileClientAction(saveFile, filePath, noDialog));
                    } else {
                        String fileName = context.getKeyCount() >= 2 ? trim((String) context.getKeys().getValue(1).getValue()) : "new file";
                        String extension = isDynamic ? BaseUtils.getExtension(file) : BaseUtils.firstWord(((StaticFormatFileClass) dataClass).getOpenExtension(file), ",");
                        String filePath = noDialog ? (System.getProperty("user.home") + "/Downloads/" + fileName + "." + extension) : fileName + "." + extension;
                        context.delayUserInterfaction(new SaveFileClientAction(saveFile, filePath, noDialog));
                    }
                }
            }
        }
    }
}
