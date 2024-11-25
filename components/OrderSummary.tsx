import React from "react";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import type { OrderSummaryProps, CartItem } from "@/types";
import { useTranslations } from "next-intl";

const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  total,
  shippingMethod,
  paymentMethod,
  subtotal,
  freeShippingThreshold,
}): React.JSX.Element => {
  const t = useTranslations();

  return (
    <>
      {items.map((item: CartItem) => {
        return (
          <div key={item.id} className="flex justify-between px-6">
            <Link href={`/${item.id}`} className="uppercase hover:opacity-85">
              {t(item.id)}
            </Link>

            <span>
              {item.quantity} x {item.price}
            </span>
          </div>
        );
      })}

      <Card className="p-6 mt-4">
        <div className="flex justify-between">
          <span className="uppercase">{t("subtotal")}</span>
          <span>{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span className="uppercase">{t("delivery")}</span>
          <span>
            {subtotal > freeShippingThreshold ? (
              <span className="uppercase">{t("free")}</span>
            ) : (
              shippingMethod.price + paymentMethod.price
            )}
          </span>
        </div>

        <Separator className="my-[18px]" />

        <div className="flex justify-between">
          <span className="uppercase">{t("total")}</span>
          <span>{total}</span>
        </div>
      </Card>
    </>
  );
};

export default OrderSummary;
