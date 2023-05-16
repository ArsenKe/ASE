package calender_export_ms.service;

//responsible for managing the ExporterRepository, TagRepository, MarkRepository, EventRepository, and AttendanceRepository
// instances and calling the appropriate methods to generate the requested calendar exports

import calender_export_ms.model.*;
import calender_export_ms.repository.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class CalendarExportService {

    private ExporterRepository exporterRepository;
    private TagRepository tagRepository;
    private MarkRepository markRepository;
    private EventRepository eventRepository;
    private AttendanceRepository attendanceRepository;

    public Format exportTaggedEvents(Attendee attendee, Tag tag, String format) {
        Event[] events = eventRepository.getEventsByTagAndAttendance(attendee.getId(), tag.getId());
        Exporter exporter = exporterRepository.getExporter(Format.valueOf(format.toUpperCase()));
        return exporter.getFormat();
        // Other logic to export events in the desired format
    }

    public Format exportMarkedEvents(Attendee attendee, String format) {
        Event[] events = eventRepository.getEventsByMarkAndAttendee(attendee.getId(), attendee.getEventId());
        Exporter exporter = exporterRepository.getExporter(Format.valueOf(format.toUpperCase()));
        return exporter.getFormat();
        // Other logic to export events in the desired format
    }

    public Format exportConfirmedAttendanceEvents(Attendee attendee, String format) {
        Event[] events = eventRepository.getEventsByAttendanceStatus(attendee.getId(), attendee.getEventId(), AttendanceStatus.CONFIRMED);
        Exporter exporter = exporterRepository.getExporter(Format.valueOf(format.toUpperCase()));
        return exporter.getFormat();
        // Other logic to export events in the desired format
    }

    public Format exportEvent(Event[] events, String format) {
        Exporter exporter = exporterRepository.getExporter(Format.valueOf(format.toUpperCase()));
        return exporter.getFormat();
        // Other logic to export events in the desired format
    }
}