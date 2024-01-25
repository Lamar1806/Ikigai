// chatroomSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Chatroom {
  id: string;
  name: string;
  members: string[];
  // Add other chatroom details as needed
}

const initialState: Chatroom[] = [];

const ChatroomSlice = createSlice({
  name: 'chatroom',
  initialState,
  reducers: {
    createChatroom: (state, action: PayloadAction<Chatroom>) => {
      state.push(action.payload);
    },
    joinChatroom: (
      state,
      action: PayloadAction<{ roomId: string; userId: string }>
    ) => {
      const { roomId, userId } = action.payload;
      const chatroom = state.find((room) => room.id === roomId);
      if (chatroom) {
        chatroom.members.push(userId);
      }
    },
    // Add other chatroom-related actions
  },
});

export const { createChatroom, joinChatroom } = ChatroomSlice.actions;

export default ChatroomSlice.reducer;
