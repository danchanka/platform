package lsfusion.gwt.client.form.controller;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.dom.client.BrowserEvents;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.EventTarget;
import com.google.gwt.dom.client.NativeEvent;
import com.google.gwt.event.dom.client.*;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.Widget;
import lsfusion.gwt.client.ClientMessages;
import lsfusion.gwt.client.GForm;
import lsfusion.gwt.client.GFormChanges;
import lsfusion.gwt.client.GFormChangesDTO;
import lsfusion.gwt.client.action.GAction;
import lsfusion.gwt.client.action.GFormAction;
import lsfusion.gwt.client.action.GLogMessageAction;
import lsfusion.gwt.client.base.*;
import lsfusion.gwt.client.base.busy.GBusyDialogDisplayer;
import lsfusion.gwt.client.base.busy.LoadingBlocker;
import lsfusion.gwt.client.base.busy.LoadingManager;
import lsfusion.gwt.client.base.exception.ErrorHandlingCallback;
import lsfusion.gwt.client.base.jsni.Function2;
import lsfusion.gwt.client.base.jsni.NativeHashMap;
import lsfusion.gwt.client.base.jsni.NativeSIDMap;
import lsfusion.gwt.client.base.result.ListResult;
import lsfusion.gwt.client.base.result.NumberResult;
import lsfusion.gwt.client.base.result.VoidResult;
import lsfusion.gwt.client.base.view.DialogBoxHelper;
import lsfusion.gwt.client.base.view.EventHandler;
import lsfusion.gwt.client.base.view.ResizableSimplePanel;
import lsfusion.gwt.client.base.view.WindowHiddenHandler;
import lsfusion.gwt.client.base.view.grid.DataGrid;
import lsfusion.gwt.client.classes.GObjectClass;
import lsfusion.gwt.client.classes.GType;
import lsfusion.gwt.client.controller.remote.DeferredRunner;
import lsfusion.gwt.client.controller.remote.action.form.*;
import lsfusion.gwt.client.controller.remote.action.logics.GenerateID;
import lsfusion.gwt.client.controller.remote.action.logics.GenerateIDResult;
import lsfusion.gwt.client.controller.remote.action.navigator.GainedFocus;
import lsfusion.gwt.client.form.GUpdateMode;
import lsfusion.gwt.client.form.classes.view.ClassChosenHandler;
import lsfusion.gwt.client.form.classes.view.GClassDialog;
import lsfusion.gwt.client.form.controller.dispatch.FormDispatchAsync;
import lsfusion.gwt.client.form.controller.dispatch.GFormActionDispatcher;
import lsfusion.gwt.client.form.design.GComponent;
import lsfusion.gwt.client.form.design.GContainer;
import lsfusion.gwt.client.form.design.view.GFormLayout;
import lsfusion.gwt.client.form.design.view.TabbedContainerView;
import lsfusion.gwt.client.form.event.*;
import lsfusion.gwt.client.form.filter.GRegularFilter;
import lsfusion.gwt.client.form.filter.GRegularFilterGroup;
import lsfusion.gwt.client.form.filter.user.GPropertyFilter;
import lsfusion.gwt.client.form.filter.user.GPropertyFilterDTO;
import lsfusion.gwt.client.form.object.GGroupObject;
import lsfusion.gwt.client.form.object.GGroupObjectValue;
import lsfusion.gwt.client.form.object.GGroupObjectValueBuilder;
import lsfusion.gwt.client.form.object.GObject;
import lsfusion.gwt.client.form.object.panel.controller.GPanelController;
import lsfusion.gwt.client.form.object.table.controller.GAbstractTableController;
import lsfusion.gwt.client.form.object.table.controller.GPropertyController;
import lsfusion.gwt.client.form.object.table.grid.controller.GGridController;
import lsfusion.gwt.client.form.object.table.grid.user.design.GColumnUserPreferences;
import lsfusion.gwt.client.form.object.table.grid.user.design.GFormUserPreferences;
import lsfusion.gwt.client.form.object.table.grid.user.design.GGridUserPreferences;
import lsfusion.gwt.client.form.object.table.grid.user.design.GGroupObjectUserPreferences;
import lsfusion.gwt.client.form.object.table.grid.view.GListViewType;
import lsfusion.gwt.client.form.object.table.tree.GTreeGroup;
import lsfusion.gwt.client.form.object.table.tree.controller.GTreeGroupController;
import lsfusion.gwt.client.form.order.user.GOrder;
import lsfusion.gwt.client.form.property.GExtraPropertyReader;
import lsfusion.gwt.client.form.property.GPropertyDraw;
import lsfusion.gwt.client.form.property.GPropertyGroupType;
import lsfusion.gwt.client.form.property.GPropertyReader;
import lsfusion.gwt.client.form.property.async.*;
import lsfusion.gwt.client.form.property.cell.GEditBindingMap;
import lsfusion.gwt.client.form.property.cell.classes.view.ActionCellRenderer;
import lsfusion.gwt.client.form.property.cell.controller.*;
import lsfusion.gwt.client.form.property.cell.view.CellRenderer;
import lsfusion.gwt.client.form.property.cell.view.RenderContext;
import lsfusion.gwt.client.form.property.cell.view.UpdateContext;
import lsfusion.gwt.client.form.property.panel.view.ActionPanelRenderer;
import lsfusion.gwt.client.form.property.table.view.GPropertyContextMenuPopup;
import lsfusion.gwt.client.form.view.FormContainer;
import lsfusion.gwt.client.form.view.FormDockable;
import lsfusion.gwt.client.form.view.ModalForm;
import lsfusion.gwt.client.navigator.window.GModalityType;
import lsfusion.gwt.client.view.MainFrame;
import lsfusion.gwt.client.view.ServerMessageProvider;
import lsfusion.gwt.client.view.StyleDefaults;
import net.customware.gwt.dispatch.shared.Result;
import net.customware.gwt.dispatch.shared.general.StringResult;

import java.io.IOException;
import java.io.Serializable;
import java.util.*;
import java.util.function.Consumer;
import java.util.function.Predicate;
import java.util.function.Supplier;

import static lsfusion.gwt.client.base.GwtClientUtils.*;
import static lsfusion.gwt.client.base.GwtSharedUtils.putToDoubleNativeMap;
import static lsfusion.gwt.client.base.GwtSharedUtils.removeFromDoubleMap;
import static lsfusion.gwt.client.base.view.ColorUtils.getDisplayColor;
import static lsfusion.gwt.client.form.property.cell.GEditBindingMap.CHANGE;
import static lsfusion.gwt.client.form.property.cell.GEditBindingMap.isEditableAwareEditEvent;

public class GFormController extends ResizableSimplePanel implements ServerMessageProvider, EditManager {
    private static final int ASYNC_TIME_OUT = 20;

    private FormDispatchAsync dispatcher;

    private final GFormActionDispatcher actionDispatcher;

    private final FormsController formsController;
    private final FormContainer formContainer;

    private final GForm form;
    public final GFormLayout formLayout;

    private final boolean isDialog;

    private final NativeSIDMap<GGroupObject, ArrayList<GGroupObjectValue>> currentGridObjects = new NativeSIDMap<>();

    public NativeSIDMap<GGroupObject, ArrayList<GGroupObjectValue>> getCurrentGridObjects() {
        return currentGridObjects;
    }

    private final NativeSIDMap<GGroupObject, ArrayList<GPropertyFilter>> currentFilters = new NativeSIDMap<>();

    private final LinkedHashMap<GGroupObject, GGridController> controllers = new LinkedHashMap<>();
    private final LinkedHashMap<GTreeGroup, GTreeGroupController> treeControllers = new LinkedHashMap<>();
    public GPanelController panelController;

    private final NativeSIDMap<GGroupObject, ArrayList<Widget>> filterViews = new NativeSIDMap<>();

    private final LinkedHashMap<Long, ModifyObject> pendingModifyObjectRequests = new LinkedHashMap<>();
    private final NativeSIDMap<GGroupObject, Long> pendingChangeCurrentObjectsRequests = new NativeSIDMap<>();
    private final NativeSIDMap<GPropertyDraw, NativeHashMap<GGroupObjectValue, Change>> pendingChangePropertyRequests = new NativeSIDMap<>();

    private boolean hasColumnGroupObjects;

    private Timer asyncTimer;
    private ActionPanelRenderer asyncView;

    private LoadingManager loadingManager = MainFrame.busyDialog ? new GBusyDialogDisplayer(this) : new LoadingBlocker(this);

    private static Timer linkEditModeTimer;

    public FormsController getFormsController() {
        return formsController;
    }

    public GFormController(FormsController formsController, FormContainer formContainer, GForm gForm, boolean isDialog) {
        actionDispatcher = new GFormActionDispatcher(this);

        this.formsController = formsController;
        this.formContainer = formContainer;
        this.form = gForm;
        this.isDialog = isDialog;

        dispatcher = new FormDispatchAsync(this);

        formLayout = new GFormLayout(this, form.mainContainer);
        setFillWidget(formLayout);

        asyncTimer = new Timer() {
            @Override
            public void run() {
                asyncView.setLoadingImage("loading.gif");
            }
        };

        if (form.sID != null) {
            getElement().setAttribute("lsfusion-form", form.sID);
        }

        updateFormCaption();

        initializeControllers();

        initializeRegularFilters();

        initializeDefaultOrders();

        if (form.initialFormChanges != null) {
            applyRemoteChanges(form.initialFormChanges);
            form.initialFormChanges = null;
        } else
            getRemoteChanges();

        initializeUserOrders();

        initializeAutoRefresh();

        DataGrid.initSinkMouseEvents(this);

        initLinkEditModeTimer();
    }

    @Override
    public void onBrowserEvent(Event event) {
        Element target = DataGrid.getTargetAndCheck(getElement(), event);
        if(target == null)
            return;
        if(!previewEvent(target, event))
            return;

        super.onBrowserEvent(event);

        checkFormEvent(event, (handler, preview) -> checkMouseEvent(handler, preview, null, false));
    }

