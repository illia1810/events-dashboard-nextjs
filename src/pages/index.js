import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "@/utils/api-util";
import Head from "next/head";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Event Dashboard</title>
        <meta name='description' content='Find out enjoyed events for you' />
      </Head>
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
