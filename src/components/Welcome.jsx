// src/components/home/HomePage.jsx
import { Link } from 'react-router-dom';
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="container">
      <h1>Welcome to the Event Planner!</h1>
      <p>Plan and manage your events with ease. Create, edit, and RSVP to events.</p>
      
      <div className="cta">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/Register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};
 export default Welcome;

// import React from 'react'

// function Welcome() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Welcome