    public long getNextRequestIndex() {
        return dispatcher.getNextRequestIndex();
    }

    private interface CheckEvent {
        void accept(EventHandler handler, boolean preview);
    }
    private static void checkFormEvent(Event event, CheckEvent preview) {
        EventHandler handler = new EventHandler(event);

        preview.accept(handler, true); // the problem is that now we check preview twice (however it's not that big overhead, so so far will leave it this way)
        if(handler.consumed)
            return;

        preview.accept(handler, false);
    }

    public void checkMouseEvent(EventHandler handler, boolean preview, Element cellParent, boolean panel) {
        if(GMouseStroke.isDblDownEvent(handler.event))
            handler.event.preventDefault(); //need to prevent selection by double mousedown event
        else if(GMouseStroke.isChangeEvent(handler.event) || GMouseStroke.isDoubleChangeEvent(handler.event))
            processBinding(handler, preview, cellParent, panel);
    }
    public void checkKeyEvent(EventHandler handler, boolean preview, Element cellParent, boolean panel) {
        if(GKeyStroke.isKeyEvent(handler.event))
            processBinding(handler, preview, cellParent, panel);
    }
    private static void checkGlobalKeyEvent(DomEvent event, Supplier<GFormController> currentForm) {
        NativeEvent nativeEvent = event.getNativeEvent();
        if(nativeEvent instanceof Event) { // just in case
            GFormController form = currentForm.get();
            if(form != null)
                checkFormEvent((Event) nativeEvent, (handler, preview) -> form.checkKeyEvent(handler, preview, null, false));
        }
    }
    public void checkMouseKeyEvent(EventHandler handler, boolean preview, Element cellParent, boolean panel) {
        if(MainFrame.isModalPopup())
            return;

        checkMouseEvent(handler, preview, cellParent, panel);
        if(handler.consumed)
            return;

        checkKeyEvent(handler, preview, cellParent, panel);
    }

    public static void checkKeyEvents(DomEvent event, FormsController formsController) {
        NativeEvent nativeEvent = event.getNativeEvent();
        checkLinkEditModeEvents(formsController, nativeEvent);

        if(GKeyStroke.isSwitchFullScreenModeEvent(nativeEvent)) {
            formsController.switchFullScreenMode();
        }
    }

    // we need native method and not getCtrlKey, since some events (for example focus) have ctrlKey undefined and in this case we want to ignore them
    private static native Boolean eventGetCtrlKey(NativeEvent evt) /*-{
        return evt.ctrlKey;
    }-*/;

    private static native Boolean eventGetShiftKey(NativeEvent evt) /*-{
        return evt.shiftKey;
    }-*/;
    
    private static native Boolean eventGetAltKey(NativeEvent evt) /*-{
        return evt.altKey;
    }-*/;

    private static boolean pressedCtrl = false;
    private void initLinkEditModeTimer() {
        if(linkEditModeTimer == null) {
            linkEditModeTimer = new Timer() {
                @Override
                public void run() {
                    if (pressedCtrl) {
                        pressedCtrl = false;
                    } else {
                        if (GFormController.isLinkEditModeWithCtrl()) {
                            formsController.updateLinkEditMode(false, false);
                        }
                    }
                }
            };
            linkEditModeTimer.scheduleRepeating(500); //delta between first and second events ~500ms, between next ~30ms
        }
    }

    public static void checkLinkEditModeEvents(FormsController formsController, NativeEvent event) {
        Boolean ctrlKey = eventGetCtrlKey(event);
        if(ctrlKey != null) {
            Boolean shiftKey = eventGetShiftKey(event);
            Boolean altKey = eventGetAltKey(event);
            boolean onlyCtrl = ctrlKey && (shiftKey == null || !shiftKey) && (altKey == null || !altKey);
            pressedCtrl = onlyCtrl;
            if (!onlyCtrl && GFormController.isLinkEditModeWithCtrl())
                formsController.updateLinkEditMode(false, false);
            if (onlyCtrl && !GFormController.isLinkEditMode())
                formsController.updateLinkEditMode(true, true);
        }
    }

    private static boolean linkEditMode;
    private static boolean linkEditModeWithCtrl;
    public static boolean isLinkEditMode() {
        return linkEditMode;
    }
    public static boolean isLinkEditModeWithCtrl() {
        return linkEditModeWithCtrl;
    }
    public static void setLinkEditMode(boolean enabled, boolean enabledWithCtrl) {
        linkEditMode = enabled;
        linkEditModeWithCtrl = enabledWithCtrl;
    }

    public static Timer linkEditModeStylesTimer;

    public static void scheduleLinkEditModeStylesTimer(Runnable setLinkEditModeStyles) {
        if(linkEditModeStylesTimer == null) {
            linkEditModeStylesTimer = new Timer() {
                @Override
                public void run() {
                    setLinkEditModeStyles.run();
                    linkEditModeStylesTimer = null;
                }
            };
            linkEditModeStylesTimer.schedule(250);
        }
    }

    public static void cancelLinkEditModeStylesTimer() {
        if (linkEditModeStylesTimer != null) {
            linkEditModeStylesTimer.cancel();
            linkEditModeStylesTimer = null;
        }
    }

    // will handle key events in upper container which will be better from UX point of view
    public static void initKeyEventHandler(Widget widget, FormsController formsController, Supplier<GFormController> currentForm) {
        widget.addDomHandler(event -> {
            checkGlobalKeyEvent(event, currentForm);
            checkKeyEvents(event, formsController);
        }, KeyDownEvent.getType());
        widget.addDomHandler(event -> checkGlobalKeyEvent(event, currentForm), KeyPressEvent.getType());
        widget.addDomHandler(event -> checkKeyEvents(event, formsController), KeyUpEvent.getType());
    }

    public GFormLayout getFormLayout() {
        return formLayout;
    }

    public boolean hasCanonicalName() {
        return form.canonicalName != null;
    }

    private void initializeRegularFilters() {
        for (final GRegularFilterGroup filterGroup : form.regularFilterGroups) {
            if (filterGroup.filters.size() == 1) {
                createSingleFilterComponent(filterGroup, filterGroup.filters.iterator().next());
            } else {
                createMultipleFilterComponent(filterGroup);
            }
        }
    }

    private void createSingleFilterComponent(final GRegularFilterGroup filterGroup, final GRegularFilter filter) {
        final CheckBox filterCheck = new CheckBox(filter.getFullCaption());
        filterCheck.setValue(false);
        filterCheck.addValueChangeHandler(new ValueChangeHandler<Boolean>() {
            @Override
            public void onValueChange(ValueChangeEvent<Boolean> e) {
                setRegularFilter(filterGroup, e.getValue() != null && e.getValue() ? filter : null);
            }
        });
        filterCheck.addStyleName("checkBoxFilter");
        addFilterView(filterGroup, filterCheck);

        if (filterGroup.defaultFilterIndex >= 0) {
            filterCheck.setValue(true, false);
        }

        filterCheck.getElement().setPropertyObject("groupObject", filterGroup.groupObject);
        if (filter.key != null)
            addBinding(new GKeyInputEvent(filter.key), (event) -> filterCheck.setValue(!filterCheck.getValue(), true), filterCheck, filterGroup.groupObject);
    }

    private void createMultipleFilterComponent(final GRegularFilterGroup filterGroup) {
        final ListBox filterBox = new ListBox();
        filterBox.setMultipleSelect(false);
        filterBox.addItem("(" + ClientMessages.Instance.get().multipleFilterComponentAll() + ")", "-1");

        ArrayList<GRegularFilter> filters = filterGroup.filters;
        for (int i = 0; i < filters.size(); i++) {
            final GRegularFilter filter = filters.get(i);
            filterBox.addItem(filter.getFullCaption(), "" + i);

            final int filterIndex = i;
            filterBox.getElement().setPropertyObject("groupObject", filterGroup.groupObject);
            if (filter.key != null)
                addBinding(new GKeyInputEvent(filter.key), (event) -> {
                    filterBox.setSelectedIndex(filterIndex + 1);
                    setRegularFilter(filterGroup, filterIndex);
                }, filterBox, filterGroup.groupObject);
        }

        filterBox.addChangeHandler(new ChangeHandler() {
            @Override
            public void onChange(ChangeEvent event) {
                setRegularFilter(filterGroup, filterBox.getSelectedIndex() - 1);
            }
        });

        filterBox.addStyleName("comboBoxFilter");
        filterBox.setHeight(StyleDefaults.COMPONENT_HEIGHT_STRING);

        addFilterView(filterGroup, filterBox);
        if (filterGroup.defaultFilterIndex >= 0) {
            filterBox.setSelectedIndex(filterGroup.defaultFilterIndex + 1);
        }
    }

    private void addFilterView(GRegularFilterGroup filterGroup, Widget filterWidget) {
        formLayout.addBaseComponent(filterGroup, filterWidget, null);

        // need this to hide / show regular filters when group object is not visible
        if (filterGroup.groupObject != null)
            filterViews.computeIfAbsent(filterGroup.groupObject, k -> new ArrayList<>()).add(filterWidget);
    }

    public void setFiltersVisible(GGroupObject groupObject, boolean visible) {
        List<Widget> groupFilters = filterViews.get(groupObject);
        if (groupFilters != null)
            for (Widget filterView : groupFilters)
                filterView.setVisible(visible);
    }

    private void setRegularFilter(GRegularFilterGroup filterGroup, int index) {
        setRemoteRegularFilter(filterGroup, index == -1 ? null : filterGroup.filters.get(index));
    }

    private void setRegularFilter(GRegularFilterGroup filterGroup, GRegularFilter filter) {
        setRemoteRegularFilter(filterGroup, filter);
    }

