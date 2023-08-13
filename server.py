import os
from flask import Flask, request
from langchain.llms import OpenAI
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)

llm = OpenAI(openai_api_key=os.getenv("OPENAI_API_KEY"))

@app.route('/speak', methods=['GET'])
def speak():
    data = request.json
    prompts = data['prompts']
    # prompts = "give me a recipe for mexican dish with banana and ketchup"
    response = llm.predict(prompts)
    return response

if __name__ == "__main__":
    app.run(debug=True)
