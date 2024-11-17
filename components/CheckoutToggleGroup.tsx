import React from "react";

import { ToggleGroup } from "@/components/ui/toggle-group";

import type { CheckoutToggleGroupProps } from "@/types";

const CheckoutToggleGroup: React.FC<CheckoutToggleGroupProps> = ({
  children,
}): React.JSX.Element => {
  return (
    <ToggleGroup
      variant="outline"
      type="single"
      className="flex flex-col gap-6"
    >
      {children}
    </ToggleGroup>
  );
};

export default CheckoutToggleGroup;
