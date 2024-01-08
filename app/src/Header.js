// Header.js
import React from 'react';

const Header = ({ navigateTo }) => {
  return (
    <div style={headerStyle}>
      <h1>Your Webshop</h1>
      <div>
        <button onClick={() => navigateTo('overview')}>Home</button>
        <button onClick={() => navigateTo('cart')}>View Cart</button>
        <button onClick={() => navigateTo('product-details')}>product details</button>
      </div>
    </div>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  background: '#333',
  color: '#fff',
};

export default Header;
