// src/features/users/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: 0,
    users: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  },
  reducers: {
    addUser: (state, action) => {
      //@ts-ignore
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      //@ts-ignore
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
