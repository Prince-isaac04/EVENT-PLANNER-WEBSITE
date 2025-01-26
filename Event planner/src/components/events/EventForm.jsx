import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './EventForm.css'; // Import the CSS file

const EventForm = ({ onSubmit, event = {} }) => {
  const [title, setTitle] = useState(event.title || '');
  const [description, setDescription] = useState(event.description || '');
  const [date, setDate] = useState(event.date || '');
  const [time, setTime] = useState(event.time || '');
  const [location, setLocation] = useState(event.location || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { title, description, date, time, location };
    onSubmit(newEvent);
  };

  return (
    <div className="event-form-container">
      <h2 className="event-form-title">
        {event.id ? 'Edit Event' : 'Create Event'}
      </h2>
      <form className="event-form" onSubmit={handleSubmit}>
        <label className="form-label">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="form-input"
        />
        <label className="form-label">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="form-textarea"
        />
        <label className="form-label">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="form-input"
        />
        <label className="form-label">Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="form-input"
        />
        <label className="form-label">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className="form-input"
        />

        <Link to="/eventcard">
        <button type="submit" className="form-submit-btn">
          {event.id ? 'Update Event' : 'Create Event'}
        </button>
                  
                </Link>
      </form>
      <Link to="/" className="back-link">
        Back to previous page
      </Link>
    </div>
  );
};

EventForm.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    location: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default EventForm;
