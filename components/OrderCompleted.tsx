import React from "react";

import OrderSummary from "@/components/OrderSummary";

import type { CompletedOrderProps } from "@/types";

const OrderCompleted: React.FC<
  CompletedOrderProps & { FREESHIPPING_TRESHOLD: number }
> = ({
  items,
  subtotal,
  total,
  deliveryAddress,
  contactDetails,
  paymentMethod,
  shippingMethod,
  FREESHIPPING_TRESHOLD,
}): React.JSX.Element => {
  return (
    <div className="flex items-center flex-col px-6 gap-8 pb-10">
      <h2 className="uppercase text-4xl text-center">
        Thank you for your order
      </h2>

      <div className="flex gap-8 w-full max-w-4xl">
        {/* Left */}
        <div className="flex flex-col gap-6 max-[409px] w-full">
          {/* Contact details */}
          <div>
            <h3 className="uppercase mb-2">Contact details</h3>

            <p className="text-[#808080] uppercase text-sm">
              {contactDetails.email}
              <br />
              {contactDetails.phone}
            </p>
          </div>

          {/* Delivery address */}
          <div>
            <h3 className="uppercase mb-2">Delivery address</h3>

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
            <h3 className="uppercase mb-2">Shipping method</h3>

            <p className="text-[#808080] text-sm uppercase">
              {shippingMethod.name}
            </p>
          </div>

          {/* Payment method */}
          <div>
            <h3 className="uppercase mb-2">Payment method</h3>

            <p className="text-[#808080] text-sm uppercase">
              {paymentMethod.name}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="w-full max-w-96">
          <OrderSummary
            items={items}
            total={total}
            FREESHIPPING_TRESHOLD={FREESHIPPING_TRESHOLD}
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
