// statusSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserStatus {
  userId: string;
  status: 'online' | 'offline' | 'away' | 'busy';
}

const initialState: UserStatus[] = [];

const StatusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    updateStatus: (state, action: PayloadAction<UserStatus>) => {
      const existingIndex = state.findIndex(
        (status) => status.userId === action.payload.userId
      );
      if (existingIndex !== -1) {
        state[existingIndex] = action.payload;
      } else {
        state.push(action.payload);
      }
    },
    // Add other status-related actions
  },
});

export const { updateStatus } = StatusSlice.actions;

export default StatusSlice.reducer;
