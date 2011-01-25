package platform.server.logics.property.actions;

import platform.base.BaseUtils;
import platform.interop.ClassViewType;
import platform.interop.KeyStrokes;
import platform.interop.action.ClientAction;
import platform.server.classes.*;
import platform.server.form.entity.FormEntity;
import platform.server.form.entity.PropertyDrawEntity;
import platform.server.form.instance.FormInstance;
import platform.server.form.instance.PropertyObjectInterfaceInstance;
import platform.server.form.instance.remote.RemoteForm;
import platform.server.form.view.DefaultFormView;
import platform.server.logics.DataObject;
import platform.server.logics.ObjectValue;
import platform.server.logics.property.ActionProperty;
import platform.server.logics.property.ClassPropertyInterface;
import platform.server.logics.property.Property;
import platform.server.session.DataSession;

import java.sql.SQLException;
import java.util.*;

public class AddObjectActionProperty extends ActionProperty {

    // barcode != null, автоматически заполнять поле barcode значением префикс + 0000 + id
    private Property barcode;
    private Property barcodePrefix;

    // quantity = true значит, что первым в интерфейсе идет количество объектов, которые нужно добавить
    private boolean quantity;

    // обозначает класс объекта, который нужно добавить
    private CustomClass valueClass;

    // автоматически заполнить указанные свойства из входов этого свойства
    private List<Property> properties;

    public AddObjectActionProperty(String sID, CustomClass valueClass) {
        this(sID, null, null, false, valueClass, null);
    }

    private static ValueClass[] getValueClassList(boolean quantity, List<Property> properties) {
        List<ValueClass> result = new ArrayList<ValueClass>();
        if (quantity)
            result.add(IntegerClass.instance);
        if (properties != null)
            for (Property property : properties) {
                result.add(property.getCommonClasses().value);
            }
        return result.toArray(new ValueClass[result.size()]);
    }

    public AddObjectActionProperty(String sID, Property barcode, Property barcodePrefix, boolean quantity, CustomClass valueClass, List<Property> properties) {
        super(sID, "Добавить (" + valueClass + ")", getValueClassList(quantity, properties)); // сам класс не передаем, поскольку это свойство "глобальное"

        this.barcode = barcode;
        this.barcodePrefix = barcodePrefix;
        this.quantity = quantity;
        this.valueClass = valueClass;
        this.properties = properties;
    }

    @Override
    public String getCode() {
        return "getAddObjectAction(" + valueClass.getSID() + ")";
    }

    public void execute(Map<ClassPropertyInterface, DataObject> keys, ObjectValue value, List<ClientAction> actions, RemoteForm executeForm, Map<ClassPropertyInterface, PropertyObjectInterfaceInstance> mapObjects) throws SQLException {
        FormInstance<?> form = (FormInstance<?>)executeForm.form;
        DataSession session = form.session;

        Integer quantityAdd = 1;
        // пока привязываемся к тому, что interfaces будет выдавать все в правильном порядке
        if (quantity) {
            quantityAdd = (Integer) keys.get(interfaces.iterator().next()).getValue();
        }

        for (int k = 0; k < quantityAdd; k++) {
            DataObject object;
            if (valueClass.hasChildren())
                object = form.addObject((ConcreteCustomClass)form.getCustomClass((Integer)value.getValue()));
            else
                object = form.addObject((ConcreteCustomClass)valueClass);

            if (barcode != null) {

                String prefix = null;
                if (barcodePrefix != null)
                    prefix = (String)barcodePrefix.read(session);
                if (prefix == null) prefix = "";
                prefix = prefix.trim();

                String id = object.getValue().toString();

                barcode.execute(Collections.singletonMap(BaseUtils.single(barcode.interfaces), object), session,
                                prefix + BaseUtils.replicate('0', Math.max(13 - prefix.length() - id.length(), 0)) + id, form);
            }

            // меняем все свойства на значения входов
            if (properties != null) {
                // пока считаем, что в interfaces параметры идут в том же порядке, что и в properties
                int i = 0;
                boolean first = true;
                for (ClassPropertyInterface classInterface : interfaces) {
                    if (quantity && first) {
                        first = false;
                        continue;
                    }
                    Property property = properties.get(i++);
                    property.execute(Collections.singletonMap(BaseUtils.single(property.interfaces), object),
                                     session, keys.get(classInterface).getValue(), form);
                }
            }
        }
    }

    @Override
    protected DataClass getValueClass() {
        if (valueClass.hasChildren())
            return valueClass.getActionClass(valueClass);
        else
            return super.getValueClass();
    }

    @Override
    public void proceedDefaultDraw(PropertyDrawEntity<ClassPropertyInterface> entity, FormEntity form) {
        super.proceedDefaultDraw(entity, form);
        entity.shouldBeLast = true;
        entity.forceViewType = ClassViewType.PANEL;
    }

    @Override
    public void proceedDefaultDesign(DefaultFormView view, PropertyDrawEntity<ClassPropertyInterface> entity) {
        super.proceedDefaultDesign(view, entity);
        view.get(entity).editKey = KeyStrokes.getAddActionPropertyKeyStroke();
    }

}
