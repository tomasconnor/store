"use client";

import { createContext, useState, useEffect } from "react";
import { useTranslations } from "next-intl";

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

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);

const DataContextProvider = ({ children }: Provider) => {
  const t = useTranslations();

  const BRACELET = {
    id: "bracelet",
    price: 4.99,
    size: "200x12mm",
    material: t("braceletMaterial"),
  };

  const PATCH = {
    id: "patch",
    price: 9.99,
    size: "130x40mm",
    material: t("patchMaterial"),
  };

  const BUNDLE = {
    id: "bundle",
    price: 12.99,
    items: [PATCH, BRACELET],
    badges: [t("save10"), t("extraGift")],
  };

  const ALL_PRODUCTS = [BRACELET, PATCH, BUNDLE];

  const SHIPPING_METHODS = [
    {
      name: "GLS",
      price: 2.99,
      badge: t("mostFavorite"),
    },
    { name: "PPL", price: 3.99 },
    { name: "DHL", price: 4.99 },
  ];

  const PAYMENT_METHODS = [
    { name: t("cardPayment"), price: 0, badge: t("mostFavorite") },
    { name: t("cashOnDelivery"), price: 30 },
  ];

  const CONTACT_DETAILS = { email: "", phone: "" };
  const DELIVERY_ADDRESS = {
    name: "",
    street: "",
    city: "",
    postalCode: "",
    country: "Česká republika",
  };

  const FREE_SHIPPING_THRESHOLD = 20; // $

  const [contactDetails, setContactDetails] =
    useState<ContactDetails>(CONTACT_DETAILS);

  const [deliveryAddress, setDeliveryAddress] =
    useState<DeliveryAddress>(DELIVERY_ADDRESS);

  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>(
    SHIPPING_METHODS[0]
  );
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PAYMENT_METHODS[0]
  );

  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartLoading, setCartLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    setCartLoading(false);
  }, []);

  const subtotal: number = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total: number =
    subtotal +
    (subtotal > FREE_SHIPPING_THRESHOLD ? 0 : shippingMethod.price) +
    (subtotal > FREE_SHIPPING_THRESHOLD ? 0 : paymentMethod.price);

  const reset = () => {
    setContactDetails(CONTACT_DETAILS);
    setDeliveryAddress(DELIVERY_ADDRESS);
    setShippingMethod(SHIPPING_METHODS[0]);
    setPaymentMethod(PAYMENT_METHODS[0]);
    setCart([]);
    localStorage.removeItem("cart");
  };

  const addToCart = (item: Product | Bundle, quantity: number) => {
    setCart((prevState: CartItem[]) => {
      const { id, price } = item;

      const existingItem = prevState.find(
        (cartItem: CartItem) => cartItem.id === id
      );

      const updatedCart = existingItem
        ? prevState.map((cartItem: CartItem) =>
            cartItem.id === id ? { ...cartItem, quantity: quantity } : cartItem
          )
        : [...prevState, { id, price, quantity }];

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  const adjustCartItemQuantity = (itemId: string, quantity: number) => {
    setCart((prevState: CartItem[]) => {
      const updatedCart =
        quantity >= 1
          ? prevState.map((item: CartItem) =>
              item.id === itemId ? { ...item, quantity } : item
            )
          : prevState.filter((item: CartItem) => item.id !== itemId);

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  const upgradeItemToBundle = (item: CartItem) => {
    setCart((prevState: CartItem[]) => {
      const existingBundle = prevState.find(
        (cartItem: CartItem) => cartItem.id === "bundle"
      );

      const upgradedCart = existingBundle
        ? prevState.map((cartItem: CartItem) =>
            cartItem.id === "bundle"
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem
          )
        : [
            ...prevState,
            { id: BUNDLE.id, price: BUNDLE.price, quantity: item.quantity },
          ];

      const filteredCart = upgradedCart.filter(
        (cartItem) => cartItem.id !== item.id
      );

      localStorage.setItem("cart", JSON.stringify(filteredCart));

      return filteredCart;
    });
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
        subtotal: Number(subtotal.toFixed(2)),
        total: Number(total.toFixed(2)),
        addToCart,
        adjustCartItemQuantity,
        upgradeItemToBundle,
        reset,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        cartLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
