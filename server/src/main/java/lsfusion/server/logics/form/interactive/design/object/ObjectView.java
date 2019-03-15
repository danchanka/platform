package lsfusion.server.logics.form.interactive.design.object;

import lsfusion.base.identity.IDGenerator;
import lsfusion.base.identity.IdentityObject;
import lsfusion.server.base.thread.ThreadLocalContext;
import lsfusion.server.logics.form.interactive.serialization.ServerIdentitySerializable;
import lsfusion.server.logics.form.interactive.serialization.ServerSerializationPool;
import lsfusion.server.logics.form.struct.object.ObjectEntity;
import lsfusion.server.physics.dev.i18n.LocalizedString;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;

public class ObjectView extends IdentityObject implements ServerIdentitySerializable {

    public ObjectEntity entity;
    
    private GroupObjectView groupObject;

    public ClassChooserView classChooser;

    public ObjectView() {
    }

    public ObjectView(IDGenerator idGen, ObjectEntity entity, GroupObjectView groupTo) {
        super(entity.getID(), entity.getSID());

        this.entity = entity;
        this.groupObject = groupTo;

        classChooser = new ClassChooserView(idGen.idShift(), this.entity, this);
    }

    public LocalizedString getCaption() {
        return entity.getCaption();
    }

    public void customSerialize(ServerSerializationPool pool, DataOutputStream outStream) throws IOException {
        pool.serializeObject(outStream, groupObject);
        pool.writeString(outStream, ThreadLocalContext.localize(entity.caption));

        entity.baseClass.serialize(outStream);
        pool.serializeObject(outStream, classChooser);
    }

    public void customDeserialize(ServerSerializationPool pool, DataInputStream inStream) throws IOException {
        classChooser = pool.deserializeObject(inStream);

        entity = pool.context.entity.getObject(ID);
    }

    public void finalizeAroundInit() {
        classChooser.finalizeAroundInit();
    }
}
