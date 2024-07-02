import React from 'react'
import 'D:/Tutorial/ICT/ShopNest/Frontend/shop_nest/src/components/Home.css';
import 'D:/Tutorial/ICT/ShopNest/Frontend/shop_nest/src/components/Hero/Hero.css'
// import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/files.png'
import hero_image2 from 'D:/Tutorial/ICT/ShopNest/Frontend/shop_nest/src/assets/files2.png'

const Home = () => {

  // const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description for product 1.',
      image: 'https://via.placeholder.com/300x200',
      price: '$100'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description for product 2.',
      image: 'https://via.placeholder.com/300x200',
      price: '$200'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description for product 3.',
      image: 'https://via.placeholder.com/300x200',
      price: '$500'
    },
    // Add more products as needed
  ];

  // const slides = [
  //   {
  //     image: 'https://via.placeholder.com/1400x800',
  //     label: '',
  //     description: ''
  //   },
  //   {
  //     image: 'https://via.placeholder.com/1400x800',
  //     label: '',
  //     description: ''
  //   },
  //   {
  //     image: 'https://via.placeholder.com/1400x800',
  //     label: '',
  //     description:''
  //   }
  // ];

  // const nextSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  // };




  return( 
  <div className='containerStyle'>
  <header style={{ backgroundColor: '#287671', padding: '20px', color: 'white' ,height:'150px',fontFamily:'Abel'}}>
      <h1 className='h1'>Welcome to ShopNest</h1>
      <p style={{fontSize:'20px'}}>Your one-stop shop for everything!</p>
  </header>


  <div className='hero'>
  <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
      <div className="hero-left">
        <div>
            <div style={{marginLeft:'5%'}}>
                <p>IF YOU CAN'T<br /><br />
                STOP THINKING<br />  <br />
                ABOUT IT...<br /><br />
                BUY IT</p>

                
                {/* <img src={hand_icon} alt="" /> */}
            </div>
           
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div style={{marginLeft:'15%'}}>
      <img src={hero_image2} alt="" style={{width:'130%',height:'80%'}}/>
      </div>
    </div>

  {/* <div className='containerStyle'>
      <div className="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
            key={index}
            className={carousel-item ${index === currentSlide ? 'active' : ''}}>

              <img src={slide.image} alt={slide.label} className="d-block w-100" />
              <div className="carousel-caption">
                <h3>{slide.label}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-control-next" onClick={nextSlide}>
          &#10095;
        </button>
      </div> */}

      <div className="container">
        <div className="row">
          {products.map((product) => (
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
          ))}
        </div>
      </div>
    </div>

  // </div>

)}

  


// {/* <section style={{ marginTop: '20px' }}><br />
//     <h2>Featured Products</h2>
//     <p>Check out our latest products and deals!</p>
//   </section> */}





export default Home