import {
  faBeer,
  faBowlFood,
  faBurger,
  faIceCream,
  faShrimp,
} from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import "./sidePanel.css";

export enum MealOptions {
  Soups = "soups",
  Appetizers = "appetizers",
  MainCourses = "main-courses",
  Desserts = "desserts",
  Beverages = "beverages",
}

const options = [
  {
    name: "Soups",
    value: MealOptions.Soups,
    icon: faBowlFood,
  },
  {
    name: "Appetizers",
    value: MealOptions.Appetizers,
    icon: faShrimp,
  },
  {
    name: "Main Courses",
    value: MealOptions.MainCourses,
    icon: faBurger,
  },
  {
    name: "Desserts",
    value: MealOptions.Desserts,
    icon: faIceCream,
  },
  {
    name: "Beverages",
    value: MealOptions.Beverages,
    icon: faBeer,
  },
];

type PropTypes = {
  selectedOption: MealOptions;
  onSelectedOptionChange: (option: MealOptions) => void;
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
