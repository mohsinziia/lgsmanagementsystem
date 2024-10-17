"use client";
import { getTheme, setTheme, toggleTheme } from "@/lib/theme";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
  theme: "light" | "dark";
};

const initialState: ThemeState = {
  theme: getTheme() || "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setAppTheme: (state: ThemeState, action: PayloadAction<ThemeState>) => {
      state.theme = action.payload.theme;
      setTheme(action.payload.theme);
    },
    toggleAppTheme: (state: ThemeState) => {
      const currentTheme = state.theme;
      if (currentTheme === "light") {
        state.theme = "dark";
        toggleTheme(false);
      } else {
        state.theme = "light";
        toggleTheme(true);
      }
    },
  },
});

export const { setAppTheme } = themeSlice.actions;

export default themeSlice.reducer;
