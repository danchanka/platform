package platform.server.form.entity;

import platform.base.BaseUtils;
import platform.base.identity.IdentityObject;
import platform.interop.FormEventType;
import platform.server.caches.IdentityLazy;
import platform.server.classes.CustomClass;
import platform.server.classes.ValueClass;
import platform.server.data.type.TypeSerializer;
import platform.server.form.instance.InstanceFactory;
import platform.server.form.instance.PropertyObjectInterfaceInstance;
import platform.server.logics.ServerResourceBundle;
import platform.server.logics.property.CalcProperty;
import platform.server.logics.property.Property;
import platform.server.logics.property.actions.ChangeObjectActionProperty;
import platform.server.logics.property.actions.CustomActionProperty;
import platform.server.serialization.ServerIdentitySerializable;
import platform.server.serialization.ServerSerializationPool;
import platform.server.session.DataSession;
import platform.server.session.Modifier;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

public class ObjectEntity extends IdentityObject implements PropertyObjectInterfaceEntity, ServerIdentitySerializable {

    public GroupObjectEntity groupTo;

    public String caption;

    public String getCaption() {
        return !BaseUtils.isRedundantString(caption)
               ? caption
               : !BaseUtils.isRedundantString(baseClass.toString())
                 ? baseClass.toString()
                 : ServerResourceBundle.getString("logics.undefined.object");
    }

    public Set<FormEventType> addOnEvent = new HashSet<FormEventType>();

    public void setAddOnTransaction() {
        setAddOnEvent(FormEventType.INIT, FormEventType.APPLY, FormEventType.CANCEL);
    }

    public void setAddOnEvent(FormEventType... events) {
        for (FormEventType event : events)
            addOnEvent.add(event);
    }

    public boolean resetOnApply = false;

    public ValueClass baseClass;

    public ObjectEntity() {

    }
    
    public ObjectEntity(int ID, ValueClass baseClass, String caption) {
        this(ID, null, baseClass, caption);
    }

    public ObjectEntity(int ID, String sID, ValueClass baseClass, String caption) {
        super(ID);
        this.sID = sID != null ? sID : "obj" + ID;
        this.caption = caption;
        this.baseClass = baseClass;
    }

    public PropertyObjectInterfaceInstance getInstance(InstanceFactory instanceFactory) {
        return instanceFactory.getInstance(this);
    }

    public void fillObjects(Set<ObjectEntity> objects) {
        objects.add(this);
    }

    @Override
    public Object getValue(InstanceFactory factory, DataSession session, Modifier modifier) {
        return factory.getInstance(this).getDataObject().getValue();
    }

    public void customSerialize(ServerSerializationPool pool, DataOutputStream outStream, String serializationType) throws IOException {
        pool.serializeObject(outStream, groupTo);
        pool.writeObject(outStream, addOnEvent);
    }

    public void customDeserialize(ServerSerializationPool pool, DataInputStream inStream) throws IOException {
        groupTo = (GroupObjectEntity) pool.deserializeObject(inStream);
        addOnEvent = pool.readObject(inStream);
        baseClass = TypeSerializer.deserializeValueClass(pool.context.BL, inStream);
        caption = pool.readString(inStream);
    }

    public PropertyObjectInterfaceEntity getRemappedEntity(ObjectEntity oldObject, ObjectEntity newObject, InstanceFactory instanceFactory) {
        return this == oldObject
                ? newObject
                : getInstance(instanceFactory).getDataObject();
    }

    @Override
    public String toString() {
        return getCaption();
    }

    @IdentityLazy
    public CustomActionProperty getChangeAction(Property filterProperty) {
        assert baseClass instanceof CustomClass;
        return new ChangeObjectActionProperty((CalcProperty) filterProperty, baseClass.getBaseClass());
    }
}
