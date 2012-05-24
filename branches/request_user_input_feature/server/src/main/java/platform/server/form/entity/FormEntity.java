package platform.server.form.entity;

import org.apache.log4j.Logger;
import platform.base.OrderedMap;
import platform.base.Subsets;
import platform.base.identity.DefaultIDGenerator;
import platform.base.identity.IDGenerator;
import platform.base.serialization.CustomSerializable;
import platform.interop.ClassViewType;
import platform.interop.FormEventType;
import platform.interop.KeyStrokes;
import platform.interop.PropertyEditType;
import platform.interop.action.ClientAction;
import platform.interop.form.layout.SimplexComponentDirections;
import platform.interop.form.layout.SingleSimplexConstraint;
import platform.interop.navigator.FormShowType;
import platform.server.classes.ColorClass;
import platform.server.classes.ValueClass;
import platform.server.form.entity.filter.FilterEntity;
import platform.server.form.entity.filter.RegularFilterEntity;
import platform.server.form.entity.filter.RegularFilterGroupEntity;
import platform.server.form.instance.FormInstance;
import platform.server.form.navigator.NavigatorElement;
import platform.server.form.view.ContainerView;
import platform.server.form.view.DefaultFormView;
import platform.server.form.view.FormView;
import platform.server.form.view.PropertyDrawView;
import platform.server.logics.BusinessLogics;
import platform.server.logics.ServerResourceBundle;
import platform.server.logics.linear.LAP;
import platform.server.logics.linear.LCP;
import platform.server.logics.linear.LP;
import platform.server.logics.property.*;
import platform.server.logics.property.actions.form.*;
import platform.server.logics.property.derived.DerivedProperty;
import platform.server.logics.property.group.AbstractGroup;
import platform.server.logics.property.group.AbstractNode;
import platform.server.serialization.ServerContext;
import platform.server.serialization.ServerIdentitySerializable;
import platform.server.serialization.ServerSerializationPool;
import platform.server.session.ExecutionEnvironment;
import platform.server.session.PropertyChange;

import javax.swing.*;
import java.awt.*;
import java.io.ByteArrayInputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.sql.SQLException;
import java.util.*;
import java.util.List;

import static platform.base.ApiResourceBundle.getString;
import static platform.server.logics.property.derived.DerivedProperty.*;

public class FormEntity<T extends BusinessLogics<T>> extends NavigatorElement<T> implements ServerIdentitySerializable {
    private final static Logger logger = Logger.getLogger(FormEntity.class);
    private static ImageIcon image = new ImageIcon(NavigatorElement.class.getResource("/images/form.gif"));

    public static final CalcPropertyMapImplement isFullClient = DerivedProperty.createLogical(true);
    public static final CalcPropertyMapImplement isDebug = DerivedProperty.createLogical(false);
    public static final CalcPropertyMapImplement isDialog = DerivedProperty.createLogical(false);
    public static final CalcPropertyMapImplement isModal = DerivedProperty.createLogical(false);
    public static final CalcPropertyMapImplement isNewSession = DerivedProperty.createLogical(true);
    public static final CalcPropertyMapImplement isDataChanged = DerivedProperty.createLogical(false);

    public static final PrintActionProperty printActionProperty = new PrintActionProperty();
    public static final EditActionProperty editActionProperty = new EditActionProperty();
    public static final XlsActionProperty xlsActionProperty = new XlsActionProperty();
    public static final NullActionProperty nullActionProperty = new NullActionProperty();
    public static final RefreshActionProperty refreshActionProperty = new RefreshActionProperty();
    public static final ApplyActionProperty applyActionProperty = new ApplyActionProperty();
    public static final CancelActionProperty cancelActionProperty = new CancelActionProperty();
    public static final OkActionProperty okActionProperty = new OkActionProperty();
    public static final CloseActionProperty closeActionProperty = new CloseActionProperty();

    private PropertyDrawEntity printActionPropertyDraw;
    private PropertyDrawEntity editActionPropertyDraw;
    private PropertyDrawEntity xlsActionPropertyDraw;
    private PropertyDrawEntity nullActionPropertyDraw;
    private PropertyDrawEntity refreshActionPropertyDraw;
    private PropertyDrawEntity applyActionPropertyDraw;
    private PropertyDrawEntity cancelActionPropertyDraw;
    private PropertyDrawEntity okActionPropertyDraw;
    private PropertyDrawEntity closeActionPropertyDraw;

    public HashMap<Object, List<ActionPropertyObjectEntity<?>>> eventActions = new HashMap<Object, List<ActionPropertyObjectEntity<?>>>();

    public List<GroupObjectEntity> groups = new ArrayList<GroupObjectEntity>();
    public List<TreeGroupEntity> treeGroups = new ArrayList<TreeGroupEntity>();
    public List<PropertyDrawEntity> propertyDraws = new ArrayList<PropertyDrawEntity>();
    public Set<FilterEntity> fixedFilters = new HashSet<FilterEntity>();
    public List<RegularFilterGroupEntity> regularFilterGroups = new ArrayList<RegularFilterGroupEntity>();

    public OrderedMap<PropertyDrawEntity<?>,Boolean> defaultOrders = new OrderedMap<PropertyDrawEntity<?>, Boolean>();
    public OrderedMap<OrderEntity<?>, Boolean> fixedOrders = new OrderedMap<OrderEntity<?>, Boolean>();

    public boolean isPrintForm;
    public FormShowType showType = FormShowType.DOCKING;

    public boolean isSynchronizedApply = false;

    @SuppressWarnings("UnusedDeclaration")
    public FormEntity() {
    }

    protected FormEntity(String sID, String caption) {
        this(sID, caption, false);
    }

    FormEntity(String sID, String caption, boolean iisPrintForm) {
        this(null, sID, caption, iisPrintForm);
    }

    public FormEntity(NavigatorElement<T> parent, String sID, String caption) {
        this(parent, sID, caption, false);
    }

