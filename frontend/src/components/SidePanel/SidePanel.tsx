import {
  faBeer,
  faBowlFood,
  faBurger,
  faIceCream,
  faShrimp,
} from "@fortawesome/free-solid-svg-icons";
import { ProductType } from "../../typings/products";
import Item from "./Item";
import "./sidePanel.css";

const options = [
  {
    name: "Soups",
    value: ProductType.Soup,
    icon: faBowlFood,
  },
  {
    name: "Appetizers",
    value: ProductType.Appetizer,
    icon: faShrimp,
  },
  {
    name: "Main Courses",
    value: ProductType.Main,
    icon: faBurger,
  },
  {
    name: "Desserts",
    value: ProductType.Dessert,
    icon: faIceCream,
  },
  {
    name: "Beverages",
    value: ProductType.Beverage,
    icon: faBeer,
  },
];

type PropTypes = {
  selectedOption: ProductType;
  onSelectedOptionChange: (option: ProductType) => void;
};

const SidePanel = ({ selectedOption, onSelectedOptionChange }: PropTypes) => {
  return (
    <div className="sidePanel">
      {options.map(({ name, value, icon }) => (
        <Item
          key={value}
          name={name}
          value={value}
          icon={icon}
          isSelected={value === selectedOption}
          onClick={onSelectedOptionChange}
        />
      ))}
    </div>
  );
};

export default SidePanel;
