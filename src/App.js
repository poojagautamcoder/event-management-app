import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import EventForm from './EventForm';
import EventList from './EventList';
import './Navbar.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <Link to="/" className="navbar-link">Event Form</Link>
            </li>
            <li>
              <Link to="/event-list" className="navbar-link">Event List</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<EventForm />} />
          <Route path="/event-list" element={<EventList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
