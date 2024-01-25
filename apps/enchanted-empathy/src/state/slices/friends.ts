import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Friend {
  id: string;
  userName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  profileURL?: string;
  userSummary?: string;
  userResponsePreference?: string;
}

const initialState: Friend[] = [];

const FriendSlice = createSlice({
  name: 'friend',
  initialState,
  reducers: {
    addFriend: (state, action: PayloadAction<Friend>) => {
      state.push(action.payload);
    },
    removeFriend: (state, action: PayloadAction<string>) => {
      return state.filter((friend) => friend.id !== action.payload);
    },
  },
});

export const { addFriend, removeFriend } = FriendSlice.actions;

export default FriendSlice.reducer;
