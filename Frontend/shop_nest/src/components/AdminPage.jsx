import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const [newUser, setNewUser] = useState({ username: '', email: '' });
  const [editingProductIndex, setEditingProductIndex] = useState(null);
  const [editingUserIndex, setEditingUserIndex] = useState(null);

  useEffect(() => {
    // Retrieve products from localStorage or an API
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);

    // Retrieve users from localStorage or an API
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleAddProduct = () => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setNewProduct({ name: '', price: '' });
  };

  const handleEditProduct = (index) => {
    setEditingProductIndex(index);
    setNewProduct(products[index]);
  };

  const handleUpdateProduct = () => {
    const updatedProducts = products.map((product, index) =>
      index === editingProductIndex ? newProduct : product
    );
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setNewProduct({ name: '', price: '' });
    setEditingProductIndex(null);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const handleAddUser = () => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setNewUser({ username: '', email: '' });
  };

  const handleEditUser = (index) => {
    setEditingUserIndex(index);
    setNewUser(users[index]);
  };

  const handleUpdateUser = () => {
    const updatedUsers = users.map((user, index) =>
      index === editingUserIndex ? newUser : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setNewUser({ username: '', email: '' });
    setEditingUserIndex(null);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div className="container" style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Welcome to Admin Dashboard</h1>

      <div style={{ marginBottom: '30px' }}>
        <h2>Manage Products</h2>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            style={{ marginRight: '10px', padding: '5px' }}
          />
          <input
            type="text"
            placeholder="Product Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            style={{ marginRight: '10px', padding: '5px' }}
          />
          {editingProductIndex !== null ? (
            <button onClick={handleUpdateProduct} style={{ padding: '5px 10px', marginLeft: '10px' }}>
              Update Product
            </button>
          ) : (
            <button onClick={handleAddProduct} style={{ padding: '5px 10px', marginLeft: '10px' }}>
              Add Product
            </button>
          )}
        </div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {products.map((product, index) => (
            <li key={index} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
              <div>
                {product.name} - ${product.price}
                <div style={{ float: 'right' }}>
                  <button onClick={() => handleEditProduct(index)} style={{ marginRight: '5px', padding: '3px 5px' }}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteProduct(index)} style={{ padding: '3px 5px' }}>
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Manage Users</h2>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Username"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            style={{ marginRight: '10px', padding: '5px' }}
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            style={{ marginRight: '10px', padding: '5px' }}
          />
          {editingUserIndex !== null ? (
            <button onClick={handleUpdateUser} style={{ padding: '5px 10px', marginLeft: '10px' }}>
              Update User
            </button>
          ) : (
            <button onClick={handleAddUser} style={{ padding: '5px 10px', marginLeft: '10px' }}>
              Add User
            </button>
          )}
        </div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {users.map((user, index) => (
            <li key={index} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
              <div>
                {user.username} - {user.email}
                <div style={{ float: 'right' }}>
                  <button onClick={() => handleEditUser(index)} style={{ marginRight: '5px', padding: '3px 5px' }}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteUser(index)} style={{ padding: '3px 5px' }}>
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/">
          <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
