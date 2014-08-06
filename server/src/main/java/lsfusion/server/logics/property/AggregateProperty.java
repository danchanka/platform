package lsfusion.server.logics.property;

import lsfusion.base.Pair;
import lsfusion.base.col.MapFact;
import lsfusion.base.col.interfaces.immutable.ImMap;
import lsfusion.base.col.interfaces.immutable.ImOrderMap;
import lsfusion.base.col.interfaces.immutable.ImOrderSet;
import lsfusion.base.col.interfaces.immutable.ImRevMap;
import lsfusion.base.col.interfaces.mutable.mapvalue.GetIndexValue;
import lsfusion.interop.Compare;
import lsfusion.server.Message;
import lsfusion.server.ThisMessage;
import lsfusion.server.caches.IdentityLazy;
import lsfusion.server.caches.IdentityStartLazy;
import lsfusion.server.classes.BaseClass;
import lsfusion.server.data.*;
import lsfusion.server.data.expr.Expr;
import lsfusion.server.data.expr.KeyExpr;
import lsfusion.server.data.expr.NotNullKeyExpr;
import lsfusion.server.data.expr.query.Stat;
import lsfusion.server.data.query.Query;
import lsfusion.server.data.query.QueryBuilder;
import lsfusion.server.data.query.stat.StatKeys;
import lsfusion.server.data.where.Where;
import lsfusion.server.data.where.classes.ClassWhere;
import lsfusion.server.logics.DBManager;
import lsfusion.server.logics.property.infer.InferType;
import lsfusion.server.session.DataSession;
import lsfusion.server.session.PropertyChanges;

import java.sql.SQLException;

public abstract class AggregateProperty<T extends PropertyInterface> extends CalcProperty<T> {

    public boolean isStored() {
        assert (field!=null) == (mapTable!=null);
        return mapTable!=null && !DataSession.reCalculateAggr; // для тестирования 2-е условие
    }

    protected AggregateProperty(String caption,ImOrderSet<T> interfaces) {
        super(caption,interfaces);
    }

    // проверяет агрегацию для отладки
    @ThisMessage
    @Message("logics.info.checking.aggregated.property")
    public String checkAggregation(SQLSession session, BaseClass baseClass) throws SQLException, SQLHandledException {
        session.pushVolatileStats(null, OperationOwner.unknown);
        
        try {
    
            String message = "";
    
            ImOrderMap<ImMap<T, Object>, ImMap<String, Object>> checkResult = getRecalculateQuery(true, baseClass).execute(session, OperationOwner.unknown);
            if(checkResult.size() > 0) {
                message += "---- Checking Aggregations : " + this + "-----" + '\n';
                for(int i=0,size=checkResult.size();i<size;i++)
                    message += "Keys : " + checkResult.getKey(i) + " : " + checkResult.getValue(i) + '\n';
            }

            return message;
        } finally {
            session.popVolatileStats(null, OperationOwner.unknown);
        }
    }

    public Expr calculateExpr(ImMap<T, ? extends Expr> joinImplement) {
        return calculateExpr(joinImplement, CalcType.EXPR, PropertyChanges.EMPTY, null);
    }

    public Expr calculateStatExpr(ImMap<T, ? extends Expr> joinImplement) { // вызывается до stored, поэтому чтобы не было проблем с кэшами, сделано так
        return calculateExpr(joinImplement, CalcType.STAT, PropertyChanges.EMPTY, null);
    }

    private Query<T, String> getRecalculateQuery(boolean outDB, BaseClass baseClass) {
        assert isStored();
        
        QueryBuilder<T, String> query = new QueryBuilder<T, String>(this);

        Expr dbExpr = getInconsistentExpr(query.getMapExprs(), baseClass);
        Expr calculateExpr = calculateExpr(query.getMapExprs());
        if(outDB)
            query.addProperty("dbvalue", dbExpr);
        query.addProperty("calcvalue", calculateExpr);
        query.and(dbExpr.getWhere().or(calculateExpr.getWhere()));
        if(outDB || !DBManager.RECALC_REUPDATE)
            query.and(dbExpr.compare(calculateExpr, Compare.EQUALS).not().and(dbExpr.getWhere().or(calculateExpr.getWhere())));
        return query.getQuery();
    }

    public static AggregateProperty recalculate = null;

    @Message("logics.info.recalculation.of.aggregated.property")
    @ThisMessage
    public void recalculateAggregation(SQLSession session, BaseClass baseClass) throws SQLException, SQLHandledException {
        session.pushVolatileStats(null, OperationOwner.unknown);
        try {
            session.modifyRecords(new ModifyQuery(mapTable.table, getRecalculateQuery(false, baseClass).map(
                    mapTable.mapKeys.reverse(), MapFact.singletonRev(field, "calcvalue")), OperationOwner.unknown, TableOwner.global));
        } finally {
            session.popVolatileStats(null, OperationOwner.unknown);
        }
    }
    
    @IdentityStartLazy
    private Pair<ImRevMap<T,NotNullKeyExpr>, Expr> calculateQueryExpr(CalcType calcType) {
        ImRevMap<T,NotNullKeyExpr> mapExprs = getMapNotNullKeys();
        return new Pair<ImRevMap<T, NotNullKeyExpr>, Expr>(mapExprs, calculateExpr(mapExprs, calcType));
    }
    
    @IdentityStartLazy
    protected ClassWhere<Object> calcClassValueWhere(CalcClassType calcType) {
        Pair<ImRevMap<T, NotNullKeyExpr>, Expr> query = calculateQueryExpr(calcType == CalcClassType.PREVSAME && noOld() ? CalcClassType.PREVBASE : calcType); // оптимизация
        ClassWhere<Object> result = Query.getClassWhere(Where.TRUE, query.first, MapFact.singleton((Object) "value", query.second)); 
        if(calcType == CalcClassType.PREVSAME) // для того чтобы докинуть orAny, собсно только из-за этого infer необходим в любом случае
            result = result.and(inferClassValueWhere(InferType.PREVSAME));
        return result;
    }

    @Override
    @IdentityLazy
    protected boolean calcNotNull(CalcInfoType calcType) {
        Pair<ImRevMap<T, NotNullKeyExpr>, Expr> query = calculateQueryExpr(calcType); // оптимизация
        return query.second.getWhere().means(Expr.getWhere(query.first));
    }

    @Override
    @IdentityLazy
    protected boolean calcEmpty(CalcInfoType calcType) {
        return calculateQueryExpr(calcType).second.getWhere().isFalse();
    }

    private ImRevMap<T, NotNullKeyExpr> getMapNotNullKeys() {
        return interfaces.mapRevValues(new GetIndexValue<NotNullKeyExpr, T>() {
            public NotNullKeyExpr getMapValue(int i, T value) {
                return new NotNullKeyExpr(i);
            }});
    }

    @IdentityStartLazy
    public StatKeys<T> getInterfaceClassStats() {
        ImRevMap<T,KeyExpr> mapKeys = getMapKeys();
        return calculateStatExpr(mapKeys).getWhere().getStatKeys(mapKeys.valuesSet()).mapBack(mapKeys);
    }

    public boolean hasAlotKeys() {
        return Stat.ALOT.lessEquals(getInterfaceClassStats().rows);
    }
}
