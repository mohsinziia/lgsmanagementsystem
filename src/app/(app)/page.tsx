"use client";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/custom/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {});

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <Button
          onClick={() => signOut()}
          className="w-full white border border-gray-400 py-2 px-4"
        >
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button
        onClick={() => signIn()}
        className="w-full white border border-gray-400 py-2 px-4"
      >
        Sign in with Google
      </Button>
    </>
  );
}
