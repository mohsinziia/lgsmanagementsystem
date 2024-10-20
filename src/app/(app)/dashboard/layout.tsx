"use client";
import { Button } from "@/components/ui/button";
import Dashboard from "@/components/ui/custom/Dashboard";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import React, { useEffect, useState } from "react";

export default function Layout({
  main,
  attendance,
  academics,
  events,
  productivity,
  settings,
}: Readonly<{
  children: React.ReactNode;
  main: React.ReactNode;
  attendance: React.ReactNode;
  academics: React.ReactNode;
  events: React.ReactNode;
  productivity: React.ReactNode;
  settings: React.ReactNode;
}>) {
  const [currentWindow, setCurrentWindow] = useState("Main");
  const { theme, font } = useAppSelector(
    (state: RootState) => state.appearanceStore
  );

  const changeWindow = (window: string) => {
    setCurrentWindow(window);
  };

  return (
    <Dashboard window={currentWindow} handleWindowChange={changeWindow}>
      {currentWindow === "Main" && main}
      {currentWindow === "Attendance and Student Performance" && attendance}
      {currentWindow === "Academics" && academics}
      {currentWindow === "Events" && events}
      {currentWindow === "Productivity" && productivity}
      {currentWindow === "Settings" && settings}
    </Dashboard>
  );
}
