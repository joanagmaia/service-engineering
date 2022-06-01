import { useQuery } from "react-query";
import { ProductType } from "../typings/products";
import { toast } from "react-toastify";

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
      .catch(() => {
        toast("Something went wrong", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: "error",
          theme: "colored",
        });
      })
  );
};

export default useGetProduct;
