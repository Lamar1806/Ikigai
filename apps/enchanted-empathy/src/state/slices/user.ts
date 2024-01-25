import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  userName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  profileURL?: string;
  userSummary?: string;
  userResponsePreference?: string;
}

const initialState: User = {
  id: '-1',
  userName: 'null',
  fullName: 'null',
  phoneNumber: 'null',
  email: 'null',
  profileURL: 'null',
  userSummary: 'null',
  userResponsePreference: 'null',
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setProfileURL: (state, action: PayloadAction<string>) => {
      state.profileURL = action.payload;
    },
    setUserSummary: (state, action: PayloadAction<string>) => {
      state.userSummary = action.payload;
    },
    setUserResponsePreference: (state, action: PayloadAction<string>) => {
      state.userResponsePreference = action.payload;
    },
  },
});

export const {
  setName,
  setPhoneNumber,
  setEmail,
  setProfileURL,
  setUserSummary,
  setUserResponsePreference,
} = UserSlice.actions;

export default UserSlice.reducer;
