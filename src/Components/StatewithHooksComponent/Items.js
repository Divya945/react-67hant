import React, { useState } from 'react';
import './Items.css';
export default function Items() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <div className="wrapper">
      <div>Shopping Cart: {cart.length} total items.</div>
      <div>Total: {total}</div>
      <div className="product">
        <span role="img" aria-label="ice cream">
          🍦
        </span>
      </div>
      <button>Add</button> <button>Remove</button>
    </div>
  );
}
