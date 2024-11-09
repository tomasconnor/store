import React from "react";

import Link from "next/link";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { FadeText } from "@/components/ui/fade-text";

import { Text, X } from "lucide-react";

const Menu: React.FC = (): React.JSX.Element => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="dark:focus-visible:outline-none" asChild>
        <Button variant="ghost" className="[&_svg]:size-5 h-12">
          <Text />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="flex flex-col items-center justify-between min-h-full min-w-full dark:border-none p-6">
        <AlertDialogTitle className="hidden" /> {/* Warning fix */}
        <header className="flex justify-end w-full">
          <AlertDialogCancel className="border-none [&_svg]:size-5 h-12">
            <X />
          </AlertDialogCancel>
        </header>
        <nav className="flex flex-col text-center text-2xl gap-4">
          <Link href="/privacy" className="hover:opacity-85">
            <FadeText
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.15 } },
              }}
              text="PRIVACY POLICY"
            />
          </Link>

          <Link href="/terms" className="hover:opacity-85">
            <FadeText
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.2 } },
              }}
              text="TERMS AND CONDITIONS"
            />
          </Link>

          <Link href="/contact" className="hover:opacity-85">
            <FadeText
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.25 } },
              }}
              text="CONTACT US"
            />
          </Link>
        </nav>
        <footer />
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Menu;
