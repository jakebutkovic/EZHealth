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
    // Handle form submission here
    console.log({
      ticketText,
    });
    setTicketText(''); // Clear the input field after submission
  };

  return (
    <div style={{ backgroundColor: 'lightblue', height: '100vh', padding: '20px' }}>
      <h1>Support Ticket</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Describe your issue:</label>
          <textarea value={ticketText} onChange={handleTextInputChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SupportTicket;