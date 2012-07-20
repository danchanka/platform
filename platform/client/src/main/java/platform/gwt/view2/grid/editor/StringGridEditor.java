package platform.gwt.view2.grid.editor;

import com.google.gwt.cell.client.Cell;
import com.google.gwt.cell.client.ValueUpdater;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.EventTarget;
import com.google.gwt.dom.client.InputElement;
import com.google.gwt.dom.client.NativeEvent;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.safehtml.client.SafeHtmlTemplates;
import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.gwt.safehtml.shared.SafeHtmlBuilder;
import platform.gwt.view2.grid.EditManager;

public class StringGridEditor implements GridCellEditor {
    interface Template extends SafeHtmlTemplates {
        @Template("<input type=\"text\" value=\"{0}\" tabindex=\"-1\"></input>")
        SafeHtml render(String value);
    }

    private static Template template;
    private static void initTemplateIfNeeded() {
        if (template == null) {
            template = GWT.create(Template.class);
        }
    }

    private final EditManager editManager;
    private String currentText;

    public StringGridEditor(EditManager editManager, Object oldValue) {
        initTemplateIfNeeded();

        this.editManager = editManager;
        this.currentText = oldValue == null ? null : oldValue.toString();
    }

    @Override
    public void startEditing(Cell.Context context, Element parent) {
        getInputElement(parent).focus();
    }

    @Override
    public void onBrowserEvent(Cell.Context context, Element parent, Object value, NativeEvent event, ValueUpdater<Object> valueUpdater) {
        String type = event.getType();
        boolean keyUp = "keyup".equals(type);
        boolean keyDown = "keydown".equals(type);
        if (keyUp || keyDown) {
            int keyCode = event.getKeyCode();
            if (keyUp && keyCode == KeyCodes.KEY_ENTER) {
                editManager.commitEditing(getCurrentText(parent));
            } else if (keyUp && keyCode == KeyCodes.KEY_ESCAPE) {
                editManager.cancelEditing();
            } else {
                currentText = getCurrentText(parent);
            }
        } else if ("blur".equals(type)) {
            // Cancel the change. Ensure that we are blurring the input element and
            // not the parent element itself.
            EventTarget eventTarget = event.getEventTarget();
            if (Element.is(eventTarget)) {
                Element target = Element.as(eventTarget);
                if ("input".equals(target.getTagName().toLowerCase())) {
                    editManager.cancelEditing();
                }
            }
        }
    }

    @Override
    public void render(Cell.Context context, Object value, SafeHtmlBuilder sb) {
        sb.append(template.render(currentText));
    }

    @Override
    public boolean resetFocus(Cell.Context context, Element parent, Object value) {
        getInputElement(parent).focus();
        return true;
    }

    private InputElement getInputElement(Element parent) {
        return parent.getFirstChild().cast();
    }

    private String getCurrentText(Element parent) {
        return getInputElement(parent).getValue();

    }
}
