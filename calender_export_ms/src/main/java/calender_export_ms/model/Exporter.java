package calender_export_ms.model;

public class Exporter {
    private Format format;

    public Exporter(Format format) {
        this.format = format;
    }

    public Format getFormat() {
        return format;
    }

   /* public Format export(Event[] events, Format format) {
        // Logic to export the events in the desired format
        // Return the resulting Format object
        return format;
    }

    */

    // Other methods and logic specific to exporting events in the desired format
}