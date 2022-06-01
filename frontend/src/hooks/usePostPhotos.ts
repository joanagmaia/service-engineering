import { useQuery } from "react-query";
import { toast } from "react-toastify";

const url = `${process.env.REACT_APP_API_URL}/orders`;

const usePostPhotos = (image: string, id?: string) =>
  useQuery(
    ["photos", image],
    async () => {
      var data = new FormData();
      data.append("filename", `${id}.png`);
      data.append("mimetype", "image/png");
      data.append("file", new Blob([image], { type: "image/png" }));

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.open("POST", `${url}/${id}/photo`);
      xhr.onerror = () => {
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
      };
      xhr.setRequestHeader("Authorization", "Bearer Bearer W2v8aEuW4u");
      xhr.send(data);
    },
    {
      enabled: !!image && !!id,
    }
  );

export default usePostPhotos;
