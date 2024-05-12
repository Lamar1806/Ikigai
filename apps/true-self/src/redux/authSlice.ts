// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
}

interface AuthState {
  isAuthenticated: boolean;
  user?: User;
  error?: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: undefined,
  error: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = undefined;
      localStorage.setItem('trueSelfVibsUser', JSON.stringify(state));
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.user = undefined;
      state.error = action.payload;
      localStorage.removeItem('trueSelfVibsUser');
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = undefined;
      state.error = undefined;
      localStorage.removeItem('trueSelfVibsUser');
    },
    checkAuthStatus: (state) => {
      const storedState = localStorage.getItem('trueSelfVibsUser');
      if (storedState) {
        const parsedState = JSON.parse(storedState) as AuthState;
        if (parsedState && parsedState.user) {
          state.isAuthenticated = parsedState.isAuthenticated;
          state.user = parsedState.user;
          state.error = undefined;
        }
      }
    },
  },
});

export const { loginSuccess, loginFailure, logout, checkAuthStatus } =
  authSlice.actions;
export default authSlice.reducer;
