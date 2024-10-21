import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import UserProfile from './UserProfile';
import SymptomsPage from './SymptomsPage';
import AINotesPage from './AINotesPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/symptoms" element={<SymptomsPage />} />
          <Route path="/ai-notes" element={<AINotesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
