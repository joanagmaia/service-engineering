import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { memo, useState } from "react";
import { UseQueryResult } from "react-query";
import RoundButton, {
  RoundButtonColor,
  RoundButtonSize,
} from "../../components/RoundButton";
import ShoppingCart from "../../components/ShoppingCart";
import SidePanel from "../../components/SidePanel";
import { useGetProduct } from "../../hooks";
import { OrderItem } from "../../typings/orders";
import { ProductsResponse, ProductType } from "../../typings/products";
import "./menu.css";
import Products from "../../components/Products";

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState(ProductType.Soup);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orders, setOrders] = useState<OrderItem[]>([]);

  const { data: products } = useGetProduct(selectedOption) as UseQueryResult<
    ProductsResponse,
    unknown
  >;

  const handleOnCloseClick = () => {
    setIsCartOpen(false);
    setIsCartOpen(false);
    setOrders([]);
  };

  const addToCart = (id: string, quantity: number) => {
    const product = products?.find((p) => p.id === id);
    const isInCard = orders.some((o) => o.product.id === id);

    if (!isInCard) {
      setOrders((prev) => [
        ...prev,
        {
          quantity,
          product,
        } as OrderItem,
      ]);
    } else {
      setOrders((prev) => {
        const index = prev.findIndex(
          (o: OrderItem) => quantity + o.quantity === 0
        );

        if (index !== -1) {
          prev.splice(index, 1);
        }
        return prev.map((o) => {
          if (o.product.id === id) {
            return {
              ...o,
              quantity: quantity + o.quantity,
            };
          }

          return o;
        });
      });
    }
  };

  return (
    <div className="page">
      <header>
        <h3 className="heading">Group 12 Menu</h3>
        <div className="actionBtns">
          <RoundButton
            icon={faShoppingBasket}
            iconSize="2x"
            iconColor="#1c1a59"
            btnColor={RoundButtonColor.LightGrey}
            btnSize={RoundButtonSize.Big}
            notification={
              orders.length
                ? String(orders.reduce((a, b) => +a + +b.quantity, 0))
                : undefined
            }
            onClick={() => setIsCartOpen(true)}
          />
        </div>
      </header>
      <div className="pageContent">
        <div className="sidePanelWrapper">
          <SidePanel
            onSelectedOptionChange={setSelectedOption}
            selectedOption={selectedOption}
          />
        </div>
        <div className="mealCards">
          <Products products={products} addToCart={addToCart} />
        </div>
      </div>
      {isCartOpen && (
        <ShoppingCart
          orders={orders}
          onCloseClick={handleOnCloseClick}
          handleQuantity={addToCart}
        />
      )}
    </div>
  );
};

export default memo(Menu);
