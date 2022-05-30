import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button, { ButtonColor, ButtonShape, ButtonSize } from "../Button";
import "./customerAction.css";

export enum CustomerActionSize {
  Regular = "regular",
  Big = "big",
}

type PropTypes = {
  size?: CustomerActionSize;
  icon?: IconDefinition;
  buttonText?: string;
  description?: string;
  disabled?: boolean;
  withoutAction?: boolean;
  children?: React.ReactNode;
};

const CustomerAction = ({
  size,
  icon,
  buttonText,
  description,
  disabled,
  withoutAction,
  children,
}: PropTypes) => {
  const [isActionVisible, setIsActionVisible] = useState(false);

  const handleCustomerActionClick = () => {
    setIsActionVisible(true);
  };

  return (
    <div className={`customerActionContainer ${size}`}>
      <div className="customerActionContent">
        {isActionVisible || withoutAction ? (
          children
        ) : (
          <>
            {icon && <FontAwesomeIcon color="#E1E1E1" size="5x" icon={icon} />}
            {buttonText && (
              <Button
                text={buttonText}
                btnSize={ButtonSize.Medium}
                btnColor={ButtonColor.DarkBlue}
                onClick={handleCustomerActionClick}
                shape={ButtonShape.Compact}
                disabled={disabled}
              />
            )}
            {description && <span className="description">{description}</span>}
          </>
        )}
      </div>
    </div>
  );
};

CustomerAction.defaultProps = {
  showChildren: false,
  description: null,
};

export default CustomerAction;
