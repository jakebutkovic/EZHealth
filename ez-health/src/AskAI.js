import React, { useState } from 'react';
import { OpenAI } from 'openai';

function AIrequest() {
  const [description, setDescription] = useState("");
  const [submitStatus, setSubmitStatus] = useState("Submit");
  const [AIresponse, setAIresponse] = useState("");

  const responseGenerate = async (inputText) => {
    // Initialize OpenAI client with the API key
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      dangerouslyAllowBrowser: true
    });

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a medical interpreter that helps patients understand their diagnoses and symptoms and is here to concisely answer any questions they may have about their situation in layman's terms. Responses should be in a short paragraph format. Off-topic messages from the user should be responded to simply with: 'error, off-topic'",
          },
          {
            role: "user",
            content: `Assist the patient: "${inputText}"`,
          },
        ],
      });

      setAIresponse(completion.choices[0].message.content);
      setSubmitStatus("Submit");
    } catch (error) {
      console.error(error);
      setSubmitStatus("Retry");
    }
  };

  const submitDescription = () => {
    setSubmitStatus("Waiting");
    responseGenerate(description);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Ask AI</h2>
      </header>
      <div className="App-container">
        <textarea
          value={description}
          placeholder="Ask your question here"
          onChange={(e) => setDescription(e.target.value)}
          className="user-question"
        ></textarea>
        <button onClick={submitDescription} className="submit-button">
          {submitStatus}
        </button>
        <span className="AI-response">{AIresponse}</span>
      </div>
    </div>
  );
}

export default AIrequest;
