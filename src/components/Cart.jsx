import './Cart.css'
import React from 'react'

const Cart = ({ cart, removeFromCart }) => {
  if (cart.length === 0) return <h2>Your cart is empty.</h2>;

  return (
    <div className="cart">
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.thumbnail} alt={item.title} className="cart-item-img" />
          <div className="cart-item-info">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart
