// src/pages/HomePage.jsx
import React, { useState } from 'react';
import EventList from '../components/events/EventList';
import EventForm from '../components/events/EventForm';

const EventPage = () => {
  const [events, setEvents] = useState([
    // Dummy data
    { id: 1, title: 'Event 1', date: '2024-12-28', rsvpCount: 5, location: 'New York', description: 'Description of Event 1' },
    { id: 2, title: 'Event 2', date: '2024-12-29', rsvpCount: 2, location: 'San Francisco', description: 'Description of Event 2' },
  ]);

  const handleCreateEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
  };

  return (
    <div>
      <h1>Event Planner</h1>
      <EventForm onSubmit={handleCreateEvent} />
      <EventList events={events} />
    </div>
  );
};

export default EventPage;
