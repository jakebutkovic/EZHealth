import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '/workspaces/EZHealth/ez-health/src/components/NavBar.js';
import HomePage from '/workspaces/EZHealth/ez-health/src/Homepage.js';
import UserProfile from '/workspaces/EZHealth/ez-health/src/Profile.js';
import SymptomsPage from '/workspaces/EZHealth/ez-health/src/Symptoms.js';
import AINotesPage from '/workspaces/EZHealth/ez-health/src/AINotes.js';
import DoctorProfile from '/workspaces/EZHealth/ez-health/src/DoctorProfile.js';
import SupportTicket from '/workspaces/EZHealth/ez-health/src/SupportTicket.js';
import AINotesPatient from '/workspaces/EZHealth/ez-health/src/AINotesPatient';
import PatientsList from '/workspaces/EZHealth/ez-health/src/PatientsList';

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
          <Route path="/ai-notes" element={<AINotesPage />} />
          <Route path="/doctorprofile" element={<DoctorProfile />} />
          <Route path="/supportticket" element={<SupportTicket />} />
          <Route path="/ainotespatient" element={<AINotesPatient />} />
          <Route path="/patientslist" element={<PatientsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
