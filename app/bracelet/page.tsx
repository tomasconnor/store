import React from "react";

import ProductDetail from "@/components/ProductDetail";

export default function Bracelet(): React.JSX.Element {
  return (
    <ProductDetail
      price={4.99}
      specification={
        <div className="flex items-center gap-8">
          <h2 className="uppercase text-2xl">Bracelet</h2>
          <ul className="text-[#808080] uppercase text-xs">
            <li>100% silicon</li>
            <li>200X12MM</li>
          </ul>
        </div>
      }
    />
  );
}
