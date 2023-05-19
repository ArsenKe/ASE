import { useEffect, useState } from "react";
import CardEvent from "../components/CardEvent";
import Empty from "../components/Empty";
import { apiCall } from "../utils/utils";
import { ENDPOINTS } from "../utils/statics";
import HeadlineText from "../components/HeadlineText";

function BoookmarkEventsPage() {
  const [eventList, setEventList] = useState();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    // let response = await apiCall(ENDPOINTS.bookmarks, "GET");
    let response = {
      bookmarks: [
        {
          id: 1,
          event_name: "Tech Event wien",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
          start_datetime: 1567674000000,
          end_datetime: 1567706400000,
          location: "Vienna",
          capacity: 500,
          tags: ["tech", "education"],
        },
        {
          id: 2,
          event_name: "It Event Graz",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
          start_datetime: 1567674000000,
          end_datetime: 1567706400000,
          location: "Graz",
          capacity: 100,
          tags: ["tech"],
        },
        {
          id: 3,
          event_name: "Job Event II",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
          start_datetime: 1567674000000,
          end_datetime: 1567706400000,
          location: "Vienna",
          capacity: 1000,
          tags: ["education"],
        },
        {
          id: 4,
          event_name: "Job Event III",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
          start_datetime: 1567674000000,
          end_datetime: 1567706400000,
          location: "Linz",
          capacity: 900,
          tags: ["tech"],
        },
      ],
    };
    console.log(response);
    setEventList(response.bookmarks);
  };

  return (
    <>
      <div className="col-8 row  d-flex justify-content-between mt-2">
        <div className="col-auto">
          <HeadlineText text="Bookmarks" />
        </div>
        <div className="col-auto">
          {/* export button----------------- */}
          <div class="dropdown">
            <button
              class="btn btn-sm btn-info bg-info bg-opacity-10 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-upload"></i> Export all 
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  JSON
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  ICS
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  XML
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          {(eventList?.length ?? 0) < 1 && <Empty />}
          <div className="row">
            {eventList?.map((item, index) => {
              return <CardEvent key={index} event={item} isCompact={true} />;
            })}
          </div>
        </div>
        <div className="col-md-4">
          <div class="text-info p-1 my-1 h4 border border-info bg-info bg-opacity-10 border-0 border-bottom border-2 rounded">
            Recommended
          </div>
          {(eventList?.length ?? 0) < 1 && <Empty />}
          <div className="row">
            {eventList?.map((item, index) => {
              return <CardEvent key={index} event={item} isCompact={true} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default BoookmarkEventsPage;
