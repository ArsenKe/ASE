package report_analytics_ms.service;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import report_analytics_ms.model.Analytics;
import report_analytics_ms.model.Event;
import report_analytics_ms.model.Report;
import report_analytics_ms.repository.AttendanceRepository;
import report_analytics_ms.repository.EventRepository;
import report_analytics_ms.repository.MarkRepository;
import report_analytics_ms.repository.TagRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class AnalyticAndReportingService {
    private final Analytics analytics;
    private final AttendanceRepository attendanceRepository;
    private final EventRepository eventRepository;
    private final MarkRepository markRepository;
    private final TagRepository tagRepository;

    public Report generateEventFeedbackReport() {
        // Retrieve events from the event repository
        List<Event> events = eventRepository.findAll();

        // Perform analytics on the events using the analytics class
        float averageRating = analytics.getAverageRatingPerEvent(events);

        // Generate the report based on the analytics
        Report report = new Report();
        report.setContent("Average Rating: " + averageRating);

        return report;
    }

    public Report generateEventAttendanceReport() {
        // Generate event attendance report logic
        return new Report("Event Attendance Report");
    }

    public Report generateBookmarkReport() {
        // Generate bookmark report logic
        return new Report("Bookmark Report");
    }

    public Report generateAnalyticsView() {
        // Generate analytics view report logic
        return new Report("Analytics View Report");
    }
}

