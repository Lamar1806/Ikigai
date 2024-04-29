// src/features/users/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
