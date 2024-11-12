export type Product = {
  name: string;
  slug: string;
  badge?: string;
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
  inStock: boolean;
};

export type NavItem = {
  text: string;
  slug: string;
};

export type LanguageItem = {
  text: string;
  slug: string;
};
