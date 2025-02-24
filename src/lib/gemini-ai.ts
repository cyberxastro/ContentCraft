import { GoogleGenerativeAI } from "@google/generative-ai";

// const apiKey = process.env.GEMINI_API_KEY as string;
const genAI = new GoogleGenerativeAI("You GEMINI_API_KEY");

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig: generationConfig,
  history: [],
});
