import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import RoundButton, { RoundButtonColor, RoundButtonSize } from "../RoundButton";
import "./mealOrder.css";
import Image, { ImgType } from "../Image";

type PropTypes = {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  imageSrc: string;
  handleQuantity: (id: string, quantity: number) => void;
};

const MealOrder = ({
  id,
  title,
  description,
  price,
  imageSrc,
  quantity,
  handleQuantity,
}: PropTypes) => {
  return (
    <div className="mealOrder">
      <div className="mealOrderImage">
        <Image
          src={
            !!imageSrc?.length
              ? imageSrc
              : "https://www.eatthis.com/wp-content/uploads/sites/4/2021/05/healthy-foods.jpg?quality=82&strip=1"
          }
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
            onClick={() => handleQuantity(id, -1)}
            btnColor={RoundButtonColor.LightGrey}
            btnSize={RoundButtonSize.Small}
          />
          <span className="text-bold">{quantity}</span>
          <RoundButton
            icon={faPlus}
            iconColor="black"
            iconSize="xs"
            onClick={() => handleQuantity(id, 1)}
            btnColor={RoundButtonColor.LightGrey}
            btnSize={RoundButtonSize.Small}
          />
        </div>
      </div>
    </div>
  );
};

export default MealOrder;
