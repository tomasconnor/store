"use client";

import React, { useState } from "react";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

import OrderCompleted from "@/components/OrderCompleted";

import CartIsEmpty from "@/components/CartIsEmpty";

import CheckoutForm from "@/components/CheckoutForm";

export default function Checkout(): React.JSX.Element {
  // @TODO
  const items = [1];

  const [orderCompleted, setOrderCompleted] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <TopBar />
        <Header />
      </div>

      {!items.length ? (
        <CartIsEmpty />
      ) : orderCompleted ? (
        <OrderCompleted />
      ) : (
        <CheckoutForm setOrderCompleted={setOrderCompleted} />
      )}

      <footer />
    </div>
  );
}
