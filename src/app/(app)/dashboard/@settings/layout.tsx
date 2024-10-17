"use client";
import { Button } from "@/components/ui/button";
import Dashboard from "@/components/ui/custom/Dashboard";
import Settings from "@/components/ui/custom/Settings";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useState } from "react";

export default function Layout({
  profile,
  appearance,
  notifications,
}: Readonly<{
  profile: React.ReactNode;
  appearance: React.ReactNode;
  notifications: React.ReactNode;
}>) {
  const [currentSettingsWindow, setCurrentSettingsWindow] =
    useState("Notifications");

  return (
    <Settings
      window={currentSettingsWindow}
      handleWindowChange={setCurrentSettingsWindow}
    >
      {currentSettingsWindow === "Profile" && profile}
      {currentSettingsWindow === "Appearance" && appearance}
    </Settings>
  );
}
