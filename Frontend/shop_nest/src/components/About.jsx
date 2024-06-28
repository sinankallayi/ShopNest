import React from 'react'

const About = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Abel',
    lineHeight: '1.6',
    textAlign: 'justify',
    color: '#666',
};

const headerStyle = {
    textAlign: 'center',
    color: '#0e6132',
};


  return (
     <div className="about-us" style={containerStyle}>
    <br/><br/><br/>
       <h1 style={headerStyle}><u></u>About Us</h1>
            <p>Welcome to ShopNest, your ultimate destination for all things stylish, functional, and innovative in the world of ecommerce. Founded with a passion for quality and a commitment to customer satisfaction, ShopNest strives to redefine your online shopping experience.</p>
           
            <p>Join us on this exciting journey as we continue to expand our offerings and enhance your shopping experience. At ShopNest, we're not just selling products; we're creating connections and building a community of passionate shoppers.</p>
            <p>Thank you for choosing ShopNest. Let's shop smarter, together.</p>
    </div>
  )
}



export default About