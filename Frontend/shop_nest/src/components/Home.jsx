import { useEffect, useState } from 'react';
import './Hero/Hero.css';
import './Home.css';
// import hand_icon from '../assets/hand_icon.png';
import ProductList from 'data/Productlist';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carousel1 from '../assets/Carousel8.jpg';
import carousel2 from '../assets/Carousel9.jpg';
import carousel3 from '../assets/Carousel7.jpg';


import { Typography } from '@mui/material';
import axios from 'axios';

import { Box, IconButton, Tooltip } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



const Home = ({ addToCart }) => {
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


    


      <div className="container">
        <Typography variant='h3' style={{ margin: '50px' }} >
          <hr color='#267871' />
          <b>Latest Collection</b>
          <hr color='#267871' />
        </Typography>
        <div className="row" style={{ marginLeft: '10%' }}>
          {isLoading ? <h1>Loading</h1> :
            products && <ProductList addToCart={addToCart} products={products.slice(0, 4)} />
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
        <Typography variant='h3' style={{ margin: '50px' }} >
          <hr color='#267871' />
          <b>Most Viewed</b>
          <hr color='#267871' />
        </Typography>

        {isLoading ? <h1>Loading</h1> :
          products?.slice(4, 8) && <ProductList addToCart={addToCart} products={products.slice(4, 8)} />
        }

      </div>
      <div style={{ marginTop: '100px' }}>
        <hr color='#267871' width="400px" />
        <Typography variant='h5' fontFamily={'abel'} style={{ marginLeft: '710px' }}>
          <b>-ShopNest-</b>
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <Tooltip title="Follow us on Facebook">
            <IconButton
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <FacebookIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Follow us on Instagram">
            <IconButton
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              color="secondary"
            >
              <InstagramIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Chat with us on WhatsApp">
            <IconButton
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#25D366' }}
            >
              <WhatsAppIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </div>
      {/* <div style={{ background: "#267871", display: "flex", justifyContent: "center" ,height:'100px'}}>
        <img src={help} alt="help" />
        
      </div> */}
    </div>
  );
}

export default Home;
