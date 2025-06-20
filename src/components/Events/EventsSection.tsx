import { useEffect, useState } from "react";
import "./Events.css";
import eventsData from "../../data/events.json";
import ShapeDivider from "../ui/ShapeDivider";
import EventFlyer from "../../assets/webp/7-6Flyer.webp"

type EventItem = {
  date: string;
  month: string;
  location: string;
  time: string;
  image: string;
};

const EventsSection = () => {
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return (
    <section className="events section" id="events">
      <h2 className="section-title">Upcoming Events</h2>

      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-date">
              <div className="day">{event.date}</div>
              <div className="month">{event.month}</div>
            </div>
            <div className="event-content">
              <img src={EventFlyer} alt={`${event.date} ${event.month} event`} />
              <div className="event-details">
                <i className="fas fa-map-marker-alt"></i>
                <p>{event.location}</p>
              </div>
              <div className="event-details">
                <i className="fas fa-clock"></i>
                <p>{event.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ShapeDivider position="bottom" color="var(--light-color)" height={120} flipped={true} />
    </section>
  );
};

export default EventsSection;
