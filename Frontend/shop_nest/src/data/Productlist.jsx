import { useState } from 'react';
import { toast } from 'react-toastify';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { imageUrl } from 'utils/image';
import Product from 'components/Product';


const ProductList = ({ products,title,addToCart }) => {
  
  return (
    <div className='containerStyle'>
      {title && <header className='shopheader' style={{ backgroundColor: '#287671', padding: '2px', color: 'white' ,height:'100px',fontFamily:'Abel'}}>
        <h1 style={{fontFamily:'abril-fatface-regular',fontSize:'25px'}}>{title}</h1>
      </header>}

      <Grid container direction={"row"} spacing={4} justifyContent="center"
            alignItems="center">
       {products.map((product) => <Product key={product._id} product={product} addToCart={addToCart}/>)}
      </Grid>
    </div>
  );
};

export default ProductList;