    protected FormEntity(NavigatorElement<T> parent, String sID, String caption, boolean iisPrintForm) {
        super(parent, sID, caption);
        logger.info("Initializing form " + caption + "...");

        isPrintForm = iisPrintForm;

        printActionPropertyDraw = addFormButton(printActionProperty, null, isFullClient, isDialog, false);
        editActionPropertyDraw = addFormButton(editActionProperty, null, isFullClient, isDialog, false, isDebug);
        xlsActionPropertyDraw = addFormButton(xlsActionProperty, null, isFullClient, isDialog, false);
        nullActionPropertyDraw = addFormButton(nullActionProperty, null, isDialog);
        refreshActionPropertyDraw = addPropertyDraw(refreshActionProperty);
        applyActionPropertyDraw = addFormButton(applyActionProperty, isDataChanged, isNewSession);
        cancelActionPropertyDraw = addFormButton(cancelActionProperty, isDataChanged, isNewSession);
        okActionPropertyDraw= addFormButton(okActionProperty, null, isModal);
        closeActionPropertyDraw = addFormButton(closeActionProperty, null, isModal);

        applyActionPropertyDraw.propertyBackground = addPropertyObject(
                new LCP(createAnd(new ArrayList(), createStatic(Color.green, ColorClass.instance), isDataChanged).property)
        );
    }

    private PropertyDrawEntity addFormButton(ActionProperty actionProperty, CalcPropertyMapImplement enableIf, Object... showIfs) {
        List<PropertyInterface> interfaces = new ArrayList<PropertyInterface>();
        CalcPropertyMapImplement showIfImplement = DerivedProperty.createTrue();
        for (int i = 0; i < showIfs.length; i++) {
            CalcPropertyMapImplement showIf = (CalcPropertyMapImplement) showIfs[i];
            boolean not = (i < showIfs.length - 1) && (showIfs[i+1] instanceof Boolean) && (!(Boolean) showIfs[i+1]);
            if (not) {
                i++;
                showIfImplement = createAndNot(interfaces, showIfImplement, showIf);
            } else {
                showIfImplement = createAnd(interfaces, showIfImplement, showIf);
            }
        }

        PropertyDrawEntity propertyDraw = addPropertyDraw(
                enableIf == null ? actionProperty : createIfAction(new ArrayList(), enableIf, new ActionPropertyMapImplement(actionProperty), null, false).property
        );

        propertyDraw.propertyCaption = addPropertyObject(
                new LCP(createAnd(new ArrayList(), createStatic(actionProperty.caption), showIfImplement).property)
        );

        return propertyDraw;
    }

    public FormView createDefaultRichDesign() {
        DefaultFormView design = new DefaultFormView(this);

        ContainerView mainContainer = design.getMainContainer();

        ContainerView formButtonContainer = design.createContainer();

        formButtonContainer.setDescription(getString("form.layout.service.buttons"));
        formButtonContainer.setSID("serviceButtons123123");
        formButtonContainer.getConstraints().childConstraints = SingleSimplexConstraint.TOTHE_RIGHT;
        mainContainer.add(formButtonContainer);

        PropertyDrawView printFunction = design.get(printActionPropertyDraw);
        setupFormButton(printFunction, new SimplexComponentDirections(0, 0.01, 0.01, 0), KeyStrokes.getPrintKeyStroke(), "print.png");

        PropertyDrawView xlsFunction = design.get(xlsActionPropertyDraw);
        setupFormButton(xlsFunction, new SimplexComponentDirections(0, 0.01, 0.01, 0), KeyStrokes.getXlsKeyStroke(), "xls.png");

        PropertyDrawView editFunction = design.get(editActionPropertyDraw);
        setupFormButton(editFunction, new SimplexComponentDirections(0, 0.01, 0.01, 0), KeyStrokes.getEditKeyStroke(), "editReport.png");

        PropertyDrawView nullFunction = design.get(nullActionPropertyDraw);
        setupFormButton(nullFunction, new SimplexComponentDirections(0, 0.01, 0.01, 0), KeyStrokes.getNullKeyStroke(), null);

        PropertyDrawView refreshFunction = design.get(refreshActionPropertyDraw);
        setupFormButton(refreshFunction, new SimplexComponentDirections(0, 0, 0.01, 0.01), KeyStrokes.getRefreshKeyStroke(), "refresh.png");

        PropertyDrawView applyFunction = design.get(applyActionPropertyDraw);
        applyFunction.getConstraints().insetsSibling = new Insets(0, 8, 0, 0);
        setupFormButton(applyFunction, new SimplexComponentDirections(0, 0, 0.01, 0.01), KeyStrokes.getApplyKeyStroke(), null);

        PropertyDrawView cancelFunction = design.get(cancelActionPropertyDraw);
        // KeyStrokes.getEscape(!isModal),
        setupFormButton(cancelFunction, new SimplexComponentDirections(0, 0, 0.01, 0.01), KeyStrokes.getCancelKeyStroke(), null);

        PropertyDrawView okFunction = design.get(okActionPropertyDraw);
        okFunction.getConstraints().insetsSibling = new Insets(0, 8, 0, 0);
        // KeyStrokes.getEnter(isDialog() ? 0 : InputEvent.CTRL_DOWN_MASK),
        setupFormButton(okFunction, new SimplexComponentDirections(0, 0, 0.01, 0.01), KeyStrokes.getOkKeyStroke(), null);

        PropertyDrawView closeFunction = design.get(closeActionPropertyDraw);
        setupFormButton(closeFunction, new SimplexComponentDirections(0, 0, 0.01, 0.01), KeyStrokes.getCloseKeyStroke(), null);

        formButtonContainer.add(printFunction);
        formButtonContainer.add(xlsFunction);
        formButtonContainer.add(editFunction);
        formButtonContainer.add(nullFunction);
        formButtonContainer.add(refreshFunction);
        formButtonContainer.add(applyFunction);
        formButtonContainer.add(cancelFunction);
        formButtonContainer.add(okFunction);
        formButtonContainer.add(closeFunction);

        return design;
    }

