import { useQuery } from "react-query";
import { ProductType } from "../typings/products";

const url = `${process.env.REACT_APP_API_URL}/products`;

const useGetProduct = (productType: ProductType) => {
  return useQuery(["products", productType], () =>
    fetch(
      `${url}?${new URLSearchParams({
        type: productType,
      })}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => data)
  );
};

export default useGetProduct;
