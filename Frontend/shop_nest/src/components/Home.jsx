import React, { useEffect, useState } from 'react';
import './Home.css';
import './Hero/Hero.css';
// import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/files.png';
import hero_image2 from '../assets/files2.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carousel1 from '../assets/Carousel4.jpg';
import carousel2 from '../assets/Carousel5.jpg';
import carousel3 from '../assets/Carousel6.jpg';
import help from '../assets/help.png';
import Men from 'pages/Mens';
import ProductList from 'data/Productlist';

import product13 from 'assets/product_13.png';
import product24 from 'assets/product_24.png';
import product26 from 'assets/product_26.png';
import product4 from 'assets/product_4.png';
import product12 from 'assets/product_12.png';
import product30 from 'assets/product_30.png';
import { Typography } from '@mui/material';
import axios from 'axios';



const Home = () => {
  const [products, setProducts] = useState()
  const [isLoading, setLoading] = useState(false)

  const getProducts = () => {
    setLoading(true)
    axios.get("http://localhost:5000/product").then(response => {
      setProducts(response.data)
      setLoading(false)
    }).catch(e => {
      console.log(e)
      setLoading(false)
    })
  }
  useEffect(() => {
    getProducts()
  }, [])

  const slides = [
    {
      image: carousel2,
      label: 'Slide 1',
      description: 'This is the description for slide 1.'
    },
    {
      image: carousel1,
      label: 'Slide 2',
      description: 'This is the description for slide 2.'
    },
    {
      image: carousel3,
      label: 'Slide 3',
      description: 'This is the description for slide 3.'
    }
  ];

  return (
    <div className='containerStyle'>
      <header style={{ backgroundColor: 'white', padding: '20px', color: 'black', height: '150px', fontFamily: 'Abel' }}>
        <h1 style={{ textAlign: 'center' }}>Welcome to ShopNest</h1>
        <p style={{ fontSize: '20px', textAlign: 'center' }}>Your one-stop shop for everything!</p>
        <hr width="400px" color='#267871' />
      </header>

      <div className="carousel-container">
        <Carousel showThumbs={false} autoPlay={true} dynamicHeight={true} infiniteLoop={true}>
          {slides.map((slide, index) => (
            <div key={index}>
              <img src={slide.image} alt={slide.label} style={{ width: '80%' }} />
              {/* <p className="legend">{slide.label}</p> */}
            </div>
          ))}
        </Carousel>
      </div>


      {/* 
      <div className='hero'>
        <div className="row">
          <div className="col-md-6 hero-right">
            <img src={hero_image} className="img-fluid" alt="Hero" />
          </div>
          <div className="col-12 hero-last">
            <img src={hero_image2} className="img-fluid" alt="Hero 2" style={{ marginLeft: '125%' }} />
          </div>
        </div>
      </div> */}



      <div className="container">
        <Typography variant='h3' style={{ margin: '50px' }} >
          <hr color='#267871' />
          <b>Latest Collection</b>
          <hr color='#267871' />
        </Typography>
        <div className="row" style={{ marginLeft: '10%' }}>
          {isLoading ? <h1>Loading</h1> :
            products && <ProductList products={products.slice(0,4)} />
          }
        </div>
      </div>
      {/* {products.map((product) => (
            <div key={product.id} className="col-4">
              <div className="card">
                <img src={product.image} alt={product.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.price}</p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))} */}




      {/* <div className="col-md-6 hero-left">
      <div style={{ marginLeft: '6%' }}>
        <p>IF YOU CAN'T<br /><br />STOP THINKING<br /><br />ABOUT IT...<br /><br />BUY IT</p>
      </div>
      <div className="hero-latest-btn">
        <div><h3><b>Latest Collection</b></h3></div>
      </div>
    </div> */}








      <div className="container">
        <div className="row" style={{ marginLeft: '10%' }}>
        <hr color='#267871' />
          <b>Most Viewed</b>
          <hr color='#267871' />
        {isLoading ? <h1>Loading</h1> :
            products?.slice(4, 8) && <ProductList products={products.slice(4, 8)} />
          }
        </div>
      </div>

      <div style={{background:"#267871", display:"flex", justifyContent:"center"}}>
        <img src={help} alt="help"/>
      </div>
    </div>
  );
}

export default Home;
