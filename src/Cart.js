// Cart.js
import React from 'react';
import Header from './Header';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <Header />
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
