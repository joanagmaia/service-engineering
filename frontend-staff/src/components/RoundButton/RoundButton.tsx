import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./roundBtn.css";

export enum RoundButtonColor {
  LightGrey = "light-grey",
  DarkBlue = "dark-blue",
}

export enum RoundButtonSize {
  Small = "small",
  Medium = "medium",
  Big = "big",
}

type PropTypes = {
  icon: IconDefinition;
  iconSize: SizeProp;
  iconColor: string;
  btnSize: RoundButtonSize;
  btnColor: RoundButtonColor;
  onClick: () => void;
};

const RoundButton = ({
  icon,
  iconColor,
  iconSize,
  btnSize,
  btnColor,
  onClick,
}: PropTypes) => {
  return (
    <>
      <button className={`roundBtn ${btnSize} ${btnColor}`} onClick={onClick}>
        <FontAwesomeIcon color={iconColor} size={iconSize} icon={icon} />
      </button>
    </>
  );
};

RoundButton.defaultProps = {
  notification: null,
};

export default RoundButton;
