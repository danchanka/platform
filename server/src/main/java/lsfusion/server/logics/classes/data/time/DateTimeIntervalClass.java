package lsfusion.server.logics.classes.data.time;

import lsfusion.interop.classes.DataType;
import lsfusion.server.data.sql.syntax.SQLSyntax;
import lsfusion.server.data.type.exec.TypeEnvironment;
import lsfusion.server.logics.classes.data.DataClass;
import lsfusion.server.logics.classes.data.ParseException;
import lsfusion.server.logics.classes.data.integral.NumericClass;
import lsfusion.server.physics.dev.i18n.LocalizedString;

import java.math.BigDecimal;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.time.Instant;
import java.util.Date;

public class DateTimeIntervalClass extends DataClass<BigDecimal> {

    public final static DateTimeIntervalClass instance = new DateTimeIntervalClass();

    static {
        DataClass.storeClass(instance);
    }

    protected DateTimeIntervalClass() {
        super(LocalizedString.create("{classes.date.time.interval}"));
    }

    @Override
    protected void writeParam(PreparedStatement statement, int num, Object value, SQLSyntax syntax) throws SQLException {
        statement.setBigDecimal(num, (BigDecimal) value);
    }

    @Override
    protected int getBaseDotNetSize() {
        return 0;
    }

    @Override
    public String getDB(SQLSyntax syntax, TypeEnvironment typeEnv) {
        return syntax.getIntervalType();
    }

    @Override
    public String getDotNetType(SQLSyntax syntax, TypeEnvironment typeEnv) {
        return "SqlDecimal";
    }

    @Override
    public String getDotNetRead(String reader) {
        return reader + ".ReadDecimal()";
    }

    @Override
    public String getDotNetWrite(String writer, String value) {
        return writer + ".Write(" + value + ");";
    }

    @Override
    public int getSQL(SQLSyntax syntax) {
        return syntax.getIntervalSQL();
    }

    @Override
    public boolean isSafeString(Object value) {
        return false;
    }

    @Override
    public BigDecimal parseString(String s) throws ParseException {
        throw new ParseException("Error parsing interval");
    }

    @Override
    public String formatString(BigDecimal value) {
        String object = String.valueOf(value);
        int indexOfDecimal = object.indexOf(".");
        return Date.from(Instant.ofEpochSecond(Long.parseLong(object.substring(0, indexOfDecimal))))
                + " - " + Date.from(Instant.ofEpochSecond(Long.parseLong(object.substring(indexOfDecimal + 1))));
    }

    @Override
    public String getSID() {
        return "INTERVAL";
    }

    @Override
    public BigDecimal read(Object value) {
        if (value == null)
            return null;
        return (BigDecimal) value;
    }

    @Override
    public DataClass getCompatible(DataClass compClass, boolean or) {
        return compClass instanceof DateTimeIntervalClass || compClass instanceof NumericClass ? this : null;
    }

    @Override
    public BigDecimal getDefaultValue() {
        return null;
    }

    @Override
    public byte getTypeID() {
        return DataType.INTERVAL;
    }

    @Override
    protected Class getReportJavaClass() {
        return BigDecimal.class;
    }

    @Override
    public String getString(Object value, SQLSyntax syntax) {
        return "interval_" + value;
    }
}
