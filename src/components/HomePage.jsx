// // import React from "react";
// import { Link } from "react-router-dom";
// import "./HomePage.css"; // Import the separate CSS file

// function HomePage() {
//   return (
//     <div className="home-page">
//       <h1 className="home-title">Welcome to the Event Planner!</h1>
//       <p className="home-subtitle">Your one-stop solution for managing and attending events.</p>
//       <nav className="home-nav">
//         <Link to="eventform" className="home-link create-event">
//           Create an Event
//         </Link>
//         <Link to="welcome" className="home-link back-home">
//           Back to previous page
//         </Link>
//       </nav>
//     </div>
//   );
// }

// export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import splitStringUsingRegex from '../utils/splitStringUsingRegex';

const heading = "De Prince Event Planner Software";
const text = "Our Event Planner App is a user-friendly platform designed to make creating, managing, and attending events simple and efficient. It offers a range of features that cater to both event organizers and attendees.";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

function HomePage() {
  const headingChars = splitStringUsingRegex(heading);
  const textChars = splitStringUsingRegex(text);

  // Call useTypewriter inside the component
  const { text: midtext } = useTypewriter({
    words: [
      'Elevate your day via planning',
      'Proper management of time',
      'Day to Day Activities Express',
    ],
    loop: true, // Set to true for continuous looping
    typeSpeed: 150,
    deleteSpeed: 100,
  });

  console.log('Typewriter text:', midtext);

  return (
    <div className="container">
      <motion.h1
      className='head'
        initial="hidden"
        whileInView="reveal"
        transition={{ staggerChildren: 0.04,
        repeat: Infinity,
        repeatType: "loop",
        duration: 2,
        }}
        loop
      >
        {headingChars.map((char, index) => (
          <motion.span
            key={index}
            transition={{ duration: 0.5 }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      
      
      {/* animated text */}
      
      <h2 style={{ margin: '50px' }}>
        Seyi code 
        <span style={{ fontWeight: 'bold', color: 'green' }}>
          {midtext}
        </span>
        <span style={{ color: 'red' }}>
          <Cursor cursorStyle="|" />
        </span>
      </h2>
      <Link to="/welcome">
       <button className='blinking-button'> Click the button to get started</button>
       </Link>
     
      <div className='b'></div>


      
      
      
      
      
      <div className="about">

        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.01 }}
        >
          {textChars.map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 1 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  );
}

export default HomePage;
