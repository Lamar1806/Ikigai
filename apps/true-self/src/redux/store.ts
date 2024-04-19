// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import authReducer from './authSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
