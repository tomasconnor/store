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
import { useTranslations } from "next-intl";

import type { NavItem } from "@/types";

const Menu: React.FC = (): React.JSX.Element => {
  const t = useTranslations();

  const navItems: NavItem[] = [
    { text: t("privacyPolicy"), slug: "/privacy" },
    { text: t("termsAndConditions"), slug: "/terms" },
    { text: t("contactUs"), slug: "/contact" },
  ];

  const [open, setOpen] = useState<boolean>(false);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
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
        <nav className="flex flex-col gap-4">
          {navItems.map((item: NavItem, index: number) => {
            const nextSmoothTransitionValue: number = index * 0.05;
            const transitionDelay: number = 0.15 + nextSmoothTransitionValue;

            return (
              <Link
                key={item.text}
                href={item.slug}
                onClick={() => setOpen(false)}
                className="hover:opacity-85 text-center text-2xl uppercase"
              >
                <FadeText
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
