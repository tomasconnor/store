import React from "react";

import ProductDetail from "@/components/ProductDetail";

export default function Patch(): React.JSX.Element {
  return (
    <ProductDetail
      price={9.99}
      specification={
        <div>
          <h3 className="uppercase">Patch</h3>
          <ul className="text-[#808080] uppercase text-xs">
            <li>130X40MM</li>
            <li>PVC + velcro</li>
          </ul>
        </div>
      }
    />
  );
}
