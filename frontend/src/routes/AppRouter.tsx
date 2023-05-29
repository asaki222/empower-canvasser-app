import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InterestForm from '../components/InterestForm';
import ViewNotes from '../components/ViewNotes';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="navbar">
            <li>
              <Link to="/">Form</Link>
            </li>
            <li>
              <Link to="/notes">View Notes</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/notes" element={<ViewNotes />} />
          <Route path="/" element={<InterestForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;