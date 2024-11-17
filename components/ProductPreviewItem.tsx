import React from "react";

import type { ProductPreviewItemProps } from "@/types";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";

const ProductPreviewItem: React.FC<ProductPreviewItemProps> = ({
  item,
  isEven,
}): React.JSX.Element => {
  return (
    <Link href={`/${item.id}`}>
      <div
        className={`flex items-center justify-center h-[500px] ${
          isEven && "bg-[#0E0E0E]"
        }`}
      >
        <h2 className="flex flex-col items-center uppercase text-4xl gap-2">
          {item.id}

          {item.badges && (
            <div className="flex gap-2">
              {item.badges.map((badge) => (
                <Badge key={badge} className="dark:hover:bg-white">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </h2>
      </div>
    </Link>
  );
};

export default ProductPreviewItem;