    private void setupFormButton(PropertyDrawView printFunction, SimplexComponentDirections directions, KeyStroke editKey, String iconPath) {
        printFunction.getConstraints().directions = directions;
        printFunction.editKey = editKey;
        printFunction.focusable = false;
        printFunction.entity.setEditType(PropertyEditType.EDITABLE);

        if (iconPath != null) {
            printFunction.showEditKey = false;
            printFunction.setFixedSize(ApplyActionProperty.BUTTON_SIZE);
            printFunction.design.setIconPath(iconPath);
        } else {
            printFunction.preferredSize = ApplyActionProperty.BUTTON_SIZE;
        }
    }

    public void addFixedFilter(FilterEntity filter) {
        fixedFilters.add(filter);
    }

    public void addFixedOrder(OrderEntity order, boolean descending) {
        fixedOrders.put(order, descending);
    }

    public void addRegularFilterGroup(RegularFilterGroupEntity group) {
        regularFilterGroups.add(group);
    }

    protected RegularFilterGroupEntity addSingleRegularFilterGroup(FilterEntity ifilter, String iname, KeyStroke ikey) {

        RegularFilterGroupEntity filterGroup = new RegularFilterGroupEntity(genID());
        filterGroup.addFilter(new RegularFilterEntity(genID(), ifilter, iname, ikey));
        addRegularFilterGroup(filterGroup);

        return filterGroup;
    }

    // счетчик идентификаторов
    private IDGenerator idGenerator = new DefaultIDGenerator();

    public IDGenerator getIDGenerator() {
        return idGenerator;
    }

    public int genID() {
        return idGenerator.idShift();
    }

    public GroupObjectEntity getGroupObject(int id) {
        for (GroupObjectEntity group : groups) {
            if (group.getID() == id) {
                return group;
            }
        }

        return null;
    }

    public GroupObjectEntity getGroupObject(String sID) {
        for (GroupObjectEntity group : groups) {
            if (group.getSID().equals(sID)) {
                return group;
            }
        }
        return null;
    }

    public TreeGroupEntity getTreeGroup(int id) {
        for (TreeGroupEntity treeGroup : treeGroups) {
            if (treeGroup.getID() == id) {
                return treeGroup;
            }
        }

        return null;
    }

    public ObjectEntity getObject(int id) {
        for (GroupObjectEntity group : groups) {
            for (ObjectEntity object : group.objects) {
                if (object.getID() == id) {
                    return object;
                }
            }
        }
        return null;
    }

    public ObjectEntity getObject(String sid) {
        for (GroupObjectEntity group : groups) {
            for (ObjectEntity object : group.objects) {
                if (object.getSID().equals(sid)) {
                    return object;
                }
            }
        }
        return null;
    }

    public ObjectEntity getObject(ValueClass cls) {
        for (GroupObjectEntity group : groups) {
            for (ObjectEntity object : group.objects) {
                if (cls.equals(object.baseClass)) {
                    return object;
                }
            }
        }
        return null;
    }

    public List<String> getObjectsNames() {
        List<String> names = new ArrayList<String>();
        for (GroupObjectEntity group : groups) {
            for (ObjectEntity object : group.objects) {
                names.add(object.getSID());
            }
        }
        return names;
    }

    public RegularFilterGroupEntity getRegularFilterGroup(int id) {
        for (RegularFilterGroupEntity filterGroup : regularFilterGroups) {
            if (filterGroup.getID() == id) {
                return filterGroup;
            }
        }

        return null;
    }

    public RegularFilterGroupEntity getRegularFilterGroup(String sid) {
        if (sid == null) {
            return null;
        }

        for (RegularFilterGroupEntity filterGroup : regularFilterGroups) {
            if (sid.equals(filterGroup.getSID())) {
                return filterGroup;
            }
        }

        return null;
    }

    public RegularFilterEntity getRegularFilter(int id) {
        for (RegularFilterGroupEntity filterGroup : regularFilterGroups) {
            for (RegularFilterEntity filter : filterGroup.filters) {
                if (filter.getID() == id) {
                    return filter;
                }
            }
        }

        return null;
    }

    protected ObjectEntity addSingleGroupObject(ValueClass baseClass, String caption, Object... groups) {
        return addSingleGroupObject(genID(), (String) null, baseClass, caption, groups);
    }

    protected ObjectEntity addSingleGroupObject(String sID, ValueClass baseClass, String caption, Object... groups) {
        return addSingleGroupObject(genID(), sID, baseClass, caption, groups);
    }

    protected ObjectEntity addSingleGroupObject(int ID, String sID, ValueClass baseClass, String caption, Object... groups) {

        GroupObjectEntity groupObject = new GroupObjectEntity(ID, sID);
        ObjectEntity object = new ObjectEntity(ID, sID, baseClass, caption);
        groupObject.add(object);
        addGroup(groupObject);

        addPropertyDraw(groups, false, object);

        return object;
    }

    protected ObjectEntity addSingleGroupObject(ValueClass baseClass, Object... groups) {
        return addSingleGroupObject(baseClass, null, groups);
    }

    protected ObjectEntity addSingleGroupObject(int ID, ValueClass baseClass, Object... groups) {
        return addSingleGroupObject(ID, (String) null, baseClass, null, groups);
    }

    protected ObjectEntity addSingleGroupObject(int ID, String sID, ValueClass baseClass, Object... groups) {
        return addSingleGroupObject(ID, sID, baseClass, null, groups);
    }

