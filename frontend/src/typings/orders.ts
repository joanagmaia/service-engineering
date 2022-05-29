import { Product } from "./products";

export enum OrderStatus {
  Waiting = "Waiting",
  Progress = "In Progress",
  Finished = "Finished",
  Completed = "Completed",
}

export type Order = {
  quantity: number;
  product: Product;
};

export type OrderRequest = {
  total_price: number;
  location_tag: string;
  items: Order[];
};
