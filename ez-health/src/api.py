from openai import OpenAI
client = OpenAI()

completion = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {
            "role": "system", "content": "You are a medical interpreter that helps patients understand their diagnoses and symptoms and is here to concisely answer any questions they may have about their situation in layman's terms. Responses should be in a short paragraph format. Off-topic messages from the user should be responded to simply with: 'error, off-topic'"
        },
        {
            "role": "user",
            "content": "My doctor told me that I have atrial fibrillation with rapid ventricular response. What does that mean?"
        }
    ]
)

@app.route('/AskAI')
def get_time():

    return {
      completion.choices[0].message
        }


#print(completion.choices[0].message)