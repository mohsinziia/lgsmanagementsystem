import { Theme } from "@/lib/theme";
import React from "react";

const lightColors = ["bg-[#ecedef]", "bg-white"];
const darkColors = ["bg-slate-400", "bg-slate-800", "bg-slate-950"];

type ThemeProps = {
  theme: Theme;
  className?: string;
};

const ThemeCard = ({ theme, className = "" }: ThemeProps) => {
  return (
    <div
      className={` ${className} items-center rounded-md border-2 border-muted p-1`}
    >
      <div
        className={`space-y-2 rounded-sm ${
          theme === "light" ? lightColors[0] : darkColors[2]
        } p-2 `}
      >
        <ThemeCardElement1 theme={theme} />
        <ThemeCardElement2 theme={theme} />
        <ThemeCardElement2 theme={theme} />
      </div>
    </div>
  );
};

export default ThemeCard;

const ThemeCardElement1 = ({ theme }: { theme: Theme }) => {
  return (
    <div
      className={`space-y-2 rounded-md ${
        theme === "light" ? lightColors[1] : darkColors[1]
      } p-2 shadow-sm`}
    >
      <div
        className={`h-2 w-[80px] rounded-lg ${
          theme === "light" ? lightColors[0] : darkColors[0]
        }`}
      />
      <div
        className={`h-2 w-[100px] rounded-lg ${
          theme === "light" ? lightColors[0] : darkColors[0]
        }`}
      />
    </div>
  );
};

const ThemeCardElement2 = ({ theme }: { theme: Theme }) => {
  return (
    <div
      className={`flex items-center space-x-2 rounded-md ${
        theme === "light" ? lightColors[1] : darkColors[1]
      } p-2 shadow-sm`}
    >
      <div
        className={`h-4 w-4 rounded-full ${
          theme === "light" ? lightColors[0] : darkColors[0]
        }`}
      />
      <div
        className={`h-2 w-[100px] rounded-lg ${
          theme === "light" ? lightColors[0] : darkColors[0]
        }`}
      />
    </div>
  );
};
