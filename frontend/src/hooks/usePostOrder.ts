import { useState } from "react";
import { OrderRequest } from "../typings/orders";

const url = `${process.env.REACT_APP_API_URL}/orders`;

const usePostOrder = () => {
  const [isLoading, setIsLoading] = useState(false);

  const postOrder = async (requestBody: OrderRequest) => {
    setIsLoading(true);
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .finally(() => setIsLoading(false));
  };

  return { postOrder, isLoading };
};

export default usePostOrder;