    private void initializeControllers() {
        for (GTreeGroup treeGroup : form.treeGroups) {
            initializeTreeController(treeGroup);
        }

        for (GGroupObject group : form.groupObjects) {
            if (group.parent == null) {
                initializeGroupController(group);
            }
        }

        panelController = new GPanelController(this);

        hasColumnGroupObjects = false;
        for (GPropertyDraw property : form.propertyDraws) {
            if (property.columnGroupObjects != null && !property.columnGroupObjects.isEmpty()) {
                hasColumnGroupObjects = true;
            }
        }
    }

    private void initializeGroupController(GGroupObject group) {
        GGridController controller = new GGridController(this, group, form.userPreferences != null ? extractUserPreferences(form.userPreferences, group) : null);
        controllers.put(group, controller);
    }

    private void initializeTreeController(GTreeGroup treeGroup) {
        GTreeGroupController treeController = new GTreeGroupController(treeGroup, this, form);
        treeControllers.put(treeGroup, treeController);
    }

    private GGridUserPreferences[] extractUserPreferences(GFormUserPreferences formPreferences, GGroupObject groupObject) {
        if (formPreferences != null) {
            GGridUserPreferences[] gridPreferences = new GGridUserPreferences[2];
            gridPreferences[0] = findGridUserPreferences(formPreferences.getGroupObjectGeneralPreferencesList(), groupObject);
            gridPreferences[1] = findGridUserPreferences(formPreferences.getGroupObjectUserPreferencesList(), groupObject);
            return gridPreferences;
        }
        return null;
    }

    private GGridUserPreferences findGridUserPreferences(List<GGroupObjectUserPreferences> groupObjectUserPreferences, GGroupObject groupObject) {
        for (GGroupObjectUserPreferences groupPreferences : groupObjectUserPreferences) {
            if (groupObject.getSID().equals(groupPreferences.getGroupObjectSID())) {
                Map<GPropertyDraw, GColumnUserPreferences> columnPreferences = new HashMap<>();
                for (Map.Entry<String, GColumnUserPreferences> entry : groupPreferences.getColumnUserPreferences().entrySet()) {
                    GPropertyDraw property = form.getProperty(entry.getKey());
                    if (property != null) {
                        columnPreferences.put(property, entry.getValue());
                    }
                }
                return new GGridUserPreferences(groupObject, columnPreferences, groupPreferences.getFont(), groupPreferences.getPageSize(), groupPreferences.getHeaderHeight(), groupPreferences.hasUserPreferences());
            }
        }
        return null;
    }

    private Map<GGroupObject, LinkedHashMap<GPropertyDraw, Boolean>> groupDefaultOrders() {
        Map<GGroupObject, LinkedHashMap<GPropertyDraw, Boolean>> orders = new HashMap<>();
        for(Map.Entry<GPropertyDraw, Boolean> defaultOrder : form.defaultOrders.entrySet()) {
            GGroupObject groupObject = defaultOrder.getKey().groupObject;
            LinkedHashMap<GPropertyDraw, Boolean> order = orders.computeIfAbsent(groupObject, k -> new LinkedHashMap<>());
            order.put(defaultOrder.getKey(), defaultOrder.getValue());
        }
        return orders;
    }

    public void initializeDefaultOrders() {
        Map<GGroupObject, LinkedHashMap<GPropertyDraw, Boolean>> defaultOrders = groupDefaultOrders();
        for(Map.Entry<GGroupObject, LinkedHashMap<GPropertyDraw, Boolean>> entry : defaultOrders.entrySet()) {
            GGroupObject groupObject = entry.getKey();
            getGroupObjectController(groupObject).changeOrders(groupObject, entry.getValue(), true);
        }
    }

    public void initializeUserOrders() {
        boolean changed = false;
        for (GGridController controller : controllers.values()) {
            LinkedHashMap<GPropertyDraw, Boolean> objectUserOrders = controller.getUserOrders();
            if (objectUserOrders != null)
                changed = controller.changeOrders(objectUserOrders, false)  || changed;
        }
        if (changed)
            getRemoteChanges();
    }

    public LinkedHashMap<GPropertyDraw, Boolean> getDefaultOrders(GGroupObject groupObject) {
        return form.getDefaultOrders(groupObject);
    }

    public List<List<GPropertyDraw>> getPivotColumns(GGroupObject groupObject) {
        return form.getPivotColumns(groupObject);
    }

    public List<List<GPropertyDraw>> getPivotRows(GGroupObject groupObject) {
        return form.getPivotRows(groupObject);
    }

    public List<GPropertyDraw> getPivotMeasures(GGroupObject groupObject) {
        return form.getPivotMeasures(groupObject);
    }

    public void executeNotificationAction(final Integer idNotification) throws IOException {
        syncDispatch(new ExecuteNotification(idNotification), new ServerResponseCallback());
    }

    private void initializeAutoRefresh() {
        if (form.autoRefresh > 0) {
            scheduleRefresh();
        }
    }

    private void scheduleRefresh() {
        Scheduler.get().scheduleFixedPeriod(new Scheduler.RepeatingCommand() {
            @Override
            public boolean execute() {
                if (!formHidden) {
                    if (isShowing(GFormController.this)) {
                        dispatcher.execute(new GetRemoteChanges(true), new ServerResponseCallback() {
                            @Override
                            public void success(ServerResponseResult response) {
                                super.success(response);
                                if (!formHidden) {
                                    scheduleRefresh();
                                }
                            }
                        });
                    } else {
                        scheduleRefresh();
                    }
                }
                return false;
            }
        }, form.autoRefresh * 1000);
    }

    public GPropertyDraw getProperty(int id) {
        return form.getProperty(id);
    }

    public GGroupObject getGroupObject(int groupID) {
        return form.getGroupObject(groupID);
    }

    public void getRemoteChanges() {
        dispatcher.execute(new GetRemoteChanges(), new ServerResponseCallback());
    }

    private boolean formVisible = false;

    public void gainedFocus() {
        dispatcher.execute(new GainedFocus(), new ServerResponseCallback());
        formVisible = true;
    }

    public void lostFocus() {
        formVisible = false;
    }

    public void hidePopup() {
        for (GGridController controller : controllers.values()) {
            if(controller.filter != null) {
                controller.filter.hideDialog();
            }
        }

        for (GTreeGroupController treeController : treeControllers.values()) {
            if(treeController.filter != null) {
                treeController.filter.hideDialog();
            }
        }
    }

    public void restorePopup() {
        for (GGridController controller : controllers.values()) {
            if(controller.filter != null) {
                controller.filter.restoreDialog();
            }
        }

        for (GTreeGroupController treeController : treeControllers.values()) {
            if(treeController.filter != null) {
                treeController.filter.restoreDialog();
            }
        }
    }

    public void applyRemoteChanges(GFormChangesDTO changesDTO) {
        GFormChanges fc = GFormChanges.remap(form, changesDTO);

        if (hasColumnGroupObjects) // optimization
            fc.gridObjects.foreachEntry((key, value) -> currentGridObjects.put(key, value));

        modifyFormChangesWithModifyObjectAsyncs(changesDTO.requestIndex, fc);

        modifyFormChangesWithChangeCurrentObjectAsyncs(changesDTO.requestIndex, fc);

        modifyFormChangesWithChangePropertyAsyncs(changesDTO.requestIndex, fc);

        applyKeyChanges(fc);

        applyPropertyChanges(fc);

        update(fc, changesDTO.requestIndex);

        formLayout.hideEmptyContainerViews(changesDTO.requestIndex);

        activateElements(fc);

        onResize();
    }

    public void applyKeyChanges(GFormChanges fc) {
        fc.gridObjects.foreachEntry((key, value) ->
            getGroupObjectController(key).updateKeys(key, value, fc));

        fc.objects.foreachEntry((key, value) ->
            getGroupObjectController(key).updateCurrentKey(value));
    }

    private void applyPropertyChanges(GFormChanges fc) {
        fc.dropProperties.forEach(property -> {
            GPropertyController controller = getPropertyController(property);
            if (controller.isPropertyShown(property)) // drop properties sent without checking if it was sent for update at least once, so it's possible when drop is sent for property that has not been added
                controller.removeProperty(property);
        });

        // first proceed property with its values, then extra values (some views, for example GPivot use updated properties)
        updatePropertyChanges(fc, key -> !(key instanceof GExtraPropertyReader));
        updatePropertyChanges(fc, key -> key instanceof GExtraPropertyReader);
    }

    private void updatePropertyChanges(GFormChanges fc, Predicate<GPropertyReader> filter) {
        fc.properties.foreachEntry((key, value) -> {
            if(filter.test(key))
                key.update(this, value, key instanceof GPropertyDraw && fc.updateProperties.contains((GPropertyDraw)key));
        });
    }

    public void update(GFormChanges fc, int requestIndex) {
        for (GGridController controller : controllers.values())
            controller.update(requestIndex, fc);

        for (GTreeGroupController treeController : treeControllers.values())
            treeController.update();

        panelController.update();
    }

    private void activateElements(GFormChanges fc) {
        Scheduler.get().scheduleDeferred(() -> {
            for(GComponent component : fc.activateTabs)
                activateTab(component);

            for(GPropertyDraw propertyDraw : fc.activateProps)
                focusProperty(propertyDraw);
        });
    }

