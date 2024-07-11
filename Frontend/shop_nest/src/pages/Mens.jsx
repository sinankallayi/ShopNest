import 'pages/Mens.css'; // Assuming you create a separate CSS file for the Womens component
import { useState } from 'react';
// import products from 'data/Products.jsx';
import Product from 'components/Product.jsx';
import { toast } from 'react-toastify';
import { Grid } from '@mui/material';
// Adjust the path as needed

const Men = ({ products, title ,addToCart }) => {
  return (
    <div className='containerStyle'>
      <div className="women-page">
        <header className='shopheader' style={{ backgroundColor: 'white', padding: '2px', color: 'black', height: '50px', fontFamily: 'Abel',marginTop:'50px' }}>
          <h1 style={{ fontFamily: 'abril-fatface-regular', fontSize: '25px', marginLeft: '650px' }}>{title} <hr color='#267871' /></h1>

        </header>
        <main>
          <Grid container direction={"row"} spacing={4} justifyContent="center"
            alignItems="center" style={{marginTop:'20px'}}>
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




