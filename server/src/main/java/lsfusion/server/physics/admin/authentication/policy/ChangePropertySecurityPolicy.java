package lsfusion.server.physics.admin.authentication.policy;

import lsfusion.server.language.linear.LAP;
import lsfusion.server.logics.property.oraction.ActionOrProperty;

public class ChangePropertySecurityPolicy extends AbstractSecurityPolicy<ActionOrProperty> {

    public void deny(LAP<?, ?> lp) {
        if (lp != null)
            deny(lp.property);
    }
    public void deny(LAP<?, ?>... lps) { for (LAP<?, ?> lp : lps) deny(lp); }
}
