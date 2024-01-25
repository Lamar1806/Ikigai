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

const initialState: Conversation[] = [];

const ConversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    addMessage: (
      state,
      action: PayloadAction<{ conversationId: string; message: Message }>
    ) => {
      const { conversationId, message } = action.payload;
      const conversation = state.find((conv) => conv.id === conversationId);
      if (conversation) {
        conversation.messages.push(message);
      }
    },
    createConversation: (state, action: PayloadAction<Conversation>) => {
      state.push(action.payload);
    },
    deleteConversation: (state, action: PayloadAction<string>) => {
      return state.filter((conv) => conv.id !== action.payload);
    },
  },
});

export const { addMessage, createConversation, deleteConversation } =
  ConversationSlice.actions;

export default ConversationSlice.reducer;
