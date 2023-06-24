import React from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import CartItem from '../CartItem/CartItem'
import ProductsItems from "../../data/ProductsItems.json";
import formatCurrency from "../FormatCurrency";
import "./ShoppingCart.css"

const ShoppinCart = ({ isOpen }) => {
    const { cartItems, closeCart, } = useShoppingCart()

    return (
        <div className={isOpen === true ? "show" : "hidden"}  >
            <div className='header-cart'>
                <button className='close-btn' onClick={() => closeCart()}>X</button>
                <h2>Cart</h2>
            </div>
            <div>
                <div  >
                    {cartItems.map((item) => (

                        <CartItem key={item.id} {...item} />
                    ))}
                    <h4>Total {formatCurrency(
                        cartItems.reduce(
                            (total, cartItem) => {
                                const item = ProductsItems.find((i) => i.id === cartItem.id)

                                return total + (item?.price || 0) * cartItem.quantity
                            }, 0
                        )
                    )}</h4>
                </div>
            </div>

        </div>
    )
}

export default ShoppinCart
