import { Auth } from "../typings/auth";

const url = `${process.env.REACT_APP_API_URL}/staff/auth`;

const usePostAuth = () => {
  const postAuth = async (auth: Auth) =>
    fetch(url, {
      method: "POST",
      body: JSON.stringify(auth),
    }).then((response) => response.json());

  return { postAuth };
};

export default usePostAuth;
