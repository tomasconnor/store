export type Product = {
  id: number;
  name: string;
  slug: string;
  badge?: string;
};

export type ProductPreviewItemProps = {
  product: Product;
  isEven: boolean;
  badge?: string;
};

export type AccordionItemProps = {
  id: number;
  trigger: string;
  content: string;
};
