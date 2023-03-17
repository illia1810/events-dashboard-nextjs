import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/ResultTitle";
import Button from "@/components/UI/Button";
import ErrorMessage from "@/components/UI/ErrorMessage";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../dummy-data";

function FilteredEventsPage() {
  const {query} = useRouter();
  const filteredData = query.slug;
  const yearForSearch = Number(filteredData[0]);
  const monthForSearch = Number(filteredData[1]);
  const filteredEvents = getFilteredEvents({year: yearForSearch, month: monthForSearch});
  const fullSearchDate = new Date(yearForSearch, monthForSearch - 1);

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
  if (!filteredData) {
    return  <p className='center'>Loading...</p>;
  }
  if (isNaN(yearForSearch) || isNaN(monthForSearch) || yearForSearch > 2030 || yearForSearch < 2020 || monthForSearch < 1 || monthForSearch > 12) {
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
      <ResultsTitle date={fullSearchDate} />
      <EventList items={filteredEvents} />
    </>
  )
}

export default FilteredEventsPage;