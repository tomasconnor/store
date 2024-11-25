"use client";

import React, { useContext } from "react";
import { DataContext } from "@/contexts/DataContext";

import type { Product, Bundle } from "@/types";

import ProductPreviewItem from "@/components/ProductPreviewItem";

const ProductPreviewList: React.FC = (): React.JSX.Element => {
  const { allProducts } = useContext(DataContext);

  return (
    <>
      {allProducts.map((product: Product | Bundle, index: number) => (
        <ProductPreviewItem
          key={index}
          item={product}
          isEven={index % 2 !== 0}
        />
      ))}
    </>
  );
};

export default ProductPreviewList;
