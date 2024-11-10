import React from "react";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

import { Card } from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { AccordionItemProps } from "@/types";

const accordions: AccordionItemProps[] = [
  {
    id: 1,
    trigger: "How can I get in touch?",
    content:
      "You can reach us by filling out the contact form on this page, emailing us directly, or calling our customer service hotline.",
  },
  {
    id: 2,
    trigger: "What is your response time?",
    content:
      "Our team aims to respond within 24 hours on weekdays. If you contact us over the weekend, please allow additional time.",
  },
  {
    id: 3,
    trigger: "Do you offer support in multiple languages?",
    content:
      "Currently, we provide support in English. Let us know if additional language support would be helpful.",
  },
  {
    id: 4,
    trigger: "Where are you located?",
    content:
      "Our main office is located in [City, Country]. For more details, please refer to the location section on this page.",
  },
  {
    id: 5,
    trigger: "Can I visit your office in person?",
    content:
      "Visits are by appointment only. Please contact us to schedule a visit.",
  },
  {
    id: 6,
    trigger: "How do I report a technical issue?",
    content:
      "If you're experiencing a technical issue, please describe it in detail on our contact form or reach out to our support email.",
  },
  {
    id: 7,
    trigger: "Is my personal information safe?",
    content:
      "Absolutely. We adhere to strict privacy policies to protect your personal data. For more details, please refer to our Privacy Policy.",
  },
  {
    id: 8,
    trigger: "How do I check the status of my inquiry?",
    content:
      "Once you've submitted an inquiry, you will receive a confirmation email. Feel free to follow up if you haven't received a response within the expected timeframe.",
  },
  {
    id: 9,
    trigger: "Can I request specific information?",
    content:
      "Of course! If you're looking for particular details, please specify them in the message field, and our team will do their best to assist.",
  },
  {
    id: 10,
    trigger: "What should I do if I haven’t received a response?",
    content:
      "If you haven't heard back within our standard response time, please check your spam folder or contact us again for further assistance.",
  },
];

export default function Contact(): React.JSX.Element {
  return (
    <>
      <TopBar />
      <Header />

      <main className="flex flex-col items-center w-full px-8 pb-8 max-w-6xl m-auto">
        <h2 className="uppercase text-4xl">Contact us</h2>

        <div className="flex flex-wrap gap-8 mt-8 w-full">
          <Card className="text-center p-8 flex-1">
            <h2 className="text-2xl uppercase">Orders</h2>
            <a className="uppercase" href="mailto:orders@tactical.fitness">
              orders@tactical.fitness
            </a>
          </Card>

          <Card className="text-center p-8 flex-1">
            <h2 className="text-2xl uppercase">Returns</h2>
            <a className="uppercase" href="mailto:returns@tactical.fitness">
              returns@tactical.fitness
            </a>
          </Card>

          <Card className="text-center p-8 flex-1">
            <h2 className="text-2xl uppercase">Support</h2>
            <a className="uppercase" href="mailto:support@tactical.fitness">
              support@tactical.fitness
            </a>
          </Card>
        </div>

        <div className="w-full flex flex-col items-center mt-12">
          <h3 className="uppercase text-2xl">Frequently asked questions</h3>

          <Accordion type="single" className="w-full mt-2">
            {accordions.map((accordion: AccordionItemProps) => (
              <AccordionItem
                key={accordion.id}
                value={`item-${accordion.id}"`}
                className="border-[#262626]"
              >
                <AccordionTrigger className="uppercase">
                  {accordion.trigger}
                </AccordionTrigger>
                <AccordionContent className="uppercase">
                  {accordion.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </>
  );
}