    public TreeGroupEntity addTreeGroupObject(GroupObjectEntity... tGroups) {
        TreeGroupEntity treeGroup = new TreeGroupEntity(genID());
        for (GroupObjectEntity group : tGroups) {
            if (!groups.contains(group)) {
                groups.add(group);
            }
            treeGroup.add(group);
        }

        treeGroups.add(treeGroup);
        return treeGroup;
    }

    public void addGroup(GroupObjectEntity group) {
        // регистрируем ID'шники, чтобы случайно не пересеклись заданные вручную и сгенерированные ID'шники
        idGenerator.idRegister(group.getID());
        for (ObjectEntity obj : group.objects) {
            idGenerator.idRegister(obj.getID());
        }

        for (GroupObjectEntity groupOld : groups) {
            assert group.getID() != groupOld.getID() && !group.getSID().equals(groupOld.getSID());
            for (ObjectEntity obj : group.objects)
                for (ObjectEntity objOld : groupOld.objects)
                    assert obj.getID() != objOld.getID() && !obj.getSID().equals(objOld.getSID());
        }
        groups.add(group);
    }

    protected void addPropertyDraw(ObjectEntity object, Object... groups) {
        addPropertyDraw(groups, false, object);
    }

    protected void addPropertyDraw(ObjectEntity object1, ObjectEntity object2, Object... groups) {
        addPropertyDraw(groups, false, object1, object2);
    }

    protected void addPropertyDraw(ObjectEntity object1, ObjectEntity object2, ObjectEntity object3, Object... groups) {
        addPropertyDraw(groups, false, object1, object2, object3);
    }

    protected void addPropertyDraw(ObjectEntity object1, ObjectEntity object2, ObjectEntity object3, ObjectEntity object4, Object... groups) {
        addPropertyDraw(groups, false, object1, object2, object3, object4);
    }

    protected void addPropertyDraw(ObjectEntity object, boolean useObjSubsets, Object... groups) {
        addPropertyDraw(groups, useObjSubsets, object);
    }

    protected void addPropertyDraw(ObjectEntity object1, ObjectEntity object2, boolean useObjSubsets, Object... groups) {
        addPropertyDraw(groups, useObjSubsets, object1, object2);
    }

    protected void addPropertyDraw(ObjectEntity object1, ObjectEntity object2, ObjectEntity object3, boolean useObjSubsets, Object... groups) {
        addPropertyDraw(groups, useObjSubsets, object1, object2, object3);
    }

    protected void addPropertyDraw(ObjectEntity object1, ObjectEntity object2, ObjectEntity object3, ObjectEntity object4, boolean useObjSubsets, Object... groups) {
        addPropertyDraw(groups, useObjSubsets, object1, object2, object3, object4);
    }

    private void addPropertyDraw(Object[] groups, boolean useObjSubsets, ObjectEntity... objects) {

        for (int i = 0; i < groups.length; i++) {

            Object group = groups[i];
            if (group instanceof Boolean) {
//                continue;
            } else if (group instanceof AbstractNode) {
                boolean upClasses = false;
                if ((i + 1) < groups.length && groups[i + 1] instanceof Boolean) {
                    upClasses = (Boolean) groups[i + 1];
                }
                addPropertyDraw((AbstractNode) group, upClasses, useObjSubsets, objects);
            } else if (group instanceof LP) {
                this.addPropertyDraw((LP) group, objects);
            } else if (group instanceof LP[])
                this.addPropertyDraw((LP[])group, objects);
        }
    }

    public List<PropertyDrawEntity> addPropertyDraw(AbstractNode group, boolean upClasses, ObjectEntity... objects) {
        return addPropertyDraw(group, upClasses, null, false, objects);
    }

    protected void addPropertyDraw(AbstractNode group, boolean upClasses, boolean useObjSubsets, ObjectEntity... objects) {
        addPropertyDraw(group, upClasses, null, useObjSubsets, objects);
    }

    protected void addPropertyDraw(AbstractNode group, boolean upClasses, GroupObjectEntity groupObject, ObjectEntity... objects) {
        addPropertyDraw(group, upClasses, groupObject, false, objects);
    }

    protected List<PropertyDrawEntity> addPropertyDraw(AbstractNode group, boolean upClasses, GroupObjectEntity groupObject, boolean useObjSubsets, ObjectEntity... objects) {
        List<ValueClassWrapper> valueClasses = new ArrayList<ValueClassWrapper>();
        Map<ObjectEntity, ValueClassWrapper> objectToClass = new HashMap<ObjectEntity, ValueClassWrapper>();
        for (ObjectEntity object : objects) {
            ValueClassWrapper wrapper = new ValueClassWrapper(object.baseClass);
            valueClasses.add(wrapper);
            objectToClass.put(object, wrapper);
        }

        List<List<ValueClassWrapper>> classSubsets;
        if (useObjSubsets) {
            classSubsets = new ArrayList<List<ValueClassWrapper>>();
            for (Set<ValueClassWrapper> set : new Subsets<ValueClassWrapper>(valueClasses)) {
                List<ValueClassWrapper> objectList = new ArrayList<ValueClassWrapper>(set);
                if (!objectList.isEmpty()) {
                    classSubsets.add(objectList);
                }
            }
        } else {
            classSubsets = Collections.singletonList(valueClasses);
        }

        List<PropertyDrawEntity> propertyDraws = new ArrayList<PropertyDrawEntity>();

        for (PropertyClassImplement implement : group.getProperties(classSubsets, upClasses)) {
            List<ValueClassWrapper> interfaces = new ArrayList<ValueClassWrapper>();
            List<ObjectEntity> entities = new ArrayList<ObjectEntity>();
            for (ObjectEntity object : objects) {
                interfaces.add(objectToClass.get(object));
                entities.add(object);
            }
            propertyDraws.add(addPropertyDraw(implement.createLP( interfaces), groupObject, entities.toArray(new ObjectEntity[entities.size()])));
        }

        return propertyDraws;
    }

