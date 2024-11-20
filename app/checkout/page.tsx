"use client";

import React, { useContext, useState } from "react";
import { DataContext } from "@/contexts/DataContext";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

import OrderCompleted from "@/components/OrderCompleted";

import CartIsEmpty from "@/components/CartIsEmpty";

import CheckoutForm from "@/components/CheckoutForm";

import type { CompletedOrderProps } from "@/types";

export default function Checkout(): React.JSX.Element {
  const {
    cart,
    subtotal,
    total,
    deliveryAddress,
    paymentMethod,
    shippingMethod,
    contactDetails,
    reset,
    FREESHIPPING_TRESHOLD,
  } = useContext(DataContext);

  const [completedOrder, setCompletedOrder] =
    useState<CompletedOrderProps | null>(null);

  const handleCompleteOrder = () => {
    setCompletedOrder({
      items: cart,
      subtotal,
      total,
      deliveryAddress,
      contactDetails,
      paymentMethod,
      shippingMethod,
    });

    reset();
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <TopBar />
        <Header />
      </div>

      {completedOrder ? (
        <OrderCompleted
          {...completedOrder}
          FREESHIPPING_TRESHOLD={FREESHIPPING_TRESHOLD}
        />
      ) : cart.length ? (
        <CheckoutForm onCompleteOrder={handleCompleteOrder} />
      ) : (
        <CartIsEmpty />
      )}

      <footer />
    </div>
  );
}
