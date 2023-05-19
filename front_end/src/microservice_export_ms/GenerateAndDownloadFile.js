/*// calendarUtils.js

export const generateAndDownloadFile = (events, format) => {
    // Generate the calendar file based on the selected format and events
    const calendarData = generateCalendarData(events, format);
  
    // Create a Blob with the calendar data
    const blob = new Blob([calendarData], { type: "text/calendar;charset=utf-8" });
  
    // Generate a download URL for the Blob
    const downloadUrl = URL.createObjectURL(blob);
  
    // Create a link element and set its attributes for file download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `calendar.${format.toLowerCase()}`;
  
    // Programmatically click the link to initiate the file download
    link.click();
  
    // Clean up the download URL
    URL.revokeObjectURL(downloadUrl);
  };
  
  */