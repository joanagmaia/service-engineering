import { Order, OrdersResponse } from "../../typings/orders";
import "./ordersList.css";

type PropTypes = {
  orders: OrdersResponse;
  setSelectedOrder: React.Dispatch<React.SetStateAction<Order | undefined>>;
  selectedId?: string;
};

const OrdersList = ({ orders, setSelectedOrder, selectedId }: PropTypes) => {
  return (
    <div className="ordersList">
      <div className="tableHeaders">
        <p className="text-bold">Order Id</p>
        <p className="text-bold">Location Tag</p>
        <p className="text-bold">Time</p>
        <p className="text-bold">Kitchen Staff</p>
        <p className="text-bold">Status</p>
      </div>
      <div className="tableRows">
        {orders?.map((order) => (
          <div
            key={order.id}
            className={`tableRow ${selectedId === order.id ? "selected" : ""}`}
            onClick={() => setSelectedOrder(order)}
          >
            <p className="text">#{order.id}</p>
            <p className="text">{order.location_tag}</p>
            {/* TBD: Order timestamp */}
            <p className="text">00:00</p>
            <p className="text">{order.staff_name}</p>
            <p>
              <span
                className={`text-bold status ${order.status
                  .replace(" ", "")
                  .toLowerCase()}`}
              >
                {order.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersList;
