"use client";
import { Button } from "@/components/ui/button";
import Dashboard from "@/components/ui/custom/Dashboard";
import Settings from "@/components/ui/custom/Settings";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useState } from "react";

export default function Layout({
  general,
  themes,
}: Readonly<{
  general: React.ReactNode;
  themes: React.ReactNode;
}>) {
  const [currentSettingsWindow, setCurrentSettingsWindow] = useState("General");
  const { data: session } = useSession();

  return (
    <Settings
      window={currentSettingsWindow}
      handleWindowChange={setCurrentSettingsWindow}
    >
      {currentSettingsWindow === "General" && general}
      {currentSettingsWindow === "Themes" && themes}
    </Settings>
  );
}
