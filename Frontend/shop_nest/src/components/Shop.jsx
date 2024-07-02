import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import './Shop.css'; // Assuming you create a separate CSS file for the Shop component

const Shop = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const renderContent = () => {
    switch (selectedSection) {
      case 'mens':
        return <Link to='/mens'></Link>
      case 'womens':
        return <h1>WOMENS SECTION CONTENT</h1>;
      case 'kids':
        return <h1>KIDS SECTION CONTENT</h1>;
      default:
        return <h1>Select a section to view content</h1>;
    }
  };

  return (
    <div className='containerStyle'>
      <ul className='ulstyle'>
        <li><button className='nav-link' onClick={() => setSelectedSection('mens')}>MENS</button></li>
        <li><button className='nav-link' onClick={() => setSelectedSection('womens')}>WOMENS</button></li>
        <li><button className='nav-link' onClick={() => setSelectedSection('kids')}>KIDS</button></li>
      </ul>
      <div className='content'>
        {renderContent()}
      </div>
    </div>
  );
};

export default Shop;