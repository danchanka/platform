package platform.server.data;

import platform.server.classes.BaseClass;
import platform.server.data.expr.query.DistinctKeys;
import platform.server.data.expr.query.Stat;
import platform.server.data.query.stat.StatKeys;

import java.io.DataInputStream;
import java.io.IOException;
import java.util.Map;

// предыдущая таблица в базе
public class SerializedTable extends Table {

    public SerializedTable(DataInputStream inStream, BaseClass baseClass) throws IOException {
        super(inStream, baseClass);
    }

    private final static int prevStats = 100000;
    public static StatKeys<KeyField> getStatKeys(Table table) {
        return getStatKeys(table, prevStats);
    }
    public static Map<PropertyField, Stat> getStatProps(Table table) {
        return getStatProps(table, prevStats);
    }

    public StatKeys<KeyField> getStatKeys() {
        return getStatKeys(this);
    }

    public Map<PropertyField, Stat> getStatProps() {
        return getStatProps(this);
    }
}
