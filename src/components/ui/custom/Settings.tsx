import Link from "next/link";
import React from "react";
import { Card } from "../card";

const Settings = ({
  children,
  window,
  handleWindowChange,
}: {
  children: React.ReactNode;
  window: string;
  handleWindowChange: (window: string) => void;
}) => {
  return (
    <div className="space-y-6 p-10 pb-16 md:block">
      <div className="space-y-0.5">
        <Card className="p-4">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </Card>
      </div>
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-border h-[1px] w-full my-6"
      ></div>
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <Card className="p-4 px-6 self-start">
          <aside className="-mx-4 ">
            <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
              <Link
                className={`${
                  window === "Profile" && "bg-muted hover:bg-muted"
                } inline-flex rounded-md items-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 justify-start`}
                href="#"
                onClick={() => {
                  return handleWindowChange("Profile");
                }}
              >
                Profile
              </Link>

              <Link
                className={`${
                  window === "Appearance" && "bg-muted hover:bg-muted"
                } inline-flex rounded-md items-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 justify-start`}
                href="#"
                onClick={() => {
                  return handleWindowChange("Appearance");
                }}
              >
                Appearance
              </Link>
            </nav>
          </aside>
        </Card>
        {children}
      </div>
    </div>
  );
};

export default Settings;

const s1 =
  "inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 bg-muted hover:bg-muted justify-start";
const s2 =
  "inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start";
