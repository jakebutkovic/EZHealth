import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SymptomsPage() {
  const navigate = useNavigate();
  const [symptoms, setSymptoms] = useState([
    {
      name: 'Headache',
      entries: [
        { date: '2023-10-01', severity: 5, notes: 'Mild headache in the morning' },
        { date: '2023-10-02', severity: 7, notes: 'Severe headache in the evening' },
      ],
    },
    {
      name: 'Fever',
      entries: [
        { date: '2023-10-01', severity: 3, notes: 'Low fever' },
        { date: '2023-10-02', severity: 6, notes: 'High fever in the afternoon' },
      ],
    },
  ]);
  const [selectedSymptom, setSelectedSymptom] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSymptomClick = (symptom) => {
    setSelectedSymptom(symptom);
    setSelectedDate(null);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div style={{ display: 'flex', backgroundColor: '#f0f4f8', height: '100vh', padding: '20px' }}>
      {/* Sidebar for Symptoms List */}
      <div style={{ flex: 1, marginRight: '20px' }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>Symptoms</h1>
        {symptoms.map((symptom) => (
          <div
            key={symptom.name}
            onClick={() => handleSymptomClick(symptom)}
            style={{
              padding: '15px',
              backgroundColor: selectedSymptom === symptom ? '#e0f7fa' : 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              marginBottom: '15px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            <h2 style={{ color: '#00796b' }}>{symptom.name}</h2>
            {selectedSymptom === symptom && (
              <div style={{ marginTop: '10px' }}>
                {symptom.entries.map((entry) => (
                  <div
                    key={entry.date}
                    onClick={() => handleDateClick(entry)}
                    style={{
                      padding: '10px',
                      borderRadius: '5px',
                      backgroundColor: selectedDate === entry ? '#f1f8e9' : '#f7f9fc',
                      marginBottom: '8px',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    <p><strong>Date:</strong> {entry.date}</p>
                    <p><strong>Severity:</strong> {entry.severity}</p>
                    <p><strong>Notes:</strong> {entry.notes}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Detail Panel for Selected Symptom */}
      <div style={{ flex: 1 }}>
        {selectedSymptom && (
          <div
            style={{
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h2 style={{ color: '#00796b', marginBottom: '20px' }}>
              {selectedSymptom.name} Severity Over Time
            </h2>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
              {selectedSymptom.entries.map((entry) => (
                <li key={entry.date} style={{ marginBottom: '10px' }}>
                  <span style={{ fontWeight: 'bold' }}>{entry.date}:</span> Severity {entry.severity}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SymptomsPage;
