package platform.server.data.query;

import platform.base.BaseUtils;
import platform.base.Result;
import platform.base.TwinImmutableInterface;
import platform.server.caches.AbstractOuterContext;
import platform.server.caches.hash.HashContext;
import platform.server.data.expr.BaseExpr;
import platform.server.data.expr.InnerExpr;
import platform.server.data.expr.InnerExprSet;
import platform.server.data.expr.query.DistinctKeys;
import platform.server.data.expr.query.Stat;
import platform.server.data.query.stat.KeyStat;
import platform.server.data.query.stat.StatKeys;
import platform.server.data.query.stat.WhereJoin;
import platform.server.data.translator.MapTranslate;
import platform.server.data.where.Where;

import java.util.HashMap;
import java.util.Map;

public class ExprEqualsJoin extends AbstractOuterContext<ExprEqualsJoin> implements WhereJoin<Integer> {

    public BaseExpr expr1;
    public BaseExpr expr2;

    public ExprEqualsJoin(BaseExpr expr1, BaseExpr expr2) {
        this.expr1 = expr1;
        this.expr2 = expr2;
    }

    public int hashOuter(HashContext hashContext) {
        return 31 * expr1.hashOuter(hashContext) + expr2.hashOuter(hashContext);
    }

    public ExprEqualsJoin translateOuter(MapTranslate translator) {
        return new ExprEqualsJoin(expr1.translateOuter(translator), expr2.translateOuter(translator));
    }

    public SourceJoin[] getEnum() {
        throw new RuntimeException("not supported");
    }

    public InnerJoins getInnerJoins() {
        throw new RuntimeException("not supported yet");
    }

    public InnerJoins getJoinFollows(Result<Map<InnerJoin, Where>> upWheres) {
        throw new RuntimeException("not supported yet");
    }

    public InnerExprSet getExprFollows(boolean recursive) {
        return InnerExpr.getExprFollows(this, recursive);
    }

    public Map<Integer, BaseExpr> getJoins() {
        Map<Integer, BaseExpr> result = new HashMap<Integer, BaseExpr>();
        result.put(0, expr1);
        result.put(1, expr2);
        return result;
    }

    public StatKeys<Integer> getStatKeys(KeyStat keyStat) {
        return new StatKeys<Integer>(BaseUtils.toSet(0, 1), expr1.getTypeStat(keyStat).min(expr2.getTypeStat(keyStat)));
    }

    public boolean twins(TwinImmutableInterface o) {
        return expr1.equals(((ExprEqualsJoin)o).expr1) && expr2.equals(((ExprEqualsJoin)o).expr2);
    }
}
