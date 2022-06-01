import { faCamera, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useMemo, useState } from "react";
import { usePostOrder } from "../../hooks";
import { OrderItem, OrderResponse } from "../../typings/orders";
import Button, { ButtonColor, ButtonShape, ButtonSize } from "../Button";
import Camera from "../Camera";
import CustomerAction from "../CustomerAction";
import { CustomerActionSize } from "../CustomerAction/CustomerAction";
import LocationTag from "../LocationTag";
import MealOrder from "../MealOrder";
import { toast } from "react-toastify";
import "./shoppingCart.css";

type PropTypes = {
  orders: OrderItem[];
  onCloseClick: () => void;
  handleQuantity: (id: string, quantity: number) => void;
};

const ShoppingCart = ({ orders, onCloseClick, handleQuantity }: PropTypes) => {
  const [orderId, setOrderId] = useState<string>();
  const [image, setImage] = useState<string>("");
  const [locationTag, setLocationTag] = useState<string>();
  const { isLoading, postOrder } = usePostOrder();

  const totalPrice = useMemo(
    () => orders.reduce((a, b) => +a + +b.quantity * b.product.price, 0),
    [orders]
  );
  const isCartEmpty = !orders.length;
  const isOrderValid = !!locationTag && !isCartEmpty;

  const submitOrder = () => {
    if (isOrderValid) {
      const items = orders.map((o) => ({
        [o.product.id]: o.quantity,
      }));

      const initialValue = {};
      const mappedItems = items.reduce((obj, item) => {
        return {
          ...obj,
          [Object.keys(item)[0]]: item[Object.keys(item)[0]],
        };
      }, initialValue);

      postOrder({
        totalPrice,
        locationTag,
        items: mappedItems,
      })
        .then((response: OrderResponse) => {
          setOrderId(response.id);
        })
        .catch(() => {
          toast("Something went wrong", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            type: "error",
            theme: "colored",
          });
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
            <Button
              text={"Place order"}
              icon={orderId ? faCheck : null}
              onClick={submitOrder}
              shape={ButtonShape.FullWidth}
              btnSize={ButtonSize.Medium}
              btnColor={ButtonColor.Green}
              isLoading={isLoading}
              disabled={!isOrderValid || !!orderId}
            />
          </div>
        </div>
        <div className="customerActions">
          {!orderId && (
            <CustomerAction
              size={CustomerActionSize.Regular}
              withoutAction={true}
            >
              <LocationTag onChange={(e) => setLocationTag(e.target.value)} />
            </CustomerAction>
          )}
          {orderId && (
            <CustomerAction
              size={CustomerActionSize.Big}
              icon={faCamera}
              buttonText="Pay with Face Recognition"
              description="Press the button to take a picture"
              disabled={isCartEmpty || !orderId}
            >
              <Camera orderId={orderId} image={image} setImage={setImage} />
            </CustomerAction>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
