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
    <div style={{ display: 'flex', backgroundColor: 'lightblue', height: '100vh', padding: '20px' }}>
      <div style={{ flex: 1 }}>
        <h1>Symptoms</h1>
        {symptoms.map((symptom) => (
          <div key={symptom.name} onClick={() => handleSymptomClick(symptom)}>
            <h2>{symptom.name}</h2>
            {selectedSymptom === symptom && (
              <div>
                {symptom.entries.map((entry) => (
                  <div key={entry.date} onClick={() => handleDateClick(entry)}>
                    <p>Date: {entry.date}</p>
                    <p>Severity: {entry.severity}</p>
                    <p>Notes: {entry.notes}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{ flex: 1 }}>
        {selectedSymptom && (
          <div>
            <h2>{selectedSymptom.name} Severity Over Time</h2>
            <ul>
              {selectedSymptom.entries.map((entry) => (
                <li key={entry.date}>
                  {entry.date}: {entry.severity}
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