    private void modifyFormChangesWithModifyObjectAsyncs(final int currentDispatchingRequestIndex, GFormChanges fc) {
        for (Iterator<Map.Entry<Long, ModifyObject>> iterator = pendingModifyObjectRequests.entrySet().iterator(); iterator.hasNext(); ) {
            Map.Entry<Long, ModifyObject> cell = iterator.next();
            if (cell.getKey() <= currentDispatchingRequestIndex) {
                iterator.remove();

                ModifyObject modifyObject = cell.getValue();
                GGroupObject groupObject = modifyObject.object.groupObject;
                // делаем обратный modify, чтобы удалить/добавить ряды, асинхронно добавленные/удалённые на клиенте, если с сервера не пришло подтверждение
                // возможны скачки и путаница в строках на удалении, если до прихода ответа position утратил свою актуальность
                // по этой же причине не заморачиваемся запоминанием соседнего объекта
                if(!fc.gridObjects.containsKey(groupObject)) {
                    controllers.get(groupObject).modifyGroupObject(modifyObject.value, !modifyObject.add, modifyObject.position);
                }
            }
        }

        for (Map.Entry<Long, ModifyObject> e : pendingModifyObjectRequests.entrySet()) {
            ArrayList<GGroupObjectValue> gridObjects = fc.gridObjects.get(e.getValue().object.groupObject);
            if (gridObjects != null) {
                if (e.getValue().add) {
                    gridObjects.add(e.getValue().value);
                } else {
                    gridObjects.remove(e.getValue().value);
                }
            }
        }
    }

    private void modifyFormChangesWithChangeCurrentObjectAsyncs(final long currentDispatchingRequestIndex, final GFormChanges fc) {
        pendingChangeCurrentObjectsRequests.foreachEntry((group, requestIndex) -> {
            if (requestIndex <= currentDispatchingRequestIndex)
                pendingChangeCurrentObjectsRequests.remove(group);
            else
                fc.objects.remove(group);
        });
    }

    private void modifyFormChangesWithChangePropertyAsyncs(final int currentDispatchingRequestIndex, final GFormChanges fc) {
        pendingChangePropertyRequests.foreachEntry(new Function2<GPropertyDraw, NativeHashMap<GGroupObjectValue, Change>>() {
            @Override
            public void apply(final GPropertyDraw property, NativeHashMap<GGroupObjectValue, Change> values) {
                values.foreachEntry(new Function2<GGroupObjectValue, Change>() {
                    @Override
                    public void apply(GGroupObjectValue keys, Change change) {
                        long requestIndex = change.requestIndex;
                        if (requestIndex <= currentDispatchingRequestIndex) {

                            removeFromDoubleMap(pendingChangePropertyRequests, property, keys);

                            if(getPropertyController(property).isPropertyShown(property) && !fc.dropProperties.contains(property)) {
                                NativeHashMap<GGroupObjectValue, Object> propertyValues = fc.properties.get(property);
                                if (propertyValues == null) {
                                    // включаем изменение на старое значение, если ответ с сервера пришел, а новое значение нет
                                    propertyValues = new NativeHashMap<>();
                                    fc.properties.put(property, propertyValues);
                                    fc.updateProperties.add(property);
                                }

                                if (fc.updateProperties.contains(property) && !propertyValues.containsKey(keys)) {
                                    propertyValues.put(keys, change.oldValue);
                                }
                            }
                        }
                    }
                });
            }
        });

        pendingChangePropertyRequests.foreachEntry((property, values) -> {
            final NativeHashMap<GGroupObjectValue, Object> propertyValues = fc.properties.get(property);
            if (propertyValues != null) {
                values.foreachEntry((group, change) -> {
                    if (change.canUseNewValueForRendering) {
                        propertyValues.put(group, change.newValue);
                    }
                });
            }
        });
    }

    public GGridController getGridController(GGroupObject group) {
        return controllers.get(group);
    }

    public GAbstractTableController getGroupObjectController(GGroupObject group) {
        GGridController groupObjectController = controllers.get(group);
        if (groupObjectController != null) {
            return groupObjectController;
        }

        return treeControllers.get(group.parent);
    }

    public GPropertyController getPropertyController(GPropertyDraw property) {
        if(property.isList) {
            return getGroupObjectController(property.groupObject);
        } else
            return panelController;
    }

    public void openForm(Long requestIndex, GForm form, GModalityType modalityType, boolean forbidDuplicate, Event initFilterEvent, final WindowHiddenHandler handler) {
        boolean isDockedModal = modalityType == GModalityType.DOCKED_MODAL;
        if (isDockedModal)
            ((FormDockable)formContainer).block();

        FormContainer blockingForm = formsController.openForm(requestIndex, form, modalityType, forbidDuplicate, initFilterEvent, () -> {
            if(isDockedModal) {
                ((FormDockable)formContainer).unblock();

                formsController.selectTab((FormDockable) formContainer);
            } else if(modalityType == GModalityType.DOCKED)
                formsController.ensureTabSelected();

            handler.onHidden();
        });

        if (isDockedModal)
            ((FormDockable)formContainer).setBlockingForm((FormDockable) blockingForm);
    }

    public void showClassDialog(GObjectClass baseClass, GObjectClass defaultClass, boolean concreate, final ClassChosenHandler classChosenHandler) {
        GClassDialog.showDialog(baseClass, defaultClass, concreate, classChosenHandler);
    }

    public long changeGroupObject(final GGroupObject group, GGroupObjectValue key) {
        long requestIndex = dispatcher.execute(new ChangeGroupObject(group.ID, key), new ServerResponseCallback() {
            @Override
            public void preProcess() {
                DeferredRunner.get().commitDelayedGroupObjectChange(group);
            }
        });
        pendingChangeCurrentObjectsRequests.put(group, requestIndex);
        return requestIndex;
    }

    // has to be called setCurrentKey before
    public void changeGroupObjectLater(final GGroupObject group, final GGroupObjectValue key) {
        DeferredRunner.get().scheduleDelayedGroupObjectChange(group, new DeferredRunner.AbstractCommand() {
            @Override
            public void execute() {
                changeGroupObject(group, key);
            }
        });
    }

    public void pasteExternalTable(ArrayList<GPropertyDraw> propertyList, ArrayList<GGroupObjectValue> columnKeys, List<List<String>> table) {
        ArrayList<ArrayList<Object>> values = new ArrayList<>();

        int propertyColumns = propertyList.size();
        for (List<String> sRow : table) {
            ArrayList<Object> valueRow = new ArrayList<>();

            for (int i = 0; i < propertyColumns; i++) {
                GPropertyDraw property = propertyList.get(i);
                String sCell = i < sRow.size() ? sRow.get(i) : null;
                valueRow.add(property.parseChangeValueOrNull(sCell));
            }
            values.add(valueRow);
        }

        final ArrayList<Integer> propertyIdList = new ArrayList<>();
        for (GPropertyDraw propertyDraw : propertyList) {
            propertyIdList.add(propertyDraw.ID);
        }

        syncDispatch(new PasteExternalTable(propertyIdList, columnKeys, values), new ServerResponseCallback());

    }

    public void pasteSingleValue(GPropertyDraw property, GGroupObjectValue columnKey, String sValue) {
        Serializable value = (Serializable) property.parseChangeValueOrNull(sValue);
        syncDispatch(new PasteSingleCellValue(property.ID, columnKey, value), new ServerResponseCallback());
    }

    public void changePageSizeAfterUnlock(final GGroupObject groupObject, final int pageSize) {
        Scheduler.get().scheduleFixedPeriod(new Scheduler.RepeatingCommand() {
            @Override
            public boolean execute() {
                if (loadingManager.isVisible()) {
                    return true;
                } else {
                    changePageSizeLater(groupObject, pageSize);
                    return false;
                }
            }
        }, 1000);
    }

    private void changePageSizeLater(final GGroupObject groupObject, final int pageSize) {
        DeferredRunner.get().scheduleChangePageSize(groupObject, new DeferredRunner.AbstractCommand() {
            @Override
            public void execute() {
                changePageSize(groupObject, pageSize);
            }
        });
    }

    private void changePageSize(GGroupObject groupObject, int pageSize) {
        dispatcher.execute(new ChangePageSize(groupObject.ID, pageSize), new ServerResponseCallback());
    }

    public void scrollToEnd(GGroupObject group, boolean toEnd) {
        syncDispatch(new ScrollToEnd(group.ID, toEnd), new ServerResponseCallback());
    }

    public long executeEventAction(GPropertyDraw property, GGroupObjectValue columnKey, String actionSID) {
        DeferredRunner.get().commitDelayedGroupObjectChange(property.groupObject);
        return syncDispatch(new ExecuteEventAction(property.ID, getFullCurrentKey(columnKey), actionSID),
                new ServerResponseCallback() {
                    @Override
                    public void success(ServerResponseResult response) {
                        super.success(response);
                        formsController.setLastCompletedRequest(response.requestIndex);
                        //GFormAction will close asyncForm, if there is no GFormAction in response,
                        //we should close this erroneous asyncForm
                        if (formsController.hasAsyncForm(response.requestIndex)) {
                            if (Arrays.stream(response.actions).noneMatch(a -> a instanceof GFormAction)) {
                                FormContainer formContainer = formsController.removeAsyncForm(response.requestIndex);
                                if(formContainer instanceof FormDockable) {
                                    ((FormDockable) formContainer).closePressed();
                                } else {
                                    formContainer.hide();
                                }
                            }
                        }
                    }
                });
    }

