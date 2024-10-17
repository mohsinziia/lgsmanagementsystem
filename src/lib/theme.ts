"use client";
const toggleTheme = (isCurrentlyDark: boolean): boolean => {
  if (!isCurrentlyDark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
  return !isCurrentlyDark;
};

type Theme = "light" | "dark";
const setTheme = (newTheme: Theme): Theme => {
  if (newTheme === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
  return newTheme;
};

const getTheme = (): Theme => {
  const theme: Theme = (localStorage.getItem("theme") as Theme) || "light";
  return theme;
};

export type { Theme };
export { toggleTheme, setTheme, getTheme };
