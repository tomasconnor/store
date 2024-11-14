import React from "react";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import CartIsEmpty from "@/components/CartIsEmpty";
import CartWithItems from "@/components/CartWithItems";

export default function Cart(): React.JSX.Element {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <TopBar />
        <Header />
      </div>

      <CartWithItems />

      <footer />
    </div>
  );
}
