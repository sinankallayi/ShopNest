import 'pages/Mens.css'; // Assuming you create a separate CSS file for the Womens component
import { useState } from 'react';
// import products from 'data/Products.jsx';
import Product from 'components/Product.jsx';
import { toast } from 'react-toastify';
import { Grid } from '@mui/material';
// Adjust the path as needed

const Men = ({ products, title }) => {
  const [message,] = useState('');

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
      <div className="women-page">
        <header className='shopheader' style={{ backgroundColor: 'white', padding: '2px', color: 'black', height: '50px', fontFamily: 'Abel' }}>
          <h1 style={{ fontFamily: 'abril-fatface-regular', fontSize: '25px', marginLeft: '650px' }}>{title} <hr color='#267871' /></h1>

        </header>
        <main>
          <Grid container direction={"row"} spacing={4} justifyContent="center"
            alignItems="center">
            {products?.map(product => (
              <Product key={product._id} product={product} addToCart={() => addToCart(product)} />
            ))}
          </Grid>
        </main>
      </div>
    </div>
  );
};

export default Men;




