
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const generateAIResponse = async (prompt: string, systemInstruction?: string): Promise<string> => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      systemInstruction: systemInstruction || "Bạn là một trợ lý ảo thông minh, hữu ích và sáng tạo. Hãy trả lời bằng tiếng Việt.",
    }
  });
  return response.text || "Xin lỗi, tôi không thể xử lý yêu cầu này.";
};

export const generateAIImage = async (prompt: string): Promise<string> => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [{ text: prompt }]
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1"
      }
    }
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  throw new Error("Không thể tạo hình ảnh.");
};

export const generateStructuredText = async (prompt: string, type: string): Promise<{ title: string; body: string }> => {
  const ai = getAIClient();
  const systemInstruction = `Bạn là một chuyên gia viết nội dung (${type}). Hãy trả lời dưới định dạng JSON với hai trường: "title" và "body". Hãy viết bằng tiếng Việt.`;
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      systemInstruction,
      responseMimeType: "application/json"
    }
  });

  try {
    const data = JSON.parse(response.text || '{}');
    return {
      title: data.title || "Không có tiêu đề",
      body: data.body || "Không có nội dung"
    };
  } catch (e) {
    return {
      title: "Lỗi xử lý",
      body: response.text || "Không thể phân tích kết quả."
    };
  }
};
