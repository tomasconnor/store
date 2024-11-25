"use client";

import React, { useContext } from "react";
import { DataContext } from "@/contexts/DataContext";

import { useTranslations } from "next-intl";
import ProductDetail from "@/components/ProductDetail";

export default function Bracelet(): React.JSX.Element {
  const t = useTranslations();

  const { bracelet, addToCart, cart } = useContext(DataContext);

  return (
    <ProductDetail
      cart={cart}
      addToCart={addToCart}
      item={bracelet}
      specification={
        <div>
          <h3 className="uppercase">{t(bracelet.id)}</h3>
          <ul className="text-[#808080] uppercase text-xs">
            <li>{bracelet.size}</li>
            <li>{bracelet.material}</li>
          </ul>
        </div>
      }
    />
  );
}
