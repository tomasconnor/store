import React from "react";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

import { ProductDetailProps } from "@/types";
import Link from "next/link";

const ProductDetail: React.FC<ProductDetailProps> = ({
  specification,
  price,
  inStock,
}): React.JSX.Element => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <TopBar />
        <Header />
      </div>

      <div className="flex justify-center items-center gap-10 pb-10">
        <span
          className={`w-2 h-2 rounded-full ${
            inStock ? "bg-[#00ff00]" : "bg-[#ff0000]"
          }`}
        />

        {specification}

        <div className="flex items-center gap-6">
          <Button variant="outline" className="h-12 w-12">
            <Minus />
          </Button>

          <span>1</span>

          <Button variant="outline" className="h-12 w-12">
            <Plus />
          </Button>
        </div>

        <span>${price}</span>

        <Button variant="outline" className="uppercase h-12" asChild>
          {/* @TODO */}
          <Link href="/cart">Add to cart</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
