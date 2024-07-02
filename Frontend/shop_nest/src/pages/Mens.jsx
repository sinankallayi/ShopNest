import React, { useState } from 'react';
import 'D:/Tutorial/ICT/ShopNest/Frontend/shop_nest/src/pages/Mens.css';
import products from 'D:/Tutorial/ICT/ShopNest/Frontend/shop_nest/src/data/Products.jsx';
import Product from 'D:/Tutorial/ICT/ShopNest/Frontend/shop_nest/src/components/Product.jsx';
// import { Link } from 'react-router-dom';


const Men=()=>{
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className='containerStyle'>
    <div className="men-page">
      <header className='shopheader' style={{ backgroundColor: '#287671', padding: '2px', color: 'white' ,height:'100px',fontFamily:'Abel'}}>
        <h1 style={{fontFamily:'abril-fatface-regular',fontSize:'25px'}}>ShopNest - Men's Clothing</h1>
       
          {/* <ul className='ulstyle' style={{marginLeft:'65%'}}>
            <li className='headerlistyle'><Link to='/'><b>Home</b></Link></li>
            <li className='headerlistyle'><Link to="/shop"><b>Shop</b></Link></li>
            <li className='headerlistyle'><Link to="/cart"><b>Cart</b></Link></li>
          </ul> */}
      
      </header>
      <main>
        <div className="product-list">
          {products.map(product => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
        <div className="cart">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.price}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
    </div>
  );
};

export default Men;