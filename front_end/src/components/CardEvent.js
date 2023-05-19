import { Link } from "react-router-dom";
import TimeAgo from "./TimeAgo";
import SelectSearchComponent from "./SelectSearchComponent";
import { useEffect, useState } from "react";
import { ENDPOINTS } from "../utils/statics";
import { apiCall } from "../utils/utils";
import { toast } from "react-toastify";
const CardEvent = ({ event, isCompact = false }) => {
  const [tagList, setTagList] = useState();

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    // let response = await apiCall(ENDPOINTS.tags, "GET");
    let response = {
      tags: [
        { id: 1, name: "sport" },
        { id: 2, name: "education" },
        { id: 3, name: "technology" },
        { id: 4, name: "entertainment" },
        { id: 5, name: "fun" },
        { id: 6, name: "social" },
      ],
    };
    console.log(response);
    setTagList(response?.tags);
  };

  const toastMessage = (title) => toast("Event saved to bookmark list");

  return isCompact === false ? (
    <>
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xs-3">
        <div className="card border-0 shadow my-3">
          <div className="card-body">
            <h5 className="card-title text-truncate">{event?.event_name}</h5>
            <p className="card-text text-truncate">{event?.description}</p>
            <p className="my-1">
              <i className="bi bi-person-lock"></i> {event?.capacity}
            </p>
            <p className="my-1">
              <i className="bi bi-pin-map-fill"></i> {event?.location}
            </p>
            <TimeAgo prefix="Start: " timestamp={event?.start_datetime} />
            <br />
            <TimeAgo prefix="End: " timestamp={event?.end_datetime} />

            {/* <Link to={`/events/${event.id}`} className="stretched-link"></Link> */}

            <div className="tags mt-2">
              <i className="bi bi-tags"> </i>
              {["sport", "education", "tech", "entertainment"]?.map(
                (item, index) => {
                  return (
                    <button className="badge text-bg-info bg-opacity-10 text-info border-0 mx-1">
                      {item + " "}
                      <span className="text-danger"></span>
                    </button>
                  );
                }
              )}
            </div>

            <hr className="mt-4 m-1" />
            {/* buttons -----------------------------------------------*/}
            <div className="row d-flex justify-content-between">
              <div className="col-auto">
                <Link to={"/events/" + event?.id}>
                  <button type="button" className="btn btn-sm btn-outline-info">
                    <i className="bi bi-zoom-in"></i> See details
                  </button>
                </Link>
              </div>

              <div className="col-auto">
                <div
                  className="btn-group btn-group-sm"
                  role="group"
                  aria-label="Small button group"
                >
                  <button
                    type="button"
                    onClick={toastMessage}
                    className="btn btn-outline-secondary"
                  >
                    <i className="bi bi-bookmark"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            <TimeAgo prefix="Last updated " timestamp={event?.start_datetime} />
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="col-xs-12">
        <div className="card border-0 shadow my-2">
          <div className="card-body">
            <h5 className="card-title text-truncate mb-0 pb-0">{event?.event_name}</h5>
            <TimeAgo prefix="Last updated " timestamp={event?.start_datetime} />
            <div className="row d-flex justify-content-between">
              <div className="col-auto">
                <p className="my-1">
                  <i className="bi bi-person-lock"></i> {event?.capacity} |{" "}
                  <i className="bi bi-pin-map-fill"></i> {event?.location} |{" "}
                  <TimeAgo prefix="Start: " timestamp={event?.start_datetime} />{" "}
                  | <TimeAgo prefix="End: " timestamp={event?.end_datetime} />
                </p>
              </div>
              <div className="col-auto">
                {/* buttons -----------------------------------------------*/}
                <div className="row d-flex justify-content-between">
                  <div className="col-auto">
                    <Link to={"/events/" + event?.id}>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-info"
                      >
                        <i className="bi bi-zoom-in"></i> See details
                      </button>
                    </Link>
                  </div>

                  <div className="col-auto">
                    <div
                      className="btn-group btn-group-sm"
                      role="group"
                      aria-label="Small button group"
                    >
                      <button
                        type="button"
                        onClick={toastMessage}
                        className="btn btn-outline-secondary"
                      >
                        <i className="bi bi-bookmark"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tags">
              <i className="bi bi-tags"> </i>
              {["sport", "education", "tech", "entertainment"]?.map(
                (item, index) => {
                  return (
                    <button className="badge text-bg-info bg-opacity-10 text-info border-0 mx-1">
                      {item + " "}
                      <span className="text-danger"></span>
                    </button>
                  );
                }
              )}
            </div>
          </div>
          {/* <div className="card-footer text-muted py-0">
            <TimeAgo prefix="Last updated " timestamp={event?.start_datetime} />
          </div> */}
        </div>
      </div>
    </>
  );
};
export default CardEvent;
