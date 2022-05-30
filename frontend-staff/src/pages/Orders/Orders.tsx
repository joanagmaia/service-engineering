import { UseQueryResult } from "react-query";
import { useGetOrders } from "../../hooks";
import { Order, OrdersResponse } from "../../typings/orders";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import OrdersList from "../../components/OrdersList";
import RoundButton, {
  RoundButtonColor,
  RoundButtonSize,
} from "../../components/RoundButton";
import "./orders.css";
import OrderDetail from "../../components/OrderDetail";
import { useState } from "react";

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order>();
  const { data } = useGetOrders() as UseQueryResult<OrdersResponse, unknown>;

  return (
    <div className="page">
      <header>
        <h3 className="heading">Group 12 Orders</h3>
        <div className="actionBtns">
          <p className="description">John Doe</p>
          <RoundButton
            icon={faSignOut}
            iconSize="2x"
            iconColor="#1c1a59"
            btnColor={RoundButtonColor.LightGrey}
            btnSize={RoundButtonSize.Big}
            onClick={() => null}
          />
        </div>
      </header>
      <div className="pageContent">
        {data && (
          <OrdersList
            orders={data}
            setSelectedOrder={setSelectedOrder}
            selectedId={selectedOrder?.id}
          />
        )}
        {selectedOrder && (
          <OrderDetail
            order={selectedOrder}
            setSelectedOrder={setSelectedOrder}
          />
        )}
      </div>
    </div>
  );
};

export default Orders;
