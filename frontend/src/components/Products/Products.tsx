import { Product, ProductsResponse } from "../../typings/products";
import MealCard from "../MealCard";
import gif from "../../coffee-loading.gif";
import "./products.css";

type PropTypes = {
  products: ProductsResponse | undefined;
  addToCart: (id: string, quantity: number) => void;
};

const Products = ({ products, addToCart }: PropTypes) => {
  if (!products) {
    return (
      <div className="productsWrapper">
        <img height="300" src={gif} alt={gif} />
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="productsWrapper">
        <h3 className="heading">No available dishes for this category</h3>
      </div>
    );
  }

  return (
    <>
      {products.map((d: Product) => (
        <MealCard
          key={d.id}
          id={d.id}
          title={d.title}
          description={d.description}
          price={d.price}
          onAddToCard={addToCart}
        />
      ))}
    </>
  );
};

export default Products;
