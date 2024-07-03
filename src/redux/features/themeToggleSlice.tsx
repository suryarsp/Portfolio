'use client'
import { createSlice } from '@reduxjs/toolkit';

interface themeState {
  isThemeDark: boolean;
}

const initialState: themeState = {
  isThemeDark: false,
};

const themeToggleSlice = createSlice({
  name: 'themeToggle',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isThemeDark = !state.isThemeDark;
    },
  },
});

export const { toggleTheme } = themeToggleSlice.actions;
export default themeToggleSlice.reducer;