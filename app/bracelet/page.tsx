import React from "react";

import ProductDetail from "@/components/ProductDetail";

export default function Bracelet(): React.JSX.Element {
  return (
    <ProductDetail
      price={9.99}
      specification={
        <div>
          <h3 className="uppercase">Bracelet</h3>
          <ul className="text-[#808080] uppercase text-xs">
            <li>200X12MM</li>
            <li>100% silicon</li>
          </ul>
        </div>
      }
    />
  );
}
