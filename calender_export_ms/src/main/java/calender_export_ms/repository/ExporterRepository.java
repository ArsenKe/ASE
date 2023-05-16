package calender_export_ms.repository;

import calender_export_ms.model.Event;
import calender_export_ms.model.Exporter;
import calender_export_ms.model.Format;
import lombok.Getter;

import java.util.HashMap;
import java.util.Map;

@Getter
public class ExporterRepository {
    private Map<Format, Exporter> exporters;

    public ExporterRepository() {
        exporters = new HashMap<>();
    }

    public void addExporter(Format format, Exporter exporter) {
        exporters.put(format, exporter);
    }

    public Exporter getExporter(Format format) {
        return exporters.get(format);
    }

    public Format exportEvent(Event[] events, Format format) {
        Exporter exporter = exporters.get(Format.valueOf(String.valueOf(format)));
        if (exporter != null) {
            return exporter.export(events, format);
        } else {
            throw new IllegalArgumentException("Unsupported export format: " + format);
        }
    }




}
