import React, { useState } from 'react';
import 'pages/Women.css'; // Assuming you create a separate CSS file for the Womens component
// import products from 'data/Products.jsx';
import Product from 'components/Product.jsx'; // Adjust the path as needed

const Kids = ({products,title}) => {

  




  const [message, setMessage] = useState('');

  const addToCart = (product) => {
    // Retrieve existing cart items from localStorage or initialize an empty array
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Ensure cartItems is always an array
    if (!Array.isArray(cartItems)) {
      cartItems = [];
    }
    
    // Add the new product to the cartItems array
    cartItems.push(product);

    // Update localStorage with the updated cartItems array
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Set message to display when product is added to cart
    setMessage(`${product.name} added to cart!`);
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div className='containerStyle'>
      <div className="women-page">
        <header className='shopheader' style={{ backgroundColor: '#287671', padding: '2px', color: 'white', height: '100px', fontFamily: 'Abel' }}>
          <h1 style={{ fontFamily: 'abril-fatface-regular', fontSize: '25px' }}>{title}</h1>
        </header>
        <main>
          <div className="product-list">
            {products.map(product => (
              <Product key={product.id} product={product} addToCart={() => addToCart(product)} />
            ))}
          </div>
          {message && <p>{message}</p>}
        </main>
      </div>
    </div>
  );
};

export default Kids;
