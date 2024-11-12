"use client";

import React, { useState } from "react";

import Link from "next/link";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTrigger,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { FadeText } from "@/components/ui/fade-text";

import { Text, X } from "lucide-react";

import { NavItem } from "@/types";

const navItems: NavItem[] = [
  { text: "Privacy Policy", slug: "/privacy" },
  { text: "Terms and Conditions", slug: "/terms" },
  { text: "Contact Us", slug: "/contact" },
];

const Menu: React.FC = (): React.JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger className="dark:focus-visible:outline-none" asChild>
        <Button variant="ghost" className="[&_svg]:size-5 h-12">
          <Text />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="flex flex-col items-center justify-between min-h-full min-w-full dark:border-none p-6">
        <AlertDialogTitle className="hidden" /> {/* Warning fix */}
        <AlertDialogDescription className="hidden" /> {/* Warning fix */}
        <header className="flex justify-end w-full">
          <AlertDialogCancel className="border-none [&_svg]:size-5 h-12">
            <X />
          </AlertDialogCancel>
        </header>
        <nav className="flex flex-col text-center text-2xl gap-4">
          {navItems.map((item: NavItem, index: number) => {
            const nextSmoothTransitionValue: number = index * 0.05;
            const transitionDelay: number = 0.15 + nextSmoothTransitionValue;

            return (
              <Link
                key={item.text}
                href={item.slug}
                onClick={() => setOpen(false)}
                className="hover:opacity-85"
              >
                <FadeText
                  className="uppercase"
                  direction="up"
                  framerProps={{
                    show: { transition: { delay: transitionDelay } },
                  }}
                  text={item.text}
                />
              </Link>
            );
          })}
        </nav>
        <footer />
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Menu;
