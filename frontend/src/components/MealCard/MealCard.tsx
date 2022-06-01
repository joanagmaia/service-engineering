import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button, { ButtonColor, ButtonShape, ButtonSize } from "../Button";
import Card from "../Card";
import Image, { ImgType } from "../Image";
import RoundButton, { RoundButtonColor, RoundButtonSize } from "../RoundButton";
import "./mealCard.css";

type PropTypes = {
  id: string;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  onAddToCard: (id: string, quantity: number) => void;
};

const MealCard = ({
  id,
  title,
  description,
  price,
  imageSrc,
  onAddToCard,
}: PropTypes) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Card>
      <div className="cardContent">
        <Image
          src={
            !!imageSrc?.length
              ? imageSrc
              : "https://www.eatthis.com/wp-content/uploads/sites/4/2021/05/healthy-foods.jpg?quality=82&strip=1"
          }
          alt="mealCard"
          type={ImgType.SmallRectangle}
        />
        <div className="info">
          <span className="heading">{title}</span>
          <span className="description">{description}</span>
          <span className="text-bold">
            <span className="red">$ </span>
            {price}
          </span>
        </div>
        <div className="actionBtns">
          <RoundButton
            icon={faMinus}
            iconColor="black"
            iconSize="xs"
            onClick={() =>
              quantity > 1 ? setQuantity((prev) => prev - 1) : null
            }
            btnColor={RoundButtonColor.LightGrey}
            btnSize={RoundButtonSize.Small}
          />
          <span className="text-bold">{quantity}</span>
          <RoundButton
            icon={faPlus}
            iconColor="black"
            iconSize="xs"
            onClick={() => setQuantity((prev) => prev + 1)}
            btnColor={RoundButtonColor.LightGrey}
            btnSize={RoundButtonSize.Small}
          />
          <Button
            text="Add to cart"
            shape={ButtonShape.Compact}
            btnSize={ButtonSize.Small}
            btnColor={ButtonColor.DarkBlue}
            onClick={() => onAddToCard(id, quantity)}
          />
        </div>
      </div>
    </Card>
  );
};

export default MealCard;
