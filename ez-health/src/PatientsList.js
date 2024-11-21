import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PatientsList() {
  const [patients, setPatients] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/patients')
        .then((response) => {
            setPatients(response.data.patients);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}, [])

  return (
    <div>
      <p>
        {patients}
      </p>
    </div>

    /*
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
    */
  );
}

export default PatientsList;
