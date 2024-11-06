import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#e0f7fa', height: '100vh', padding: '20px' }}>
      <Card className="text-center shadow-lg" style={{ width: '100%', maxWidth: '600px', padding: '20px', borderRadius: '10px' }}>
        <Card.Body>
          <Card.Title as="h1" className="mb-4" style={{ color: '#00796b', fontWeight: 'bold' }}>Welcome to EZ-health</Card.Title>
          <Card.Text className="mb-4" style={{ color: '#004d40' }}>
            EZ-health will help tackle the challenge of translating medical jargon, keeping track of symptoms, and allow easy access to notes from your doctor.
          </Card.Text>
          <Button onClick={handleLogin} variant="success" size="lg">Login</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HomePage;
