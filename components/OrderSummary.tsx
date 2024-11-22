import React from "react";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import type { OrderSummaryProps, CartItem } from "@/types";

const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  total,
  shippingMethod,
  paymentMethod,
  subtotal,
  FREESHIPPING_TRESHOLD,
}): React.JSX.Element => {
  return (
    <>
      {items.map((item: CartItem) => {
        return (
          <div key={item.id} className="flex justify-between px-4">
            <Link href={`/${item.id}`} className="uppercase">
              {item.id}
            </Link>

            <span>
              {item.quantity} x {item.price}
            </span>
          </div>
        );
      })}

      <Card className="p-6 mt-4">
        <div className="flex justify-between">
          <span className="uppercase">Subtotal</span>
          <span>{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span className="uppercase">Delivery</span>
          <span>
            {subtotal > FREESHIPPING_TRESHOLD
              ? "FREE"
              : shippingMethod.price + paymentMethod.price}
          </span>
        </div>

        <Separator className="my-[18px]" />

        <div className="flex justify-between">
          <span className="uppercase">Total</span>
          <span>{total}</span>
        </div>
      </Card>
    </>
  );
};

export default OrderSummary;
