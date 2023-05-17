package calender_export_ms.controller;


import calender_export_ms.model.*;
import calender_export_ms.repository.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Controller;

import java.util.List;

// class responsible for receiving requests and handling business logic
@AllArgsConstructor
@NoArgsConstructor
@Controller
public class CalendarExportController {

    private ExporterRepository exporterRepository;
    private TagRepository tagRepository;
    private MarkRepository markRepository;
    private EventRepository eventRepository;
    private AttendanceRepository attendanceRepository;


    public Format exportTaggedEvents(String attendeeId, String eventId, Format format) {
        // Retrieve events, attendance, and tags from respective repositories using API gateway
        List<Event> events = eventRepository.getEventsByTagAndAttendance(attendeeId, eventId);
        List<Attendee> attendance = attendanceRepository.getAttendanceByEventAndAttendee(attendeeId, eventId);
        List<Tag> tags = tagRepository.getTagsByEvent(eventId);

        // Export events using the appropriate exporter retrieved from the exporterRepository
        Exporter exporter = exporterRepository.getExporter(format);
        return exporter.export(events, format);
    }

    public Format exportMarkedEvents(String attendeeId, String eventId, Format format) {
        // Retrieve events and marks from respective repositories using API gateway
        List<Event> events = List.of(eventRepository.getEventsByMarkAndAttendee(attendeeId, eventId));
        List<Mark> marks = markRepository.getMarksByEventAndAttendee(attendeeId, eventId);

        // Export events using the appropriate exporter retrieved from the exporterRepository
        Exporter exporter = exporterRepository.getExporter(format);
        return exporter.export(events, format);
    }

    public Format exportConfirmedAttendanceEvents(String attendeeId, String eventId, Format format) {
        // Retrieve events and attendance from respective repositories using API gateway
        List<Event> events = eventRepository.getEventsByAttendanceStatus(attendeeId, eventId, AttendanceStatus.CONFIRMED);
        List<Attendee> attendance = attendanceRepository.getAttendanceByEventAndAttendee(attendeeId, eventId);

        // Export events using the appropriate exporter retrieved from the exporterRepository
        Exporter exporter = exporterRepository.getExporter(format);
        return exporter.export(events, format);
    }
}
