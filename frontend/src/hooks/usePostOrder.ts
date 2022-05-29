import { OrderRequest } from "../typings/orders";

const url = `${process.env.REACT_APP_API_URL}/orders`;

const usePostOrder = () => {
  const postOrder = async (requestBody: OrderRequest) =>
    fetch(url, {
      method: "POST",
      body: JSON.stringify(requestBody),
    }).then((response) => response.json());

  return { postOrder };
};

export default usePostOrder;
