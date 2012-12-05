package platform.gwt.form.shared.view.logics;

import platform.gwt.form.shared.view.GGroupObject;
import platform.gwt.form.shared.view.GObject;
import platform.gwt.form.shared.view.GOrder;
import platform.gwt.form.shared.view.GPropertyDraw;
import platform.gwt.form.shared.view.changes.GGroupObjectValue;
import platform.gwt.form.shared.view.reader.GBackgroundReader;
import platform.gwt.form.shared.view.reader.GCaptionReader;
import platform.gwt.form.shared.view.reader.GFooterReader;
import platform.gwt.form.shared.view.reader.GForegroundReader;

import java.util.List;
import java.util.Map;

public interface GGroupObjectLogicsSupplier {
    void updatePropertyDrawValues(GPropertyDraw reader, Map<GGroupObjectValue, Object> values, boolean updateKeys);
    void updateBackgroundValues(GBackgroundReader reader, Map<GGroupObjectValue, Object> values);
    void updateForegroundValues(GForegroundReader reader, Map<GGroupObjectValue, Object> values);
    void updateCaptionValues(GCaptionReader reader, Map<GGroupObjectValue, Object> values);
    void updateFooterValues(GFooterReader reader, Map<GGroupObjectValue, Object> values);
    void updateRowBackgroundValues(Map<GGroupObjectValue, Object> values);
    void updateRowForegroundValues(Map<GGroupObjectValue, Object> values);
    boolean hasPanelProperty(GPropertyDraw property);
    GGroupObjectValue getCurrentKey();
    void changeOrder(GPropertyDraw property, GOrder modiType);
    GGroupObject getSelectedGroupObject();
    List<GPropertyDraw> getGroupObjectProperties();
    List<GObject> getObjects();
    List<GPropertyDraw> getPropertyDraws();
    GPropertyDraw getSelectedProperty();
    Object getSelectedValue(GPropertyDraw property);
}
