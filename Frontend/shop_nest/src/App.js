import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Men from './pages/Mens';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Profile from './pages/Profile';
import Signup from './components/Signup';
import Cart from './pages/Cart';
import AdminPage from './components/AdminPage';
import { ToastContainer } from 'react-toastify';
// Ensure this matches the actual filename
import 'react-toastify/dist/ReactToastify.css';
import { Products } from 'data/Products';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <Navbar />
      <div style={{ marginTop: '90px' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/mens' element={<Men products={Products.filter(i => i.type === 'men')} title={"ShopNest - Men's Clothing"} addToCart={addToCart} />} />
          <Route path='/womens' element={<Men products={Products.filter(i => i.type === 'women')} title={"ShopNest - Women's Clothing"} addToCart={addToCart} />} />
          <Route path='/kids' element={<Men products={Products.filter(i => i.type === 'kids')} title={"ShopNest - Kid's Clothing"} addToCart={addToCart} />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/admin' element={<AdminPage />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
