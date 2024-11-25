"use client";

import React, { useState } from "react";

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

import { X } from "lucide-react";

import type { LanguageItem } from "@/types";

import { useLocale } from "next-intl";
import { setUserLocale } from "@/services/locale";

const languages: LanguageItem[] = [
  { label: "Čeština", locale: "cs" },
  { label: "Slovenčina", locale: "sk" },
  { label: "English", locale: "en" },
];

const LanguageSwitcher: React.FC = (): React.JSX.Element => {
  const locale = useLocale();
  const currentLanguage = languages.find(
    (language: LanguageItem) => language.locale === locale
  );

  const [open, setOpen] = useState<boolean>(false);

  const handleLocale = (locale: string) => {
    setUserLocale(locale);
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className="h-12 uppercase">
          {currentLanguage?.label}
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
          {languages.map((item: LanguageItem, index: number) => {
            const nextSmoothTransitionValue: number = index * 0.05;
            const transitionDelay: number = 0.15 + nextSmoothTransitionValue;

            return (
              <span
                key={item.label}
                onClick={() => handleLocale(item.locale)}
                className="hover:opacity-85 text-center text-2xl uppercase cursor-pointer"
              >
                <FadeText
                  direction="up"
                  framerProps={{
                    show: { transition: { delay: transitionDelay } },
                  }}
                  text={item.label}
                />
              </span>
            );
          })}
        </nav>
        <footer />
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LanguageSwitcher;
