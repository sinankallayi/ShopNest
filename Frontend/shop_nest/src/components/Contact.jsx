import React from 'react'

const Contact = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    textAlign: 'justify',
    color: '#666',
};

const headerStyle = {
    textAlign: '150px',
    color: '#0e6132',
};
  

  return (
    <div>
       <div className="container" style={containerStyle}>
        <br/><br/><br/>
          <h1 style={headerStyle}>Contact Us</h1>
             <p >Have questions or feedback? We'd love to hear from you!</p>
                <div className="contact-info">

                    <p><strong>Email:</strong> contact@shopnest.com</p>
                    <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                    <p><strong>Address:</strong> 123 ShopNest Street, Cityville, State, Country</p>
                </div>
                
            </div>
    </div>
  )
}

export default Contact