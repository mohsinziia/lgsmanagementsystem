"use client";
import React, { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setAppAppearance } from "@/lib/appearanceSlice";
import { RootState } from "@/lib/store";
import { setCookie } from "nookies";

const ToggleThemeButton = () => {
  const { theme, font } = useAppSelector(
    (state: RootState) => state.appearanceStore
  );
  // const [currentTheme, setCurrentTheme] = useState(theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setAppAppearance({ theme: newTheme, font }));
    setCookie(null, "theme", newTheme, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  };

  return (
    <Link
      href="#"
      onClick={() => toggleTheme()}
      className={`flex h-9 w-9 items-center justify-center rounded-lg ${
        theme === "dark"
          ? "text-accent-foreground bg-accent"
          : "text-muted-foreground"
      } transition-colors hover:text-foreground md:h-8 md:w-8`}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}

      <span className="sr-only">Toggle Dark Mode</span>
    </Link>
  );
};

export default React.forwardRef(ToggleThemeButton);
