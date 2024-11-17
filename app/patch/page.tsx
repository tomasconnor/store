"use client";

import React, { useContext } from "react";
import { DataContext } from "@/contexts/DataContext";

import ProductDetail from "@/components/ProductDetail";

export default function Patch(): React.JSX.Element {
  const { patch, addToCart, cart } = useContext(DataContext);

  return (
    <ProductDetail
      cart={cart}
      addToCart={addToCart}
      item={patch}
      specification={
        <div>
          <h3 className="uppercase">{patch.id}</h3>
          <ul className="text-[#808080] uppercase text-xs">
            <li>{patch.size}</li>
            <li>{patch.material}</li>
          </ul>
        </div>
      }
    />
  );
}
