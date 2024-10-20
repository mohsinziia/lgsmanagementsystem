import Image from "next/image";
import Link from "next/link";
import {
  Home,
  LayoutDashboardIcon,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  School2Icon,
  Search,
  Settings,
  ShoppingCart,
  Users2,
  TrophyIcon,
  PartyPopperIcon,
  Moon,
} from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import { signOut } from "next-auth/react";
import ToggleThemeButton from "./toggleThemeButton";
import FontComponent from "./FontComponent";
import CustomSheet from "./CustomSheet";
export default function Dashboard({
  children,
  window,
  handleWindowChange,
}: {
  children: React.ReactNode;
  window: string;
  handleWindowChange: (window: string) => void;
}) {
  const logoutUser = async () => {
    const response = await signOut({
      redirect: true,
      callbackUrl: "/sign-in",
    });
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => handleWindowChange("Main")}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    window === "Main"
                      ? "text-accent-foreground bg-accent"
                      : "text-muted-foreground"
                  } transition-colors hover:text-foreground md:h-8 md:w-8`}
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Main</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Main</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() =>
                    handleWindowChange("Attendance and Student Performance")
                  }
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    window === "Attendance and Student Performance"
                      ? "text-accent-foreground bg-accent"
                      : "text-muted-foreground"
                  } transition-colors hover:text-foreground md:h-8 md:w-8`}
                >
                  <School2Icon className="h-5 w-5" />
                  <span className="sr-only">
                    Attendance and Student Performance
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Attendance and Student Performance
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  onClick={() => handleWindowChange("Academics")}
                  href="#"
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    window === "Academics"
                      ? "text-accent-foreground bg-accent"
                      : "text-muted-foreground"
                  } transition-colors hover:text-foreground md:h-8 md:w-8`}
                >
                  <TrophyIcon className="h-5 w-5" />
                  <span className="sr-only">Academics</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Academics</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => handleWindowChange("Events")}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    window === "Events"
                      ? "text-accent-foreground bg-accent"
                      : "text-muted-foreground"
                  } transition-colors hover:text-foreground md:h-8 md:w-8`}
                >
                  <PartyPopperIcon className="h-5 w-5" />
                  <span className="sr-only">Events</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Events</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => handleWindowChange("Productivity")}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    window === "Productivity"
                      ? "text-accent-foreground bg-accent"
                      : "text-muted-foreground"
                  } transition-colors hover:text-foreground md:h-8 md:w-8`}
                >
                  <LineChart className="h-5 w-5" />
                  <span className="sr-only">Productivity</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Productivity</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <FontComponent />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <ToggleThemeButton />
              </TooltipTrigger>
              <TooltipContent side="right">Toggle Dark Mode</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => handleWindowChange("Settings")}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    window === "Settings"
                      ? "text-accent-foreground bg-accent"
                      : "text-muted-foreground"
                  } transition-colors hover:text-foreground md:h-8 md:w-8`}
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <CustomSheet onWindowChange={handleWindowChange} window={window} />
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">{window}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  src="/placeholder-user.jpg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="#" onClick={() => handleWindowChange("Settings")}>
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => logoutUser()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {children}
      </div>
    </div>
  );
}
