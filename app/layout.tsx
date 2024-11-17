import React from "react";

import type { Metadata } from "next";

import { Libre_Franklin } from "next/font/google";
const libreFranklin = Libre_Franklin({ subsets: ["latin"], weight: "600" });

import Snowfall from "@/components/Snowfall";
import Provider from "@/components/Provider";

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
      <body className={`${libreFranklin.className} dark`}>
        <Provider>{children}</Provider>

        <Snowfall
          color="white"
          snowflakeCount={50}
          speed={[0, 0.5]}
          radius={[0, 0.5]}
          wind={[0, 1]}
        />
      </body>
    </html>
  );
}
