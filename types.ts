export type Product = {
  name: string;
  slug: string;
  badges?: string[];
};

export type ProductPreviewItemProps = {
  product: Product;
  isEven: boolean;
};

export type AccordionItemProps = {
  trigger: string;
  content: string;
};

export type ProductDetailProps = {
  specification: React.JSX.Element;
  price: number;
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

export type CheckoutFormProps = {
  setOrderCompleted: React.Dispatch<React.SetStateAction<boolean>>;
};
