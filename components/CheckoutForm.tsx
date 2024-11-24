import React, { useContext } from "react";
import { DataContext } from "@/contexts/DataContext";

import { Button } from "@/components/ui/button";

import Link from "next/link";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import { Card } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import OrderSummary from "@/components/OrderSummary";

import type { CheckoutFormProps, PaymentMethod, ShippingMethod } from "@/types";

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  onCompleteOrder,
}): React.JSX.Element => {
  const {
    cart,
    deliveryAddress,
    shippingMethod,
    setContactDetails,
    setDeliveryAddress,
    total,
    subtotal,
    shippingMethods,
    setShippingMethod,
    paymentMethod,
    setPaymentMethod,
    paymentMethods,
    freeShippingThreshold,
  } = useContext(DataContext);

  const handleChangeContactDetails = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setContactDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangeDeliveryAddress = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setDeliveryAddress((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangeCountry = (value: string) => {
    setDeliveryAddress((prevState) => ({
      ...prevState,
      country: value,
    }));
  };

  const handleChangeShippingMethod = (item: ShippingMethod) => {
    setShippingMethod(item);
  };

  const handleChangePaymentMethod = (item: PaymentMethod) => {
    setPaymentMethod(item);
  };

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
              <Input
                placeholder="Email"
                className="uppercase"
                name="email"
                onChange={handleChangeContactDetails}
              />
              <Input
                placeholder="Phone"
                className="uppercase"
                name="phone"
                onChange={handleChangeContactDetails}
              />
            </div>
          </div>

          {/* Delivery address */}
          <div>
            <h3 className="uppercase mb-4">Delivery address</h3>

            <div className="flex flex-col gap-6">
              <Input
                placeholder="Name"
                className="uppercase"
                onChange={handleChangeDeliveryAddress}
                name="name"
              />
              <Input
                placeholder="Street"
                className="uppercase"
                onChange={handleChangeDeliveryAddress}
                name="street"
              />

              <div className="flex gap-6">
                <Input
                  placeholder="City"
                  className="uppercase"
                  onChange={handleChangeDeliveryAddress}
                  name="city"
                />
                <Input
                  placeholder="Postal code"
                  className="uppercase"
                  onChange={handleChangeDeliveryAddress}
                  name="postalCode"
                />
              </div>

              <Select
                onValueChange={handleChangeCountry}
                value={deliveryAddress.country}
              >
                <SelectTrigger className="w-[200px] uppercase">
                  {deliveryAddress.country}
                </SelectTrigger>

                <SelectContent>
                  <SelectItem className="uppercase" value="Česká republika">
                    Česká republika
                  </SelectItem>

                  <SelectItem className="uppercase" value="Slovensko">
                    Slovensko
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Shipping method */}
          <div>
            <h3 className="uppercase mb-4">Shipping method</h3>

            <div className="flex flex-col gap-6">
              {shippingMethods.map((item) => {
                return (
                  <Card
                    key={item.name}
                    className={`flex flex-col justify-center w-full min-h-[80px] p-6 cursor-pointer ${
                      shippingMethod.name === item.name
                        ? "dark:border-white"
                        : ""
                    }`}
                    onClick={() => handleChangeShippingMethod(item)}
                  >
                    <div className="flex justify-between w-full">
                      <div className="flex items-center gap-3">
                        <span className="uppercase">{item.name}</span>

                        {item.badge && (
                          <Badge className="dark:hover:bg-white uppercase">
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                      <span className="normal-case">
                        {subtotal > freeShippingThreshold || item.price === 0
                          ? "FREE"
                          : item.price}
                      </span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="uppercase mb-4">Payment method</h3>

            <div className="flex flex-col gap-6">
              {paymentMethods.map((item) => {
                return (
                  <Card
                    key={item.name}
                    className={`flex flex-col justify-center w-full min-h-[80px] p-6 cursor-pointer ${
                      paymentMethod.name === item.name
                        ? "dark:border-white"
                        : ""
                    }`}
                    onClick={() => handleChangePaymentMethod(item)}
                  >
                    <div className="flex justify-between w-full">
                      <div className="flex items-center gap-3">
                        <span className="uppercase">{item.name}</span>

                        {item.badge && (
                          <Badge className="dark:hover:bg-white uppercase">
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                      <span className="normal-case">
                        {subtotal > freeShippingThreshold || item.price === 0
                          ? "FREE"
                          : item.price}
                      </span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full max-w-96">
          <OrderSummary
            total={total}
            shippingMethod={shippingMethod}
            paymentMethod={paymentMethod}
            freeShippingThreshold={freeShippingThreshold}
            subtotal={subtotal}
            items={cart}
          />

          <Button variant="outline" className="mt-6" onClick={onCompleteOrder}>
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
