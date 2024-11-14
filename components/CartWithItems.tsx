import React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { Minus, Plus } from "lucide-react";

import Link from "next/link";

const CartWithItems: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex items-center flex-col px-6 gap-8">
      <h2 className="uppercase text-4xl text-center">Cart</h2>

      <div className="flex items-center flex-col w-full max-w-4xl gap-8">
        <Card className="flex justify-between items-center gap-10 px-10 py-6 w-full">
          <Link
            href="/bracelet"
            className="uppercase text-2xl hover:opacity-85"
          >
            Bracelet
          </Link>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-8">
              <Button variant="outline" className="h-12 w-12">
                <Minus />
              </Button>

              <span>1</span>

              <Button variant="outline" className="h-12 w-12">
                <Plus />
              </Button>
            </div>

            <span>$9.99</span>
          </div>
        </Card>

        <div className="flex justify-between w-full px-10">
          <span className="uppercase">1 item</span>
          <span className="uppercase">Total $9.99</span>
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant="ghost" className="uppercase" asChild>
          <Link href="/">Continue shopping</Link>
        </Button>

        <Button variant="outline" className="uppercase" asChild>
          <Link href="/checkout">Proceed to checkout</Link>
        </Button>
      </div>
    </div>
  );
};

export default CartWithItems;
