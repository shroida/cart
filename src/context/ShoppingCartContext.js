import { createContext, useContext, useState, useEffect } from "react";
import ShoppinCart from "../Compontents/ShoppingCart/ShoppinCart";
const ShoppingCartContext = createContext({});
const intialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];

const ShoppingCartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(intialCartItems);
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
  }, [cartItems]);
  const time = new Date().toLocaleTimeString();
  const [currTime, setCurrTime] = useState(time);
  const updateTime = () => {
    const time = new Date().toLocaleTimeString();
    setCurrTime(time);
  };
  setInterval(updateTime, 1000);
  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };
  //   to get numbers of items in the cart
  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else return item;
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) === null) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  // const numbers = [1, 2, 3, 4, 5];

  // // Filter out all even numbers
  // const oddNumbers = numbers.filter((number) => {
  //   return number % 2 !== 0;
  // });

  // console.log(oddNumbers); // Output: [1, 3, 5]
  const removeItemFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        increaseCartQuantity,
        getItemsQuantity,
        decreaseCartQuantity,
        removeItemFromCart,
        closeCart,
        openCart,
        cartQuantity,
        currTime,
      }}
    >
      {children}
      <ShoppinCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
