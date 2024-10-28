import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import s from "./Cart.module.scss";

export const Cart = ({}) => {
  const {cartData, addToCart, removeFromCart, subtractCartItem, clearCart} = useContext(CartContext);

  return (
    <div className={s.cartStyling}>
      <h2>Shopping Cart:</h2>
      {cartData?.map((item) => {
        return (
          <figure key={item.id}>
            <h5>{item.title}</h5>
            <p>{item.price}</p>
            <span>
              <button onClick={() => subtractCartItem(item)}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => addToCart(item)}>+</button>
            </span>
            <button onClick={() => removeFromCart(item)}>Remove product</button>
            <figcaption>
              <p>Total: {Math.floor(item.price * item.quantity)}$</p>
            </figcaption>
          </figure>
        )
      })}
      <button onClick={() => clearCart()}>Clear Cart</button>
    </div>
  )
}