import { Auth } from "../typings/auth";

const url = `${process.env.REACT_APP_API_URL}/staffs/login`;

const usePostLogin = () => {
  const postLogin = async (auth: Auth) =>
    fetch(
      `${url}?${new URLSearchParams({
        username: auth.username,
        password: auth.password,
      })}`,
      {
        method: "POST",
      }
    ).then((response) => response.json());

  return { postLogin };
};

export default usePostLogin;
