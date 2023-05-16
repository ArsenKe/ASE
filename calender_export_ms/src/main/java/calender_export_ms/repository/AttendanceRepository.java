package calender_export_ms.repository;

import calender_export_ms.model.Attendee;

import java.util.List;

public interface AttendanceRepository {
    List<Attendee> getAttendanceByEventAndAttendee(String attendeeId, String eventId);
}
