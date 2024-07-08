import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


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

      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{xs:2, md:2}} columns={{ xs: 4, sm: 8, md: 18 }}>
       {products.map((product) => (
          <Grid item xs={2} sm={4} md={4} key={product.id}>
            <div className='card'>
              <img src={product.image} alt={product.name} className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>{product.name}</h5>
                <p className='card-text'>{product.description}</p>
                <p className='card-text'>{product.price}</p>
                <button onClick={()=>addToCart(product)} className='btn btn-primary'>Add to Cart</button>
              </div>
          </div>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  );
};

export default ProductList;
