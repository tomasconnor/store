import React from "react";

import type { Product } from "@/types";

import ProductPreviewItem from "@/components/ProductPreviewItem";

const ProductPreviewList: React.FC = (): React.JSX.Element => {
  const products: Product[] = [
    { name: "Patch", slug: "patch" },
    { name: "Bracelet", slug: "bracelet" },
    {
      name: "Bundle",
      slug: "bundle",
      badges: ["Save 10%", "Extra gift"],
    },
  ];

  return (
    <>
      {products.map((product: Product, index: number) => (
        <ProductPreviewItem
          key={product.name}
          product={product}
          isEven={index % 2 !== 0}
        />
      ))}
    </>
  );
};

export default ProductPreviewList;
