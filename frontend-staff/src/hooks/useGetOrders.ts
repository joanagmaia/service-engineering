import { useQuery } from "react-query";
import { toast } from "react-toastify";

const url = `${process.env.REACT_APP_API_URL}/orders`;

const useGetOrders = () =>
  useQuery("orders", () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    })
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

export default useGetOrders;
