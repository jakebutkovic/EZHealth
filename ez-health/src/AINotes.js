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
    // Handle form submission here
    console.log({
      file,
      textInput,
      patient,
      additionalText,
    });
  };

  return (
    <div style={{ backgroundColor: 'lightblue', height: '100vh', padding: '20px' }}>
      <h1>AI Notes</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Upload File:</label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <div>
          <label>Text Input:</label>
          <textarea value={textInput} onChange={handleTextInputChange} required />
        </div>
        <div>
          <label>Assign Patient:</label>
          <input type="text" value={patient} onChange={handlePatientChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Additional Text:</label>
          <textarea value={additionalText} onChange={handleAdditionalTextChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AINotes;