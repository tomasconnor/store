import React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { Minus, Plus, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import Link from "next/link";

import type { CartItem, CartWithItemsProps } from "@/types";

import { useTranslations } from "next-intl";

const CartWithItems: React.FC<CartWithItemsProps> = ({
  cart,
  subtotal,
  adjustCartItemQuantity,
  upgradeItemToBundle,
  freeShippingThreshold,
}): React.JSX.Element => {
  const t = useTranslations();

  return (
    <div className="flex items-center flex-col px-6 gap-8 pb-10">
      <h2 className="uppercase text-4xl text-center">{t("cart")}</h2>

      <div className="flex items-center flex-col w-full max-w-4xl gap-8">
        {cart.map((item: CartItem) => {
          return (
            <Card
              key={item.id}
              className="flex justify-between items-center gap-10 px-10 py-6 w-full"
            >
              <div className="flex flex-col">
                <Link
                  href={`/${item.id}`}
                  className="uppercase text-2xl hover:opacity-85"
                >
                  {t(item.id)}
                </Link>

                <span className="flex items-center gap-2 mt-1">
                  {item.id !== "bundle" && (
                    <Button
                      onClick={() => upgradeItemToBundle(item)}
                      variant="link"
                      className="p-0 h-0 uppercase underline hover:opacity-85"
                    >
                      {t("upgradeToBundle")}
                    </Button>
                  )}

                  <Badge className="dark:hover:bg-white uppercase">
                    {t("save10")}
                  </Badge>

                  <Badge className="dark:hover:bg-white uppercase">
                    {t("extraGift")}
                  </Badge>
                </span>
              </div>

              <div className="flex items-center gap-6">
                <Button
                  variant="outline"
                  className="h-12 w-12"
                  onClick={() =>
                    adjustCartItemQuantity(
                      item.id,
                      Math.max(0, Math.min(item.quantity - 1))
                    )
                  }
                >
                  {item.quantity <= 1 ? <Trash color="red" /> : <Minus />}
                </Button>

                <span className="min-w-[20px] text-center">
                  {item.quantity}
                </span>

                <Button
                  variant="outline"
                  className="h-12 w-12"
                  onClick={() =>
                    adjustCartItemQuantity(
                      item.id,
                      Math.max(0, Math.min(item.quantity + 1))
                    )
                  }
                >
                  <Plus />
                </Button>

                <span className="ml-4 w-[65px] text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </Card>
          );
        })}

        <div className="flex justify-between w-full px-10">
          <span className="uppercase">
            {subtotal > freeShippingThreshold
              ? t("freeShipping")
              : t("freeShippingOver")}
          </span>
          <span className="uppercase">
            {t("subtotal")} {subtotal}
          </span>
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant="ghost" className="uppercase" asChild>
          <Link href="/">{t("continueShopping")}</Link>
        </Button>

        <Button variant="outline" className="uppercase" asChild>
          <Link href="/checkout">{t("proceedToCheckout")}</Link>
        </Button>
      </div>
    </div>
  );
};

export default CartWithItems;
