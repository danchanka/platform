package platform.client.logics.classes;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.Serializable;

abstract public class ClientClass implements Serializable {

    public abstract boolean hasChildren();
    public abstract void serialize(DataOutputStream outStream) throws IOException;

    public abstract String getSID();

    public abstract String getCode();
    
    public abstract ClientType getType();

    protected ClientClass() {
    }

    ClientClass(DataInputStream inStream) {
    }

    public static ClientTypeClass[] getEnumTypeClasses() {
        return new ClientTypeClass[] {
            ClientStringClass.type,
            ClientInsensitiveStringClass.type,
            ClientObjectClass.type,
            ClientNumericClass.type,
            ClientDateClass.instance,
            ClientTextClass.instance,
            ClientLogicalClass.instance,
            ClientIntegerClass.instance,
            ClientDoubleClass.instance,
            ClientLongClass.instance,
            ClientWordClass.instance,
            ClientImageClass.instance,
            ClientExcelClass.instance,
            ClientPDFClass.instance,
            ClientCustomFileClass.instance,
        };
    }
}
