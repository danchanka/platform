package platform.client.logics;

import platform.base.BaseUtils;
import platform.client.form.ClientForm;
import platform.client.form.PropertyEditorComponent;
import platform.client.logics.classes.ClientType;
import platform.client.logics.classes.ClientTypeSerializer;
import platform.interop.form.RemoteDialogInterface;
import platform.interop.form.RemoteFormInterface;

import java.io.ByteArrayInputStream;
import java.io.DataInputStream;
import java.io.IOException;
import java.rmi.RemoteException;
import java.text.ParseException;
import java.util.Collection;

public class ClientPropertyView extends ClientCellView {

    private int ID = 0;
    private String sID;

    public ClientGroupObjectImplementView groupObject;

    public ClientPropertyView(DataInputStream inStream, Collection<ClientContainerView> containers, Collection<ClientGroupObjectImplementView> groups) throws IOException, ClassNotFoundException {
        super(inStream, containers);

        ID = inStream.readInt();
        sID = inStream.readUTF();
        if(!inStream.readBoolean()) {
            int groupID = inStream.readInt();
            for(ClientGroupObjectImplementView group : groups)
                if(group.getID() == groupID) {
                    groupObject = group;
                    break;
                }
        }
    }

    public ClientGroupObjectImplementView getGroupObject() {
        return groupObject;
    }

    public PropertyEditorComponent getEditorComponent(ClientForm form, Object value) throws IOException, ClassNotFoundException {
        ClientType changeType = getPropertyChangeType(form);
        if (changeType == null) return null;
        return changeType.getEditorComponent(form, this, value, getFormat(), design);
    }

    public PropertyEditorComponent getClassComponent(ClientForm form, Object value) throws IOException, ClassNotFoundException {
        return baseType.getClassComponent(form, this, value, getFormat());
    }

    public RemoteDialogInterface createEditorForm(RemoteFormInterface form) throws RemoteException {
        return form.createEditorPropertyDialog(ID);
    }

    public RemoteDialogInterface createClassForm(RemoteFormInterface form, Integer value) throws RemoteException {
        return form.createClassPropertyDialog(ID, BaseUtils.objectToInt(value));
    }

    public int getID() {
        return ID;
    }

    public String getSID() {
        return sID;
    }

    public int getShiftID() {
        return 0;
    }

    public ClientType getPropertyChangeType(ClientForm form) throws IOException {
        DataInputStream inStream = new DataInputStream(new ByteArrayInputStream(form.remoteForm.getPropertyChangeType(this.ID)));
        if(inStream.readBoolean()) return null;

        return ClientTypeSerializer.deserialize(inStream);
    }

    public Object parseString(ClientForm form, String s) throws ParseException {
        ClientType changeType = null;
        try {
            changeType = getPropertyChangeType(form);
            if (changeType == null) throw new ParseException("PropertyView не может быть изменено.", 0);

            return changeType.parseString(s);
        } catch (IOException e) {
            throw new ParseException("Ошибка получения данных о propertyChangeType.", 0);
        }
    }

    public boolean shouldBeDrawn(ClientForm form) {
        return baseType.shouldBeDrawn(form);
    }
}
