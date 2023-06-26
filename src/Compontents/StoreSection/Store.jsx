import { React, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import ProductsItems from "../../data/ProductsItems.json";
import "./Store.css"
import { useShoppingCart } from "../../context/ShoppingCartContext";
const Store = () => {
  const [numToShow, setNumToShow] = useState(10);
  const handleShowMoreClick = () => {
    setNumToShow(numToShow + 5);
  };
  const { currTime } = useShoppingCart()
  return (
    <div>
      <h1 className='clock'> Save your {currTime} with us</h1>
      <h1 className="store-h">STORE PRODUCT</h1>
      <div className="container">
        {ProductsItems.slice(0, numToShow).map((item) => {
          return (
            <div className="card-container" key={item.id}>
              <ProductItem {...item} />
            </div>
          );
        })}
      </div>
      {numToShow < ProductsItems.length && (
        <button className="btn-show" onClick={handleShowMoreClick}>Show More</button >
      )}
    </div>
  );
};

export default Store;
