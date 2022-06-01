import { Product } from "./products";

export enum OrderStatus {
  Waiting = "WAITING",
  InProgress = "IN_PROGRESS",
  Prepared = "PREPARED",
  Delivered = "DELIVERED",
}

export const orderStatus = {
  [OrderStatus.Waiting]: "Waiting",
  [OrderStatus.InProgress]: "In Progress",
  [OrderStatus.Prepared]: "Prepared",
  [OrderStatus.Delivered]: "Delivered",
};

export type OrderItem = {
  quantity: number;
  product: Product;
};

export type OrderItemRequest = {
  [key: string]: number;
};

export type OrderRequest = {
  totalPrice: number;
  locationTag: string;
  items: OrderItemRequest;
};

export type Order = {
  id: string;
  totalPrice: number;
  status: OrderStatus;
  staffName: string;
  locationTag: string;
  items: OrderItem[];
};

export type OrderResponse = {
  id: string;
  totalPrice: number;
  status: OrderStatus;
  staffName: string;
  locationTag: string;
  items: OrderItemRequest;
};

export type OrdersResponse = Order[];
