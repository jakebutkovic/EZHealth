import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => {
    // Handle login functionality here
    navigate('/profile'); // Redirect to the profile page after login
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); // Close the menu after navigation
  };

  return (
    <div style={{ backgroundColor: 'lightblue', height: '100vh', padding: '20px' }}>
      <main>
        <h1>Welcome to EZ-health</h1>
        <button onClick={handleLogin}>Login</button>
        <p>EZ-health will help tackle the challenge of translating medical jargon, keeping track of symptoms, and allow easy access to notes from your doctor.</p>
      </main>
    </div>
  );
}

export default HomePage;