import { faCamera, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { memo, useState } from "react";
import MealCard from "../../components/MealCard";
import RoundButton, {
  RoundButtonColor,
  RoundButtonSize,
} from "../../components/RoundButton";
import ShoppingCart from "../../components/ShoppingCart";
import SidePanel, { MealOptions } from "../../components/SidePanel";
import { OrderItem } from "../../typings/orders";
import { Product } from "../../typings/products";
import "./menu.css";

type PropTypes = {
  products: Product[];
};

const Menu = ({ products }: PropTypes) => {
  const [selectedOption, setSelectedOption] = useState(MealOptions.Soups);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orders, setOrders] = useState<OrderItem[]>([]);

  const handleOrderSubmission = () => {
    setIsCartOpen(false);
    setOrders([]);
  };

  const addToCart = (id: string, quantity: number) => {
    const product = products.find((p) => p.id === id);
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
            icon={faCamera}
            iconSize="2x"
            iconColor="#1c1a59"
            btnColor={RoundButtonColor.LightGrey}
            btnSize={RoundButtonSize.Big}
            onClick={() => null}
          />
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
          {products?.map((d: Product) => (
            <MealCard
              key={d.id}
              id={d.id}
              title={d.title}
              description={d.description}
              price={d.price}
              onAddToCard={addToCart}
            />
          ))}
        </div>
      </div>
      {isCartOpen && (
        <ShoppingCart
          orders={orders}
          onCloseClick={() => setIsCartOpen(false)}
          handleQuantity={addToCart}
          handleOrderSubmission={handleOrderSubmission}
        />
      )}
    </div>
  );
};

export default memo(Menu);
