import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductType } from "../../typings/products";

type PropTypes = {
  onClick: (option: ProductType) => void;
  name: string;
  value: ProductType;
  isSelected: boolean;
  icon: IconDefinition;
};

const Item = ({ onClick, name, value, icon, isSelected }: PropTypes) => {
  return (
    <div
      className={`sidePanelItem ${isSelected ? "selected" : ""}`}
      onClick={() => onClick(value)}
    >
      <FontAwesomeIcon
        className="icon"
        icon={icon}
        size={isSelected ? "3x" : "1x"}
      />
      <span className="heading">{name}</span>
      <span className="description">
        Select {name} from the menu and add them to the cart
      </span>
    </div>
  );
};

export default Item;
