import EventList from "../components/events/EventList";
import { getAllEvents } from "../../dummy-data";
import { getFeaturedEvents } from "@/utils/api-util";

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  }
}

export default HomePage;
