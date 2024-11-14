import React from "react";

import ProductDetail from "@/components/ProductDetail";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Bundle(): React.JSX.Element {
  return (
    <ProductDetail
      price={4.99}
      specification={
        <div className="flex gap-8">
          <div>
            <h2 className="uppercase text-2xl">Bundle</h2>

            <div className="flex gap-2 mt-1">
              <Badge className="dark:hover:bg-white uppercase">Save 10%</Badge>

              <Badge className="dark:hover:bg-white uppercase">
                Extra gift
              </Badge>
            </div>
          </div>

          <div className="flex items-center">
            <span className="mr-4 uppercase">1x</span>

            <div>
              <Link href="/bracelet">
                <h3 className="uppercase">Bracelet</h3>
              </Link>
              <ul className="text-[#808080] uppercase text-xs">
                <li>200X12MM</li>
                <li>100% silicon</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center">
            <span className="mr-4 uppercase">1x</span>

            <div>
              <Link href="/bracelet">
                <h3 className="uppercase">Patch</h3>
              </Link>
              <ul className="text-[#808080] uppercase text-xs">
                <li>130X40MM</li>
                <li>PVC + velcro</li>
              </ul>
            </div>
          </div>
        </div>
      }
    />
  );
}
