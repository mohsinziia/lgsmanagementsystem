"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import { Theme } from "@/lib/themeSlice";
import { setAppTheme } from "@/lib/themeSlice";

export default function StoreProvider({
  children,
  initialTheme,
}: {
  children: React.ReactNode;
  initialTheme: Theme;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(setAppTheme(initialTheme));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
