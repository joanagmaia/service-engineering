import { useState } from "react";
import { toast } from "react-toastify";

const url = `${process.env.REACT_APP_API_URL}/orders`;

const usePostOrder = () => {
  const [isLoading, setIsLoading] = useState(false);

  const postOrder = async (orderId: string) => {
    setIsLoading(true);
    return fetch(`${url}/${orderId}/prepare`, {
      method: "POST",
      headers: {
        authorization: `${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
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
      .finally(() => setIsLoading(false));
  };

  return { postOrder, isLoading };
};

export default usePostOrder;