    public void executePropertyEventAction(EventHandler handler, boolean isBinding, ExecuteEditContext editContext) {
        Event event = handler.event;
        GPropertyDraw property = editContext.getProperty();
        if(property == null)  // in tree there can be no property in groups other than last
            return;

        if(BrowserEvents.CONTEXTMENU.equals(event.getType())) {
            handler.consume();
            GPropertyContextMenuPopup.show(property, event.getClientX(), event.getClientY(), actionSID -> {
                actionDispatcher.executePropertyActionSID(event, actionSID, editContext);
            });
        } else {
            String actionSID;
            if(isBinding) {
                if(GKeyStroke.isKeyEvent(event)) // we don't want to set focus on mouse binding (it's pretty unexpected behaviour)
                    editContext.trySetFocus(); // we want element to be focused on key binding (if it's possible)
                actionSID = CHANGE;
            } else {
                actionSID = property.getEventSID(event);
                if(actionSID == null)
                    return;
            }

            // hasChangeAction check is important for quickfilter not to consume event (however with propertyReadOnly, checkCanBeChanged there will be still some problems)
            if (isEditableAwareEditEvent(actionSID) && (editContext.isReadOnly() || !property.hasChangeAction))
                    return;
            if(GEditBindingMap.EDIT_OBJECT.equals(actionSID) && !property.hasEditObjectAction)
                return;

            handler.consume();

            GAsyncEventExec asyncEventExec = property.getAsyncEventExec(actionSID);

            long requestIndex = asyncEventExec == null || asyncEventExec instanceof GAsyncExec ? actionDispatcher.executePropertyActionSID(event, actionSID, editContext) : -1;

            if (asyncEventExec != null) {
                if (property.askConfirm) {
                    blockingConfirm("lsFusion", property.askConfirmMessage, false, chosenOption -> {
                        if (chosenOption == DialogBoxHelper.OptionType.YES) {
                            asyncEventExec.exec(this, property, event, editContext, actionSID, requestIndex);
                        }
                    });
                } else {
                        asyncEventExec.exec(this, property, event, editContext, actionSID, requestIndex);
                }
            }
        }
    }

    public void asyncAddRemove(GPropertyDraw property, ExecuteEditContext editContext, String actionSID, GAsyncAddRemove asyncAddRemove) {
        GGridController controller = controllers.get(asyncAddRemove.object.groupObject);
        if (controller != null && controller.isList()) {
            modifyObject(property, editContext.getColumnKey(), actionSID, asyncAddRemove);
        }
    }

    public void asyncChange(Event event, ExecuteEditContext editContext, String actionSID, GAsyncChange asyncChange) {
        GType changeType = asyncChange.changeType;
        edit(changeType, event, false, null,
                value -> changeEditPropertyValue(editContext, actionSID, changeType, value, null),
                value -> {}, () -> {}, editContext);
    }

    public void asyncOpenForm(GAsyncOpenForm asyncOpenForm, long requestIndex) {
        formsController.asyncOpenForm(requestIndex, asyncOpenForm);
    }

    public void changeEditPropertyValue(ExecuteEditContext editContext, String actionSID, GType changeType, Object value, Long changeRequestIndex) {
        Object oldValue = editContext.getValue();

        GPropertyDraw property = editContext.getProperty();
        if(property.canUseChangeValueForRendering(changeType)) // changing model, to rerender new value
            editContext.setValue(value);

        changeProperty(property, editContext.getColumnKey(), actionSID, (Serializable) value, oldValue, changeRequestIndex);
    }

    public void continueServerInvocation(long requestIndex, Object[] actionResults, int continueIndex, AsyncCallback<ServerResponseResult> callback) {
        syncDispatch(new ContinueInvocation(requestIndex, actionResults, continueIndex), callback, true);
    }

    public void throwInServerInvocation(long requestIndex, Throwable throwable, int continueIndex, AsyncCallback<ServerResponseResult> callback) {
        syncDispatch(new ThrowInInvocation(requestIndex, throwable, continueIndex), callback, true);
    }

    public <T extends Result> long syncDispatch(final FormAction<T> action, AsyncCallback<T> callback) {
        return syncDispatch(action, callback, false);
    }

    public <T extends Result> long syncDispatch(final FormAction<T> action, AsyncCallback<T> callback, boolean direct) {
        //todo: возможно понадобится сделать чтото более сложное как в
        //todo: http://stackoverflow.com/questions/2061699/disable-user-interaction-in-a-gwt-container
        loadingManager.start();
        return dispatcher.execute(action, new WrapperAsyncCallbackEx<T>(callback) {
            @Override
            public void preProcess() {
                loadingManager.stop();
            }
        }, direct);
    }

    public GGroupObjectValue getFullCurrentKey(GGroupObjectValue propertyKey) {
        GGroupObjectValueBuilder fullKey = new GGroupObjectValueBuilder();

        for (GGridController group : controllers.values()) {
            fullKey.putAll(group.getCurrentKey());
        }

        for (GTreeGroupController tree : treeControllers.values()) {
            GGroupObjectValue currentPath = tree.getCurrentKey();
            if (currentPath != null) {
                fullKey.putAll(currentPath);
            }
        }

        fullKey.putAll(propertyKey);

        return fullKey.toGroupObjectValue();
    }

    public void changeProperty(GPropertyDraw property, GGroupObjectValue columnKey, String actionSID, Serializable value, Object oldValue, Long changeRequestIndex) {
        GGroupObjectValue rowKey = GGroupObjectValue.EMPTY;
        if(property.isList) {
            rowKey = getGroupObjectController(property.groupObject).getCurrentKey();
            if(rowKey.isEmpty())
                return;
        }
        changeProperties(new GPropertyDraw[]{property}, actionSID, new GGroupObjectValue[]{rowKey}, new GGroupObjectValue[]{columnKey}, new Serializable[]{value}, new Object[]{oldValue}, changeRequestIndex);
    }

    public void changeProperties(GPropertyDraw[] properties, String actionSID, GGroupObjectValue[] rowKeys, GGroupObjectValue[] columnKeys, Serializable[] values, Object[] oldValues, Long changeRequestIndex) {
        int length = properties.length;
        int[] IDs = new int[length];
        GGroupObjectValue[] fullCurrentKeys = new GGroupObjectValue[length];
        for (int i = 0; i < length; i++) {
            GGroupObjectValue fullKey = GGroupObjectValue.getFullKey(rowKeys[i], columnKeys[i]);
            IDs[i] = properties[i].ID;
            fullCurrentKeys[i] = getFullCurrentKey(fullKey);
        }

        if(changeRequestIndex == null)
            changeRequestIndex = dispatcher.execute(new ChangeProperties(IDs, fullCurrentKeys, values, new Long[length], actionSID), new ServerResponseCallback());

        for (int i = 0; i < length; i++) {
            GGroupObjectValue fullKey = GGroupObjectValue.getFullKey(rowKeys[i], columnKeys[i]);
            putToDoubleNativeMap(pendingChangePropertyRequests, properties[i], fullKey, new Change(changeRequestIndex, values[i], oldValues[i], properties[i].canUseChangeValueForRendering()));
        }
    }

    public void modifyObject(final GPropertyDraw property, final GGroupObjectValue columnKey, String actionSID, GAsyncAddRemove asyncAddRemove) {
        final GObject object = asyncAddRemove.object;
        final boolean add = asyncAddRemove.add;

        GGridController controller = getGridController(asyncAddRemove.object.groupObject);
        final int position = controller.getSelectedRow();

        if (add) {
            MainFrame.logicsDispatchAsync.execute(new GenerateID(), new ErrorHandlingCallback<GenerateIDResult>() {
                @Override
                public void success(GenerateIDResult result) {
                    executeModifyObject(property, columnKey, actionSID, object, add, result.ID, new GGroupObjectValue(object.ID, result.ID), position);
                }
            });
        } else {
            final GGroupObjectValue value = controllers.get(object.groupObject).getCurrentKey();
            if(value.isEmpty())
                return;
            final long ID = (Long) value.getValue(0);
            executeModifyObject(property, columnKey, actionSID, object, add, ID, value, position);
        }
    }

    private void executeModifyObject(GPropertyDraw property, GGroupObjectValue columnKey, String actionSID, GObject object, boolean add, long ID, GGroupObjectValue value, int position) {
        final GGroupObjectValue fullCurrentKey = getFullCurrentKey(columnKey); // чтобы не изменился

        controllers.get(object.groupObject).modifyGroupObject(value, add, -1);

        long requestIndex = dispatcher.execute(new ChangeProperties(new int[]{property.ID}, new GGroupObjectValue[]{fullCurrentKey}, new Serializable[]{null}, new Long[]{add ? ID : null}, actionSID), new ServerResponseCallback());
        pendingChangeCurrentObjectsRequests.put(object.groupObject, requestIndex);
        pendingModifyObjectRequests.put(requestIndex, new ModifyObject(object, add, value, position));
    }

    public void changePropertyOrder(GPropertyDraw property, GGroupObjectValue columnKey, GOrder modiType) {
        syncDispatch(new ChangePropertyOrder(property.ID, columnKey, modiType), new ServerResponseCallback());
    }

    public void setPropertyOrders(GGroupObject groupObject, List<Integer> propertyList, List<GGroupObjectValue> columnKeyList, List<Boolean> orderList) {
        syncDispatch(new SetPropertyOrders(groupObject.ID, propertyList, columnKeyList, orderList), new ServerResponseCallback());
    }

    public void expandGroupObjectRecursive(GGroupObject group, boolean current) {
        DeferredRunner.get().commitDelayedGroupObjectChange(group);
        syncDispatch(new ExpandGroupObjectRecursive(group.ID, current), new ServerResponseCallback());
    }

    public void expandGroupObject(GGroupObject group, GGroupObjectValue value) {
        DeferredRunner.get().commitDelayedGroupObjectChange(group);
        syncDispatch(new ExpandGroupObject(group.ID, value), new ServerResponseCallback());
    }

    public void collapseGroupObjectRecursive(GGroupObject group, boolean current) {
        DeferredRunner.get().commitDelayedGroupObjectChange(group);
        syncDispatch(new CollapseGroupObjectRecursive(group.ID, current), new ServerResponseCallback());
    }

    public void collapseGroupObject(GGroupObject group, GGroupObjectValue value) {
        DeferredRunner.get().commitDelayedGroupObjectChange(group);
        syncDispatch(new CollapseGroupObject(group.ID, value), new ServerResponseCallback());
    }

    public void setTabVisible(GContainer tabbedPane, GComponent visibleComponent) {
        dispatcher.execute(new SetTabVisible(tabbedPane.ID, visibleComponent.ID), new ServerResponseCallback());
        onResize();
    }

    public void closePressed() {
        syncDispatch(new ClosePressed(), new ServerResponseCallback());
    }

