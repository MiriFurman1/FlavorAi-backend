import express from "express";
import { OpenAI } from "langchain/llms/openai";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from 'cors'
dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.post("/", async (req, res) => {
  const llm = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });
  const prompt = req.body.prompt;
  const result = await llm.predict(prompt);

  res.json({ result });
});

app.listen(3000, () => {
  console.log("API server listening on port 3000");
});