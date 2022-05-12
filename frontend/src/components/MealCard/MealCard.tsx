import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Button, { ButtonColor, ButtonShape, ButtonSize } from "../Button";
import Card from "../Card";
import Image, { ImgType } from "../Image";
import RoundButton, { RoundButtonColor, RoundButtonSize } from "../RoundButton";
import "./mealCard.css";

const MealCard = () => {
  return (
    <Card>
      <div className="cardContent">
        <Image
          src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/05/healthy-foods.jpg?quality=82&strip=1"
          alt="mealCard"
          type={ImgType.SmallRectangle}
        />
        <div className="info">
          <span className="heading">Meal 1</span>
          <span className="description">Small description</span>
          <span className="text-bold">
            <span className="red">$ </span>5.05
          </span>
        </div>
        <div className="actionBtns">
          <RoundButton
            icon={faMinus}
            iconColor="black"
            iconSize="xs"
            onClick={() => null}
            btnColor={RoundButtonColor.LightGrey}
            btnSize={RoundButtonSize.Small}
          />
          <span className="text-bold">1</span>
          <RoundButton
            icon={faPlus}
            iconColor="black"
            iconSize="xs"
            onClick={() => null}
            btnColor={RoundButtonColor.LightGrey}
            btnSize={RoundButtonSize.Small}
          />
          <Button
            text="Add to cart"
            shape={ButtonShape.Compact}
            btnSize={ButtonSize.Small}
            btnColor={ButtonColor.DarkBlue}
            onClick={() => null}
          />
        </div>
      </div>
    </Card>
  );
};

export default MealCard;
