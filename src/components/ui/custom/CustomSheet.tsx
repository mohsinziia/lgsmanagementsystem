"use client";
import {
  Home,
  LineChart,
  Package2,
  PanelLeft,
  PartyPopperIcon,
  School2Icon,
  Settings,
  TrophyIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";
import { Button } from "../button";
import ToggleThemeButton from "./toggleThemeButton";

const CustomSheet = ({
  window,
  onWindowChange,
}: {
  window: string;
  onWindowChange: (window: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <div className="flex space-x-5 items-center">
            <Link
              href="#"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <ToggleThemeButton />
          </div>
          <Link
            href="#"
            onClick={() => {
              onWindowChange("Main");
              setIsOpen(false);
            }}
            className={`flex items-center gap-4 px-2.5 ${
              window === "Main"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Home className="h-5 w-5" />
            Main
          </Link>
          <Link
            href="#"
            onClick={() => {
              onWindowChange("Attendance and Student Performance");
              setIsOpen(false);
            }}
            className={`flex items-center gap-4 px-2.5 ${
              window === "Attendance and Student Performance"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <School2Icon className="h-5 w-5" />
            Attendance and Student Performance
          </Link>
          <Link
            href="#"
            onClick={() => {
              onWindowChange("Academics");
              setIsOpen(false);
            }}
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <TrophyIcon className="h-5 w-5" />
            Academics
          </Link>
          <Link
            href="#"
            onClick={() => {
              onWindowChange("Events");
              setIsOpen(false);
            }}
            className={`flex items-center gap-4 px-2.5 ${
              window === "Events"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <PartyPopperIcon className="h-5 w-5" />
            Events
          </Link>
          <Link
            href="#"
            onClick={() => {
              onWindowChange("Productivity");
              setIsOpen(false);
            }}
            className={`flex items-center gap-4 px-2.5 ${
              window === "Productivity"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <LineChart className="h-5 w-5" />
            Productivity
          </Link>

          <Link
            href="#"
            onClick={() => {
              onWindowChange("Settings");
              setIsOpen(false);
            }}
            className={`flex items-center gap-4 px-2.5 ${
              window === "Settings"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSheet;
