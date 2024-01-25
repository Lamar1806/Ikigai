// notificationSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Notification {
  id: string;
  content: string;
  timestamp: Date;
  type: 'message' | 'friendRequest' | 'other';
}

const initialState: Notification[] = [];

const NotificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.push(action.payload);
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      return state.filter((notification) => notification.id !== action.payload);
    },
  },
});

export const { addNotification, removeNotification } =
  NotificationSlice.actions;

export default NotificationSlice.reducer;
