import { useQueries } from "react-query";
import { OrderResponse } from "../typings/orders";
import { toast } from "react-toastify";

const url = `${process.env.REACT_APP_API_URL}/products`;

const useGetProduct = (order: OrderResponse) => {
  const ids = Object.keys(order.items).map((key) => key);

  const fetchProduct = (id: string) =>
    fetch(`${url}/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
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
      });

  return useQueries(
    ids.map((id) => ({
      queryKey: ["product", id],
      queryFn: () => Promise.resolve(fetchProduct(id)),
    }))
  );
};

export default useGetProduct;
