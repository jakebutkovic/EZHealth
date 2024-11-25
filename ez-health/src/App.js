import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/NavBar.js'
import HomePage from '../src/Homepage.js';
import UserProfile from '../src/Profile.js';
import SymptomsPage from '../src/Symptoms.js';
import AINotesPage from '../src/AINotes.js';
import DoctorProfile from '../src/DoctorProfile.js';
import SupportTicket from '../src/SupportTicket.js';
import AINotesPatient from '../src/AINotesPatient';
import PatientsList from '../src/PatientsList.js';
import LoginButton from '../src/Login.js';

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
          <Route path="/login" element={<LoginButton />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
