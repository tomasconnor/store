import React from "react";

import OrderSummary from "@/components/OrderSummary";

const OrderCompleted: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex items-center flex-col px-6 gap-6 pb-10">
      <h2 className="uppercase text-4xl text-center">
        Thank you for your order
      </h2>

      <div className="flex gap-10 w-full max-w-4xl">
        {/* Left */}
        <div className="flex flex-col gap-6 max-[409px] w-full">
          {/* Contact details */}
          <div>
            <h3 className="uppercase mb-4">Contact details</h3>

            <p className="text-[#808080] text-sm">
              TOMASCONNOR.CZ@GMAIL.COM
              <br />
              +420 735 864 842
            </p>
          </div>

          {/* Delivery address */}
          <div>
            <h3 className="uppercase mb-4">Delivery address</h3>

            <p className="text-[#808080] text-sm">
              TOMÁŠ CONNOR
              <br />
              GEN. PÍKY 323/14A
              <br />
              OLOMOUC, 779 00
              <br />
              ČESKÁ REPUBLIKA
            </p>
          </div>

          {/* Shipping method */}
          <div>
            <h3 className="uppercase mb-4">Shipping method</h3>

            <p className="text-[#808080] text-sm">
              ZÁSILKOVNA (PRAŽSKÁ 323/14A, OLOMOUC)
            </p>
          </div>

          {/* Payment method */}
          <div>
            <h3 className="uppercase mb-4">Payment method</h3>

            <p className="text-[#808080] text-sm">
              PLATBA KARTOU (**** **** **** 3310)
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="w-full max-w-96">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default OrderCompleted;
