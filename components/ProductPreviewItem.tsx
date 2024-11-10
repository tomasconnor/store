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
        className={`flex items-center justify-center h-[500px] uppercase text-4xl ${
          isEven && "bg-[#0E0E0E]"
        }`}
      >
        <span className="flex items-start">
          {product.name}
          {product.badge && (
            <Badge className="ml-2 dark:hover:bg-white uppercase">
              {product.badge}
            </Badge>
          )}
        </span>
      </div>
    </Link>
  );
};

export default ProductPreviewItem;
