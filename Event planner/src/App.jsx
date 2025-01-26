import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/authentication/LoginForm';
import RegisterForm from './components/authentication/RegisterForm';
import ProtectedRoute from './components/authentication/ProtectedRoute';
import HomePage from './components/HomePage';
// import EventPage from './components/EventPage';
import EventList from './components/events/EventList';
import EventForm from './components/events/EventForm';
import EventDetails from './components/events/EventDetails';
import Welcome from './components/Welcome';
import EventCard from './components/events/EventCard';

 
// const Dashboard = () => <h1>Dashboard: Only accessible to logged-in users</h1>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/eventform" element={<EventForm />} />
        <Route path="/edit-event/:id" element={<EventForm />} />
        <Route path="/eventcard" element={<EventCard />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {/* <Dashboard /> */}
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  

  
    
  );
};

export default App;