    public PropertyDrawEntity addPropertyDraw(LP property, PropertyObjectInterfaceEntity... objects) {
        return addPropertyDraw(property, null, objects);
    }

    public void addPropertyDraw(LP[] properties, ObjectEntity... objects) {
        /*
        Map<ValueClass, ObjectEntity> classToObject = new HashMap<ValueClass, ObjectEntity>();
        for (ObjectEntity object : objects) {
            Object oldValue = classToObject.put(object.baseClass, object);
            assert oldValue == null; // ValueClass объектов не должны совпадать
        }

        for (LP property : properties) {
            List<ObjectEntity> orderedObjects =
                    BaseUtils.mapList(property.listInterfaces, BaseUtils.join(property.property.getMapClasses(), classToObject));
            addPropertyDraw(property, null, orderedObjects.toArray(new ObjectEntity[1]));
        }
        */
        for (LP property : properties) {
            addPropertyDraw(property, objects);
        }
    }

    public <P extends PropertyInterface> PropertyDrawEntity addPropertyDraw(LP<P, ?> property, GroupObjectEntity groupObject, PropertyObjectInterfaceEntity... objects) {

        return addPropertyDraw(groupObject, property.createObjectEntity(objects));
    }

    public GroupObjectEntity getApplyObject(Collection<ObjectEntity> objects) {
        GroupObjectEntity result = null;
        for (GroupObjectEntity group : groups) {
            for (ObjectEntity object : group.objects) {
                if (objects.contains(object)) {
                    result = group;
                    break;
                }
            }
        }
        return result;
    }

    public <P extends PropertyInterface> PropertyDrawEntity<P> addPropertyDraw(Property<P> property) {
        return addPropertyDraw(property, new HashMap<P, PropertyObjectInterfaceEntity>());
    }

    public <P extends PropertyInterface> PropertyDrawEntity<P> addPropertyDraw(Property<P> property, Map<P, PropertyObjectInterfaceEntity> mapping) {
        return addPropertyDraw(null, PropertyObjectEntity.create(property, mapping, null));
    }

    public <P extends PropertyInterface> PropertyDrawEntity<P> addPropertyDraw(GroupObjectEntity groupObject, PropertyObjectEntity<P, ?> propertyImplement) {
        PropertyDrawEntity<P> newPropertyDraw = new PropertyDrawEntity<P>(genID(), propertyImplement, groupObject);

        propertyImplement.property.proceedDefaultDraw(newPropertyDraw, this);

        if (propertyImplement.property.getSID() != null) {
            String propertySID = propertyImplement.property.getSID(); //BaseUtils.nvl(propertyImplement.property.getName(), propertyImplement.property.getSID());

            setPropertyDrawGeneratedSID(newPropertyDraw, propertySID);
        }

        int ind = propertyDraws.size() - 1;
        if (!newPropertyDraw.shouldBeLast) {
            while (ind >= 0) {
                PropertyDrawEntity property = propertyDraws.get(ind);
                if (!property.shouldBeLast) {
                    break;
                }
                --ind;
            }
        }
        propertyDraws.add(ind + 1, newPropertyDraw);

        assert richDesign == null;

        return newPropertyDraw;
    }

    public void setPropertyDrawGeneratedSID(PropertyDrawEntity property, String baseSID) {
        assert baseSID != null;

        property.setSID(null);

        String sidToSet = baseSID;
        int cnt = 0;

        while (getPropertyDraw(sidToSet) != null) {
            sidToSet = baseSID + (++cnt);
        }

        property.setSID(sidToSet);
    }

    protected <P extends PropertyInterface> void removePropertyDraw(PropertyDrawEntity<P> property) {
        propertyDraws.remove(property);
    }

    protected <P extends PropertyInterface> void removePropertyDraw(LP<P, ?> property) {
        removePropertyDraw(property.property);
    }

    protected void removePropertyDraw(AbstractNode group) {
        Iterator<PropertyDrawEntity> it = propertyDraws.iterator();
        while (it.hasNext()) {
            if (group.hasChild(it.next().propertyObject.property)) {
                it.remove();
            }
        }
    }

    public <P extends PropertyInterface> CalcPropertyObjectEntity addPropertyObject(LCP<P> property, PropertyObjectInterfaceEntity... objects) {
        return new CalcPropertyObjectEntity<P>(property.property, property.getMap(objects), property.getCreationScript());
    }
    public <P extends PropertyInterface> ActionPropertyObjectEntity<P> addPropertyObject(LAP<P> property, PropertyObjectInterfaceEntity... objects) {
        return new ActionPropertyObjectEntity<P>(property.property, property.getMap(objects), property.getCreationScript());
    }
    public PropertyObjectEntity addPropertyObject(LP property, PropertyObjectInterfaceEntity... objects) {
        if(property instanceof LCP)
            return addPropertyObject((LCP<?>)property, objects);
        else
            return addPropertyObject((LAP<?>)property, objects);
    }

    public PropertyDrawEntity<?> getPropertyDraw(int iID) {
        for (PropertyDrawEntity propertyDraw : propertyDraws) {
            if (propertyDraw.getID() == iID) {
                return propertyDraw;
            }
        }

        return null;
    }

    public PropertyDrawEntity<?> getPropertyDraw(String sid) {
        if (sid == null) {
            return null;
        }
        for (PropertyDrawEntity propertyDraw : propertyDraws) {
            if (sid.equals(propertyDraw.getSID())) {
                return propertyDraw;
            }
        }

        return null;
    }

    public List<PropertyDrawEntity> getPropertyDrawList(LP...properties) {
        List<PropertyDrawEntity> list = new ArrayList<PropertyDrawEntity>();
        for(LP property : properties)
           list.add(getPropertyDraw(property));
        return list;
    }


    protected List<PropertyDrawEntity> getPropertyDrawList(ObjectEntity object, LP... properties) {
        return getPropertyDrawList(object.groupTo, properties);
    }

