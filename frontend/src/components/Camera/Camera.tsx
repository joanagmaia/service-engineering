import { faCamera, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useRef } from "react";
import RoundButton, { RoundButtonColor, RoundButtonSize } from "../RoundButton";
import Webcam from "react-webcam";
import { usePostPhotos } from "../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PropTypes = {
  image: string;
  wasSuccessful: boolean;
  setWasSuccessful: React.Dispatch<React.SetStateAction<boolean>>;
  setImage: React.Dispatch<React.SetStateAction<string>>;
};

const videoConstraints = {
  width: 500,
  height: 300,
  facingMode: "user",
};

const Camera = ({
  image,
  wasSuccessful,
  setImage,
  setWasSuccessful,
}: PropTypes) => {
  const webcamRef = useRef<Webcam>(null);
  const { postPhotos } = usePostPhotos();

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const screenshot = webcamRef.current.getScreenshot();

      if (screenshot) {
        setImage(screenshot);
        postPhotos(screenshot)
          .then(() => setWasSuccessful(true))
          .catch(() => setImage(""));
      }
    }
  }, [postPhotos, setImage, setWasSuccessful]);

  if (wasSuccessful) {
    return (
      <div>
        <FontAwesomeIcon color="#47BB83" size="5x" icon={faCheckCircle} />
        <h3 className="heading">Face recognition was successfull</h3>
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
