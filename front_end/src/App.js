import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound404Page from "./not_found404/NotFound404Page";
import EventsPage from "./event_ms/EventsPage";
import EventsDetailsPage from "./event_ms/EventsDetailsPage";
import BoookmarkEventsPage from "./bookmark_tagging_ms/BoookmarkEventsPage";
import CalendarExportPage from "./calendar_export_ms/CalendarExportPage"; // Import the CalendarExportPage component

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Nav />
        <div className="container">
          <Routes>
            <Route
              path="/events"
              element={
                <ProtectedRoute redirectPath="/" isAllowed={true}>
                  <EventsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/events/:id"
              element={
                <ProtectedRoute redirectPath="/" isAllowed={true}>
                  <EventsDetailsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute redirectPath="/" isAllowed={true}>
                  <EventsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bookmarks"
              element={
                <ProtectedRoute redirectPath="/" isAllowed={true}>
                  <BoookmarkEventsPage />
                </ProtectedRoute>
              }
            />
             <Route
              path="/export-calendar"
              element={ // Add a new route for the CalendarExportPage component
                <ProtectedRoute redirectPath="/" isAllowed={true}>
                  <CalendarExportPage />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound404Page />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
