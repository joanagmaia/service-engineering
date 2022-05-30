import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./button.css";

export enum ButtonColor {
  LightGrey = "light-grey",
  DarkBlue = "dark-blue",
  Green = "green",
}

export enum ButtonSize {
  Small = "small",
  Medium = "medium",
}

export enum ButtonShape {
  Compact = "compact",
  FullWidth = "full-width",
}

type PropTypes = {
  text: string;
  btnSize: ButtonSize;
  btnColor: ButtonColor;
  shape: ButtonShape;
  disabled?: boolean;
  icon?: IconDefinition | null;
  onClick: () => void;
};

const Button = ({
  text,
  shape,
  btnSize,
  btnColor,
  disabled,
  icon,
  onClick,
}: PropTypes) => {
  return (
    <button
      className={`btn ${btnSize} ${btnColor} ${shape}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon ? <FontAwesomeIcon icon={icon} /> : <span>{text}</span>}
    </button>
  );
};

export default Button;
