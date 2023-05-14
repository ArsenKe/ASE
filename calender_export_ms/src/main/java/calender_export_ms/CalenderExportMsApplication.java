package calender_export_ms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@SpringBootApplication
public class CalenderExportMsApplication {

	public static void main(String[] args) throws SQLException {
		String url = "jdbc:mysql://localhost:3306/calender_export_ms";
		String user = "root";
		String password = "pass";

		Connection conn = DriverManager.getConnection(url, user, password);


		conn.close();
	}
}