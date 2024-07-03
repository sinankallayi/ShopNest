import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Home.css'; // Import your home page styles or adjust paths as necessary

const CarouselComponent = () => {
  return (
    <Carousel showThumbs={false} infiniteLoop autoPlay interval={5000}>
      <div>
        <img src="https://via.placeholder.com/1400x800" alt="Slide 1" />
        <p className="legend">Slide 1</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/1400x800" alt="Slide 2" />
        <p className="legend">Slide 2</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/1400x800" alt="Slide 3" />
        <p className="legend">Slide 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
