import { Product } from "./products";

export enum OrderStatus {
  Waiting = "Waiting",
  Progress = "In Progress",
  Finished = "Finished",
  Completed = "Completed",
}

export type OrderItem = {
  quantity: number;
  product: Product;
};

export type Order = {
  id: string;
  totalPrice: string;
  status: OrderStatus;
  staffName: string;
  locationTag: string;
  items: OrderItem[];
};

export type OrdersResponse = Order[];
