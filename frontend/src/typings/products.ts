export enum ProductType {
  Soup = "Soup",
  Appetizer = "Appetizer",
  Main = "Main",
  Dessert = "Dessert",
  Beverage = "Beverage",
}

export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  product_type: ProductType;
};

export type ProductsResponse = {
  limit: number;
  offset: number;
  count: number;
  results: Product[];
};
