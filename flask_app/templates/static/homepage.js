import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to EZ-health</h1>
      <p>Your health companion for tracking symptoms and AI-powered insights.</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/profile">
        <button>View Profile</button>
      </Link>
      <Link to="/symptoms">
        <button>Track Symptoms</button>
      </Link>
      <Link to="/ai">
        <button>AI Health Insights</button>
      </Link>
    </div>
  );
};

export default Homepage;
