import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function HomePage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => {
    // Redirect to the login page
    navigate('/login');
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); // Close the menu after navigation
  };

  return (
    <div style={{ backgroundColor: 'lightblue', height: '100vh', padding: '20px' }}>
      <main>
        <h1>Welcome to EZ-health</h1>
        <Button onClick={handleLogin} variant="success">Login</Button>
        <p>EZ-health will help tackle the challenge of translating medical jargon, keeping track of symptoms, and allow easy access to notes from your doctor.</p>
      </main>
    </div>
  );
}

export default HomePage;