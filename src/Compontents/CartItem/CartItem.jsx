import React from "react";
import ProductsItems from "../../data/ProductsItems.json";
import formatCurrency from "../FormatCurrency";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import "./CartItem.css"
const CartItem = ({ id, quantity }) => {
  const { removeItemFromCart } = useShoppingCart()
  const item = ProductsItems.find((i) => i.id === id);
  return (
    <div className="shopping-container">
      <img
        src={item.imageUrl}
        alt={item.name}

      />
      <div className="me">
        <div>
          {item.name}
          {quantity > 1 && (
            <h3 className="name-item-cart" >
              x{quantity}
            </h3>
          )}
          <div className="name-item-cart" >
            {formatCurrency(item.price)}
          </div>
        </div>

        <div>{formatCurrency(item.price * quantity)}</div>
      </div>
      <button className="rem-btn-cart" onClick={() => removeItemFromCart(id)}>
        &times;
      </button>



    </div>
  );
};

export default CartItem;
