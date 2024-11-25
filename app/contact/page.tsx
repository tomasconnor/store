import React from "react";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

import { Card } from "@/components/ui/card";

import ContactFAQ from "@/components/ContactFAQ";

import { useTranslations } from "next-intl";

export default function Contact(): React.JSX.Element {
  const t = useTranslations();

  return (
    <>
      <TopBar />
      <Header />

      <main className="px-6 pb-10 max-w-5xl m-auto">
        <h2 className="uppercase text-4xl text-center">{t("contactUs")}</h2>

        <div className="flex flex-wrap gap-8 mt-8">
          <Card className="text-center p-6 flex-1">
            <a
              className="uppercase hover:opacity-85"
              href="mailto:orders@tactical.fitness"
            >
              orders@tactical.fitness
            </a>
          </Card>

          <Card className="text-center p-6 flex-1">
            <a
              className="uppercase hover:opacity-85"
              href="mailto:returns@tactical.fitness"
            >
              returns@tactical.fitness
            </a>
          </Card>

          <Card className="text-center p-6 flex-1">
            <a
              className="uppercase hover:opacity-85"
              href="mailto:support@tactical.fitness"
            >
              support@tactical.fitness
            </a>
          </Card>
        </div>

        <ContactFAQ />
      </main>
    </>
  );
}
