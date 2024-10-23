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
    <div style={{ backgroundColor: 'lightblue', height: '100vh', padding: '20px' }}>
      <h1>Patients List</h1>
      {patients.map((patient, index) => (
        <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <h2>{patient.name}</h2>
          <p>Date of Birth: {patient.dob}</p>
          <p>Diagnosis: {patient.diagnosis}</p>
          <p>Notes: {patient.notes}</p>
          <p>Symptoms: {patient.symptoms.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default PatientsList;