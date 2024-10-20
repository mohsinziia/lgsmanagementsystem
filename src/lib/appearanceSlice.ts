import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Theme = "light" | "dark";
export type Font = "inter" | "manrope" | "arial" | "poppins";
export const fontClasses: string[] = [
  "font-inter",
  "font-manrope",
  "font-arial",
  "font-poppins",
];

type AppearanceState = {
  theme: Theme;
  font: Font;
};

const initialState: AppearanceState = {
  theme: "light",
  font: "arial",
};
export const appearanceSlice = createSlice({
  name: "appearance",
  initialState,
  reducers: {
    setAppAppearance: (
      state: AppearanceState,
      action: PayloadAction<AppearanceState>
    ) => {
      state.theme = action.payload.theme;
      state.font = action.payload.font;
    },
  },
});

export const { setAppAppearance } = appearanceSlice.actions;

export default appearanceSlice.reducer;
