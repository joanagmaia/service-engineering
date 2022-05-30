import {
  faCamera,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useCallback, useRef } from "react";
import RoundButton, { RoundButtonColor, RoundButtonSize } from "../RoundButton";
import Webcam from "react-webcam";
import { usePostPhotos } from "../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PropTypes = {
  image: string;
  orderId?: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
};

const videoConstraints = {
  width: 500,
  height: 300,
  facingMode: "user",
};

const Camera = ({ image, orderId, setImage }: PropTypes) => {
  const webcamRef = useRef<Webcam>(null);
  const { isSuccess, isError, isFetched } = usePostPhotos(image, orderId);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const screenshot = webcamRef.current.getScreenshot();

      if (screenshot) {
        setImage(screenshot);
      }
    }
  }, [setImage]);

  if (isSuccess && isFetched) {
    return (
      <div>
        <FontAwesomeIcon color="#47BB83" size="5x" icon={faCheckCircle} />
        <h3 className="heading">
          Face recognition was successfull. Your order will be prepared soon
        </h3>
      </div>
    );
  }

  if (isError && isFetched) {
    setImage("");

    return (
      <div>
        <FontAwesomeIcon color="#C83D3D" size="5x" icon={faTimesCircle} />
        <h3 className="heading">
          Face recognition was not successfull. Please contact customer support.
        </h3>
      </div>
    );
  }

  return (
    <>
      {!image ? (
        <Webcam
          audio={false}
          height={300}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={500}
          videoConstraints={videoConstraints}
        />
      ) : (
        <img src={image} alt="facialRecognition" />
      )}
      <RoundButton
        icon={faCamera}
        iconSize="2x"
        btnColor={RoundButtonColor.DarkBlue}
        iconColor="white"
        btnSize={RoundButtonSize.Medium}
        onClick={capture}
      />
    </>
  );
};

export default Camera;
