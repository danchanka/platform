package lsfusion.server.logics;

import lsfusion.base.col.interfaces.immutable.ImMap;
import lsfusion.base.col.interfaces.immutable.ImSet;
import lsfusion.interop.action.ClientAction;
import lsfusion.server.data.SQLHandledException;
import lsfusion.server.form.entity.FormEntity;
import lsfusion.server.form.entity.ManageSessionType;
import lsfusion.server.form.entity.ObjectEntity;
import lsfusion.server.form.entity.filter.ContextFilter;
import lsfusion.server.logics.ObjectValue;
import lsfusion.server.logics.property.PullChangeProperty;
import lsfusion.server.base.context.AbstractContext;
import lsfusion.server.logics.action.stack.ExecutionStack;
import lsfusion.server.logics.form.interactive.instance.FormInstance;
import lsfusion.server.logics.form.interactive.listener.CustomClassListener;
import lsfusion.server.logics.form.interactive.listener.FocusListener;
import lsfusion.server.physics.admin.logging.LogInfo;
import lsfusion.server.physics.admin.authentication.security.SecurityManager;
import lsfusion.server.physics.admin.authentication.security.policy.SecurityPolicy;
import lsfusion.server.logics.form.interactive.instance.remote.RemoteForm;
import lsfusion.server.session.DataSession;
import org.apache.log4j.Logger;

import java.sql.SQLException;
import java.util.Locale;

import static lsfusion.server.physics.admin.logging.ServerLoggers.systemLogger;

public class LogicsInstanceContext extends AbstractContext {
    private static final Logger logger = Logger.getLogger(LogicsInstanceContext.class);

    private final LogicsInstance logicsInstance;

    public LogicsInstanceContext(LogicsInstance logicsInstance) {
        this.logicsInstance = logicsInstance;
    }

    @Override
    public LogicsInstance getLogicsInstance() {
        return logicsInstance;
    }

    public FocusListener getFocusListener() {
        return null;
    }

    public CustomClassListener getClassListener() {
        return null;
    }

    public Long getCurrentComputer() {
        return logicsInstance.getDbManager().getServerComputer();
    }

    public Long getCurrentUser() {
        return logicsInstance.getDbManager().getSystemUser();
    }

    @Override
    public Long getCurrentUserRole() {
        return null;
    }

    @Override
    public Locale getLocale() {
        return Locale.getDefault();
    }

    @Override
    public RemoteForm createRemoteForm(FormInstance formInstance, ExecutionStack stack) {
        throw new UnsupportedOperationException("createRemoteForm is not supported in server context");
    }

    @Override
    public LogInfo getLogInfo() {
        return LogInfo.system;
    }

    @Override
    public void aspectDelayUserInteraction(ClientAction action, String message) {
        if(message != null)
            systemLogger.info("Server message: " + message);
        else
            throw new UnsupportedOperationException("delayUserInteraction is not supported in server context, action : " + action.getClass());
    }

    @Override
    protected Object[] aspectRequestUserInteraction(ClientAction[] actions, String[] messages) {
        for (int i = 0; i < messages.length; i++) {
            String message = messages[i];
            if (message == null)
                throw new UnsupportedOperationException("requestUserInteraction is not supported in server context, action : " + actions[i].getClass());
        }
        return new Object[actions.length];
    }

    @Override
    public boolean canBeProcessed() {
        return true;
    }

    // used in some deprecated actions
    @Deprecated
    public FormInstance createFormInstance(FormEntity formEntity, ImMap<ObjectEntity, ? extends ObjectValue> mapObjects, DataSession session, boolean isModal, Boolean noCancel, ManageSessionType manageSession, ExecutionStack stack, boolean checkOnOk, boolean showDrop, boolean interactive, ImSet<ContextFilter> contextFilters, ImSet<PullChangeProperty> pullProps, boolean readonly) throws SQLException, SQLHandledException {
        assert false;
        return new FormInstance(formEntity, getLogicsInstance(),
                session,
                SecurityManager.serverSecurityPolicy, getFocusListener(), getClassListener(),
                mapObjects, stack, isModal,
                noCancel, manageSession,
                checkOnOk, showDrop, interactive, contextFilters, pullProps, readonly, getLocale());
    }
}
