import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/ResultTitle";
import Button from "@/components/UI/Button";
import ErrorMessage from "@/components/UI/ErrorMessage";
import { getFilteredEvents } from "@/utils/api-util";
import Head from "next/head";

function FilteredEventsPage(props) {
  const {filteredEvents, yearForSearch, monthForSearch, hasError} = props;
  const fullSearchDate = new Date(yearForSearch, monthForSearch - 1);

  const pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name='description' content={`Events ${monthForSearch} ${yearForSearch}`} />
    </Head>
  );

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorMessage>
          <p className='center'>No events found</p>
        </ErrorMessage>
        <div className='center'>
          <Button link='/events'>Show all events</Button>
        </div>
      </>
    );
  }
  // if (!filteredData) {
  //   return  <p className='center'>Loading...</p>;
  // }
  if (hasError) {
    return (
      <>
      <ErrorMessage>
        <p className='center'>Invalid filter parameters</p>
      </ErrorMessage>
        <div className='center'>
          <Button link='/events'>Show all events</Button>
        </div>
      </>
    );
  }

  return (
    <>
      {pageHeadData}
      <ResultsTitle date={fullSearchDate} />
      <EventList items={filteredEvents} />
    </>
  )
}

export async function getServerSideProps(context) {
  const {params} = context;
  const filteredData = params.slug;
  const yearForSearch = Number(filteredData[0]);
  const monthForSearch = Number(filteredData[1]);
  if (isNaN(yearForSearch) || isNaN(monthForSearch) || yearForSearch > 2030 || yearForSearch < 2020 || monthForSearch < 1 || monthForSearch > 12) {
    return {
      props: {
        hasError: true,
      }
    };
  }
  const filteredEvents = await getFilteredEvents({year: yearForSearch, month: monthForSearch});
  return {
    props: {
      filteredEvents,
      yearForSearch,
      monthForSearch,
    }
  }
}

export default FilteredEventsPage;