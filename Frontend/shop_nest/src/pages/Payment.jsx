import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Paper, Grid } from '@mui/material';

const CheckoutAndPayment = () => {
  // State for checkout details
  const [shippingAddress, setShippingAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  // State for payment details
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    // Handle checkout logic here
    alert('Checkout details submitted successfully!');
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission logic here
    alert('Payment submitted successfully!');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Checkout and Payment
      </Typography>
      
      <Grid container spacing={4}>
        {/* Checkout Form */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Checkout
            </Typography>
            <Box component="form" onSubmit={handleCheckoutSubmit}>
              <TextField
                label="Shipping Address"
                fullWidth
                margin="normal"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                required
              />
              <TextField
                label="City"
                fullWidth
                margin="normal"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <TextField
                label="Postal Code"
                fullWidth
                margin="normal"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Submit Checkout Details
              </Button>
            </Box>
          </Paper>
        </Grid>
        
        {/* Payment Form */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Payment
            </Typography>
            <Box component="form" onSubmit={handlePaymentSubmit}>
              <TextField
                label="Name on Card"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <TextField
                label="Card Number"
                fullWidth
                margin="normal"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Expiry Date"
                    fullWidth
                    margin="normal"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="CVV"
                    fullWidth
                    margin="normal"
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
  );
};

export default CheckoutAndPayment;
