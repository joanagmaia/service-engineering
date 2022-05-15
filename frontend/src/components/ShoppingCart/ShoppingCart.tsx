import { faCamera, faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import Button, { ButtonColor, ButtonShape, ButtonSize } from "../Button";
import CustomerAction from "../CustomerAction";
import { CustomerActionSize } from "../CustomerAction/CustomerAction";
import MealOrder from "../MealOrder";
import "./shoppingCart.css";

type PropTypes = {
  onCloseClick: () => void;
};

const ShoppingCart = ({ onCloseClick }: PropTypes) => {
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
          <MealOrder
            title="Meal 1"
            description="Small description"
            price="5.05"
            quantity="2"
          />
          <MealOrder
            title="Meal 1"
            description="Small description"
            price="5.05"
            quantity="2"
          />
          <div className="totalPrice">
            <span>Total to pay</span>
            <span className="text-bold">
              <span className="red">$ </span>
              20.20
            </span>
          </div>
        </div>
        <div className="customerActions">
          <CustomerAction
            size={CustomerActionSize.Big}
            icon={faCamera}
            buttonText="Pay with Face Recognition"
            description="Press the button to take a picture"
            onClick={() => null}
          />
          <CustomerAction
            icon={faSearchLocation}
            size={CustomerActionSize.Regular}
            buttonText="Submit location tag"
            onClick={() => null}
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
