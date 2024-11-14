import React from "react";

import ProductDetail from "@/components/ProductDetail";

import { Badge } from "@/components/ui/badge";

export default function Bundle(): React.JSX.Element {
  return (
    <ProductDetail
      price={4.99}
      specification={
        <div className="flex gap-8">
          <div>
            <h2 className="uppercase text-2xl">Bundle</h2>
            <Badge className="dark:hover:bg-white uppercase mt-1">
              Save 10%
            </Badge>
          </div>

          <div className="flex items-center">
            <span className="mr-4 uppercase">1x</span>

            <div>
              <h3 className="uppercase">Bracelet</h3>
              <ul className="text-[#808080] uppercase text-xs">
                <li>100% silicon</li>
                <li>200X12MM</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center">
            <span className="mr-4 uppercase">1x</span>

            <div>
              <h3 className="uppercase">Patch</h3>
              <ul className="text-[#808080] uppercase text-xs">
                <li>PVC + velcro</li>
                <li>130X40MM</li>
              </ul>
            </div>
          </div>
        </div>
      }
    />
  );
}