    private void setRemoteRegularFilter(GRegularFilterGroup filterGroup, GRegularFilter filter) {
        syncDispatch(new SetRegularFilter(filterGroup.ID, (filter == null) ? -1 : filter.ID), new ServerResponseCallback());
    }

    public void changeFilter(GGroupObject groupObject, ArrayList<GPropertyFilter> conditions) {
        currentFilters.put(groupObject, conditions);
        applyCurrentFilters();
    }

    public void changeFilter(GTreeGroup treeGroup, ArrayList<GPropertyFilter> conditions) {
        Map<GGroupObject, ArrayList<GPropertyFilter>> filters = GwtSharedUtils.groupList(new GwtSharedUtils.Group<GGroupObject, GPropertyFilter>() {
            public GGroupObject group(GPropertyFilter key) {
                return key.groupObject;
            }
        }, conditions);

        for (GGroupObject group : treeGroup.groups) {
            ArrayList<GPropertyFilter> groupFilters = filters.get(group);
            if (groupFilters == null) {
                groupFilters = new ArrayList<>();
            }
            currentFilters.put(group, groupFilters);
        }

        applyCurrentFilters();
    }

    private void applyCurrentFilters() {
        ArrayList<GPropertyFilterDTO> filters = new ArrayList<>();

        currentFilters.foreachValue(groupFilters -> {
            for (GPropertyFilter filter : groupFilters) {
                filters.add(filter.getFilterDTO());
            }
        });

        dispatcher.execute(new SetUserFilters(filters), new ServerResponseCallback());
    }

    public void setViewFilters(ArrayList<GPropertyFilter> conditions, int pageSize) {
        ArrayList<GPropertyFilterDTO> filters = new ArrayList<>();

        for (GPropertyFilter filter : conditions) {
            filters.add(filter.getFilterDTO());
        }

        dispatcher.execute(new SetViewFilters(filters, pageSize), new ServerResponseCallback());
    }

    public void quickFilter(Event event, int initialFilterPropertyID) {
        GPropertyDraw propertyDraw = getProperty(initialFilterPropertyID);
        if (propertyDraw != null && controllers.containsKey(propertyDraw.groupObject)) {
            focusProperty(propertyDraw);
            controllers.get(propertyDraw.groupObject).quickEditFilter(event, propertyDraw, GGroupObjectValue.EMPTY);
        }
    }

    public void getInitialFilterProperty(ErrorHandlingCallback<NumberResult> callback) {
        dispatcher.execute(new GetInitialFilterProperty(), callback);
    }

    public void focusProperty(GPropertyDraw propertyDraw) {
        getPropertyController(propertyDraw).focusProperty(propertyDraw);
    }

    private Map<Integer, Integer> getTabMap(TabbedContainerView containerView, GContainer component) {
        Map<Integer, Integer> tabMap = new HashMap<>();
        ArrayList<GComponent> tabs = component.children;
        if (tabs != null) {
            int c = 0;
            for (int i = 0; i < tabs.size(); i++) {
                GComponent tab = tabs.get(i);
                if (containerView.isTabVisible(tab)) {
                    tabMap.put(tab.ID, c++);
                }
            }
        }
        return tabMap;
    }

    public void activateTab(GComponent component) {
        if(component.isTab())
            ((TabbedContainerView)formLayout.getContainerView(component.container)).activateTab(component);
    }

    public void countRecords(final GGroupObject groupObject) {
        dispatcher.execute(new CountRecords(groupObject.ID), new ErrorHandlingCallback<NumberResult>() {
            @Override
            public void success(NumberResult result) {
                controllers.get(groupObject).showRecordQuantity((Integer) result.value);
            }
        });
    }

    public void calculateSum(final GGroupObject groupObject, final GPropertyDraw propertyDraw, GGroupObjectValue columnKey) {
        dispatcher.execute(new CalculateSum(propertyDraw.ID, columnKey), new ErrorHandlingCallback<NumberResult>() {
            @Override
            public void success(NumberResult result) {
                controllers.get(groupObject).showSum(result.value, propertyDraw);
            }
        });
    }

    // change group mode with force refresh
    public long changeListViewType(final GGroupObject groupObject, int pageSize, GListViewType viewType, GUpdateMode updateMode) {
        boolean enableGroup = viewType == GListViewType.PIVOT;
        return changeMode(groupObject, true, enableGroup ? new ArrayList<>() : null, enableGroup ? new ArrayList<>() : null, 0, null, pageSize, true, updateMode, viewType);
    }
    public long changeMode(final GGroupObject groupObject, boolean setGroup, List<GPropertyDraw> properties, List<GGroupObjectValue> columnKeysList, int aggrProps, GPropertyGroupType aggrType, Integer pageSize, boolean forceRefresh, GUpdateMode updateMode, GListViewType viewType) {
        int[] propertyIDs = null;
        GGroupObjectValue[] columnKeys = null;
        if(properties != null) {
            propertyIDs = new int[properties.size()];
            columnKeys = new GGroupObjectValue[properties.size()];
            for(int i=0;i<propertyIDs.length;i++) {
                propertyIDs[i] = properties.get(i).ID;
                columnKeys[i] = columnKeysList.get(i);
            }
        }
        return dispatcher.execute(new ChangeMode(groupObject.ID, setGroup, propertyIDs, columnKeys, aggrProps, aggrType, pageSize, forceRefresh, updateMode, viewType), new ServerResponseCallback());
    }

    public GFormUserPreferences getUserPreferences() {
        List<GGroupObjectUserPreferences> groupObjectUserPreferencesList = new ArrayList<>();
        List<GGroupObjectUserPreferences> groupObjectGeneralPreferencesList = new ArrayList<>();
        for (GGridController controller : controllers.values()) {
            if (controller.isList()) {
                groupObjectUserPreferencesList.add(controller.getUserGridPreferences());
                groupObjectGeneralPreferencesList.add(controller.getGeneralGridPreferences());
            }
        }
        return new GFormUserPreferences(groupObjectGeneralPreferencesList, groupObjectUserPreferencesList);
    }

    public void runGroupReport(Integer groupObjectID) {
        syncDispatch(new GroupReport(groupObjectID, getUserPreferences()), new ErrorHandlingCallback<GroupReportResult>() {
            @Override
            public void success(GroupReportResult result) {
                GwtClientUtils.downloadFile(result.filename, "lsfReport", result.extension);
            }
        });
    }

    public void saveUserPreferences(GGridUserPreferences userPreferences, boolean forAllUsers, boolean completeOverride, String[] hiddenProps, final ErrorHandlingCallback<ServerResponseResult> callback) {
        syncDispatch(new SaveUserPreferencesAction(userPreferences.convertPreferences(), forAllUsers, completeOverride, hiddenProps), new ServerResponseCallback() {
            @Override
            public void success(ServerResponseResult response) {
                for (GAction action : response.actions) {
                    if (action instanceof GLogMessageAction) {
                        actionDispatcher.execute((GLogMessageAction) action);
                        callback.failure(new Throwable());
                        return;
                    }
                }
                callback.success(response);
            }

            @Override
            public void failure(Throwable caught) {
                callback.failure(caught);
            }
        });
    }

    public void refreshUPHiddenProps(String groupObjectSID, String[] propSids) {
        syncDispatch(new RefreshUPHiddenPropsAction(groupObjectSID, propSids), new ServerResponseCallback());
    }

    public List<GPropertyDraw> getPropertyDraws() {
        return form.propertyDraws;
    }

    public void setAsyncView(ActionPanelRenderer asyncView) {
        this.asyncView = asyncView;
    }

    int asyncCount;

    public void onAsyncStarted() {
        if (asyncView != null) {
            if(asyncCount == 0)
                asyncTimer.schedule(ASYNC_TIME_OUT);
            asyncCount++;
        }
    }

    public void onAsyncFinished() {
        if (asyncView != null) {
            asyncCount--;
            if (asyncCount == 0) {
                asyncTimer.cancel();
                asyncView.setLoadingImage(null);
            }
        }
    }

    public void previewBlurEvent(Event event) {
        MainFrame.setLastBlurredElement(Element.as(event.getEventTarget()));
    }
    public boolean previewEvent(Element target, Event event) {
        checkLinkEditModeEvents(formsController, event);
        return previewLoadingManagerSinkEvents(event) && MainFrame.previewEvent(target, event, isEditing());
    }

    private boolean previewLoadingManagerSinkEvents(Event event) {
        //focus() can trigger blur event, blur finishes editing. Editing calls syncDispatch.
        //If isEditing() and loadingManager isVisible() then flushCompletedRequests is not executed and syncDispatch is blocked.
        return !(loadingManager.isVisible() && DataGrid.checkSinkEvents(event));
    }

    protected void onFormHidden(int closeDelay) {
        FormDispatchAsync closeDispatcher = dispatcher;
        Scheduler.get().scheduleDeferred(() -> {
            closeDispatcher.execute(new Close(closeDelay), new ErrorHandlingCallback<VoidResult>() {
                @Override
                public void failure(Throwable caught) { // supressing errors
                }
            });
            closeDispatcher.close();
        });
//        dispatcher = null; // so far there are no null checks (for example, like in desktop-client), so changePageSize can be called after (apparently close will suppress it)
    }

    public void updateFormCaption() {
        String caption = form.getCaption();
        setFormCaption(caption, form.getTooltip(caption));
    }

    public void setFormCaption(String caption, String tooltip) {
        throw new UnsupportedOperationException();
    }

    // need this because hideForm can be called twice, which will lead to several continueDispatching (and nullpointer, because currentResponse == null)
    private boolean formHidden;
    public void hideForm(int closeDelay) {
        if(!formHidden) {
            onFormHidden(closeDelay);
            formHidden = true;
        }
    }

    public void blockingConfirm(String caption, String message, boolean cancel, final DialogBoxHelper.CloseCallback callback) {
        DialogBoxHelper.showConfirmBox(caption, message, cancel, 0, 0, callback);
    }

