import React from 'react';

const ProfileOrders = () => {
  return (
    <div className="profile-orders">
      <h3>Order History</h3>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12345</td>
            <td>2024-06-30</td>
            <td>Shipped</td>
            <td>$100.00</td>
          </tr>
          <tr>
            <td>12346</td>
            <td>2024-07-01</td>
            <td>Delivered</td>
            <td>$50.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfileOrders