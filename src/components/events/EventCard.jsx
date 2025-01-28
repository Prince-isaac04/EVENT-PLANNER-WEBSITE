import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './EventCard.css'; // Import the CSS file for styling

const EventCard = () => {
  return (
    <div className="event-card">
      <h3 className="event-title">CCTV Camera instalation meeting</h3>
      <p className="event-date">26/01/2025</p>
      <p className="event-rsvp">20</p>
      <Link to="/events/:id"> <button type="submit">View Details</button>
      </Link>
    </div>
  );
};

export default EventCard;
 <Link to="/eventform">
    <button type="submit">Login</button>
          
        </Link>