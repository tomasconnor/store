import React from "react";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

import { ProductDetailProps } from "@/types";

const ProductDetail: React.FC<ProductDetailProps> = ({
  id, // @TODO: UPGRADE TO BUNDLE
  specification,
  price,
}): React.JSX.Element => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <TopBar />
        <Header />
      </div>

      <div className="flex justify-center items-center gap-10 pb-12">
        {specification}

        <div className="flex items-center gap-6">
          <Button variant="outline" className="h-14 w-14">
            <Minus />
          </Button>

          <span>1</span>

          <Button variant="outline" className="h-14 w-14">
            <Plus />
          </Button>
        </div>

        <span>${price}</span>

        <Button variant="outline" className="uppercase h-14">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;