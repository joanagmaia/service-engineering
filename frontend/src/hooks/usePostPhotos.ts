const url = `${process.env.REACT_APP_API_URL}/users/photos`;

const usePostPhotos = () => {
  const postPhotos = async (image: string) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
      },
      body: image,
    }).then((response) => response.json());
  };

  return {
    postPhotos,
  };
};

export default usePostPhotos;
