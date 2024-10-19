import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Theme = "light" | "dark";

type ThemeState = {
  theme: Theme;
};

const initialState: ThemeState = {
  theme: "light",
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setAppTheme: (state: ThemeState, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      // setTheme(action.payload.theme);
    },
  },
});

export const { setAppTheme } = themeSlice.actions;

export default themeSlice.reducer;
