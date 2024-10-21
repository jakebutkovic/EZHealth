import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/profile">User Profile</Link>
        </li>
        <li>
          <Link to="/symptoms">Symptoms</Link>
        </li>
        <li>
          <Link to="/ai-notes">AI Notes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
