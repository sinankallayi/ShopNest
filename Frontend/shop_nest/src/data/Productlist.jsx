import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProductList = ({ products,title }) => {
  
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
    toast(`${product.name} added to cart!`);
    
    // Clear message after 3 seconds
    // setTimeout(() => {
    //   setMessage('');
    // }, 3000);
  };
  return (
    <div className='containerStyle'>
      {title && <header className='shopheader' style={{ backgroundColor: '#287671', padding: '2px', color: 'white' ,height:'100px',fontFamily:'Abel'}}>
        <h1 style={{fontFamily:'abril-fatface-regular',fontSize:'25px'}}>{title}</h1>
      </header>}
      <div className='row'>
        {products.map((product) => (
          <div key={product.id} className='col-4'>
            <div className='card'>
              <img src={product.image} alt={product.name} className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>{product.name}</h5>
                <p className='card-text'>{product.description}</p>
                <p className='card-text'>{product.price}</p>
                <button onClick={()=>addToCart(product)} className='btn btn-primary'>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
