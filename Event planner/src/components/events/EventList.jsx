// src/components/events/EventList.jsx
import React from 'react';
import EventCard from './EventCard';
import PropTypes from 'prop-types';

const EventList = ({ events }) => {
  return (
    <div>
      <h2>Upcoming Events</h2>
      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      rsvpCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};


export default EventList;