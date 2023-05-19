import { useEffect, useState } from "react";
import CardEvent from "../components/CardEvent";
import Empty from "../components/Empty";
import { apiCall } from "../utils/utils";
import { ENDPOINTS } from "../utils/statics";
import HeadlineText from "../components/HeadlineText";
import Search from "../search_ms/Search";

function EventsPage() {
  const [eventList, setEventList] = useState();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    // let response = await apiCall(ENDPOINTS.events, "GET");
    let response = {
      events: [
        {
          id: 1,
          event_name: "Tech Event wien",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
          start_datetime: 1567674000000,
          end_datetime: 1567706400000,
          location: "Vienna",
          capacity: 500,
          tags: ["sport", "education"],
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
          tags: ["tech", "education"],
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
          tags: ["sport", "education"],
        },
        {
          id: 4,
          event_name: "Tech Event II",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
          start_datetime: 1567674000000,
          end_datetime: 1567706400000,
          location: "Vienna",
          capacity: 300,
          tags: ["sport", "education"],
        },
        {
          id: 5,
          event_name: "It Event II",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
          start_datetime: 1567674000000,
          end_datetime: 1567706400000,
          location: "Graz",
          capacity: 100,
          tags: ["sport"],
        },
        {
          id: 6,
          event_name: "Job Event III",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
          start_datetime: 1567674000000,
          end_datetime: 1567706400000,
          location: "Vienna",
          capacity: 10,
          tags: ["education"],
        },
      ],
    };
    console.log(response);
    setEventList(response.events);
  };

  return (
    <>
      <HeadlineText text="Events" />
      <Search />
      {(eventList?.length ?? 0) < 1 && <Empty />}
      <div className="row">
        {eventList?.map((item, index) => {
          return <CardEvent key={index} event={item} />;
        })}
      </div>
    </>
  );
}

export default EventsPage;
