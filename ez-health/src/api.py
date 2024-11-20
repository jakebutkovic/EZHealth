import os
from flask import Flask, request, jsonify
from openai import OpenAI

app = Flask(__name__)

# Configure OpenAI API key
OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')



@app.route('/AskAI', methods=['POST'])
def get_ai_response():
    try:
        # Get input text from the request
        data = request.get_json()
        input_text = data.get("inputText", "")

        # Initialize OpenAI client
        openai = OpenAI(api_key=OPENAI_API_KEY)

        # Generate the AI response
        completion = openai.ChatCompletion.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "system",
                    "content": "You are a medical interpreter that helps patients understand their diagnoses and symptoms in layman's terms. Respond in short paragraph format. Off-topic questions should return: 'error, off-topic'."
                },
                {
                    "role": "user",
                    "content": f"Assist the patient: \"{input_text}\""
                }
            ]
        )

        # Extract and return the response
        ai_response = completion.choices[0].message['content']
        print(ai_response)
        return jsonify({"response": ai_response})

    except Exception as e:
        return jsonify({"error": str(e)}), 500



if __name__ == '__main__':
    app.run(debug=True)
