import React from "react";

import { Button } from "@/components/ui/button";

import Link from "next/link";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import CheckoutToggleGroup from "@/components/CheckoutToggleGroup";

import CheckoutToggleGroupItem from "@/components/CheckoutToggleGroupItem";

import OrderSummary from "@/components/OrderSummary";

import { CheckoutFormProps } from "@/types";

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  setOrderCompleted,
}): React.JSX.Element => {
  return (
    <div className="flex items-center flex-col px-6 gap-8 pb-10">
      <h2 className="uppercase text-4xl text-center">Checkout</h2>
      <div className="flex gap-10 w-full max-w-5xl">
        {/* Left */}
        <div className="flex flex-col gap-8 max-[409px] w-full">
          {/* Contact details */}
          <div>
            <h3 className="uppercase mb-4">Contact details</h3>

            <div className="flex gap-6">
              <Input placeholder="Email" className="uppercase" />
              <Input placeholder="Phone" className="uppercase" />
            </div>
          </div>

          {/* Delivery address */}
          <div>
            <h3 className="uppercase mb-4">Delivery address</h3>

            <div className="flex flex-col gap-6">
              <Input placeholder="Name" className="uppercase" />
              <Input placeholder="Street" className="uppercase" />

              <div className="flex gap-6">
                <Input placeholder="City" className="uppercase" />
                <Input placeholder="Postal code" className="uppercase" />
              </div>

              <Select>
                <SelectTrigger className="w-[200px] uppercase">
                  <SelectValue placeholder="Česká republika" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem className="uppercase" value="cz">
                    Česká republika
                  </SelectItem>

                  <SelectItem className="uppercase" value="sk">
                    Slovensko
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Shipping method */}
          <div>
            <h3 className="uppercase mb-4">Shipping method</h3>

            <CheckoutToggleGroup>
              <CheckoutToggleGroupItem
                description="Pražšká 323, Olomouc 779 00"
                value="zasilkovna"
                label="Zásilkovna"
                price="69 Kč"
              />

              <CheckoutToggleGroupItem value="ppl" label="PPL" price="89 Kč" />
            </CheckoutToggleGroup>
          </div>

          {/* Payment method */}
          <div>
            <h3 className="uppercase mb-4">Payment method</h3>

            <CheckoutToggleGroup>
              <CheckoutToggleGroupItem value="card" label="Card" price="FREE" />
            </CheckoutToggleGroup>
          </div>
        </div>

        {/* Right */}
        <div className="w-full max-w-96">
          <OrderSummary />

          <Button
            variant="outline"
            className="mt-6"
            onClick={() => setOrderCompleted(true)}
          >
            COMPLETE ORDER
          </Button>

          <p className="mt-4 text-[#808080] text-xs px-2">
            BY COMPLETING YOUR ORDER, YOU CONFIRM THAT YOU HAVE READ AND AGREE
            TO OUR{" "}
            <Link href="/terms" className="underline hover:no-underline">
              TERMS AND CONDITIONS
            </Link>{" "}
            AND{" "}
            <Link href="/privacy" className="underline hover:no-underline">
              PRIVACY POLICY
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
