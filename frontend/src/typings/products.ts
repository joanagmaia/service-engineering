export enum ProductType {
  Appetizer = "APPETIZER",
  Beverage = "BEVERAGE",
  Dessert = "DESSERT",
  Main = "MAIN",
  Soup = "SOUP",
}

export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  type: ProductType;
};

export type ProductsResponse = Product[];
