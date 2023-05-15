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

    ExporterRepository exporterRepository;
    TagRepository tagRepository;
    MarkRepository markRepository;
    EventRepository eventRepository;
    AttendanceRepository attendanceRepository;

    public Format exportTaggedEvents(String attendeeId, String eventId, String format) {
        List<Event> events = eventRepository.getEventsByTagAndAttendanceStatus(eventId, attendeeId);
        CalendarExporter exporter = exporterRepository.getExporter(format.toUpperCase());
        return exporter.export(events, format);
    }

    public Format exportMarkedEvents(String attendeeId, String eventId, String format) {
        List<Event> events = eventRepository.getEventsByAttendeeAndMark(attendeeId, eventId);
        CalendarExporter exporter = exporterRepository.getExporter(format.toUpperCase());
        return exporter.export(events, format);
    }

    public Format exportConfirmedAttendanceEvents(String attendeeId, String eventId, String format) {
        List<Event> events = eventRepository.getEventsByAttendeeAndConfirmedAttendance(attendeeId, eventId);
        CalendarExporter exporter = exporterRepository.getExporter(format.toUpperCase());
        return exporter.export(events, format);
    }

    public Format exportEvent(List<Event> events, String format) {
        CalendarExporter exporter = exporterRepository.getExporter(format.toUpperCase());
        return exporter.export(events, format);
    }


}
