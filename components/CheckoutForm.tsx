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

import { useTranslations } from "next-intl";

import OrderSummary from "@/components/OrderSummary";

import type { CheckoutFormProps, PaymentMethod, ShippingMethod } from "@/types";

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  onCompleteOrder,
}): React.JSX.Element => {
  const t = useTranslations();

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
      <h2 className="uppercase text-4xl text-center">{t("checkout")}</h2>
      <div className="flex gap-10 w-full max-w-5xl">
        {/* Left */}
        <div className="flex flex-col gap-8 max-[409px] w-full">
          {/* Contact details */}
          <div>
            <h3 className="uppercase mb-4">{t("contactDetails")}</h3>

            <div className="flex gap-6">
              <Input
                placeholder={t("email")}
                className="uppercase"
                name="email"
                onChange={handleChangeContactDetails}
              />
              <Input
                placeholder={t("phone")}
                className="uppercase"
                name="phone"
                onChange={handleChangeContactDetails}
              />
            </div>
          </div>

          {/* Delivery address */}
          <div>
            <h3 className="uppercase mb-4">{t("deliveryAddress")}</h3>

            <div className="flex flex-col gap-6">
              <Input
                placeholder={t("name")}
                className="uppercase"
                onChange={handleChangeDeliveryAddress}
                name="name"
              />
              <Input
                placeholder={t("street")}
                className="uppercase"
                onChange={handleChangeDeliveryAddress}
                name="street"
              />

              <div className="flex gap-6">
                <Input
                  placeholder={t("city")}
                  className="uppercase"
                  onChange={handleChangeDeliveryAddress}
                  name="city"
                />
                <Input
                  placeholder={t("postalCode")}
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
            <h3 className="uppercase mb-4">{t("shippingMethod")}</h3>

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
                        {subtotal > freeShippingThreshold ||
                        item.price === 0 ? (
                          <span className="uppercase">{t("free")}</span>
                        ) : (
                          <span>{item.price} €</span>
                        )}
                      </span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="uppercase mb-4">{t("paymentMethod")}</h3>

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
                        {subtotal > freeShippingThreshold ||
                        item.price === 0 ? (
                          <span className="uppercase">{t("free")}</span>
                        ) : (
                          <span>{item.price} €</span>
                        )}
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

          <Button
            variant="outline"
            className="mt-6 uppercase"
            onClick={onCompleteOrder}
          >
            {t("completeOrder")}
          </Button>

          <p className="mt-4 text-[#808080] text-xs px-2 uppercase">
            {t("orderConfirmationPart1")}{" "}
            <Link href="/terms" className="underline hover:no-underline">
              {t("orderConfirmationPart2")}
            </Link>{" "}
            {t("orderConfirmationPart3")}{" "}
            <Link href="/privacy" className="underline hover:no-underline">
              {t("orderConfirmationPart4")}
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
