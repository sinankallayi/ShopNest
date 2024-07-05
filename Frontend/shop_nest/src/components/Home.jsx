import React from 'react';
import './Home.css';
import './Hero/Hero.css';
// import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/files.png';
import hero_image2 from '../assets/files2.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.1.jpeg';
import carousel3 from '../assets/carousel3.jpg';
import help from '../assets/help.png';
import Men from 'pages/Mens';
import ProductList from 'data/Productlist';

import product13 from 'assets/product_13.png';
import product24 from 'assets/product_24.png';
import product26 from 'assets/product_26.png';
import product4 from 'assets/product_4.png';
import product12 from 'assets/product_12.png';
import product30 from 'assets/product_30.png';



const Home = () => {

  const products1=[
    {
      id: 4,
      name: 'Top',
      description: 'This is the description for product 1.',
      image: product4,
      price: '$100'
    },
    {
      id: 5,
      name: 'T Shirt',
      description: 'This is the description for product 2.',
      image: product12,
      price: '$200'
    },
    {
      id: 6,
      name: 'Jacket',
      description: 'This is the description for product 3.',
      image: product30,
      price: '$500'
    },
  ]

  const products = [
    {
      id: 1,
      name: 'Jacket',
      description: 'This is the description for product 1.',
      image: product13,
      price: '$100'
    },
    {
      id: 2,
      name: 'Jacket',
      description: 'This is the description for product 2.',
      image: product24,
      price: '$200'
    },
    {
      id: 3,
      name: 'Hoodie',
      description: 'This is the description for product 3.',
      image: product26,
      price: '$500'
    },
    // Add more products as needed
  ];

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
      <header style={{ backgroundColor: '#287671', padding: '20px', color: 'white', height: '150px', fontFamily: 'Abel' }}>
        <h1 className='h1' style={{marginLeft:'35%'}}>Welcome to ShopNest</h1>
        <p style={{ fontSize: '20px',marginLeft:'39%' }}>Your one-stop shop for everything!</p>
      </header>


      <div className='hero'>
  <div className="row">
    <div className="col-md-6 hero-right">
      <img src={hero_image} className="img-fluid" alt="Hero" />
    </div>
    {/* <div className="col-md hero-left">
      <div style={{ marginLeft: '6%', paddingTop: '80%' }}>
        <p style={{ textAlign: 'left' }}>
          If You Can't <br /><br />
          Stop Thinking About It...<br /><br />
          Buy It!
        </p>
      </div>
      <div className="hero-latest-btn" style={{ marginLeft: '6%' }}>
        <div><h3><b>Latest Collection</b></h3></div>
      </div>
    </div> */}
    <div className="col-12 hero-last">
      <img src={hero_image2} className="img-fluid" alt="Hero 2" style={{ marginLeft: '125%' }} />
    </div>
  </div>
</div>



      <div className="container">
        <div className="row" style={{marginLeft:'10%'}}>
        <ProductList products={products} />
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



        </div>
      </div>

      <div className="carousel-container">
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
          {slides.map((slide, index) => (
            <div key={index}>
              <img src={slide.image} alt={slide.label} />
              <p className="legend">{slide.label}</p>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="container">
      <div className="row" style={{marginLeft:'10%'}}>
      <ProductList products={products1} />
        </div>
      </div>
      <div><center>
      <img src={help} alt="help" width='100%'/>
      </center>
      </div>
    </div>
  );
}

export default Home;
