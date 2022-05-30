import { Order } from "../../typings/orders";
import "./orderDetail.css";
import Button, { ButtonColor, ButtonShape, ButtonSize } from "../Button";

type PropTypes = {
  order: Order;
  setSelectedOrder: React.Dispatch<React.SetStateAction<Order | undefined>>;
};

const OrderDetail = ({ order, setSelectedOrder }: PropTypes) => {
  return (
    <div className="orderDetail">
      <header>
        <h3 className="heading">Order #{order.id} detail</h3>
        <Button
          text="Close"
          onClick={() => setSelectedOrder(undefined)}
          shape={ButtonShape.Compact}
          btnColor={ButtonColor.LightGrey}
          btnSize={ButtonSize.Small}
        />
      </header>
      <div className="orderDetailItems">
        {order.items.map((item) => (
          <div key={item.product.id} className="orderDetailItem">
            <div className="orderDetailItemInfo">
              <h3 className="heading">{item.product.title}</h3>
              <p className="description">{item.product.description}</p>
            </div>
            <h3 className="heading">
              {item.quantity} item{item.quantity > 1 ? "s" : ""}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetail;
