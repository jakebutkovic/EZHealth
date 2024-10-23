import React, { useState } from 'react';

function AINotesPatient() {
  const [aiNotes, setAiNotes] = useState([
    {
      id: 1,
      file: 'note1.pdf',
      textInput: 'Patient has shown improvement in symptoms.',
      patient: 'John Doe',
      additionalText: 'Continue with current medication.',
    },
    {
      id: 2,
      file: 'note2.pdf',
      textInput: 'Patient reports mild headache.',
      patient: 'Jane Smith',
      additionalText: 'Recommend rest and hydration.',
    },
  ]);

  return (
    <div style={{ backgroundColor: 'lightblue', height: '100vh', padding: '20px' }}>
      <h1>AI Notes</h1>
      {aiNotes.map((note) => (
        <div key={note.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <h2>Patient: {note.patient}</h2>
          <p>File: {note.file}</p>
          <p>Text Input: {note.textInput}</p>
          <p>Additional Text: {note.additionalText}</p>
        </div>
      ))}
    </div>
  );
}

export default AINotesPatient;