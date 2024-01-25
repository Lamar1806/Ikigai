// settingsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Settings {
  darkMode: boolean;
  // Add other settings as needed
}

const initialState: Settings = {
  darkMode: false,
  // Initialize other settings
};

const SettingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    // Add other settings-related actions
  },
});

export const { toggleDarkMode } = SettingsSlice.actions;

export default SettingsSlice.reducer;
