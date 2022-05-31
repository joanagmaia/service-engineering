import { useQueries } from "react-query";
import { OrderResponse } from "../typings/orders";

const url = `${process.env.REACT_APP_API_URL}/products`;

const useGetProduct = (order: OrderResponse) => {
  const ids = order.items.map((item) => Object.keys(item)[0]);

  const fetchProduct = (id: string) =>
    fetch(`${url}/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => data);

  return useQueries(
    ids.map((id) => ({
      queryKey: ["product", id],
      queryFn: () => Promise.resolve(fetchProduct(id)),
    }))
  );
};

export default useGetProduct;
