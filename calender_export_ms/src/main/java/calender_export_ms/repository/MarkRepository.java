package calender_export_ms.repository;

import calender_export_ms.model.Mark;

import java.util.List;

public interface MarkRepository {
   // Mark getMarkById(String markId);

    List<Mark> getMarksByEventAndAttendee(String attendeeId, String eventId);
}
