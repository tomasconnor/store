import React from "react";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const OrderSummary: React.FC = (): React.JSX.Element => {
  return (
    <>
      <div className="flex justify-between px-4">
        <Link href="/bracelet" className="uppercase">
          Bracelet
        </Link>
        <span>3 x $9.99</span>
      </div>

      <Card className="p-6 mt-4">
        <div className="flex justify-between">
          <span>SUBTOTAL</span>
          <span>$9.99</span>
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
