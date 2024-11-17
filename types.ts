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

export type CartWithItemsProps = {
  cart: CartItem[];
  adjustCartItemQuantity: (itemId: string, quantity: number) => void;
  upgradeItemToBundle: (item: CartItem) => void;
};

export type DataContextProps = CartWithItemsProps & {
  patch: Product;
  bracelet: Product;
  bundle: Bundle;
  allProducts: (Product | Bundle)[];
  addToCart: (item: Product | Bundle, quantity: number) => void;
};
