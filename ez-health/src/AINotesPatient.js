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
    <div style={{ backgroundColor: '#f2f7fa', minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>AI Notes</h1>
      <div style={{ maxWidth: '600px', width: '100%' }}>
        {aiNotes.map((note) => (
          <div
            key={note.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              margin: '10px 0',
              padding: '20px',
              backgroundColor: 'white',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h2 style={{ color: '#00796b', marginBottom: '10px' }}>Patient: {note.patient}</h2>
            <p style={{ margin: '5px 0', color: '#555' }}>
              <strong>File:</strong> {note.file}
            </p>
            <p style={{ margin: '5px 0', color: '#555' }}>
              <strong>Text Input:</strong> {note.textInput}
            </p>
            <p style={{ margin: '5px 0', color: '#555' }}>
              <strong>Additional Text:</strong> {note.additionalText}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AINotesPatient;
