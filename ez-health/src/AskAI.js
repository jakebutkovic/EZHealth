import React, { useState } from 'react';

function AskAIComponent() {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await fetch('/AskAI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      setResponse(data.response.content);
    } catch (error) {
      setError('An error occurred while fetching the response.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Medical Interpreter Assistant</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userInput">
          Enter your question:
        </label>
        <textarea
          id="userInput"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          rows="4"
          style={{ width: '100%', padding: '10px', marginTop: '10px' }}
          required
        />
        <button type="submit" style={{ marginTop: '10px' }} disabled={loading}>
          {loading ? 'Processing...' : 'Submit'}
        </button>
      </form>
      {error && (
        <div style={{ color: 'red', marginTop: '20px' }}>
          <p>{error}</p>
        </div>
      )}
      {response && (
        <div style={{ marginTop: '20px' }}>
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default AskAIComponent;
