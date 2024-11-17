import React from "react";

import type { AccordionItemProps } from "@/types";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// @TODO
const accordions: AccordionItemProps[] = [
  {
    trigger: "How can I get in touch?",
    content:
      "You can reach us by filling out the contact form on this page, emailing us directly, or calling our customer service hotline.",
  },
  {
    trigger: "What is your response time?",
    content:
      "Our team aims to respond within 24 hours on weekdays. If you contact us over the weekend, please allow additional time.",
  },
  {
    trigger: "Do you offer support in multiple languages?",
    content:
      "Currently, we provide support in English. Let us know if additional language support would be helpful.",
  },
  {
    trigger: "Where are you located?",
    content:
      "Our main office is located in [City, Country]. For more details, please refer to the location section on this page.",
  },
  {
    trigger: "Can I visit your office in person?",
    content:
      "Visits are by appointment only. Please contact us to schedule a visit.",
  },
  {
    trigger: "How do I report a technical issue?",
    content:
      "If you're experiencing a technical issue, please describe it in detail on our contact form or reach out to our support email.",
  },
  {
    trigger: "Is my personal information safe?",
    content:
      "Absolutely. We adhere to strict privacy policies to protect your personal data. For more details, please refer to our Privacy Policy.",
  },
  {
    trigger: "How do I check the status of my inquiry?",
    content:
      "Once you've submitted an inquiry, you will receive a confirmation email. Feel free to follow up if you haven't received a response within the expected timeframe.",
  },
  {
    trigger: "Can I request specific information?",
    content:
      "Of course! If you're looking for particular details, please specify them in the message field, and our team will do their best to assist.",
  },
  {
    trigger: "What should I do if I haven’t received a response?",
    content:
      "If you haven't heard back within our standard response time, please check your spam folder or contact us again for further assistance.",
  },
];

const ContactFAQ: React.FC = (): React.JSX.Element => {
  return (
    <div className="w-full flex flex-col items-center mt-12">
      <h3 className="uppercase text-2xl">Frequently asked questions</h3>

      <Accordion type="multiple" className="w-full mt-2">
        {accordions.map((accordion: AccordionItemProps) => (
          <AccordionItem
            key={accordion.trigger}
            value={accordion.trigger}
            className="border-[#262626]"
          >
            <AccordionTrigger className="uppercase text-left hover:no-underline hover:opacity-85">
              {accordion.trigger}
            </AccordionTrigger>
            <AccordionContent className="uppercase text-[#808080]">
              {accordion.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ContactFAQ;
