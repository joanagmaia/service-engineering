import { useQuery } from "react-query";

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
      formData.append("data", DataURIToBlob(image));
      formData.append("filename", `${id}.jpeg`);
      formData.append("mimetype", "application/octet-stream");

      return fetch(`${url}/${id}/photos`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => data);
    },
    {
      enabled: !!image && !!id,
    }
  );

export default usePostPhotos;
