package report_analytics_ms.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import report_analytics_ms.model.Report;
import report_analytics_ms.service.AnalyticAndReportingService;

@RestController
@RequestMapping("/api/reports")
public class AnalyticsAndReportingRequestController {
    private final AnalyticAndReportingService analyticAndReportingService;

    public AnalyticsAndReportingRequestController(AnalyticAndReportingService analyticAndReportingService) {
        this.analyticAndReportingService = analyticAndReportingService;
    }

    @GetMapping("/eventFeedback")
    public ResponseEntity<Report> generateEventFeedbackReport() {
        Report report = analyticAndReportingService.generateEventFeedbackReport();
        return ResponseEntity.ok(report);
    }

    @GetMapping("/eventAttendance")
    public ResponseEntity<Report> generateEventAttendanceReport() {
        Report report = analyticAndReportingService.generateEventAttendanceReport();
        return ResponseEntity.ok(report);
    }

    @GetMapping("/bookmarks")
    public ResponseEntity<Report> generateBookmarkReport() {
        Report report = analyticAndReportingService.generateBookmarkReport();
        return ResponseEntity.ok(report);
    }

    @GetMapping("/analyticsView")
    public ResponseEntity<Report> generateAnalyticsView() {
        Report report = analyticAndReportingService.generateAnalyticsView();
        return ResponseEntity.ok(report);
    }
}