    public void blockingConfirm(String caption, String message, boolean cancel, int timeout, int initialValue, final DialogBoxHelper.CloseCallback callback) {
        DialogBoxHelper.showConfirmBox(caption, message, cancel, timeout, initialValue, callback);
    }

    public void blockingMessage(String caption, String message, final DialogBoxHelper.CloseCallback callback) {
        blockingMessage(false, caption, message, callback);
    }

    public void blockingMessage(boolean isError, String caption, String message, final DialogBoxHelper.CloseCallback callback) {
        DialogBoxHelper.showMessageBox(isError, caption, message, callback);
    }

    public Dimension getMaxPreferredSize() {
        return formLayout.getMaxPreferredSize();
    }

    public boolean isModal() {
        return formContainer instanceof ModalForm;
    }

    public boolean isDialog() {
        return isDialog;
    }

    @Override
    public void onResize() {
        if (!formHidden && formVisible) {
            super.onResize();
        }
    }

    public GForm getForm() {
        return form;
    }

    public List<GObject> getObjects() {
        ArrayList<GObject> objects = new ArrayList<>();
        for (GGroupObject groupObject : form.groupObjects) {
            for (GObject object : groupObject.objects) {
                objects.add(object);
            }
        }
        return objects;
    }

    @Override
    public void getServerActionMessage(ErrorHandlingCallback<StringResult> callback) {
        dispatcher.executePriority(new GetRemoteActionMessage(), callback);
    }

    @Override
    public void getServerActionMessageList(ErrorHandlingCallback<ListResult> callback) {
        dispatcher.executePriority(new GetRemoteActionMessageList(), callback);
    }

    @Override
    public void interrupt(boolean cancelable) {
        dispatcher.executePriority(new Interrupt(cancelable), new ErrorHandlingCallback<VoidResult>());
    }

    public void setContainerCaption(GContainer container, String caption) {
        container.caption = caption;

        // update captions (actually we could've set them directly to the containers, but tabbed pane physically adds / removes that views, so the check if there is a tab is required there)
        GFormLayout layout = formLayout;
        if(container.isTab())
            ((TabbedContainerView)layout.getContainerView(container.container)).updateTabCaption(container);
        else if(container.main)
            updateFormCaption();
        else
            layout.getContainerView(container).updateCaption();
    }

    private static final class Change {
        public final long requestIndex;
        public final Object newValue;
        public final Object oldValue;
        public final boolean canUseNewValueForRendering;

        private Change(long requestIndex, Object newValue, Object oldValue, boolean canUseNewValueForRendering) {
            this.requestIndex = requestIndex;
            this.newValue = newValue;
            this.oldValue = oldValue;
            this.canUseNewValueForRendering = canUseNewValueForRendering;
        }
    }

    private static class ModifyObject {
        public final GObject object;
        public final boolean add;
        public final GGroupObjectValue value;
        public final int position;

        private ModifyObject(GObject object, boolean add, GGroupObjectValue value, int position) {
            this.object = object;
            this.add = add;
            this.value = value;
            this.position = position;
        }
    }

    public void focusFirstWidget() {
        if (formLayout.focusDefaultWidget()) {
            return;
        }

        for (GTreeGroupController treeController : treeControllers.values()) {
            if (treeController.focusFirstWidget()) {
                treeController.scrollToTop();
                return;
            }
        }

        for (GGridController controller : controllers.values()) { // в конце controllers лежит нулевой groupObject. его-то и следует оставить напоследок
            if (controller.focusFirstWidget()) {
                controller.scrollToTop();
                return;
            }
        }

        panelController.focusFirstWidget();
    }

    private class ServerResponseCallback extends ErrorHandlingCallback<ServerResponseResult> {

        @Override
        public void success(ServerResponseResult response) {
            actionDispatcher.dispatchResponse(response);
        }
    }

    public abstract static class Binding implements BindingExec {

        public GGroupObject groupObject;

        public Binding(GGroupObject groupObject) {
            this.groupObject = groupObject;
        }

        public abstract boolean showing();

        public boolean enabled() {
            return true;
        }
    }

    private final ArrayList<GBindingEvent> bindingEvents = new ArrayList<>();
    private final ArrayList<Binding> bindings = new ArrayList<>();

    public interface BindingCheck {
        boolean check(Event event);
    }
    public interface BindingExec {
        void exec(Event event);
    }
    public ArrayList<Integer> addPropertyBindings(GPropertyDraw propertyDraw, BindingExec bindingExec, Widget widget) {
        ArrayList<Integer> result = new ArrayList<>();
        for(GInputBindingEvent bindingEvent : propertyDraw.bindingEvents) // supplier for optimization
            result.add(addBinding(bindingEvent.inputEvent, bindingEvent.env, bindingExec, widget, propertyDraw.groupObject));
        return result;
    }
    public void removePropertyBindings(ArrayList<Integer> indices) {
        for(int index : indices)
            removeBinding(index);
    }

    public int addBinding(GInputEvent event, BindingExec pressed, Widget component, GGroupObject groupObject) {
        return addBinding(event, GBindingEnv.AUTO, pressed, component, groupObject);
    }
    public int addBinding(GInputEvent event, GBindingEnv env, BindingExec pressed, Widget component, GGroupObject groupObject) {
        return addBinding(event::isEvent, env, pressed, component, groupObject);
    }
    public int addBinding(BindingCheck event, GBindingEnv env, BindingExec pressed, Widget component, GGroupObject groupObject) {
        return addBinding(event, env, null, pressed, component, groupObject);
    }
    public int addBinding(BindingCheck event, GBindingEnv env, Supplier<Boolean> enabled, BindingExec pressed, Widget component, GGroupObject groupObject) {
        return addBinding(new GBindingEvent(event, env), new Binding(groupObject) {
            @Override
            public boolean showing() {
                return component == null || isShowing(component);
            }

            @Override
            public boolean enabled() {
                return enabled != null ? enabled.get() : super.enabled();
            }

            @Override
            public void exec(Event event) {
                pressed.exec(event);
            }
        });
    }
    public int addBinding(GBindingEvent event, Binding action) {
        int index = bindings.size();
        bindingEvents.add(event);
        bindings.add(action);
        return index;
    }
    public void removeBinding(int index) {
        bindingEvents.remove(index);
        bindings.remove(index);
    }

    public void addEnterBindings(GBindingMode bindGroup, Consumer<Boolean> selectNextElement, GGroupObject groupObject) {
        addEnterBinding(false, bindGroup, selectNextElement, groupObject);
        addEnterBinding(true, bindGroup, selectNextElement, groupObject);
    }

    private void addEnterBinding(boolean shiftPressed, GBindingMode bindGroup, Consumer<Boolean> selectNextElement, GGroupObject groupObject) {
        addBinding(new GKeyInputEvent(new GKeyStroke(KeyCodes.KEY_ENTER, false, false, shiftPressed)),
                new GBindingEnv(-100, null, null, bindGroup, GBindingMode.NO, null, null, null),  // bindEditing - NO, because we don't want for example when editing text in grid to catch enter
                event -> selectNextElement.accept(!shiftPressed),
                null,
                groupObject);
    }

    private GGroupObject getGroupObject(Element elementTarget) {
        while (elementTarget != null) {     // пытаемся найти GroupObject, к которому относится элемент с фокусом
            GGroupObject targetGO = (GGroupObject) elementTarget.getPropertyObject("groupObject");
            if (targetGO != null)
                return targetGO;
            elementTarget = elementTarget.getParentElement();
        }
        return null;
    }

    public interface GGroupObjectSupplier {
        GGroupObject get();
    }

    public void processBinding(EventHandler handler, boolean preview, Element cellParent, boolean panel) {
        final EventTarget target = handler.event.getEventTarget();
        if (!Element.is(target)) {
            return;
        }

        Event event = handler.event;
        boolean isMouse = GMouseStroke.isEvent(event);
        TreeMap<Integer, Binding> orderedBindings = new TreeMap<>(); // descending sorting by priority

        GGroupObject groupObject = getGroupObject(Element.as(target));
        for (int i = 0, size = bindingEvents.size(); i < size; i++) {
            GBindingEvent bindingEvent = bindingEvents.get(i);
            if (bindingEvent.event.check(event)) {
                Binding binding = bindings.get(i);
                boolean equalGroup;
                GBindingEnv bindingEnv = bindingEvent.env;
                if(bindPreview(bindingEnv, isMouse, preview) &&
                    bindDialog(bindingEnv) &&
                    bindGroup(bindingEnv, groupObject, equalGroup = nullEquals(groupObject, binding.groupObject)) &&
                    bindEditing(bindingEnv) &&
                    bindShowing(bindingEnv, binding.showing()) &&
                    bindPanel(bindingEnv, isMouse, panel) &&
                    bindCell(bindingEnv, isMouse, cellParent != null))
                orderedBindings.put(-(GwtClientUtils.nvl(bindingEnv.priority, i) + (equalGroup ? 100 : 0)), binding); // increasing priority for group object
            }
        }

        for (Binding binding : orderedBindings.values()) {
            if (binding.enabled()) {
                checkCommitEditing();
                handler.consume();

                binding.exec(event);
                return;
            }
        }
    }

    public void checkCommitEditing() {
        if(cellEditor != null)
            cellEditor.commitEditing(getEditElement());
    }

    private boolean bindPreview(GBindingEnv binding, boolean isMouse, boolean preview) {
        switch (binding.bindPreview) {
            case AUTO:
                return isMouse || !preview;
            case NO:
                return !preview;
            case ALL: // actually makes no since if previewed, than will be consumed so equivalent to only
                return true;
            case ONLY:
                return preview;
            default:
                throw new UnsupportedOperationException("Unsupported bindingMode " + binding.bindDialog);
        }
    }

