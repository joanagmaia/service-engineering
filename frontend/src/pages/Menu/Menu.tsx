import { faCamera, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MealCard from "../../components/MealCard";
import RoundButton, {
  RoundButtonColor,
  RoundButtonSize,
} from "../../components/RoundButton";
import ShoppingCart from "../../components/ShoppingCart";
import SidePanel, { MealOptions } from "../../components/SidePanel";
import "./menu.css";

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState(MealOptions.Soups);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="page">
      <header>
        <h3 className="heading">Group 12 Menu</h3>
        <div className="actionBtns">
          <RoundButton
            icon={faCamera}
            iconSize="2x"
            iconColor="#1c1a59"
            btnColor={RoundButtonColor.LightGrey}
            btnSize={RoundButtonSize.Big}
            onClick={() => null}
          />
          <RoundButton
            icon={faShoppingBasket}
            iconSize="2x"
            iconColor="#1c1a59"
            btnColor={RoundButtonColor.LightGrey}
            btnSize={RoundButtonSize.Big}
            notification="2"
            onClick={() => setIsCartOpen(true)}
          />
        </div>
      </header>
      <div className="pageContent">
        <div className="sidePanelWrapper">
          <SidePanel
            onSelectedOptionChange={setSelectedOption}
            selectedOption={selectedOption}
          />
        </div>
        <div className="mealCards">
          <MealCard
            title="Meal 1"
            description="Small description"
            price="5.05"
            quantity="1"
          />
          <MealCard
            title="Meal 1"
            description="Small description"
            price="5.05"
            quantity="1"
          />
          <MealCard
            title="Meal 1"
            description="Small description"
            price="5.05"
            quantity="1"
          />
          <MealCard
            title="Meal 1"
            description="Small description"
            price="5.05"
            quantity="1"
          />
          <MealCard
            title="Meal 1"
            description="Small description"
            price="5.05"
            quantity="1"
          />
          <MealCard
            title="Meal 1"
            description="Small description"
            price="5.05"
            quantity="1"
          />
        </div>
      </div>
      {isCartOpen && <ShoppingCart onCloseClick={() => setIsCartOpen(false)} />}
    </div>
  );
};

export default Menu;
