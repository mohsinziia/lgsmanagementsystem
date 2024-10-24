import dbConnect from "@/lib/dbConnect";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/navigation";
import UserModel from "@/models/User.model";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.image = token.picture;
      }
      return session;
    },
  },

  events: {
    async signIn({ user, account }) {
      dbConnect();
      try {
        const existingUser = await UserModel.findOne({ _id: user.id });

        if (!existingUser) {
          const newUser = await new UserModel({
            _id: user.id,
            username: user.name,
            email: user.email,
            avatar: user.image,
            refCode: "000000",
          });
          await newUser.save();
        } else {
          console.log("User already exists");
        }
        return true;
      } catch (error) {
        console.error("Error saving user:", error);
        return false;
      }
    },
    signOut({ token, session }) {
      console.log("User signed out successfully");
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
