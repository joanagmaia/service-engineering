import { Product } from "./products";

export type OrderItem = {
  quantity: number;
  product: Product;
};

export type OrderRequest = {
  total_price: number;
  location_tag: string;
  items: OrderItem[];
};
