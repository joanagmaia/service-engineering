import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MealOptions } from "./SidePanel";

type PropTypes = {
  onClick: (option: MealOptions) => void;
  name: string;
  value: MealOptions;
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
