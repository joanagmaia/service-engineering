import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button, { ButtonColor, ButtonShape, ButtonSize } from "../Button";
import "./customerAction.css";

export enum CustomerActionSize {
  Regular = "regular",
  Big = "big",
}

type PropTypes = {
  size: CustomerActionSize;
  icon: IconDefinition;
  buttonText: string;
  description?: string;
  onClick: () => void;
};

const CustomerAction = ({
  size,
  icon,
  buttonText,
  description,
  onClick,
}: PropTypes) => {
  return (
    <div className={`customerActionContainer ${size}`}>
      <div className="customerActionContent">
        <FontAwesomeIcon color="#E1E1E1" size="5x" icon={icon} />
        <Button
          text={buttonText}
          btnSize={ButtonSize.Medium}
          btnColor={ButtonColor.DarkBlue}
          onClick={onClick}
          shape={ButtonShape.Compact}
        />
        {description && <span className="description">{description}</span>}
      </div>
    </div>
  );
};

CustomerAction.defaultProps = {
  description: null,
};

export default CustomerAction;
