package lsfusion.server.data.expr.formula;

import lsfusion.server.data.query.MStaticExecuteEnvironment;
import lsfusion.server.data.query.StaticExecuteEnvironment;
import lsfusion.server.data.sql.SQLSyntax;
import lsfusion.server.data.type.Type;

public class MaxFormulaImpl extends AbstractFormulaImpl implements FormulaUnionImpl {

    public boolean supportRemoveNull() {
        return true;
    }

    public final boolean isMin;
    public final boolean notObjectType;

    public MaxFormulaImpl(boolean isMin) {
        this(isMin, false);
    }

    public MaxFormulaImpl(boolean isMin, boolean notObjectType) {
        this.isMin = isMin;
        this.notObjectType = notObjectType;
    }

    @Override
    public String getSource(ExprSource source) {
        int exprCount = source.getExprCount();
        if (exprCount == 0) {
            return "";
        }

        Type type = getType(source);
        SQLSyntax syntax = source.getSyntax();
        MStaticExecuteEnvironment env = source.getMEnv();
        boolean noMaxImplicitCast = syntax.noMaxImplicitCast();

        String result = type.getCast(source.getSource(0), syntax, env, source.getType(0)); // чтобы когда NULL'ы тип правильно определило

        for (int i = 1; i < exprCount; i++) {
            String exprSource = source.getSource(i);
            if(noMaxImplicitCast)
                exprSource = type.getCast(exprSource, syntax, env, source.getType(i));
            result = syntax.getMaxMin(!isMin, result , exprSource, type, env);
        }
        return result;
    }

    public boolean supportSingleSimplify() {
        return true;
    }

    public boolean equals(Object o) {
        return this == o || o instanceof MaxFormulaImpl && isMin == ((MaxFormulaImpl) o).isMin && notObjectType == ((MaxFormulaImpl) o).notObjectType;
    }

    public int hashCode() {
        return 31 * (isMin ? 1 : 0) + (notObjectType ? 1 : 0);
    }
}
