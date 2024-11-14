import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav style={{ backgroundColor: 'lightblue', padding: '10px' }}>
      <button 
        onClick={toggleMenu} 
        style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
      >
        ☰
      </button>
      {menuOpen && (
        <ul style={{
          listStyle: 'none',
          margin: 0,
          padding: '10px',
          backgroundColor: 'white',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
          position: 'absolute',
          top: '50px',
          left: '10px',
          width: '150px'
        }}>
          <li style={{ margin: '10px 0' }}>
            <Link to="/" onClick={toggleMenu} style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
          </li>
          <li style={{ margin: '10px 0' }}>
            <Link to="/profile" onClick={toggleMenu} style={{ textDecoration: 'none', color: '#333' }}>User Profile</Link>
          </li>
          <li style={{ margin: '10px 0' }}>
            <Link to="/symptoms" onClick={toggleMenu} style={{ textDecoration: 'none', color: '#333' }}>Symptoms</Link>
          </li>
          <li style={{ margin: '10px 0' }}>
            <Link to="/ai-notes" onClick={toggleMenu} style={{ textDecoration: 'none', color: '#333' }}>AI Notes</Link>
          </li>
          <li style={{ margin: '10px 0' }}>
            <Link to="/doctorprofile" onClick={toggleMenu} style={{ textDecoration: 'none', color: '#333' }}>Doctor Profile</Link>
          </li>
          <li style={{ margin: '10px 0' }}>
            <Link to="/supportticket" onClick={toggleMenu} style={{ textDecoration: 'none', color: '#333' }}>Support Ticket</Link>
          </li>
          <li style={{ margin: '10px 0' }}>
            <Link to="/ainotespatient" onClick={toggleMenu} style={{ textDecoration: 'none', color: '#333' }}>AI Notes Patient</Link>
          </li>
          <li style={{ margin: '10px 0' }}>
            <Link to="/patientslist" onClick={toggleMenu} style={{ textDecoration: 'none', color: '#333' }}>Patients List</Link>
          </li>
          <li style={{ margin: '10px 0' }}>
            <Link to="/login" onClick={toggleMenu} style={{ textDecoration: 'none', color: '#333' }}>Login</Link>
          </li>
          <li style={{ margin: '10px 0' }}>
            <Link to="/AskAI" onClick={toggleMenu} style={{ textDecoration: 'none', color: '#333' }}>Ask AI</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
