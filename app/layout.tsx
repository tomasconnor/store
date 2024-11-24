import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${libreFranklin.className} dark`}>
        <NextIntlClientProvider messages={messages}>
          <Provider>{children}</Provider>

          <Snowfall
            color="white"
            snowflakeCount={50}
            speed={[0, 0.5]}
            radius={[0, 0.5]}
            wind={[0, 1]}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
