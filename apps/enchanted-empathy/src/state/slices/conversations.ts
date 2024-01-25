import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  id: string;
  senderId: string;
  timestamp: Date;
  content: {
    text: string;
    imageURL?: string;
    videoURL?: string;
    suggestedResponses?: string[];
  };
}

interface Conversation {
  id: string;
  messages: Message[];
}
