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
  total_price: string;
  status: OrderStatus;
  staff_name: string;
  location_tag: string;
  items: OrderItem[];
};

export type OrdersResponse = Order[];
