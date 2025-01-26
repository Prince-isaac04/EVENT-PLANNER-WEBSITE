// import React from 'react';
import { BrowserRouter as Routes, Route, useLocation } from 'react-router-dom';
// import LoginForm from './components/authentication/LoginForm.jsx';
import RegisterForm from './components/authentication/RegisterForm';
// import ProtectedRoute from './components/authentication/ProtectedRoute';
// import HomePage from './components/HomePage';
// import EventPage from './components/EventPage';
import EventList from './components/events/EventList';
import EventForm from './components/events/EventForm';
import EventDetails from './components/events/EventDetails';
import Welcome from './components/Welcome';
import EventCard from './components/events/EventCard';
import {AnimatePresence} from 'framer-motion';
// import {AnimatePresence} from 'framer-motion/dist/framer-motion';

  function AnimatedRoutes() {
    const location = useLocation();
  
    return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Welcome />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/eventform" element={<EventForm />} />
          <Route path="/edit-event/:id" element={<EventForm />} />
          <Route path="/eventcard" element={<EventCard />} />
        </Routes>
       </AnimatePresence>
    );
  }

export default AnimatedRoutes
sjhsjhsjhsjhsjh