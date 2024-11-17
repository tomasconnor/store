"use client";

import React, { useContext, useState } from "react";
import { DataContext } from "@/contexts/DataContext";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

import OrderCompleted from "@/components/OrderCompleted";

import CartIsEmpty from "@/components/CartIsEmpty";

import CheckoutForm from "@/components/CheckoutForm";

export default function Checkout(): React.JSX.Element {
  const { cart } = useContext(DataContext);

  const [orderCompleted, setOrderCompleted] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <TopBar />
        <Header />
      </div>

      {!cart.length ? (
        <CartIsEmpty />
      ) : orderCompleted ? (
        <OrderCompleted />
      ) : (
        <CheckoutForm cart={cart} setOrderCompleted={setOrderCompleted} />
      )}

      <footer />
    </div>
  );
}
