// App.js
import React, { useState, useEffect } from 'react';
import Overview from './Overview';
import ProductDetails from './ProductDetails';
import Cart from './Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [currentView, setCurrentView] = useState('overview');

  // Example of a function to handle navigation
  const navigateTo = (view) => {
    setCurrentView(view);
  };

  // Example of how you might handle navigation based on URL
  useEffect(() => {
    const path = window.location.pathname.toLowerCase();
    if (path.startsWith('/product')) {
      setCurrentView('product-details');
    } else if (path === '/cart') {
      setCurrentView('cart');
    } else {
      setCurrentView('overview');
    }
  }, []);

  return (
    <div>
      {currentView === 'overview' && <Overview navigateTo={navigateTo} />}
      {currentView === 'product-details' && <ProductDetails navigateTo={navigateTo}/>}
      {currentView === 'cart' && <Cart cartItems={cartItems} navigateTo={navigateTo} />}
    </div>
  );
};

export default App;
