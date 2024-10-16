import React, { useState } from 'react';

const Symptoms = () => {
  const [symptom, setSymptom] = useState('');
  const [symptomsList, setSymptomsList] = useState([]);

  const addSymptom = () => {
    if (symptom) {
      setSymptomsList([...symptomsList, symptom]);
      setSymptom('');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Track Your Symptoms</h2>
      <input
        type="text"
        placeholder="Enter symptom"
        value={symptom}
        onChange={(e) => setSymptom(e.target.value)}
      />
      <button onClick={addSymptom}>Add Symptom</button>
      <ul>
        {symptomsList.map((symptom, index) => (
          <li key={index}>{symptom}</li>
        ))}
      </ul>
    </div>
  );
};

export default Symptoms;
