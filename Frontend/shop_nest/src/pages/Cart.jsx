import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { imageUrl } from 'utils/image';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    // Ensure each item has an initial quantity
    items.forEach(item => {
      if (typeof item.quantity !== 'number' || item.quantity < 1) {
        item.quantity = 1; // Initialize quantity to 1 if undefined or invalid
      }
    });
    setCartItems(items);
    calculateTotalAmount(items);
  }, []);

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
    calculateTotalAmount(updatedCartItems);
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    // Ensure quantity is always a number and at least 1
    updatedCartItems[index].quantity = typeof newQuantity === 'number' && newQuantity >= 1 ? newQuantity : 1;
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
    calculateTotalAmount(updatedCartItems);
  };

  const calculateTotalAmount = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalAmount(total);
  };

  const handlePayment = () => {
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
                <img style={{ height: "100px" }} src={imageUrl(item.image)} alt={item.name} />
                <div>
                  <h5 style={styles.itemName}>{item.name}</h5>
                  <p style={styles.itemPrice}>₹{item.price}</p>
                  <div style={styles.quantityContainer}>
                    <button style={styles.quantityButton} onClick={() => updateQuantity(index, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                    <span style={styles.quantityText}>{item.quantity}</span>
                    <button style={styles.quantityButton} onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button style={styles.removeButton} onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <div style={styles.totalAmountContainer}>
            <h2 style={styles.totalAmountText}>Total Amount: ₹{totalAmount}</h2>
          </div>
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
  quantityContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#ccc',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
  },
  quantityText: {
    margin: '0 1rem',
    fontSize: '1.2rem',
  },
  removeButton: {
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  totalAmountContainer: {
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  totalAmountText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
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
