import React, { useState } from 'react';

function PatientsList() {
  const [patients, setPatients] = useState([
    {
      name: 'John Doe',
      dob: '1990-01-01',
      diagnosis: 'Hypertension',
      notes: 'Patient needs to monitor blood pressure daily.',
      symptoms: ['Headache', 'Dizziness'],
    },
    {
      name: 'Jane Smith',
      dob: '1985-05-15',
      diagnosis: 'Diabetes',
      notes: 'Patient needs to follow a strict diet and exercise regularly.',
      symptoms: ['Fatigue', 'Blurred vision'],
    },
  ]);

  return (
    <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Patients List</h1>
      <div style={{ maxWidth: '600px', width: '100%' }}>
        {patients.map((patient, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              margin: '10px 0',
              padding: '15px',
              backgroundColor: 'white',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h2 style={{ color: '#00796b', marginBottom: '10px' }}>{patient.name}</h2>
            <p style={{ margin: '5px 0', color: '#555' }}>
              <strong>Date of Birth:</strong> {patient.dob}
            </p>
            <p style={{ margin: '5px 0', color: '#555' }}>
              <strong>Diagnosis:</strong> {patient.diagnosis}
            </p>
            <p style={{ margin: '5px 0', color: '#555' }}>
              <strong>Notes:</strong> {patient.notes}
            </p>
            <p style={{ margin: '5px 0', color: '#555' }}>
              <strong>Symptoms:</strong> {patient.symptoms.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientsList;
