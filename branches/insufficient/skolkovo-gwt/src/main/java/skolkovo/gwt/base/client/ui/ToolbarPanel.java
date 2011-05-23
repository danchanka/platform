package skolkovo.gwt.base.client.ui;

import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.i18n.client.LocaleInfo;
import com.google.gwt.uibinder.client.UiConstructor;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.ListBox;

import static skolkovo.gwt.base.client.BaseFrame.baseMessages;
import static skolkovo.gwt.base.client.BaseFrame.getPageUrlPreservingParameters;

public class ToolbarPanel extends Composite {
    private static final String locales[] = {"ru", "en"};
    private static final String localesDescriptions[] = {
            baseMessages.localeRu(),
            baseMessages.localeEn()
    };

    @UiConstructor
    public ToolbarPanel(boolean showProfileButton) {
        HorizontalPanel mainPane = new HorizontalPanel();
        mainPane.setHorizontalAlignment(HorizontalPanel.ALIGN_RIGHT);
        mainPane.setWidth("100%");

        if (showProfileButton) {
            String profileUrl = getPageUrlPreservingParameters("expertProfile.html");

            HorizontalPanel userBtnPanel = new HorizontalPanel();
            userBtnPanel.setWidth("100%");
            userBtnPanel.setHorizontalAlignment(HorizontalPanel.ALIGN_LEFT);
            userBtnPanel.setSpacing(5);
            userBtnPanel.add(new HTML("<a href=\"" + profileUrl + "\" title=\"" + baseMessages.showProfile() + "\"><img src=\"images/user.png\"/></a>"));
            mainPane.add(userBtnPanel);
        }


        int currLocaleIndex = 0;
        final String currentLocale = LocaleInfo.getCurrentLocale().getLocaleName();

        final ListBox bxLocales = new ListBox();
        bxLocales.setWidth("200");
        for (int i = 0; i < locales.length; ++i) {
            bxLocales.addItem(localesDescriptions[i]);
            if (locales[i].equals(currentLocale)) {
                currLocaleIndex = i;
            }
        }
        bxLocales.setSelectedIndex(currLocaleIndex);

        bxLocales.addChangeHandler(new ChangeHandler() {
            @Override
            public void onChange(ChangeEvent event) {
                String newLocale = locales[bxLocales.getSelectedIndex()];
                if (!currentLocale.equals(newLocale)) {
                    Window.open(getPageUrlPreservingParameters("locale", newLocale), "_self", "");
                }
            }
        });

        mainPane.add(bxLocales);

        initWidget(mainPane);
    }
}