import { useQuery } from "react-query";

const url = `${process.env.REACT_APP_API_URL}/orders`;

const useGetOrders = () =>
  useQuery("orders", () =>
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => data)
  );

export default useGetOrders;
