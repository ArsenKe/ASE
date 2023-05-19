import { useEffect, useState } from "react";
import CardEvent from "../components/CardEvent";
import Empty from "../components/Empty";
import { apiCall } from "../utils/utils";
import { ENDPOINTS } from "../utils/statics";
import { useParams } from "react-router-dom";
import TimeAgo from "../components/TimeAgo";
import HeadlineText from "../components/HeadlineText";
import SelectSearchComponent from "../components/SelectSearchComponent";
import { toast } from "react-toastify";

function EventsDetailsPage() {
  const { id } = useParams();
  const [event, setEvent] = useState();
  const [tagList, setTagList] = useState();

  useEffect(() => {
    fetchEvent();
    fetchTags();
  }, []);

  const toastMessage = (title) => toast("Event saved to bookmark list");
  const fetchEvent = async () => {
    // let response = await apiCall(ENDPOINTS.eventDetails(id), "GET");
    let response = {
      id: 1,
      event_name: "Tech Event wien",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
      start_datetime: 1567674000000,
      end_datetime: 1567706400000,
      location: "Vienna",
      capacity: 500,
      tags: ["tech", "education"],
    };
    console.log(response);
    setEvent(response);
  };

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

  return (
    <>
      {/* <HeadlineText text="Event Details" /> */}
      {(event === undefined || event === null) && <Empty />}
      <div className="">
        <div class="container">
          <div class="row mt-4">
            <div class="col-md-4">
              <img
                src="https://via.placeholder.com/300x300"
                class="img-fluid object-fit-cover"
                alt="Product Image3"
              />
            </div>
            <div class="col-md-8">
              <h2 className="mb-0">{event?.event_name}</h2>
              <TimeAgo
                prefix="Last updated "
                timestamp={event?.start_datetime}
              />
              <p className="my-1">
                <i className="bi bi-person-lock"></i> {event?.capacity}
              </p>
              <p className="my-1">
                <i className="bi bi-pin-map-fill"></i> {event?.location}
              </p>
              <TimeAgo prefix="Start: " timestamp={event?.start_datetime} />
              <br />
              <TimeAgo prefix="End: " timestamp={event?.end_datetime} />

              {/* tags---------------------------------------------------- */}
              <div className="tags my-2">
                <i className="bi bi-tags"> </i>
                {["sport", "education", "tech", "entertainment"]?.map(
                  (item, index) => {
                    return (
                      <button className="badge text-bg-info bg-opacity-10 text-info border-0 mx-1">
                        {item + " "}
                        <span className="text-danger">
                          <i className="bi bi-x-lg"></i>
                        </span>
                      </button>
                    );
                  }
                )}
                <button
                  className="badge text-bg-success bg-opacity-10 text-success border-0 mx-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <span className="text-success">
                    <i className="bi bi-plus-lg"></i>
                  </span>
                </button>
              </div>
              {/* modals--------------------------- */}
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Add/Remove Tag
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <SelectSearchComponent
                        dataList={tagList}
                        label={<i className="bi bi-tags"> </i>}
                        multiple={true}
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-info">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* tags------------------------------------------------- */}
              {/* buttons -----------------------------------------------*/}
              <div className="row d-flex justify-content-between">
                <div className="col-auto">
                  <span>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star text-warning"></i>
                    <i class="bi bi-star text-warning"></i>
                  </span>
                </div>

                <div className="col-auto">
                  <div
                    className="btn-group btn-group-sm"
                    role="group"
                    aria-label="Small button group"
                  >
                    <button type="button" className="btn btn-outline-secondary">
                      <i class="bi bi-check2"></i>
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      <i class="bi bi-chat-square-text"></i>
                    </button>
                   
                    {/* export button----------------- */}
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="bi bi-upload"></i>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="/export-calendar">
                          JSON
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/export-calendar">
                          ICS
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/export-calendar">
                          XML
                        </a>
                      </li>
                    </ul>

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
          <hr />
          <p>{event?.description}</p>
          <hr />
        </div>
      </div>
    </>
  );
}

export default EventsDetailsPage;
