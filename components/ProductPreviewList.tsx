import React from "react";

import type { Product } from "@/types";

import ProductPreviewItem from "@/components/ProductPreviewItem";

const ProductPreviewList: React.FC = (): React.JSX.Element => {
  const products: Product[] = [
    { id: 1, name: "Patch", slug: "patch" },
    { id: 2, name: "Bracelet", slug: "bracelet" },
    { id: 3, name: "Bundle", slug: "bundle", badge: "Save 10%" },
  ];

  return (
    <>
      {products.map((product: Product, index: number) => (
        <ProductPreviewItem
          key={product.id}
          product={product}
          isEven={index % 2 !== 0}
        />
      ))}
    </>
  );
};

export default ProductPreviewList;
