import React from 'react';

const AI = () => {
  const aiResult = "Your recent symptoms suggest you may be at risk for ... (AI analysis goes here).";

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>AI Health Insights</h2>
      <p>{aiResult}</p>
      <button onClick={() => alert('Fetching more AI insights...')}>Get New Insights</button>
    </div>
  );
};

export default AI;
