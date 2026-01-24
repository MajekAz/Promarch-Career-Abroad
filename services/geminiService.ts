import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

const SYSTEM_INSTRUCTION = `
You are the "Promarch Eligibility Advisor", an expert education consultant for Promarch Career Abroad. 
Your target audience is Nigerian students and professionals looking to move to the UK.

Your goal is to assess their eligibility for UK Universities or the Graduate Route.
1. Be polite, professional, and culturally resonant (use terms like "seamless transition", "start your journey").
2. Ask one question at a time to gather info: Current qualification (WAEC/NECO/Degree), GPA/Class of Degree, Budget, and Desired Course.
3. If they seem eligible, encourage them to book a consultation.
4. Keep responses concise (under 50 words) unless explaining a complex visa rule.
5. If asked about bank accounts or visas, mention Promarch helps with that documentation.
`;

const getAiClient = () => {
  if (!ai) {
    // Initialize with the key exclusively from process.env.API_KEY as per guidelines.
    // Assume process.env.API_KEY is pre-configured and valid.
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const createChatSession = () => {
  const client = getAiClient();
  
  return client.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });
};