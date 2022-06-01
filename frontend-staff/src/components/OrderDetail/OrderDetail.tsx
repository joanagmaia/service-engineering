import { OrderResponse } from "../../typings/orders";
import "./orderDetail.css";
import Button, { ButtonColor, ButtonShape, ButtonSize } from "../Button";
import { UseQueryResult } from "react-query";
import { useGetProduct, usePostOrder } from "../../hooks";
import { Product } from "../../typings/products";
import gif from "../../coffee-loading.gif";

type PropTypes = {
  order: OrderResponse;
  setSelectedOrder: React.Dispatch<
    React.SetStateAction<OrderResponse | undefined>
  >;
};

const OrderDetail = ({ order, setSelectedOrder }: PropTypes) => {
  const products = useGetProduct(order) as any;
  const { postOrder, isLoading: isPrepareLoading } = usePostOrder();

  const isLoading = products.some((p: UseQueryResult<Product>) => p.isLoading);

  if (isLoading) {
    return (
      <div
        className="orderDetail"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img height="300" src={gif} alt={gif} />
      </div>
    );
  }

  const productsData = products.map((p: UseQueryResult<Product>) => p.data);
  const fullOrder = {
    ...order,
    items: Object.entries(order.items).map(([key, value]) => ({
      quantity: value,
      product: productsData.find((product: Product) => product.id === key),
    })),
  };

  return (
    <div className="orderDetail">
      <header>
        <h3 className="heading">Order #{fullOrder.id} detail</h3>
        <Button
          text="Close"
          onClick={() => setSelectedOrder(undefined)}
          shape={ButtonShape.Compact}
          btnColor={ButtonColor.LightGrey}
          btnSize={ButtonSize.Small}
        />
      </header>
      <div className="orderDetailItems">
        {fullOrder.items.map((item) => (
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
      <div className="completeBtn">
        <Button
          text="Prepare Order"
          onClick={() => postOrder(order.id)}
          shape={ButtonShape.FullWidth}
          btnColor={ButtonColor.Green}
          btnSize={ButtonSize.Medium}
          isLoading={isPrepareLoading}
        />
      </div>
    </div>
  );
};

export default OrderDetail;
