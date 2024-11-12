import React from "react";

import type { ProductPreviewItemProps } from "@/types";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";

const ProductPreviewItem: React.FC<ProductPreviewItemProps> = ({
  product,
  isEven,
}): React.JSX.Element => {
  return (
    <Link href={`/${product.slug}`}>
      <div
        className={`flex items-center justify-center h-[500px] ${
          isEven && "bg-[#0E0E0E]"
        }`}
      >
        <h2 className="flex items-start uppercase text-4xl">
          {product.name}
          {product.badge && (
            <Badge className="ml-2 dark:hover:bg-white">{product.badge}</Badge>
          )}
        </h2>
      </div>
    </Link>
  );
};

export default ProductPreviewItem;
