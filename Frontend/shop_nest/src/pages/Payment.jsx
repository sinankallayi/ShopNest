import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Box, Paper, Grid, List, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { imageUrl } from 'utils/image';

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#008000',
    },
    secondary: {
      main: '#d32f2f',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '24px',
          borderRadius: '12px',
        },
      },
    },
  },
});

const ShoppingPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [shippingAddress, setShippingAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    // Ensure each item in cart has quantity property
    items.forEach(item => {
      if (!item.quantity || typeof item.quantity !== 'number' || item.quantity < 1) {
        item.quantity = 1; // Initialize quantity to 1 if not defined or invalid
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
    updatedCartItems[index].quantity = newQuantity;
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
    calculateTotalAmount(updatedCartItems);
  };

  const calculateTotalAmount = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalAmount(total);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    const order = {
      items: items.map(item => ({ name: item.name, price: item.price, quantity: item.quantity })),
      totalAmount: items.reduce((acc, item) => acc + item.price * item.quantity, 0),
      date: new Date().toLocaleString()
    };
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const updatedOrders = [...existingOrders, order];
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    localStorage.removeItem('cart');
    setCartItems([]);
    setTotalAmount(0);
    navigate('/');
    alert('Payment submitted successfully!');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
        {/* Shopping Cart */}
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Shopping Cart
        </Typography>
        {cartItems.length === 0 ? (
          <Typography variant="h6" component="p" align="center">
            Your cart is empty
          </Typography>
        ) : (
          <>
            <List>
              {cartItems.map((item, index) => (
                <Paper key={index} sx={{ mb: 2, p: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <img style={{ height: "100px" }} src={imageUrl(item.image)} alt={item.name} />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body1">₹{item.price}</Typography>
                    </Grid>
                    <Grid item xs={3} style={{ display: 'flex', alignItems: 'center' }}>
                      <TextField
                        label="Quantity"
                        type="number"
                        variant="outlined"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                        InputProps={{ inputProps: { min: 1 } }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={1} style={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton color="secondary" onClick={() => removeFromCart(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Paper>
              ))}
            </List>
            <Typography variant="h5" align="center">Total Amount: ₹{totalAmount}</Typography>
          </>
        )}

        {/* Checkout and Payment */}
        <Typography variant="h4" component="h1" align="center" gutterBottom sx={{ mt: 4 }}>
          Checkout and Payment
        </Typography>
        <Grid container spacing={4}>
          {/* Checkout Form */}
          <Grid item xs={12} md={6}>
            <Paper elevation={6}>
              <Typography variant="h5" component="h2" gutterBottom>
                Checkout
              </Typography>
              <Box component="form">
                <TextField
                  label="Shipping Address"
                  fullWidth
                  variant="outlined"
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  required
                />
                <TextField
                  label="City"
                  fullWidth
                  variant="outlined"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                <TextField
                  label="Postal Code"
                  fullWidth
                  variant="outlined"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                />
              </Box>
            </Paper>
          </Grid>
          
          {/* Payment Form */}
          <Grid item xs={12} md={6}>
            <Paper elevation={6}>
              <Typography variant="h5" component="h2" gutterBottom>
                Payment
              </Typography>
              <Box component="form" onSubmit={handlePaymentSubmit}>
                <TextField
                  label="Name on Card"
                  fullWidth
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <TextField
                  label="Card Number"
                  fullWidth
                  variant="outlined"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      label="Expiry Date"
                      fullWidth
                      variant="outlined"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="CVV"
                      fullWidth
                      variant="outlined"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                    />
                  </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                  Submit Payment
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ShoppingPage;
