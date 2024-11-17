"use client";

import React, { useContext } from "react";
import { DataContext } from "@/contexts/DataContext";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import CartIsEmpty from "@/components/CartIsEmpty";
import CartWithItems from "@/components/CartWithItems";

export default function Cart(): React.JSX.Element {
  const { cart, adjustCartItemQuantity, upgradeItemToBundle } =
    useContext(DataContext);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <TopBar />
        <Header />
      </div>

      {cart.length ? (
        <CartWithItems
          cart={cart}
          adjustCartItemQuantity={adjustCartItemQuantity}
          upgradeItemToBundle={upgradeItemToBundle}
        />
      ) : (
        <CartIsEmpty />
      )}

      <footer />
    </div>
  );
}
