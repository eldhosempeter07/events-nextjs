import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.length &&
        items.map((featuredEvent) => <EventItem item={featuredEvent} />)}
    </ul>
  );
}

export default EventList;
