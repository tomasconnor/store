import React from "react";

import type { Metadata } from "next";

import { Libre_Franklin } from "next/font/google";
const libreFranklin = Libre_Franklin({ subsets: ["latin"], weight: "600" });

import "./globals.css";

export const metadata: Metadata = {
  title: "Tactical Fitness",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreFranklin.className} dark`}>{children}</body>
    </html>
  );
}
