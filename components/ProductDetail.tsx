import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

import type { CartItem, ProductDetailProps } from "@/types";

const ProductDetail: React.FC<ProductDetailProps> = ({
  cart,
  addToCart,
  specification,
  item,
}): React.JSX.Element => {
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const itemExistInCart = cart.find(
      (cartItem: CartItem) => cartItem.id === item.id
    );

    if (itemExistInCart) {
      setQuantity(itemExistInCart.quantity);
    }

    console.log("itemExistInCart", itemExistInCart);
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <TopBar />
        <Header />
      </div>

      <div className="flex justify-center items-center gap-10 pb-10">
        {specification}

        <div className="flex items-center gap-6">
          <Button
            variant="outline"
            className="h-12 w-12"
            onClick={() => setQuantity(Math.max(0, Math.min(quantity - 1)))}
          >
            <Minus />
          </Button>

          <span className="min-w-[20px] text-center">{quantity}</span>

          <Button
            variant="outline"
            className="h-12 w-12"
            onClick={() => setQuantity(Math.max(0, Math.min(quantity + 1)))}
          >
            <Plus />
          </Button>
        </div>

        <span>${item.price}</span>

        <Button
          variant="outline"
          className="uppercase h-12"
          disabled={quantity < 1}
          onClick={() => {
            addToCart(item, quantity);

            router.push("/cart");
          }}
        >
          BUY NOW
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
