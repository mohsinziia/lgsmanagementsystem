import React from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card";

const Hero = () => {
  return (
    <div className="py-12">
      <Card className="sm:p-16 sm:space-y-8 p-8 w-4/5 mx-auto space-y-2 flex flex-col items-center">
        <CardHeader>
          <h1 className="sm:text-5xl m-0 p-0 text-3xl font-black text-center uppercase">
            LGS Dashboard
          </h1>
          <p className="sm:text-xl text-center text-muted-foreground">
            Welcome to the LGS Paragon Student Dashboard. Stay updated with your
            classes, grades, announcements, and important school
            information—effortlessly!
          </p>
        </CardHeader>
        <Button
          onClick={() => signIn()}
          className="sm:self-stretch w-3/5 mx-auto h-9 px-4 py-2"
        >
          Sign In
        </Button>
      </Card>
    </div>
  );
};

export default Hero;
