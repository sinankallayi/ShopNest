import { useState } from 'react';
import { toast } from 'react-toastify';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { imageUrl } from 'utils/image';
import Product from 'components/Product';


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

      <Grid container direction={"row"} spacing={4} justifyContent="center"
            alignItems="center">
       {products.map((product) => <Product key={product._id} product={product}/>)}
      </Grid>
    </div>
  );
};

export default ProductList;
