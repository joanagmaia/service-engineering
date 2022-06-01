import { useState } from "react";
import { Auth } from "../typings/auth";

const url = `${process.env.REACT_APP_API_URL}/staffs/login`;

const usePostLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const postLogin = async (auth: Auth) => {
    const params = new URLSearchParams({
      username: auth.username,
      password: auth.password,
    });

    setIsLoading(true);

    return fetch(`${url}?${params}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .finally(() => setIsLoading(false));
  };

  return { postLogin, isLoading };
};

export default usePostLogin;
