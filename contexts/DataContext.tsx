"use client";

import { createContext, useState } from "react";

import type {
  Product,
  Bundle,
  CartItem,
  Provider,
  DataContextProps,
  ContactDetails,
  DeliveryAddress,
  ShippingMethod,
  PaymentMethod,
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

const SHIPPING_METHODS = [
  { name: "Zásilkovna", price: 69 },
  { name: "PPL", price: 89 },
];

const PAYMENT_METHODS = [{ name: "Card", price: 0 }];

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);

const DataContextProvider = ({ children }: Provider) => {
  const [contactDetails, setContactDetails] = useState<ContactDetails>({
    email: "",
    phone: "",
  });
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress>({
    name: "",
    street: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>({
    name: "Zásilkovna",
    price: 69,
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>({
    name: "Card",
    price: 0,
  });

  const [cart, setCart] = useState<CartItem[]>([]);
  const subtotal: number = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total: number = subtotal + shippingMethod.price + paymentMethod.price;

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
        shippingMethods: SHIPPING_METHODS,
        paymentMethods: PAYMENT_METHODS,
        contactDetails,
        setContactDetails,
        deliveryAddress,
        setDeliveryAddress,
        shippingMethod,
        setShippingMethod,
        paymentMethod,
        setPaymentMethod,
        cart,
        subtotal,
        total,
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