    public List<PropertyDrawEntity> getPropertyDrawList(GroupObjectEntity groupObject, LP... properties) {
        List<PropertyDrawEntity> list = new ArrayList<PropertyDrawEntity>();
        for (LP property : properties) {
            for (PropertyDrawEntity<?> propertyDraw : propertyDraws) {
                if ((propertyDraw.propertyObject.property.equals(property.property))&&(groupObject.equals(propertyDraw.getToDraw(this)))) {
                    list.add(propertyDraw);
                    break;
                }
            }
        }
        return list;
    }

    protected CalcPropertyObjectEntity getCalcPropertyObject(LCP<?> lp) {
        return (CalcPropertyObjectEntity) getPropertyDraw(lp).propertyObject;
    }

    protected PropertyObjectEntity getPropertyObject(LP<?, ?> lp) {
        return getPropertyDraw(lp).propertyObject;
    }

    public PropertyDrawEntity<?> getPropertyDraw(LP<?, ?> lp) {
        return getPropertyDraw(lp.property);
    }

    public PropertyDrawEntity<?> getPropertyDraw(LP<?, ?> lp, int index) {
        return getPropertyDraw(lp.property, index);
    }

    protected PropertyDrawEntity<?> getPropertyDraw(LP<?, ?> lp, ObjectEntity object) {
        return getPropertyDraw(lp.property, object.groupTo);
    }

    protected PropertyDrawEntity<?> getPropertyDraw(LP<?, ?> lp, GroupObjectEntity groupObject) {
        return getPropertyDraw(lp.property, groupObject);
    }

    protected PropertyDrawEntity getPropertyDraw(PropertyObjectEntity property) {

        PropertyDrawEntity resultPropertyDraw = null;
        for (PropertyDrawEntity propertyDraw : propertyDraws) {
            if (propertyDraw.propertyObject.equals(property)) {
                resultPropertyDraw = propertyDraw;
            }
        }

        return resultPropertyDraw;
    }

    public PropertyObjectEntity getPropertyObject(Property property) {
        return getPropertyDraw(property).propertyObject;
    }

    protected PropertyDrawEntity getPropertyDraw(Property property) {
        return getPropertyDraw(property, 0);
    }

    protected PropertyDrawEntity getPropertyDraw(Property property, int index) {

        int cnt = 0;
        for (PropertyDrawEntity<?> propertyDraw : propertyDraws) {
            if (propertyDraw.propertyObject.property == property) {
                if (cnt == index)
                    return propertyDraw;
                else
                    cnt++;
            }
        }

        return null;
    }

    public PropertyDrawEntity getPropertyDraw(AbstractNode group, ObjectEntity object) {
        return getPropertyDraw(group, object.groupTo);
    }

    /**
     * ищет PropertyDrawEntity, который мэпит на входы LP переданные objects
     */
    public PropertyDrawEntity getPropertyDraw(LP lp, PropertyObjectInterfaceEntity... objects) {
        if (lp.listInterfaces.size() != objects.length) {
            return null;
        }

        for (PropertyDrawEntity propertyDraw : propertyDraws) {
            PropertyObjectEntity propertyObject = propertyDraw.propertyObject;
            if (propertyObject.property == lp.property) {
                boolean found = true;
                for (int i = 0; i < objects.length; ++i) {
                    Object iFace = lp.listInterfaces.get(i);
                    if (propertyObject.mapping.get(iFace) != objects[i]) {
                        found = false;
                        break;
                    }
                }
                if (found) {
                    return propertyDraw;
                }
            }
        }
        return null;
    }

    public PropertyDrawEntity getPropertyDraw(AbstractNode group, GroupObjectEntity groupObject) {

        PropertyDrawEntity resultPropertyDraw = null;
        for (PropertyDrawEntity propertyDraw : propertyDraws) {
            if (group.hasChild(propertyDraw.propertyObject.property) && groupObject.equals(propertyDraw.getToDraw(this))) {
                resultPropertyDraw = propertyDraw;
            }
        }

        return resultPropertyDraw;
    }

    public Set<CalcProperty> hintsIncrementTable = new HashSet<CalcProperty>();

    public void addHintsIncrementTable(LP... props) {
        for (LP prop : props)
            hintsIncrementTable.add((CalcProperty) prop.property);
    }

    public void addHintsIncrementTable(CalcProperty... props) {
        for (CalcProperty prop : props)
            hintsIncrementTable.add(prop);
    }

    public Set<CalcProperty> hintsNoUpdate = new HashSet<CalcProperty>();

    public void addHintsNoUpdate(GroupObjectEntity groupObject) {
        for (PropertyDrawEntity property : getProperties(groupObject))
            if(property.propertyObject.property instanceof CalcProperty) {
                addHintsNoUpdate((CalcProperty) property.propertyObject.property);
            }
    }

    public void addHintsNoUpdate(AbstractGroup group) {
        for (Property property : group.getProperties())
            if(property instanceof CalcProperty) {
                addHintsNoUpdate((CalcProperty) property);
            }
    }

    public void addHintsNoUpdate(LCP... props) {
        for (LCP prop : props)
            addHintsNoUpdate(prop);
    }

    protected void addHintsNoUpdate(LCP prop) {
        addHintsNoUpdate((CalcProperty) prop.property);
    }

    public void addHintsNoUpdate(CalcProperty prop) {
        if (!hintsNoUpdate.contains(prop))
            hintsNoUpdate.add(prop);
    }

    private FormView richDesign;

    public FormView getRichDesign() {
        if (richDesign == null) {
            richDesign = createDefaultRichDesign();
        }
        return richDesign;
    }

    public void setRichDesign(FormView view) {
        richDesign = view;
    }

    private GroupObjectHierarchy groupHierarchy;

    public GroupObjectHierarchy.ReportHierarchy getReportHierarchy() {
        return getGroupHierarchy().createReportHierarchy();
    }

