"use client";

import React, { useContext } from "react";
import { DataContext } from "@/contexts/DataContext";

import ProductDetail from "@/components/ProductDetail";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";

import type { Product } from "@/types";

export default function Bundle(): React.JSX.Element {
  const { bundle, addToCart, cart } = useContext(DataContext);

  return (
    <ProductDetail
      cart={cart}
      addToCart={addToCart}
      item={bundle}
      specification={
        <div className="flex gap-8">
          <div>
            <h2 className="uppercase text-2xl">{bundle.id}</h2>

            <div className="flex gap-2 mt-1">
              {bundle.badges?.map((badge: string) => (
                <Badge key={badge} className="dark:hover:bg-white uppercase">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          {bundle.items.map((item: Product) => (
            <div key={item.id} className="flex items-center">
              <span className="mr-4 uppercase">1x</span>

              <div>
                <Link href="/bracelet">
                  <h3 className="uppercase">{item.id}</h3>
                </Link>

                <ul className="text-[#808080] uppercase text-xs">
                  <li>{item.size}</li>
                  <li>{item.material}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
}
