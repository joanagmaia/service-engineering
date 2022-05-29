import { faCamera, faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { useMemo, useState } from "react";
import usePostOrder from "../../hooks/usePostOrder";
import { Order } from "../../typings/orders";
import Button, { ButtonColor, ButtonShape, ButtonSize } from "../Button";
import Camera from "../Camera";
import CustomerAction from "../CustomerAction";
import { CustomerActionSize } from "../CustomerAction/CustomerAction";
import LocationTag from "../LocationTag";
import MealOrder from "../MealOrder";
import "./shoppingCart.css";

type PropTypes = {
  orders: Order[];
  onCloseClick: () => void;
  handleQuantity: (id: string, quantity: number) => void;
  handleOrderSubmission: () => void;
};

const ShoppingCart = ({
  orders,
  onCloseClick,
  handleQuantity,
  handleOrderSubmission,
}: PropTypes) => {
  const [image, setImage] = useState<string>("");
  const [wasFacialRecognitionSuccessful, setWasFacialRecognitionSuccessful] =
    useState(false);
  const [locationTag, setLocationTag] = useState<string>();
  const { postOrder } = usePostOrder();

  const totalPrice = useMemo(
    () => orders.reduce((a, b) => +a + +b.quantity * b.product.price, 0),
    [orders]
  );
  const isCartEmpty = !orders.length;
  const isOrderValid = !!image && !!locationTag && !isCartEmpty;

  const submitOrder = () => {
    if (isOrderValid) {
      postOrder({
        total_price: totalPrice,
        location_tag: locationTag,
        items: orders,
      }).then(() => {
        handleOrderSubmission();
      });
    }
  };

  return (
    <div className="modal">
      <header>
        <h3 className="heading">Order cart</h3>
        <Button
          text="Close"
          onClick={onCloseClick}
          shape={ButtonShape.Compact}
          btnColor={ButtonColor.LightGrey}
          btnSize={ButtonSize.Small}
        />
      </header>
      <hr />
      <div className="modalContent">
        <div className="ordersList">
          {orders.map(({ product, quantity }) => (
            <MealOrder
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              quantity={quantity}
              handleQuantity={handleQuantity}
            />
          ))}
          <div className="totalPrice">
            <span>Total to pay</span>
            <span className="text-bold">
              <span className="red">$ </span>
              {totalPrice}
            </span>
            {isOrderValid && (
              <Button
                text="Place order"
                onClick={submitOrder}
                shape={ButtonShape.FullWidth}
                btnSize={ButtonSize.Medium}
                btnColor={ButtonColor.Green}
              />
            )}
          </div>
        </div>
        <div className="customerActions">
          <CustomerAction
            size={CustomerActionSize.Big}
            icon={faCamera}
            buttonText="Pay with Face Recognition"
            description="Press the button to take a picture"
            disabled={isCartEmpty}
          >
            <Camera
              wasSuccessful={wasFacialRecognitionSuccessful}
              setWasSuccessful={setWasFacialRecognitionSuccessful}
              image={image}
              setImage={setImage}
            />
          </CustomerAction>
          <CustomerAction
            icon={faSearchLocation}
            size={CustomerActionSize.Regular}
            buttonText="Submit location tag"
            disabled={isCartEmpty}
          >
            <LocationTag onChange={(e) => setLocationTag(e.target.value)} />
          </CustomerAction>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
