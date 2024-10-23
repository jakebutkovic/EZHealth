import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav style={{ backgroundColor: 'lightblue', padding: '10px' }}>
      <button onClick={toggleMenu}>☰</button>
      {menuOpen && (
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/profile" onClick={toggleMenu}>User Profile</Link>
          </li>
          <li>
            <Link to="/symptoms" onClick={toggleMenu}>Symptoms</Link>
          </li>
          <li>
            <Link to="/ai-notes" onClick={toggleMenu}>AI Notes</Link>
          </li>
          <li>
            <Link to="/doctorprofile" onClick={toggleMenu}>Doctor Profile</Link>
          </li>
          <li>
            <Link to="/supportticket" onClick={toggleMenu}>Support Ticket</Link>
          </li>
          <li>
            <Link to="/ainotespatient" onClick={toggleMenu}>AI Notes Patient</Link>
          </li>
          <li>
            <Link to="/patientslist" onClick={toggleMenu}>Patients List</Link>
          </li>
          <li> 
            <Link to="/login" onClick={toggleMenu}>Login</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;