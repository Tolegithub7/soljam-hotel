import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.warn('GEMINI_API_KEY is not set. Gemini features will be disabled.');
}

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

async function callModel(prompt: string) {
  if (!genAI) {
    throw new Error('Gemini is not configured');
  }
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

export async function generateDescription(text: string) {
  return callModel(`Generate a vivid, welcoming hotel description based on: ${text}`);
}

export async function summarize(text: string) {
  return callModel(`Summarize the following text in 2–3 sentences:\n\n${text}`);
}

export async function recommendRooms(preferences: string) {
  const raw = await callModel(
    `You are an assistant for a seaside luxury hotel. Based on the guest preferences below, suggest 3 room types with short descriptions and why they are a good fit. Return plain text.\n\nPreferences: ${preferences}`
  );
  return raw;
}
