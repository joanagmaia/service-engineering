import { Product } from "./products";

export enum OrderStatus {
  Waiting = "WAITING",
  InProgress = "IN_PROGRESS",
  Prepared = "PREPARED",
  Delivered = "DELIVERED",
}

export type OrderItem = {
  quantity: number;
  product: Product;
};

export type Order = {
  totalPrice: number;
  locationTag: string;
  items: OrderItem[];
};

export type OrderItemRequest = {
  [key: string]: number;
};

export type OrderRequest = {
  totalPrice: number;
  locationTag: string;
  items: OrderItemRequest[];
};
