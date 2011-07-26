package platform.server.data.sql;

import com.sun.corba.se.spi.activation.Server;
import org.apache.log4j.Logger;
import platform.base.BaseUtils;
import platform.server.data.type.Type;
import platform.server.logics.ServerResourceBundle;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Types;


public class PostgreDataAdapter extends DataAdapter {

    // Для debuga конструктор
    public PostgreDataAdapter() {
    }

    public PostgreDataAdapter(String dataBase, String server, String userID, String password) throws ClassNotFoundException, SQLException, InstantiationException, IllegalAccessException {
        super(dataBase, server, userID, password);
    }

    @Override
    public String getLongType() {
        return "int8";
    }
    @Override
    public int getLongSQL() {
        return Types.BIGINT;
    }

    public boolean allowViews() {
        return true;
    }

    public String getUpdate(String tableString, String setString, String fromString, String whereString) {
        return tableString + setString + " FROM " + fromString + whereString;
    }

    public String getClassName() {
        return "org.postgresql.Driver";
    }

    public void ensureDB() throws ClassNotFoundException, SQLException, InstantiationException, IllegalAccessException {

        Connection connect = DriverManager.getConnection("jdbc:postgresql://" + server + "/postgres?user=" + userID + "&password=" + password);
/*        try {
            connect.createStatement().execute("DROP DATABASE "+ dataBase);
        } catch (SQLException e) {
        }*/
        try {
            // обязательно нужно создавать на основе template0, так как иначе у template1 может быть другая кодировка и ошибка
            connect.createStatement().execute("CREATE DATABASE " + dataBase + " WITH TEMPLATE template0 ENCODING='UTF8' ");
        } catch (SQLException e) {
            logger.info(ServerResourceBundle.getString("data.sql.error.creating.database")+" " + e);
        }
        connect.close();

        connect = startConnection();
        connect.createStatement().execute("CREATE OR REPLACE FUNCTION getAnyNotNull(ANYELEMENT, ANYELEMENT) RETURNS ANYELEMENT AS \n" +
                "$$\n" +
                "    SELECT CASE WHEN $1 = NULL THEN $2 ELSE $1 END;\n" +
                "$$ LANGUAGE SQL STRICT;\n" +
                "DROP AGGREGATE IF EXISTS ANYVALUE (anyelement) CASCADE;\n" +
                "CREATE AGGREGATE ANYVALUE (anyelement) (\n" +
                "    sfunc = getAnyNotNull,\n" +
                "    stype = anyelement\n" +
                ");");
        connect.close();
    }

    public Connection startConnection() throws ClassNotFoundException, SQLException, InstantiationException, IllegalAccessException {
        return DriverManager.getConnection("jdbc:postgresql://" + server + "/" + dataBase + "?user=" + userID + "&password=" + password);
    }

    public String getCommandEnd() {
        return ";";
    }

    public String getClustered() {
        return "";
    }

    // у SQL сервера что-то гдючит ISNULL (а значит скорее всего и COALESCE) когда в подзапросе просто число указывается
    public boolean isNullSafe() {
        return false;
    }

    public String isNULL(String expr1, String expr2, boolean notSafe) {
//        return "(CASE WHEN "+Expr1+" IS NULL THEN "+Expr2+" ELSE "+Expr1+" END)";
        return "COALESCE(" + expr1 + "," + expr2 + ")";
    }

    public String getSelect(String from, String exprs, String where, String orderBy, String groupBy, String top) {
        return "SELECT " + exprs + " FROM " + from + BaseUtils.clause("WHERE", where) + BaseUtils.clause("GROUP BY", groupBy) + BaseUtils.clause("ORDER BY", orderBy) + BaseUtils.clause("LIMIT", top);
    }

    public String getUnionOrder(String union, String orderBy, String top) {
        return union + BaseUtils.clause("ORDER BY", orderBy) + BaseUtils.clause("LIMIT", top);
    }

    public String getByteArrayType() {
        return "bytea";
    }
    @Override
    public int getByteArraySQL() {
        return Types.VARBINARY;
    }

    @Override
    public String getOrderDirection(boolean descending) {
        return descending ? "DESC NULLS LAST" : "ASC NULLS FIRST";
    }

    @Override
    public boolean isBinaryString() {
        return true;
    }

    @Override
    public String getBinaryType(int length) {
//        return "bit(" + length * 8 + ")";
        return getStringType(length);
    }
    @Override
    public int getBinarySQL() {
        return getStringSQL();
    }

    @Override
    public String getBinaryConcatenate() {
        return "||";
    }

    @Override
    public boolean useFJ() {
        return false;
    }

    @Override
    public boolean orderUnion() {
        return true;
    }

    @Override
    public boolean nullUnionTrouble() {
        return true;
    }

    @Override
    public boolean inlineTrouble() {
        return true;
    }

    @Override
    public String typeConvertSuffix(Type oldType, Type newType, String name) {
        return "USING " + name + "::" + newType.getDB(this);
    }

    @Override
    public String getInsensitiveLike() {
        return "ILIKE";
    }
}
