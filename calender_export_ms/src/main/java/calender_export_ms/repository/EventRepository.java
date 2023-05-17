package calender_export_ms.repository;

import calender_export_ms.model.Event;

import java.util.List;

public interface EventRepository {

    Event getEventById(String eventId);


    List<Event> getEventsByAttendanceStatus(String attendeeId, String status);


    List<Event> getEventsByTagAndAttendanceStatus(String eventId, String attendeeId);

    List<Event>  getEventsByMarkAndAttendee(Object id, Object eventId);

    List<Event> getEventsByTagAndAttendance(String attendeeId, String eventId);
}
