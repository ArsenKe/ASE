package calender_export_ms.service;

import calender_export_ms.model.*;
import calender_export_ms.repository.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
@Getter
@Setter
public class CalendarExportService {

    private ExporterRepository exporterRepository;
    private TagRepository tagRepository;
    private MarkRepository markRepository;
    private EventRepository eventRepository;
    private AttendanceRepository attendanceRepository;

    public Format exportTaggedEvents(String attendeeId, String eventId, String format) {
        List<Event> events = eventRepository.getEventsByTagAndAttendance(attendeeId, eventId);
        Exporter exporter = exporterRepository.getExporter(Format.valueOf(format.toUpperCase()));
        return exporter.export(events, Format.valueOf(format));
    }

    public Format exportMarkedEvents(String attendeeId, String eventId, String format) {
        List<Event> events = eventRepository.getEventsByMarkAndAttendee(attendeeId, eventId);
        Exporter exporter = exporterRepository.getExporter(Format.valueOf(format.toUpperCase()));
        return exporter.export(events, Format.valueOf(format));
    }

    public Format exportConfirmedAttendanceEvents(String attendeeId, String eventId, String format) {
        List<Event> events = eventRepository.getEventsByAttendanceStatus(attendeeId, eventId, AttendanceStatus.CONFIRMED);
        Exporter exporter = exporterRepository.getExporter(Format.valueOf(format.toUpperCase()));
        return exporter.export(events, Format.valueOf(format));
    }

}