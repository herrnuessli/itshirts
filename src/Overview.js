// Overview.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Overview = ({ navigateTo }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your Spring Boot backend
    fetch('http://your-backend-api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <Header />
      <h2>Product Overview</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => navigateTo('cart')}>View Cart</button>
    </div>
  );
};

export default Overview;
