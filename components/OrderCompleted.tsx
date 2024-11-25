import React from "react";

import OrderSummary from "@/components/OrderSummary";
import { useTranslations } from "next-intl";
import type { CompletedOrderProps } from "@/types";

const OrderCompleted: React.FC<
  CompletedOrderProps & { freeShippingThreshold: number }
> = ({
  items,
  subtotal,
  total,
  deliveryAddress,
  contactDetails,
  paymentMethod,
  shippingMethod,
  freeShippingThreshold,
}): React.JSX.Element => {
  const t = useTranslations();

  return (
    <div className="flex items-center flex-col px-6 gap-8 pb-10">
      <h2 className="uppercase text-4xl text-center">
        {t("thankYouForYourOrder")}
      </h2>

      <div className="flex gap-8 w-full max-w-4xl">
        {/* Left */}
        <div className="flex flex-col gap-6 max-[409px] w-full">
          {/* Contact details */}
          <div>
            <h3 className="uppercase mb-2">{t("contactDetails")}</h3>

            <p className="text-[#808080] uppercase text-sm">
              {contactDetails.email}
              <br />
              {contactDetails.phone}
            </p>
          </div>

          {/* Delivery address */}
          <div>
            <h3 className="uppercase mb-2">{t("deliveryAddress")}</h3>

            <p className="text-[#808080] text-sm uppercase">
              {deliveryAddress.name}
              <br />
              {deliveryAddress.street}
              <br />
              {deliveryAddress.city}, {deliveryAddress.postalCode}
              <br />
              {deliveryAddress.country}
            </p>
          </div>

          {/* Shipping method */}
          <div>
            <h3 className="uppercase mb-2">{t("shippingMethod")}</h3>

            <p className="text-[#808080] text-sm uppercase">
              {shippingMethod.id}
            </p>
          </div>

          {/* Payment method */}
          <div>
            <h3 className="uppercase mb-2">{t("paymentMethod")}</h3>

            <p className="text-[#808080] text-sm uppercase">
              {t(paymentMethod.id)}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="w-full max-w-96">
          <OrderSummary
            items={items}
            total={total}
            freeShippingThreshold={freeShippingThreshold}
            paymentMethod={paymentMethod}
            shippingMethod={shippingMethod}
            subtotal={subtotal}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderCompleted;
