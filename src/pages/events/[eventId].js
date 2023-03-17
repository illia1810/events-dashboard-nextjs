import EventContent from "@/components/event-detail/EventContent";
import EventLogistics from "@/components/event-detail/EventLogistics";
import EventSummary from "@/components/event-detail/EventSummary";
import { useRouter } from "next/router";
import { getEventsById } from "../../../dummy-data";

function EventDetailPage() {
  const {query} = useRouter();
  const event = getEventsById(query.eventId);
  console.table(event);

  return (
    !event ? (
      <p>No event found!</p>
    ) : (
      <>
        <EventSummary title={event.title} />
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </>
    )
  )
}

export default EventDetailPage;
