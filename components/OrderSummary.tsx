import React from "react";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import type { CartItem } from "@/types";

const OrderSummary: React.FC<{ cart: CartItem[] }> = ({
  cart,
}): React.JSX.Element => {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between px-4">
          <Link href="/bracelet" className="uppercase">
            {item.id}
          </Link>
          <span>
            {item.quantity} x {item.quantity * item.price}
          </span>
        </div>
      ))}

      <Card className="p-6 mt-4">
        <div className="flex justify-between">
          <span>SUBTOTAL</span>
          <span>${subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>SHIPPING</span>
          <span>$1.99</span>
        </div>

        <Separator className="my-[18px]" />

        <div className="flex justify-between">
          <span>TOTAL</span>
          <span>$11.99</span>
        </div>
      </Card>
    </>
  );
};

export default OrderSummary;