    public GroupObjectHierarchy.ReportHierarchy getSingleGroupReportHierarchy(int groupId) {
        return getGroupHierarchy().createSingleGroupReportHierarchy(groupId);
    }

    public void modifyHierarchy(GroupObjectHierarchy groupHierarchy) {
    }

    public GroupObjectHierarchy getGroupHierarchy() {
        if (groupHierarchy == null) {
            FormGroupHierarchyCreator creator = new FormGroupHierarchyCreator(this);
            groupHierarchy = creator.createHierarchy();
            modifyHierarchy(groupHierarchy);
        }
        return groupHierarchy;
    }

    public ArrayList<NavigatorElement> relevantElements = new ArrayList<NavigatorElement>();

    public byte getTypeID() {
        return 0;
    }

    public void customSerialize(ServerSerializationPool pool, DataOutputStream outStream, String serializationType) throws IOException {
        pool.writeString(outStream, caption);
        pool.writeString(outStream, sID);
        outStream.writeBoolean(isPrintForm);
        outStream.writeUTF(showType.name());

        pool.serializeCollection(outStream, groups);
        pool.serializeCollection(outStream, treeGroups);
        pool.serializeCollection(outStream, propertyDraws);
        pool.serializeCollection(outStream, fixedFilters);
        pool.serializeCollection(outStream, regularFilterGroups);

        outStream.writeInt(defaultOrders.size());
        for (Map.Entry<PropertyDrawEntity<?>, Boolean> entry : defaultOrders.entrySet()) {
            pool.serializeObject(outStream, entry.getKey(), serializationType);
            outStream.writeBoolean(entry.getValue());
        }

        outStream.writeInt(eventActions.size());
        for (Map.Entry<Object, List<ActionPropertyObjectEntity<?>>> entry : eventActions.entrySet()) {
            Object event = entry.getKey();

            //пока предполагаем, что евент либо String, либо CustomSerializable!
            boolean isStringEvent = event instanceof String;
            outStream.writeBoolean(isStringEvent);
            if (isStringEvent) {
                pool.writeString(outStream, (String) event);
            } else {
                pool.serializeObject(outStream, (CustomSerializable) event);
            }

            pool.serializeCollection(outStream, entry.getValue());
        }
    }

    public void customDeserialize(ServerSerializationPool pool, DataInputStream inStream) throws IOException {
        caption = pool.readString(inStream);
        sID = pool.readString(inStream);
        isPrintForm = inStream.readBoolean();
        showType = FormShowType.valueOf(inStream.readUTF());

        groups = pool.deserializeList(inStream);
        treeGroups = pool.deserializeList(inStream);
        propertyDraws = pool.deserializeList(inStream);
        fixedFilters = pool.deserializeSet(inStream);
        regularFilterGroups = pool.deserializeList(inStream);

        int orderCount = inStream.readInt();
        for (int i = 0; i < orderCount; i++) {
            PropertyDrawEntity order = pool.deserializeObject(inStream);
            defaultOrders.put(order, inStream.readBoolean());
        }

        eventActions = new HashMap<Object, List<ActionPropertyObjectEntity<?>>>();
        int length = inStream.readInt();
        for (int i = 0; i < length; ++i) {
            Object event = inStream.readBoolean()
                    ? pool.readString(inStream)
                    : pool.deserializeObject(inStream);

            List<ActionPropertyObjectEntity<?>> actions = pool.deserializeList(inStream);
            eventActions.put(event, actions);
        }
    }

    @Override
    public void serialize(DataOutputStream outStream, Collection<NavigatorElement> elements) throws IOException {
        super.serialize(outStream, elements);
        outStream.writeBoolean(isPrintForm);
        outStream.writeUTF(showType.name());
    }

    public void addActionsOnObjectChange(ObjectEntity object, ActionPropertyObjectEntity... actions) {
        addActionsOnObjectChange(object, false, actions);
    }

    public void addActionsOnObjectChange(ObjectEntity object, boolean drop, ActionPropertyObjectEntity... actions) {
        addActionsOnEvent(object, drop, actions);
    }

    public void addActionsOnApply(ActionPropertyObjectEntity... actions) {
        addActionsOnEvent(FormEventType.APPLY, false, actions);
    }

    public void addActionsOnOk(ActionPropertyObjectEntity... actions) {
        addActionsOnEvent(FormEventType.OK, false, actions);
    }

    public void addActionsOnEvent(Object eventObject, boolean drop, ActionPropertyObjectEntity<?>... actions) {
        List<ActionPropertyObjectEntity<?>> thisEventActions = eventActions.get(eventObject);
        if (thisEventActions == null || drop) {
            thisEventActions = new ArrayList<ActionPropertyObjectEntity<?>>();
            eventActions.put(eventObject, thisEventActions);
        }

        thisEventActions.addAll(Arrays.asList(actions));
    }

    public List<ActionPropertyObjectEntity<?>> getActionsOnEvent(Object eventObject) {
        return eventActions.get(eventObject);
    }

    public boolean hasClientApply() {
        return false;
    }

    public ClientAction getClientActionOnApply(FormInstance<T> form) {
        return null; // будем возвращать именно null, чтобы меньше данных передавалось        
    }

    public boolean isActionOnChange(CalcProperty property) {
        return false;
    }
    public <P extends PropertyInterface> void onChange(CalcProperty<P> property, PropertyChange<P> change, ExecutionEnvironment env) throws SQLException {
    }

    public static FormEntity<?> deserialize(BusinessLogics BL, byte[] formState) {
        return deserialize(BL, new DataInputStream(new ByteArrayInputStream(formState)));
    }

