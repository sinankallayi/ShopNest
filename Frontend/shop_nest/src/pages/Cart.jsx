import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

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

  const handlePayment = () => {
    // Navigate to the payment page
    navigate('/payment');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p style={styles.emptyCartText}>Your cart is empty</p>
      ) : (
        <>
          <ul style={styles.listGroup}>
            {cartItems.map((item, index) => (
              <li key={index} style={styles.listGroupItem}>
                <div>
                  <h5 style={styles.itemName}>{item.name}</h5>
                  <p style={styles.itemPrice}>${item.price}</p>
                </div>
                <button style={styles.removeButton} onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <button style={styles.paymentButton} onClick={handlePayment}>Proceed to Payment</button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem 1rem',
    paddingBottom: '29%',
  },
  heading: {
    marginBottom: '1.5rem',
    fontSize: '2rem',
    textAlign: 'center',
  },
  emptyCartText: {
    textAlign: 'center',
    fontSize: '1.2rem',
  },
  listGroup: {
    listStyle: 'none',
    padding: '0',
    marginBottom: '1.5rem',
  },
  listGroupItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    marginBottom: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  itemName: {
    margin: '0',
    fontSize: '1.2rem',
  },
  itemPrice: {
    margin: '0.5rem 0 0 0',
  },
  removeButton: {
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  paymentButton: {
    display: 'block',
    width: '100%',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '1rem',
    borderRadius: '4px',
    fontSize: '1.2rem',
    cursor: 'pointer',
  }
};

export default Cart;
