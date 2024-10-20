"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import { Font, Theme, setAppAppearance } from "@/lib/appearanceSlice";

export default function StoreProvider({
  children,
  initialTheme,
  initialFont,
}: {
  children: React.ReactNode;
  initialTheme: Theme;
  initialFont: Font;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(
      setAppAppearance({ theme: initialTheme, font: initialFont })
    );
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
