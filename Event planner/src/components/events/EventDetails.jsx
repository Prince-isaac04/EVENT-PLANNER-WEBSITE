// src/components/events/EventDetails.jsx
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import './EventDetails.css'

const EventDetails = () => {
  // const { eventId } = useParams();
  // const event = events.find((event) => event.id === eventId);

  // const [rsvpStatus, setRsvpStatus] = useState(false);

  // const handleRsvp = () => {
  //   // setRsvpStatus(!rsvpStatus);
  // };

  // if (!event) {
  //   return <p>Event not found</p>;
  // }

  return (
    <div className='box'>
      <h3 className='title'>CCTV Camera Instalation Meeting</h3>
      <h5 className='description'> understandinfg what
         the do and dont during instalation</h5>
      <p className='line'>26/01/2025 <span>6:00pm</span></p>
      <p className='line'>Location: <span>Google Meet</span></p>
      <div>
        <h3 className='line'>RSVP
           <button >
          rsvpStatus ? 
        </button>
        </h3>
        
      </div>
      <div>
        <h3 className='line'>Event Code   <span>00149</span></h3>
        {/* Ideally, use a mapomponent here (like Google Maps) */}
      </div>
    </div>
  );
};

export default EventDetails;
