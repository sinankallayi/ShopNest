import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from localStorage on component mount
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  const removeFromCart = (index) => {
    // Create a copy of the current cart items array
    const updatedCartItems = [...cartItems];
    // Remove the item at the specified index
    updatedCartItems.splice(index, 1);
    // Update localStorage with the updated cart items
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    // Update state to re-render the component
    setCartItems(updatedCartItems);
  };

  return (
    <div className="container" style={{paddingBottom:'29%'}}>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
