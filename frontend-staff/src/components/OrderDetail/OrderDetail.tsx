import { OrderResponse } from "../../typings/orders";
import "./orderDetail.css";
import Button, { ButtonColor, ButtonShape, ButtonSize } from "../Button";
import { UseQueryResult } from "react-query";
import { useGetProduct } from "../../hooks";
import { Product } from "../../typings/products";

type PropTypes = {
  order: OrderResponse;
  setSelectedOrder: React.Dispatch<
    React.SetStateAction<OrderResponse | undefined>
  >;
};

const OrderDetail = ({ order, setSelectedOrder }: PropTypes) => {
  const products = useGetProduct(order) as any;

  const isLoading = products.some((p: UseQueryResult<Product>) => p.isLoading);

  if (isLoading) {
    return <p>loading</p>;
  }

  const productsData = products.map((p: UseQueryResult<Product>) => p.data);
  const fullOrder = {
    ...order,
    items: order.items.map((item) => ({
      quantity: item[Object.keys(item)[0]],
      product: productsData.find(
        (product: Product) => product.id === Object.keys(item)[0]
      ),
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
          text="Complete"
          onClick={() => null}
          shape={ButtonShape.FullWidth}
          btnColor={ButtonColor.Green}
          btnSize={ButtonSize.Medium}
        />
      </div>
    </div>
  );
};

export default OrderDetail;