    public static FormEntity<?> deserialize(BusinessLogics BL, DataInputStream inStream) {
        try {
            FormEntity form = new ServerSerializationPool(new ServerContext(BL)).deserializeObject(inStream);
            form.richDesign = new ServerSerializationPool(new ServerContext(BL, form)).deserializeObject(inStream);

            return form;
        } catch (IOException e) {
            throw new RuntimeException(ServerResourceBundle.getString("form.entity.error.on.deserialization.form.on.the.server"), e);
        }
    }

    public void setForceViewType(LP property, ClassViewType type) {
        setForceViewType(property.property, type);
    }

    protected void setForceViewType(AbstractNode group, ClassViewType type, GroupObjectEntity groupObject) {
        for (PropertyDrawEntity propertyDraw : propertyDraws) {
            if ((groupObject == null || groupObject.equals(propertyDraw.getToDraw(this))) && group.hasChild(propertyDraw.propertyObject.property)) {
                setForceViewType(propertyDraw, type);
            }
        }
    }

    protected void setForceViewType(AbstractNode group, ClassViewType type) {
        setForceViewType(group, type, null);
    }

    protected void setForceViewType(PropertyDrawEntity propertyDraw, ClassViewType type) {
        propertyDraw.forceViewType = type;
    }

    public List<PropertyDrawEntity> getProperties(AbstractNode group) {
        return getProperties(group, null);
    }

    public List<PropertyDrawEntity> getProperties(AbstractNode group, GroupObjectEntity groupObject) {

        List<PropertyDrawEntity> result = new ArrayList<PropertyDrawEntity>();

        for (PropertyDrawEntity property : propertyDraws) {
            if ((groupObject == null || groupObject.equals(property.getToDraw(this))) && group.hasChild(property.propertyObject.property)) {
                result.add(property);
            }
        }

        return result;
    }

    public List<PropertyDrawEntity> getProperties(Property prop, GroupObjectEntity groupObject) {

        List<PropertyDrawEntity> result = new ArrayList<PropertyDrawEntity>();

        for (PropertyDrawEntity property : propertyDraws) {
            if (groupObject.equals(property.getToDraw(this)) && prop.equals(property.propertyObject.property)) {
                result.add(property);
            }
        }

        return result;
    }

    public List<PropertyDrawEntity> getProperties(Property prop) {

        List<PropertyDrawEntity> result = new ArrayList<PropertyDrawEntity>();

        for (PropertyDrawEntity property : propertyDraws) {
            if (prop.equals(property.propertyObject.property)) {
                result.add(property);
            }
        }

        return result;
    }

    public List<PropertyDrawEntity> getProperties(GroupObjectEntity groupObject) {

        List<PropertyDrawEntity> result = new ArrayList<PropertyDrawEntity>();

        for (PropertyDrawEntity property : propertyDraws) {
            if (groupObject.equals(property.getToDraw(this))) {
                result.add(property);
            }
        }

        return result;
    }

    public void setReadOnlyIf(CalcPropertyObjectEntity condition) {
        for (PropertyDrawEntity propertyView : propertyDraws) {
            if (propertyView != getPropertyDraw(condition))
                setReadOnlyIf(propertyView, condition);
        }
    }

    public void setReadOnlyIf(LP property, CalcPropertyObjectEntity condition) {
        setReadOnlyIf(getPropertyDraw(property.property), condition);
    }

    public void setReadOnlyIf(GroupObjectEntity groupObject, CalcPropertyObjectEntity condition) {
        for (PropertyDrawEntity propertyView : getProperties(groupObject)) {
            if (propertyView != getPropertyDraw(condition))
                setReadOnlyIf(propertyView, condition);
        }
    }

    public void setReadOnlyIf(PropertyDrawEntity property, CalcPropertyObjectEntity condition) {
        property.propertyReadOnly = condition;
    }

    public void setEditType(AbstractGroup group, PropertyEditType editType, GroupObjectEntity groupObject) {
        for (PropertyDrawEntity property : getProperties(group, groupObject)) {
            setEditType(property, editType);
        }
    }

    public void setEditType(LP property, PropertyEditType editType) {
        setEditType(property.property, editType);
    }

    public void setEditType(LP property, PropertyEditType editType, GroupObjectEntity groupObject) {
        setEditType(property.property, editType, groupObject);
    }

    public void setEditType(AbstractNode property, PropertyEditType editType) {
        for (PropertyDrawEntity propertyView : getProperties(property)) {
            setEditType(propertyView, editType);
        }
    }

    public void setEditType(Property property, PropertyEditType editType, GroupObjectEntity groupObject) {
        for (PropertyDrawEntity propertyView : getProperties(property, groupObject)) {
            setEditType(propertyView, editType);
        }
    }

    public void setEditType(PropertyEditType editType, GroupObjectEntity groupObject) {
        for (PropertyDrawEntity propertyView : getProperties(groupObject)) {
            setEditType(propertyView, editType);
        }
    }

    public void setEditType(PropertyEditType editType) {
        for (PropertyDrawEntity propertyView : propertyDraws) {
            setEditType(propertyView, editType);
        }
    }

    public void setEditType(ObjectEntity objectEntity, PropertyEditType editType) {
        for (PropertyDrawEntity property : getProperties(objectEntity.groupTo)) {
            setEditType(property, editType);
        }
    }

    public void setEditType(PropertyDrawEntity property, PropertyEditType editType) {
        property.setEditType(editType);
    }

    public void addDefaultOrder(LP lp, boolean ascending) {
        addDefaultOrder(getPropertyDraw(lp), ascending);
    }

    public void addDefaultOrder(PropertyDrawEntity property, boolean ascending) {
        defaultOrders.put(property, ascending);
    }

    public void setPageSize(int pageSize) {
        for (GroupObjectEntity group : groups)
            group.pageSize = pageSize;
    }

    public void setNeedVerticalScroll(boolean scroll) {
        for (GroupObjectEntity entity : groups) {
            getRichDesign().get(entity).needVerticalScroll = scroll;
        }
    }

    @Override
    public ImageIcon getImage() {
        return image;
    }
}
