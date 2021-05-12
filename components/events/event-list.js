import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList({ featuredEvents }) {
  return (
    <ul className={classes.list}>
      {featuredEvents.length &&
        featuredEvents.map((featuredEvent) => (
          <EventItem item={featuredEvent} />
        ))}
    </ul>
  );
}

export default EventList;
