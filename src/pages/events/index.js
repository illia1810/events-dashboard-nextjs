import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import { useRouter } from "next/router";
import { getAllEvents, getFilteredEvents } from "../../../dummy-data";

function AllEventsPage() {
  const router = useRouter();
  const allEvents = getAllEvents();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  }
  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </div>
  )
}

export default AllEventsPage;
  