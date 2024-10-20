import { useSession } from "next-auth/react";
import React from "react";
import { Button } from "../button";
import Link from "next/link";

const EnterDashboard = () => {
  interface SessionUser {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }

  const { data: session } = useSession();

  if (session) {
    console.log(session);
    // const user: SessionUser = session.user as SessionUser;
    return (
      <>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground sm:self-stretch w-3/5 mx-auto h-9 px-4 py-2"
        >
          Enter Dashboard
        </Link>
      </>
    );
  }
  return <></>;
};

export default EnterDashboard;
