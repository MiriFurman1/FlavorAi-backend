// import { OpenAI } from "langchain/llms/openai";
// // const OpenAI = require('langchain/llms/openai');

// const express = require('express');
// const axios = require('axios');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 3000;

// const llm = new OpenAI({
//   temperature: 0.9,
// });
// const openaiApiKey = process.env.OPENAI_API_KEY;

// app.use(express.json());

// app.get('/speak', async (req, res) => {
//   try {
//     const prompts = req.body.prompts;
//     if (!prompts) {
//       return res.status(400).json({ error: 'Missing prompts' });
//     }
//     const result = await llm.predict("What would be a good company name for a company that makes colorful socks?");
//     console.log(result)
//     // const response = await getPrediction(prompts);
//     // res.send(response.data.choices[0].text);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

// async function getPrediction(prompts) {
//     const apiUrl = 'https://api.openai.com/v1/engines/davinci/chat/completions';
//     const headers = {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${openaiApiKey}`,
//     };
  
//     const data = {
//       prompt: prompts,
//     };
  
//     return axios.post(apiUrl, data, { headers });
//   }

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


const ChatOpenAI = require('langchain/llms/openai');
const HumanMessage = require('langchain/schema');

// import { ChatOpenAI } from "langchain/chat_models/openai";
// import { HumanMessage } from "langchain/schema";

// const chat = new ChatOpenAI();

const messages = [
  new HumanMessage("What is your name?"),
  new HumanMessage("What is the weather like today?"),
  new HumanMessage("What is the meaning of life?"),
];

const response =  ChatOpenAI.call(messages);

console.log(response); // AIMessage { text: "My name is Bard. The weather is currently sunny in San Francisco. The meaning of life is to find your purpose and live it to the fullest." }
