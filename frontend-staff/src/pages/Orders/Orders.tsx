import { UseQueryResult } from "react-query";
import { useGetOrders, usePostLogout } from "../../hooks";
import { OrderResponse } from "../../typings/orders";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import OrdersList from "../../components/OrdersList";
import RoundButton, {
  RoundButtonColor,
  RoundButtonSize,
} from "../../components/RoundButton";
import "./orders.css";
import OrderDetail from "../../components/OrderDetail";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState<OrderResponse>();
  const navigate = useNavigate();
  const { data } = useGetOrders() as UseQueryResult<OrderResponse[], unknown>;
  const { postLogout } = usePostLogout();

  const username = localStorage.getItem("username") || "";

  const handleLogout = () => {
    postLogout().then(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      navigate("/");
    });
  };

  return (
    <div className="page">
      <header>
        <h3 className="heading">Group 12 Orders</h3>
        <div className="actionBtns">
          <p className="description">{username}</p>
          <RoundButton
            icon={faSignOut}
            iconSize="2x"
            iconColor="#1c1a59"
            btnColor={RoundButtonColor.LightGrey}
            btnSize={RoundButtonSize.Big}
            onClick={handleLogout}
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
