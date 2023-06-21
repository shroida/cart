import React from "react";
import formatCurrency from "../FormatCurrency"
import { useShoppingCart } from "../../context/ShoppingCartContext";
import "./ProductItem.css"
const ProductItem = ({ id, price, name, imageUrl }) => {
  const { increaseCartQuantity, getItemsQuantity, decreaseCartQuantity, removeItemFromCart } = useShoppingCart()
  const quantity = getItemsQuantity(id)

  return (
    <>

      <div className="card-a ">
        <img
          className="card-image"
          src={imageUrl}

          alt="cardimage"
        />
        <div className="info-card">
          <div >
            <span className="card-name">{name}</span>
            <span className="card-price">{formatCurrency(price)}</span>
          </div>
          {quantity === 0 ? (<button onClick={() => increaseCartQuantity(id)}>Add to cart</button>)

            : <div >
              <div className="btns">
                <button className="card-button" onClick={() => increaseCartQuantity(id)} >+</button>
                <span>{quantity} Product in your cart</span>
                <button className="card-button" onClick={() => decreaseCartQuantity(id)}>-</button></div>

              <div>
                <button className="rem-btn" onClick={() => removeItemFromCart(id)}>remove</button>
              </div>

            </div>}
        </div>
      </div >
    </>
  );
};

export default ProductItem;
