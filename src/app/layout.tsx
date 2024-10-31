import { AuthProvider } from "@/app/providers";
import StoreProvider from "./StoreProvider";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Manrope, Poppins, Roboto_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/ui/custom/Navbar";
import { cookies } from "next/headers";
import { Font, Theme } from "@/lib/appearanceSlice";
import FontWrapper from "@/components/ui/FontWrapper";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "400",
});

const manropeFont = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: "400",
});

const poppinsFont = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

const robotoMonoFont = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Student Dashboard System",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = (cookieStore.get("theme")?.value as Theme) || "light";
  const font = (cookieStore.get("font")?.value as Font) || "arial";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoMonoFont.variable} relative ${interFont.variable} ${manropeFont.variable} ${poppinsFont.variable} antialiased `}
      >
        <StoreProvider initialTheme={theme} initialFont={font}>
          <FontWrapper>
            <AuthProvider>{children}</AuthProvider>
            <Toaster />
          </FontWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
