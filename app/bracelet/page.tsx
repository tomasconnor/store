import React from "react";

import ProductDetail from "@/components/ProductDetail";

export default function Bracelet(): React.JSX.Element {
  return (
    <ProductDetail
      inStock
      price={4.99}
      specification={
        <div>
          <h2 className="uppercase">Bracelet</h2>
          <ul className="text-[#808080] uppercase text-xs">
            <li>100% silicon</li>
            <li>200X12MM</li>
          </ul>
        </div>
      }
    />
  );
}
