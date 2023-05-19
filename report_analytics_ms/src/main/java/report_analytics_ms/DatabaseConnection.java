package report_analytics_ms;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;

public class DatabaseConnection<SQL_Query> {


    List<Object> getInfoFromDatabase(SQL_Query query) {

        return null;
    }

    public void connectToDatabase() throws SQLException {
      //  String url = "jdbc:mysql://localhost:3306/calender_export_ms";
        String user = "root";
        String password = "pass";

        Connection conn = DriverManager.getConnection(url, user, password);

        conn.close();
    }

}

