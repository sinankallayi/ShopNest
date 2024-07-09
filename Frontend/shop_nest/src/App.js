import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Signup from './components/Signup';
import Cart from './pages/Cart';
import Men from './pages/Mens';
import Profile from './pages/Profile';
// Ensure this matches the actual filename
import { Products } from 'data/Products';
import Payment from 'pages/Payment';
import ShippingTracking from 'pages/ShippingTrack';
import { AdminDashboard } from 'pages/admin';
import AdminLogin from 'pages/admin/login/login';
import { Products as AdminProducts } from 'pages/admin/products';
import { CreateProduct } from 'pages/admin/products/Create';
import 'react-toastify/dist/ReactToastify.css';
import { CreateAdmin } from 'pages/admin/admins/Create';
import { Admins } from 'pages/admin/admins';
import axios from 'axios';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const [products, setProducts] = useState()
  const getProducts = () => {
    axios.get("http://localhost:5000/product").then(response => {
      setProducts(response.data)
    })
  }
  useEffect(() => {
    getProducts()
  }, [])


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop products={products ? products : []}/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/mens' element={<Men products={products?.filter(i => i.type === 'mens')} title={"ShopNest - Men's Clothing"} addToCart={addToCart} />} />
        <Route path='/womens' element={<Men products={products?.filter(i => i.type === 'womens')} title={"ShopNest - Women's Clothing"} addToCart={addToCart} />} />
        <Route path='/kids' element={<Men products={products?.filter(i => i.type === 'kids')} title={"ShopNest - Kid's Clothing"} addToCart={addToCart} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/users' element={<AdminProducts />} /> */}
        <Route path='/payment' element={<Payment />} />
        <Route path='/shipping' element={<ShippingTracking />} />
        
        <Route path='/products' element={<AdminProducts />} />
        <Route path='/product/create' element={<CreateProduct />} />
        {/* <Route path='/product/:id' element={<CreateProduct />} /> */}

        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/admins' element={<Admins />} />
        <Route path='/admin/create' element={<CreateAdmin />} />
        {/* <Route path='/admin/:id' element={<CreateAdmin />} /> */}

        <Route path='/dashboard' element={<AdminDashboard />} />


      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