    private boolean bindDialog(GBindingEnv binding) {
        switch (binding.bindDialog) {
            case AUTO:
            case ALL:
                return true;
            case ONLY:
                return isDialog();
            case NO:
                return !isDialog();
            case INPUT:
            default:
                throw new UnsupportedOperationException("Unsupported bindingMode " + binding.bindDialog);
        }
    }

    private boolean bindGroup(GBindingEnv bindingEvent, GGroupObject groupObject, boolean equalGroup) {
        switch (bindingEvent.bindGroup) {
            case AUTO:
            case ALL:
                return true;
            case ONLY:
                return equalGroup;
            case NO:
                return !equalGroup;
            case INPUT:
                return groupObject != null && form.inputGroupObjects.contains(groupObject);
            default:
                throw new UnsupportedOperationException("Unsupported bindingMode");
        }
    }

    private boolean bindEditing(GBindingEnv binding) {
        switch (binding.bindEditing) {
            case AUTO:
            case ALL:
                return true;
            case ONLY:
                return isEditing();
            case NO:
                return !isEditing();
            case INPUT:
            default:
                throw new UnsupportedOperationException("Unsupported bindingMode " + binding.bindEditing);
        }
    }

    private boolean bindShowing(GBindingEnv binding, boolean showing) {
        switch (binding.bindShowing) {
            case ALL:
                return true;
            case AUTO:
            case ONLY:
                return showing;
            case NO:
                return !showing;
            case INPUT:
            default:
                throw new UnsupportedOperationException("Unsupported bindingMode " + binding.bindShowing);
        }
    }

    private boolean bindPanel(GBindingEnv binding, boolean isMouse, boolean panel) {
        switch (binding.bindPanel) {
            case ALL:
                return true;
            case AUTO:
                return !isMouse || !panel;
            case ONLY:
                return panel;
            case NO:
                return !panel;
            case INPUT:
            default:
                throw new UnsupportedOperationException("Unsupported bindingMode " + binding.bindPanel);
        }
    }

    private boolean bindCell(GBindingEnv binding, boolean isMouse, boolean isCell) {
        switch (binding.bindCell) {
            case ALL:
                return true;
            case AUTO:
                return !isMouse || isCell;
            case ONLY:
                return isCell;
            case NO:
                return !isCell;
            case INPUT:
            default:
                throw new UnsupportedOperationException("Unsupported bindingMode " + binding.bindCell);
        }
    }

    private CellEditor cellEditor;

    public Element getEditElement() {
        return editContext.getRenderElement();
    }

    private EditContext editContext;

    private Consumer<Object> editBeforeCommit;
    private Consumer<Object> editAfterCommit;
    private Runnable editCancel;

    private Element focusedElement;
    private Object forceSetFocus;

    public boolean isEditing() {
        return editContext != null;
    }

    public void edit(GType type, Event event, boolean hasOldValue, Object oldValue, Consumer<Object> beforeCommit, Consumer<Object> afterCommit, Runnable cancel, EditContext editContext) {
        assert this.editContext == null;
        GPropertyDraw property = editContext.getProperty();
        CellEditor cellEditor = type.createGridCellEditor(this, property);
        if (cellEditor != null) {
            editBeforeCommit = beforeCommit;
            editAfterCommit = afterCommit;
            editCancel = cancel;

            this.editContext = editContext;

            Element element = editContext.getRenderElement();
            if (cellEditor instanceof ReplaceCellEditor) {
                focusedElement = GwtClientUtils.getFocusedElement();
                if(!editContext.isFocusable()) // assert that otherwise it's already has focus
                    forceSetFocus = editContext.forceSetFocus();

                RenderContext renderContext = editContext.getRenderContext();

                CellRenderer cellRenderer = property.getCellRenderer();
                Pair<Integer, Integer> renderedSize = null;
                if(property.autoSize) // we need to do it before clearRender to have actual sizes + we need to remove paddings since we're setting width for wrapped component
                    renderedSize = new Pair<>(element.getClientWidth() - cellRenderer.getWidthPadding() * 2, element.getClientHeight() - cellRenderer.getHeightPadding() * 2);

                cellRenderer.clearRender(element, renderContext); // dropping previous render

                ((ReplaceCellEditor)cellEditor).render(element, renderContext, renderedSize); // rendering new one, filling inputElement
            }

            this.cellEditor = cellEditor; // not sure if it should before or after startEditing, but definitely after removeAllChildren, since it leads to blur for example
            if(!hasOldValue) // property.baseType.equals(type) actually there should be something like compatible, but there is no such method for now, so we'll do this check in editors
                oldValue = editContext.getValue();
            cellEditor.startEditing(event, getEditElement(), oldValue);
        } else
            cancel.run();
    }

    @Override
    public void commitEditing(Object value, boolean blurred) {
        editBeforeCommit.accept(value);
        editBeforeCommit = null;

        finishEditing(blurred);

        editAfterCommit.accept(value);
        editAfterCommit = null;
    }

    @Override
    public void cancelEditing() {
        finishEditing(false);

        editCancel.run();
        editCancel = null;
    }

    private void finishEditing(boolean blurred) {
        CellEditor cellEditor = this.cellEditor;
        this.cellEditor = null;

        EditContext editContext = this.editContext;
        this.editContext = null;

        Element renderElement = editContext.getRenderElement();
        if(cellEditor instanceof ReplaceCellEditor) {
            RenderContext renderContext = editContext.getRenderContext();
            ((ReplaceCellEditor) cellEditor).clearRender(renderElement, renderContext);
            editContext.getProperty().getCellRenderer().renderStatic(renderElement, renderContext);

            if(forceSetFocus != null) {
                editContext.restoreSetFocus(forceSetFocus);
                forceSetFocus = null;
            }

            if(blurred) { // when editing is commited (thus editing element is removed), set last blurred element to main widget to keep focus there
                if(editContext.isSetLastBlurred())
                    MainFrame.setLastBlurredElement(editContext.getFocusElement());
            } else {
                if (focusedElement != null)
                    focusedElement.focus();
            }
        }

        update(editContext.getProperty(), renderElement, editContext.getValue(), editContext.getUpdateContext());
    }

    public void render(GPropertyDraw property, Element element, RenderContext renderContext) {
        if(isEditedOrAsync(property, element)) {
            assert false;
            return;
        }

        property.getCellRenderer().renderStatic(element, renderContext);
    }
    public void update(GPropertyDraw property, Element element, Object value, UpdateContext updateContext) {
        if(isEditedOrAsync(property, element))
            return;

        property.getCellRenderer().renderDynamic(element, value, updateContext);
    }

    public boolean isEditedOrAsync(GPropertyDraw property, Element element) {
        return (editContext != null && editContext.getRenderElement() == element) || (property.drawAsync && asyncCount > 0);
    }

    public static void setBackgroundColor(Element element, String color) {
        setBackgroundColor(element, color, false);
    }

    public static void setBackgroundColor(Element element, String color, boolean themeConvert) {
        if (color != null) {
            element.getStyle().setBackgroundColor(themeConvert ? getDisplayColor(color) : color);
        } else {
            element.getStyle().clearBackgroundColor();
        }
    }

    public static void setForegroundColor(Element element, String color) {
        setForegroundColor(element, color, false);
    }

    public static void setForegroundColor(Element element, String color, boolean themeConvert) {
        if (color != null) {
            element.getStyle().setColor(themeConvert ? getDisplayColor(color) : color);
        } else {
            element.getStyle().clearColor();
        }
    }

    public static void setDynamicImage(Element element, Object value) { // assert that property.hasDynamicImage
        ActionCellRenderer.setImage(element, value instanceof String && !value.equals("null") ?
                getDownloadURL((String) value, null, null, false) :
                "", null, true);
    }

    public void onPropertyBrowserEvent(EventHandler handler, Element cellParent, Element focusElement, Consumer<EventHandler> onOuterEditBefore,
                                       Consumer<EventHandler> onEdit, Consumer<EventHandler> onOuterEditAfter, Consumer<EventHandler> onCut,
                                       Consumer<EventHandler> onPaste, boolean panel) {
        boolean isPropertyEditing = cellEditor != null && getEditElement() == cellParent;
        if(isPropertyEditing)
            cellEditor.onBrowserEvent(getEditElement(), handler);

        if(DataGrid.getBrowserTooltipMouseEvents().contains(handler.event.getType())) // just not to have problems in debugger
            return;

        if(handler.consumed)
            return;

        if(GMouseStroke.isChangeEvent(handler.event))
            focusElement.focus(); // it should be done on CLICK, but also on MOUSEDOWN, since we want to focus even if mousedown is later consumed

        if(!previewLoadingManagerSinkEvents(handler.event)) {
            return;
        }

        checkMouseKeyEvent(handler, true, cellParent, panel);

        if(handler.consumed)
            return;

        onOuterEditBefore.accept(handler);

        if(handler.consumed)
            return;

        if (!isPropertyEditing) { // if editor did not consume event, we don't want it to be handled by "renderer" since it doesn't exist
            if (GKeyStroke.isCopyToClipboardEvent(handler.event)) {
                onCut.accept(handler);
            } else if (GKeyStroke.isPasteFromClipboardEvent(handler.event)) {
                onPaste.accept(handler);
            } else {
                onEdit.accept(handler);
            }
        }

        if(handler.consumed)
            return;

        onOuterEditAfter.accept(handler);

        if(handler.consumed)
            return;

        // if we consume mouse down we disable "text selection" feature
//        if(GMouseStroke.isDownEvent(handler.event)) // we want to cancel focusing (to avoid blinking if change event IS CLICK) + native selection odd behaviour (when some events are consumed, and some - not)
//            handler.consume(false, true); // but we want to propagate event upper (to GFormController to proceed bindings)

        checkMouseKeyEvent(handler, false, cellParent, panel);
    }
    
    public void resetWindowsLayout() {
        formsController.resetWindowsLayout();
    }
}