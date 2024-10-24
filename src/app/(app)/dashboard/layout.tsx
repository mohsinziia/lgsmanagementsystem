"use client";
import Dashboard from "@/components/ui/custom/Dashboard";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { User } from "next-auth";

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
  const { data: session } = useSession();

  const changeWindow = (window: string) => {
    setCurrentWindow(window);
  };

  if (session) {
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

  return <h2>Please sign in to continue</h2>;
}
