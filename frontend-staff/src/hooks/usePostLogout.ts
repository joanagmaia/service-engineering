const url = `${process.env.REACT_APP_API_URL}/staffs/logout`;

const usePostLogout = () => {
  const postLogout = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      return fetch(
        `${url}?${new URLSearchParams({
          token,
        })}`,
        {
          method: "POST",
        }
      ).then((response) => response.json());
    }
  };

  return { postLogout };
};

export default usePostLogout;
