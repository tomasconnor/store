import React from "react";

import ProductDetail from "@/components/ProductDetail";

export default function Patch(): React.JSX.Element {
  return (
    <ProductDetail
      inStock
      price={9.99}
      specification={
        <div className="flex flex-col">
          <h2 className="uppercase">Patch</h2>
          <ul className="text-[#808080] uppercase text-xs">
            <li>PVC + velcro</li>
            <li>130X40MM</li>
          </ul>
        </div>
      }
    />
  );
}
