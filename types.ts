
export enum ViewType {
  CHAT = 'CHAT',
  TEXT_GEN = 'TEXT_GEN',
  IMAGE_GEN = 'IMAGE_GEN',
  HISTORY = 'HISTORY'
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  timestamp: Date;
}

export interface TextContent {
  id: string;
  title: string;
  body: string;
  type: string;
  timestamp: Date;
}
