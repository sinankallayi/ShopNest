import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, Box } from '@mui/material';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Order History
        <hr color='#267871'/>
      </Typography>
      {orders.length === 0 ? (
        <Typography variant="h6" component="p" align="center">
          No orders found.
        </Typography>
      ) : (
        <List>
          {orders.map((order, index) => (
            <Paper key={index} sx={styles.orderPaper}>
              <Box sx={styles.orderHeader}>
                <Typography variant="h6" component="h2">
                  Order {index + 1} - {order.date}
                </Typography>
              </Box>
              <List>
                {order.items.map((item, itemIndex) => (
                  <ListItem key={itemIndex} sx={styles.listItem}>
                    <ListItemText
                      primary={item.name}
                      secondary={`Price: ₹${item.price} x Quantity: ${item.quantity}`}
                    />
                  </ListItem>
                ))}
              </List>
              <Box sx={styles.totalAmount}>
                <Typography variant="body1" component="p">
                  Total: ₹{order.totalAmount}
                </Typography>
              </Box>
            </Paper>
          ))}
        </List>
      )}
    </Container>
  );
};

const styles = {
  orderPaper: {
    marginBottom: '16px',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  orderHeader: {
    backgroundColor: '#f0f0f0',
    padding: '12px',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    marginBottom: '8px',
  },
  listItem: {
    padding: '12px',
    borderBottom: '1px solid #e0e0e0',
  },
  totalAmount: {
    backgroundColor: '#e0f2f1',
    padding: '12px',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  },
};

export default OrderHistory;
