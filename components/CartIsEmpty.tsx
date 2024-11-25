import React from "react";

import { Button } from "@/components/ui/button";

import Link from "next/link";

import { useTranslations } from "next-intl";

const CartIsEmpty: React.FC = (): React.JSX.Element => {
  const t = useTranslations();

  return (
    <div className="flex items-center flex-col px-6 gap-4">
      <h2 className="uppercase text-4xl text-center">{t("cartIsEmpty")}</h2>

      <Button variant="outline" asChild className="uppercase">
        <Link href="/">{t("backHome")}</Link>
      </Button>
    </div>
  );
};

export default CartIsEmpty;
