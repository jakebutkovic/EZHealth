import React, { useState } from 'react';

function AINotes() {
  const [file, setFile] = useState(null);
  const [textInput, setTextInput] = useState('');
  const [patient, setPatient] = useState('');
  const [additionalText, setAdditionalText] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handlePatientChange = (e) => {
    setPatient(e.target.value);
  };

  const handleAdditionalTextChange = (e) => {
    setAdditionalText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      file,
      textInput,
      patient,
      additionalText,
    });
  };

  return (
    <div style={{ backgroundColor: '#f0f4f8', height: '100vh', padding: '40px' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>AI Notes</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold', color: '#00796b', display: 'block', marginBottom: '8px' }}>
            Upload File:
          </label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold', color: '#00796b', display: 'block', marginBottom: '8px' }}>
            Text Input:
          </label>
          <textarea
            value={textInput}
            onChange={handleTextInputChange}
            required
            style={{
              width: '100%',
              height: '80px',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              resize: 'vertical',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold', color: '#00796b', display: 'block', marginBottom: '8px' }}>
            Assign Patient:
          </label>
          <input
            type="text"
            value={patient}
            onChange={handlePatientChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
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
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          Submit
        </button>
      </form>
      
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '600px',
          margin: '20px auto 0',
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold', color: '#00796b', display: 'block', marginBottom: '8px' }}>
            Additional Text:
          </label>
          <textarea
            value={additionalText}
            onChange={handleAdditionalTextChange}
            required
            style={{
              width: '100%',
              height: '80px',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              resize: 'vertical',
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
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AINotes;
