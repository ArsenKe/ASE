package report_analytics_ms.model;

import org.springframework.stereotype.Component;
import report_analytics_ms.repository.AttendanceRepository;
import report_analytics_ms.repository.EventRepository;
import report_analytics_ms.repository.MarkRepository;
import report_analytics_ms.repository.TagRepository;

@Component
public class Analytics {
    private final AttendanceRepository attendanceRepository;
    private final EventRepository eventRepository;
    private final MarkRepository markRepository;
    private final TagRepository tagRepository;

    public Analytics(AttendanceRepository attendanceRepository, EventRepository eventRepository,
                     MarkRepository markRepository, TagRepository tagRepository) {
        this.attendanceRepository = attendanceRepository;
        this.eventRepository = eventRepository;
        this.markRepository = markRepository;
        this.tagRepository = tagRepository;
    }

    public float getAverageRatingPerEvent(List<Event> event) {
        // Retrieve and calculate average rating per event logic
        return 0.0f;
    }

    public int getBookmarksNumberPerEvent(Event event) {
        // Retrieve and calculate number of bookmarks per event logic
        return 0;
    }

    public float getBookmarksNumberPerAttendee(Event event) {
        // Retrieve and calculate number of bookmarks per attendee for a specific event logic
        return 0.0f;
    }

    public int getNumberOfAttendeesPerEvent(Event event) {
        // Retrieve and calculate number of attendees per event logic
        return 0;
    }

    public int getNumberOfEventAttendedPerAttendee(Event event) {
        // Retrieve and calculate number of events attended per attendee logic
        return 0;
    }
}
