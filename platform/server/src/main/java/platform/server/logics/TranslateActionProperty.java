package platform.server.logics;

import platform.base.BaseUtils;
import platform.base.Result;
import platform.interop.action.ClientAction;
import platform.server.classes.StringClass;
import platform.server.classes.ValueClass;
import platform.server.form.instance.FormInstance;
import platform.server.form.instance.PropertyObjectInterfaceInstance;
import platform.server.form.instance.remote.RemoteForm;
import platform.server.logics.linear.LP;
import platform.server.logics.property.ActionProperty;
import platform.server.logics.property.ClassPropertyInterface;
import platform.server.session.DataSession;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

public class TranslateActionProperty extends ActionProperty {
    private BusinessLogics<?> BL;
    private LP sourceProperty;
    private LP targetProperty;


    public TranslateActionProperty(String sID, String caption, BusinessLogics<?> BL, LP sourceProperty, LP targetProperty, ValueClass dictionary) {
        super(sID, caption, getValueClasses(sourceProperty, dictionary));

        this.BL = BL;
        this.sourceProperty = sourceProperty;
        this.targetProperty = targetProperty;
    }

    private static ValueClass[] getValueClasses(LP sourceProperty, ValueClass dictionary) {
        List<ValueClass> result = new ArrayList<ValueClass>();
        result.add(dictionary);
        result.addAll(BaseUtils.toList(sourceProperty.getCommonClasses(new Result<ValueClass>(){})));
        return result.toArray(new ValueClass[result.size()]);
    }

    public void execute(Map<ClassPropertyInterface, DataObject> keys, ObjectValue value, List<ClientAction> actions,
                        RemoteForm executeForm, Map<ClassPropertyInterface, PropertyObjectInterfaceInstance> mapObjects) throws SQLException {
        FormInstance<?> form = (FormInstance<?>)executeForm.form;
        DataSession session = form.session;

        List<ClassPropertyInterface> interfacesList = new ArrayList<ClassPropertyInterface>(interfaces);
        DataObject dictionary = keys.get(interfacesList.remove(0));
        List<DataObject> inputObjects = BaseUtils.mapList(interfacesList, keys);

        String source = (String) sourceProperty.read(session, inputObjects.toArray(new DataObject[inputObjects.size()]));

        if (source != null) {
            String delim = ", .:;%#$@/\\|<>=+-_)(*&?^!~{}[]\"1234567890'";
            StringTokenizer st = new StringTokenizer(source, delim, true);
            String result = "";
            while (st.hasMoreTokens()) {
                String token = st.nextToken();
                if (!delim.contains(token.subSequence(0, token.length()))) {
                    String translation = (String) BL.translationDictionaryTerm.read(session, dictionary, new DataObject(token, StringClass.get(50)));
                    if (translation != null) {
                        token = translation.trim();
                    }
                }
                result += token;
            }
            targetProperty.execute(result, session, inputObjects.toArray(new DataObject[inputObjects.size()]));
        }
    }
}
