package calender_export_ms.repository;

import calender_export_ms.model.Event;

import java.util.List;

public interface EventRepository {
    List<Event> getEventsByAttendanceStatus(String attendeeId, String status);


    List<Event> getEventsByTagAndAttendanceStatus(String eventId, String attendeeId);
}
