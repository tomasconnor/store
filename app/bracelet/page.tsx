"use client";

import React, { useContext } from "react";
import { DataContext } from "@/contexts/DataContext";

import ProductDetail from "@/components/ProductDetail";

export default function Bracelet(): React.JSX.Element {
  const { bracelet, addToCart } = useContext(DataContext);

  return (
    <ProductDetail
      addToCart={addToCart}
      item={bracelet}
      specification={
        <div>
          <h3 className="uppercase">{bracelet.id}</h3>
          <ul className="text-[#808080] uppercase text-xs">
            <li>{bracelet.size}</li>
            <li>{bracelet.material}</li>
          </ul>
        </div>
      }
    />
  );
}
