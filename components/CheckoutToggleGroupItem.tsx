import React from "react";

import { ToggleGroupItem } from "@/components/ui/toggle-group";

import type { CheckoutToggleGroupItemProps } from "@/types";

const CheckoutToggleGroupItem: React.FC<CheckoutToggleGroupItemProps> = ({
  value,
  label,
  price,
  description,
}): React.JSX.Element => {
  return (
    <ToggleGroupItem
      value={value}
      className="flex flex-col w-full min-h-[80px] p-6 dark:data-[state=on]:bg-black dark:data-[state=on]:border-white dark:hover:bg-black"
    >
      <div className="flex justify-between w-full">
        <span className="uppercase">{label}</span>
        <span className="normal-case">{price}</span>
      </div>

      {description && (
        <p className="uppercase text-sm text-[#808080] text-left w-full">
          {description}
        </p>
      )}
    </ToggleGroupItem>
  );
};

export default CheckoutToggleGroupItem;
