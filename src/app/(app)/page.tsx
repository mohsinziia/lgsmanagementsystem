"use client";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/custom/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
export default function Home() {
  const { data: session } = useSession();

  interface SessionUser {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }

  if (session) {
    const user: SessionUser = session.user as SessionUser;
    return (
      <>
        Signed in as {user.email} <br />
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
