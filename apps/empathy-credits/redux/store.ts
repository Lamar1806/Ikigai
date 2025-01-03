import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/test';

export const store = configureStore({
  reducer: { counterSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
