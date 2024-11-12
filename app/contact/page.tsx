import React from "react";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

import { Card } from "@/components/ui/card";

import ContactFAQ from "@/components/ContactFAQ";

export default function Contact(): React.JSX.Element {
  return (
    <>
      <TopBar />
      <Header />

      <main className="flex flex-col items-center w-full px-8 pb-8 max-w-6xl m-auto">
        <h2 className="uppercase text-4xl">Contact us</h2>

        <div className="flex flex-wrap gap-8 mt-8 w-full">
          <Card className="text-center p-8 flex-1">
            <a className="uppercase" href="mailto:orders@tactical.fitness">
              orders@tactical.fitness
            </a>
          </Card>

          <Card className="text-center p-8 flex-1">
            <a className="uppercase" href="mailto:returns@tactical.fitness">
              returns@tactical.fitness
            </a>
          </Card>

          <Card className="text-center p-8 flex-1">
            <a className="uppercase" href="mailto:support@tactical.fitness">
              support@tactical.fitness
            </a>
          </Card>
        </div>

        <ContactFAQ />
      </main>
    </>
  );
}
