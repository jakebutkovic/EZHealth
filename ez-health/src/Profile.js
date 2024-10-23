import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login functionality here
    navigate('/profile'); // Redirect to the profile page after login
  };

  return (
    <div>
      <h1>Welcome to EZ-health</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default ProfilePage;
