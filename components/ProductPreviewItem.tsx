import React from "react";

import type { ProductPreviewItemProps } from "@/types";

import Link from "next/link";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";

const ProductPreviewItem: React.FC<ProductPreviewItemProps> = ({
  item,
  isEven,
}): React.JSX.Element => {
  const t = useTranslations();

  return (
    <Link href={`/${item.id}`}>
      <div
        className={`flex items-center justify-center h-[500px] ${
          isEven && "bg-[#0E0E0E]"
        }`}
      >
        <h2 className="flex flex-col items-center uppercase text-4xl gap-2">
          {t(item.id)}

          {item.id === "bundle" && (
            <div className="flex gap-2">
              <Badge className="dark:hover:bg-white uppercase">
                {t("save10")}
              </Badge>

              <Badge className="dark:hover:bg-white uppercase">
                {t("extraGift")}
              </Badge>
            </div>
          )}
        </h2>
      </div>
    </Link>
  );
};

export default ProductPreviewItem;
