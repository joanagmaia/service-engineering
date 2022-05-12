import { faCamera, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MealCard from "../../components/MealCard";
import RoundButton, {
  RoundButtonColor,
  RoundButtonSize,
} from "../../components/RoundButton";
import SidePanel, { MealOptions } from "../../components/SidePanel";
import "./menu.css";

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState(MealOptions.Soups);

  return (
    <div className="page">
      <header>
        <h3 className="heading">Restaurant Name Menu</h3>
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
            onClick={() => null}
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
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
        </div>
      </div>
    </div>
  );
};

export default Menu;
