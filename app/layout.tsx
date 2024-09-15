/** @format */

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const barlowRegular = localFont({
  src: "./fonts/Barlow-Regular.ttf",
  variable: "--font-barlow-regular",
  weight: "400",
});
const barlowCondensedRegular = localFont({
  src: "./fonts/BarlowCondensed-Regular.ttf",
  variable: "--font-barlow-condensed-regular",
  weight: "400",
});

const bellefairRegular = localFont({
  src: "./fonts/Bellefair-Regular.ttf",
  variable: "--font-bellefair-regular",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Space Tourism",
  description:
    "This is a solution to the Space tourism multi-page website challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowRegular.variable} ${barlowCondensedRegular.variable} ${bellefairRegular.variable} h-screen font-barlow text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
