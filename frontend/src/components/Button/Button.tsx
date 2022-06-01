import { faSpinner, IconDefinition } from "@fortawesome/free-solid-svg-icons";
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
  isLoading?: boolean;
  icon?: IconDefinition | null;
  onClick: () => void;
};

const Button = ({
  text,
  shape,
  btnSize,
  btnColor,
  isLoading,
  disabled,
  icon,
  onClick,
}: PropTypes) => {
  const buttonContent = () => {
    if (!!icon) {
      return <FontAwesomeIcon icon={icon} />;
    }

    if (isLoading) {
      return <FontAwesomeIcon icon={faSpinner} spin />;
    }

    return <span>{text}</span>;
  };

  return (
    <button
      className={`btn ${btnSize} ${btnColor} ${shape}`}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonContent()}
    </button>
  );
};

export default Button;
