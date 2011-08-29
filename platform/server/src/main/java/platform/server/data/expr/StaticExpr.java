package platform.server.data.expr;

import platform.server.classes.ConcreteClass;
import platform.server.data.expr.query.Stat;
import platform.server.data.query.stat.InnerBaseJoin;
import platform.server.data.query.stat.KeyStat;
import platform.server.data.query.stat.ValueJoin;
import platform.server.data.where.MapWhere;
import platform.server.data.query.ExprEnumerator;
import platform.server.data.query.JoinData;
import platform.server.data.type.Type;
import platform.server.data.where.Where;

public abstract class StaticExpr<C extends ConcreteClass> extends StaticClassExpr {

    public final C objectClass;

    public StaticExpr(C objectClass) {
        this.objectClass = objectClass;
    }

    public ConcreteClass getStaticClass() {
        return objectClass;
    }

    public Type getType(KeyType keyType) {
        return objectClass.getType();
    }
    public Stat getTypeStat(KeyStat keyStat) {
        return objectClass.getTypeStat();
    }

    public void fillAndJoinWheres(MapWhere<JoinData> joins, Where andWhere) {
    }

    // возвращает Where без следствий
    public Where calculateWhere() {
        return Where.TRUE;
    }

    public long calculateComplexity() {
        return 1;
    }

    public void enumDepends(ExprEnumerator enumerator) {
    }

    public Stat getStatValue(KeyStat keyStat) {
        return Stat.ONE;
    }
    public InnerBaseJoin<?> getBaseJoin() {
        return ValueJoin.instance;
    }
}
