package report_analytics_ms.model;
import org.springframework.stereotype.Component;

@Component
public class ReportFactory {
    public Report buildReport() {
        // Logic to construct and return a Report object
        return new Report();
    }
}