import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="absolute py-6 w-full flex items-center justify-between text-foreground">
      <ul className="flex mx-4 ">
        <li className="text-2xl text-muted-foreground hover:text-foreground">
          Dashboard App
        </li>
      </ul>
      <ul className="mx-4">
        <li>
          <Button onClick={() => signIn()} className="h-9 px-4 py-2 mx-4 ">
            Sign In
          </Button>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
