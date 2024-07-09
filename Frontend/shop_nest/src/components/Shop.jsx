import React, { useEffect, useState } from 'react';
import Men from '../pages/Mens';
// import Kids from '../pages/Kids';
// import Women from '../pages/Women';
// import ProductList from 'data/Productlist.jsx'; // Assuming you have this component
import { Products } from 'data/Products';
import Product0 from 'components/Product.jsx';
import axios from 'axios';

const Shop = ({products}) => {
  const [selectedSection, setSelectedSection] = useState(null);

  const renderContent = () => {
    switch (selectedSection) {
      case 'mens':
        const mens = products.filter(i => i.type === 'mens')
        return <Men products={mens} title={"ShopNest - Men's Clothing"} />;
      case 'womens':
        const womens = products.filter(i => i.type === 'womens')
        return <Men products={womens} title={"ShopNest - Women's Clothing"} />;
      case 'kids':
        const kids = products.filter(i => i.type === 'kids')
        return <Men products={kids} title={"ShopNest - Kids Clothing"} />;
      default:
        return <Men products={products} title={"ShopNest - All Products"} />;
    }
  };

  return (
    <div className='containerStyle'>
      <ul className='ulstyle' style={{ justifyContent: 'right' }}>
        <li><button className='filter-button' onClick={() => setSelectedSection(null)}>ALL PRODUCTS</button></li>
        <li><button className='filter-button' onClick={() => setSelectedSection('womens')}>WOMENS</button></li>
        <li><button className='filter-button' onClick={() => setSelectedSection('mens')}>MENS</button></li>
        <li><button className='filter-button' onClick={() => setSelectedSection('kids')}>KIDS</button></li>
      </ul>
      <div className='content'>
        {renderContent()}
      </div>
    </div>
  );
};

export default Shop;
