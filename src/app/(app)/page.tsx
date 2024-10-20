import Hero from "@/components/ui/custom/Hero";
import Navbar from "@/components/ui/custom/Navbar";

export default function Home() {
  interface SessionUser {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }

  return (
    <div className=" bg-muted/40 h-screen grid place-content-center">
      <Navbar />

      <Hero />
    </div>
  );
  // if (session) {
  //   console.log(session);
  //   const user: SessionUser = session.user as SessionUser;
  //   return (
  //     <>
  //       Signed in as {user.email} <br />
  //       <Button
  //         onClick={() => signOut()}
  //         className="w-full white border border-gray-400 py-2 px-4"
  //       >
  //         Sign out
  //       </Button>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     Not signed in <br />
  //     <Button
  //       onClick={() => signIn()}
  //       className="w-full white border border-gray-400 py-2 px-4"
  //     >
  //       Sign in with Google
  //     </Button>
  //   </>
  // );
}
