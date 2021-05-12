import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);
  return (
    <div>
      <h1>The Home Page</h1>
      <EventList featuredEvents={featuredEvents} />
    </div>
  );
}

export default HomePage;
