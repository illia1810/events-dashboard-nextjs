import EventContent from "@/components/event-detail/EventContent";
import EventLogistics from "@/components/event-detail/EventLogistics";
import EventSummary from "@/components/event-detail/EventSummary";
import Comments from "@/components/input/Comments";
import ErrorMessage from "@/components/UI/ErrorMessage";
import { getAllEvents, getEventsById } from "@/utils/api-util";
import Head from "next/head";

function EventDetailPage(props) {
  const event = props.selectedEvent;

  return (
    !event ? (
      <div className='center'>
        <p>Loading...</p>
      </div>
    ) : (
      <>
        <Head>
          <title>{event.title}</title>
          <meta name='description' content={event.description} />
        </Head>
        <EventSummary title={event.title} />
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
        <Comments eventId={event.id} />
      </>
    )
  )
}

export async function getStaticProps(context) {
  const {eventId} = context.params;
  const event = await getEventsById(eventId);
  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const allEvents = await getAllEvents();
  const paths = allEvents.map(event => ({params: {eventId: event.id}}))
  return {
    paths: paths,
    fallback: false,
  };
}

export default EventDetailPage;
