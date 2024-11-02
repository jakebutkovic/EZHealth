import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SupportTicket() {
  const navigate = useNavigate();
  const [ticketText, setTicketText] = useState('');

  const handleTextInputChange = (e) => {
    setTicketText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ticketText,
    });
    setTicketText(''); // Clear the input field after submission
  };

  return (
    <div style={{ backgroundColor: '#f2f7fa', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          maxWidth: '500px',
          width: '100%',
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 style={{ color: '#333', marginBottom: '20px', textAlign: 'center', fontSize: '24px' }}>Submit a Support Ticket</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', color: '#555', marginBottom: '10px' }}>
              Describe Your Issue:
            </label>
            <textarea
              value={ticketText}
              onChange={handleTextInputChange}
              required
              style={{
                width: '100%',
                height: '120px',
                padding: '12px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                resize: 'vertical',
                fontSize: '14px',
                color: '#333',
              }}
              placeholder="Please provide a detailed description of your issue..."
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
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#005f54')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#00796b')}
          >
            Submit Ticket
          </button>
        </form>
      </div>
    </div>
  );
}

export default SupportTicket;
