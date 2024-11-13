import React from "react";

import { Button } from "@/components/ui/button";

import Link from "next/link";

const CartIsEmpty: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex items-center flex-col px-6 gap-4">
      <h2 className="uppercase text-4xl text-center">Cart is empty</h2>

      <Button variant="outline" asChild>
        <Link href="/">BACK HOME</Link>
      </Button>
    </div>
  );
};

export default CartIsEmpty;
