"use client";

import { createContext, useState } from "react";

import type {
  Product,
  Bundle,
  CartItem,
  Provider,
  DataContextProps,
} from "@/types";

const BRACELET = {
  id: "bracelet",
  price: 4.99,
  size: "200x12mm",
  material: "100% silicon",
};

const PATCH = {
  id: "patch",
  price: 9.99,
  size: "130x40mm",
  material: "PVC + Velcro",
};

const BUNDLE = {
  id: "bundle",
  price: 12.99,
  items: [PATCH, BRACELET],
  badges: ["Save 10%", "Extra gift"],
};

const ALL_PRODUCTS = [BRACELET, PATCH, BUNDLE];

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);

const DataContextProvider = ({ children }: Provider) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Product | Bundle, quantity: number) => {
    const { id, price } = item;

    setCart((prevState: CartItem[]) => {
      const existingItem = prevState.find(
        (cartItem: CartItem) => cartItem.id === id
      );

      if (existingItem) {
        return prevState.map((cartItem: CartItem) =>
          cartItem.id === id ? { ...cartItem, quantity: quantity } : cartItem
        );
      } else {
        return [...prevState, { id, price, quantity }];
      }
    });
  };

  const adjustCartItemQuantity = (itemId: string, quantity: number) => {
    setCart((cart) =>
      quantity >= 1
        ? cart.map((item: CartItem) =>
            item.id === itemId ? { ...item, quantity } : item
          )
        : cart.filter((item: CartItem) => item.id !== itemId)
    );
  };

  const upgradeItemToBundle = (item: CartItem) => {
    const existingBundle = cart.find(
      (cartItem: CartItem) => cartItem.id === "bundle"
    );

    const upgradedCart = existingBundle
      ? cart.map((cartItem: CartItem) =>
          cartItem.id === "bundle"
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      : [
          ...cart,
          { id: BUNDLE.id, price: BUNDLE.price, quantity: item.quantity },
        ];

    const filteredCart = upgradedCart.filter(
      (cartItem) => cartItem.id !== item.id
    );

    setCart(filteredCart);
  };

  return (
    <DataContext.Provider
      value={{
        patch: PATCH,
        bracelet: BRACELET,
        bundle: BUNDLE,
        allProducts: ALL_PRODUCTS,
        cart,
        addToCart,
        adjustCartItemQuantity,
        upgradeItemToBundle,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
