import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Button, { ButtonColor, ButtonShape, ButtonSize } from "../Button";
import RoundButton, { RoundButtonColor, RoundButtonSize } from "../RoundButton";
import "./mealOrder.css";
import Image, { ImgType } from "../Image";

type PropTypes = {
  title: string;
  description: string;
  price: string;
  quantity: string;
};

const MealOrder = ({ title, description, price, quantity }: PropTypes) => {
  return (
    <div className="mealOrder">
      <div className="mealOrderImage">
        <Image
          src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/05/healthy-foods.jpg?quality=82&strip=1"
          alt="mealCard"
          type={ImgType.SmallSquare}
        />
        <span className="quantity">{quantity}</span>
      </div>
      <div className="mealOrderInfo">
        <span className="heading">{title}</span>
        <span className="description">{description}</span>
        <span className="text-bold">
          <span className="red">$ </span>
          {price}
        </span>
        <div className="actionBtns">
          <RoundButton
            icon={faMinus}
            iconColor="black"
            iconSize="xs"
            onClick={() => null}
            btnColor={RoundButtonColor.LightGrey}
            btnSize={RoundButtonSize.Small}
          />
          <span className="text-bold">{quantity}</span>
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
    </div>
  );
};

export default MealOrder;
