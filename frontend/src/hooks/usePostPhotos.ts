import { useQuery } from "react-query";
import { toast } from "react-toastify";

const url = `${process.env.REACT_APP_API_URL}/orders`;

const DataURIToBlob = (dataURI: string) => {
  const splitDataURI = dataURI.split(",");
  const byteString =
    splitDataURI[0].indexOf("base64") >= 0
      ? atob(splitDataURI[1])
      : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

  return new Blob([ia], { type: mimeString });
};

const usePostPhotos = (image: string, id?: string) =>
  useQuery(
    ["photos", image],
    async () => {
      const formData = new FormData();

      formData.append("blob", DataURIToBlob(image));
      formData.append("filename", `${id}.png`);
      formData.append("mimetype", "image/png");

      return fetch(`${url}/${id}/photos`, {
        method: "POST",
        body: formData,
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
        });
    },
    {
      enabled: !!image && !!id,
    }
  );

export default usePostPhotos;
