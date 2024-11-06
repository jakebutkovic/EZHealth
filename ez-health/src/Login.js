import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
 
  const [email, checkEmail] = useState('');
  const [password, checkPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      email,
      password,
    });
    navigate('/'); // Redirect to the homepage after submission
  };

  return (
    <div style={{ backgroundColor: '#e9f4f9', minHeight: '100vh', padding: '140px', display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          maxWidth: '600px',
          width: '100%',
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 style={{ color: '#333', marginBottom: '30px', textAlign: 'center' }}>Log In</h1>
        <form onSubmit={handleSubmit}>
         
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => checkEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Password:</label>
            <input
              type="text"
              value={password}
              onChange={(e) => checkPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#00796b',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
