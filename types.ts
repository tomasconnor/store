export type Product = {
  id: string;
  price: number;
  size: string;
  material: string;
  badges?: string[];
};

export type Bundle = Omit<Product, "size" | "material"> & {
  items: Product[];
};

export type ProductPreviewItemProps = {
  item: Product | Bundle;
  isEven: boolean;
};

export type AccordionItemProps = {
  trigger: string;
  content: string;
};

export type ProductDetailProps = {
  cart: CartItem[];
  addToCart: (item: Product | Bundle, quantity: number) => void;
  specification: React.JSX.Element;
  item: Product | Bundle;
};

export type NavItem = {
  text: string;
  slug: string;
};

// @TODO
export type LanguageItem = {
  text: string;
  slug: string;
};

export type CheckoutToggleGroupItemProps = {
  value: string;
  label: string;
  price: string;
  description?: string;
};

export type CheckoutToggleGroupProps = {
  children: React.ReactNode;
};

export type CartItem = {
  id: string;
  price: number;
  quantity: number;
};

export type CheckoutFormProps = {
  cart: CartItem[];
  setOrderCompleted: React.Dispatch<React.SetStateAction<boolean>>;
};

export type Provider = {
  children: React.ReactNode;
};

export type ShippingMethod = {
  name: string;
  price: number;
};

export type PaymentMethod = {
  name: string;
  price: number;
};

export type DeliveryAddress = {
  name: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
};

export type ContactDetails = {
  email: string;
  phone: string;
};

export type CartWithItemsProps = {
  cart: CartItem[];
  subtotal: number;
  adjustCartItemQuantity: (itemId: string, quantity: number) => void;
  upgradeItemToBundle: (item: CartItem) => void;
};

export type DataContextProps = CartWithItemsProps & {
  patch: Product;
  bracelet: Product;
  bundle: Bundle;
  shippingMethods: ShippingMethod[];
  paymentMethods: PaymentMethod[];
  contactDetails: ContactDetails;
  setContactDetails: React.Dispatch<React.SetStateAction<ContactDetails>>;
  deliveryAddress: DeliveryAddress;
  setDeliveryAddress: React.Dispatch<React.SetStateAction<DeliveryAddress>>;
  shippingMethod: ShippingMethod;
  setShippingMethod: React.Dispatch<React.SetStateAction<ShippingMethod>>;
  paymentMethod: PaymentMethod;
  setPaymentMethod: React.Dispatch<React.SetStateAction<PaymentMethod>>;
  total: number;
  allProducts: (Product | Bundle)[];
  addToCart: (item: Product | Bundle, quantity: number) => void;
};
