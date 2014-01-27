package lsfusion.server.logics.property;

import lsfusion.base.BaseUtils;
import lsfusion.base.Pair;
import lsfusion.base.col.interfaces.immutable.ImCol;
import lsfusion.base.col.interfaces.immutable.ImMap;
import lsfusion.base.col.interfaces.immutable.ImRevMap;
import lsfusion.base.col.interfaces.mutable.MSet;
import lsfusion.server.classes.LogicalClass;
import lsfusion.server.classes.ValueClass;
import lsfusion.server.data.SQLHandledException;
import lsfusion.server.data.expr.Expr;
import lsfusion.server.data.expr.KeyExpr;
import lsfusion.server.data.expr.ValueExpr;
import lsfusion.server.data.where.Where;
import lsfusion.server.data.where.WhereBuilder;
import lsfusion.server.data.where.classes.ClassWhere;
import lsfusion.server.form.entity.drilldown.ChangedDrillDownFormEntity;
import lsfusion.server.form.entity.drilldown.DrillDownFormEntity;
import lsfusion.server.logics.LogicsModule;
import lsfusion.server.session.Modifier;
import lsfusion.server.session.PropertyChange;
import lsfusion.server.session.PropertyChanges;

import java.sql.SQLException;

import static lsfusion.base.BaseUtils.capitalize;
import static lsfusion.server.logics.ServerResourceBundle.getString;

public class ChangedProperty<T extends PropertyInterface> extends SessionCalcProperty<T> {

    private final IncrementType type;
    private final PrevScope scope;

    public static class Interface extends PropertyInterface<Interface> {
        Interface(int ID) {
            super(ID);
        }
    }

    public ChangedProperty(CalcProperty<T> property, IncrementType type, PrevScope scope) {
        super("CHANGED_" + type + "_" + property.getSID() + "_" + scope.getSID(), property.caption + " (" + type + ")", property);
        this.type = type;
        this.scope = scope;

        property.getOld(scope);// чтобы зарегить old
    }

    public OldProperty<T> getOldProperty() {
        return property.getOld(scope);
    }

    @Override
    protected void fillDepends(MSet<CalcProperty> depends, boolean events) {
        depends.add(property);
        depends.add(property.getOld(scope));
    }

    protected Expr calculateExpr(ImMap<T, ? extends Expr> joinImplement, CalcType calcType, PropertyChanges propChanges, WhereBuilder changedWhere) {
        WhereBuilder changedIncrementWhere = new WhereBuilder();
        property.getIncrementExpr(joinImplement, changedIncrementWhere, calcType, propChanges, type, scope);
        if(changedWhere!=null) changedWhere.add(changedIncrementWhere.toWhere());
        return ValueExpr.get(changedIncrementWhere.toWhere());
    }

    // для resolve'а следствий в частности
    public PropertyChange<T> getFullChange(Modifier modifier) throws SQLException, SQLHandledException {
        assert scope.onlyDB(); // так как event Apply

        ImRevMap<T, KeyExpr> mapKeys = getMapKeys();
        Expr expr = property.getExpr(mapKeys, modifier);
        Where where;
        switch(type) {
            case SET:
                where = expr.getWhere();
                break;
            case DROP:
                where = expr.getWhere().not().and(property.getClassProperty().mapExpr(mapKeys, modifier).getWhere());
                break;
            default:
                throw new RuntimeException();
        }
        return new PropertyChange<T>(mapKeys, ValueExpr.get(where), Where.TRUE);
    }

    @Override
    protected ImCol<Pair<Property<?>, LinkType>> calculateLinks() {
        if(property instanceof IsClassProperty) {
            return getActionChangeProps(); // только у Data и IsClassProperty
        } else
            return super.calculateLinks();
    }

    @Override
    public ClassWhere<Object> getClassValueWhere(ClassType type, PrevClasses prevSameClasses) {
        return new ClassWhere<Object>("value", LogicalClass.instance).and(BaseUtils.<ClassWhere<Object>>immutableCast(property.getClassWhere(ClassType.ASSERTFULL, prevSameClasses))); // assert что full
    }

    public ImMap<T, ValueClass> getInterfaceCommonClasses(ValueClass commonValue, PrevClasses prevSameClasses) {
        return property.getInterfaceCommonClasses(null, prevSameClasses);
    }

    @Override
    public boolean supportsDrillDown() {
        return property != null;
    }

    @Override
    public DrillDownFormEntity createDrillDownForm(LogicsModule LM) {
        return new ChangedDrillDownFormEntity(
                "drillDown" + capitalize(getSID()) + "Form",
                getString("logics.property.drilldown.form.data"), this, LM
        );
    }
}
