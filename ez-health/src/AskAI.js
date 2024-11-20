import React, { useState } from "react";

function AIrequest() {
  const [description, setDescription] = useState("");
  const [submitStatus, setSubmitStatus] = useState("Submit");
  const [AIresponse, setAIresponse] = useState("");

  const responseGenerate = async (inputText) => {
    const payload = { inputText };

    try {
      const result = await fetch("http://localhost:3000/AskAI", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (result.ok) {
        const data = await result.json();
        setAIresponse(data.response);
        setSubmitStatus("Submit");
      } else {
        console.error("Error:", result.status);
        setSubmitStatus("Retry");
      }
    } catch (error) {
      console.error("Error:", error);
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
