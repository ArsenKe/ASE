import React, { useEffect, useState } from "react";
import { apiCall } from "../utils/utils";
import { ENDPOINTS } from "../utils/statics";


function CalendarExportPage() {
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [exportFormat, setExportFormat] = useState("");
  const [exportedFile, setExportedFile] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await apiCall(ENDPOINTS.events, "GET");
      setEvents(response.events);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  const handleEventSelection = (event) => {
    if (selectedEvents.includes(event)) {
      setSelectedEvents(selectedEvents.filter((e) => e !== event));
    } else {
      setSelectedEvents([...selectedEvents, event]);
    }
  };

  const handleExportFormatSelection = (format) => {
    setExportFormat(format);
  };

  const handleExport = async () => {
    if (selectedEvents.length === 0) {
      alert("Please select at least one event to export.");
      return;
    }

    if (exportFormat === "") {
      alert("Please select an export format.");
      return;
    }

    try {
      const response = await apiCall(ENDPOINTS.export, "POST", {
        events: selectedEvents,
        format: exportFormat,
      });

      setExportedFile(response.file);
    } catch (error) {
      console.error("Failed to export events:", error);
    }
  };

  const handleDownload = () => {
    if (exportedFile) {
      // Use browser APIs or libraries to download the file
      const link = document.createElement("a");
      link.href = exportedFile;
      link.download = `events.${exportFormat}`;
      link.click();
    }
  };

  return (
    <div>
      <h2>Calendar Export</h2>

      {events.length === 0 && <p>No events found.</p>}

      {events.length > 0 && (
        <div>
          <h3>Select events to export:</h3>
          {events.map((event) => (
            <div key={event.id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedEvents.includes(event)}
                  onChange={() => handleEventSelection(event)}
                />
                {event.event_name}
              </label>
            </div>
          ))}
        </div>
      )}

      {selectedEvents.length > 0 && (
        <div>
          <h3>Select export format:</h3>
          <select
            value={exportFormat}
            onChange={(e) => handleExportFormatSelection(e.target.value)}
          >
            <option value="">-- Select Format --</option>
            <option value="json">JSON</option>
            <option value="xml">XML</option>
            <option value="ical">iCal</option>
            </select>

          <button onClick={handleExport}>Export</button>
        </div>
    )}

      {exportedFile && (
        <div>
          <h3>Exported file:</h3>
            <p>{exportedFile}</p>
              <button onClick={handleDownload}>Download</button>
        </div>
    )}
    </div>
  );
}

export default CalendarExportPage;

