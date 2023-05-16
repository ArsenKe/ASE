package calender_export_ms.repository;

import calender_export_ms.model.Mark;

import java.util.List;

public interface MarkRepository {
    List<Mark> getMarksByEventAndAttendee(String attendeeId, String eventId);
}
