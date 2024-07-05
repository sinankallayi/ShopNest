import React, { useState } from 'react';
import Men from '../pages/Mens';
// import Kids from '../pages/Kids';
// import Women from '../pages/Women';
// import ProductList from 'data/Productlist.jsx'; // Assuming you have this component
import { Products } from 'data/Products';
import Product0 from 'components/Product.jsx';

const Shop = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const allProducts = Products

  // const allProducts = [
  //   {
  //     id: 1,
  //     name: 'Men Product 1',
  //     description: 'Description for men product 1.',
  //     image: 'https://via.placeholder.com/300x200',
  //     price: '$100'
  //   },
  //   {
  //     id: 2,
  //     name: 'Men Product 2',
  //     description: 'Description for men product 2.',
  //     image: 'https://via.placeholder.com/300x200',
  //     price: '$200'
  //   },
  //   {
  //     id: 3,
  //     name: 'Women Product 1',
  //     description: 'Description for women product 1.',
  //     image: 'https://via.placeholder.com/300x200',
  //     price: '$150'
  //   },
  //   {
  //     id: 4,
  //     name: 'Women Product 2',
  //     description: 'Description for women product 2.',
  //     image: 'https://via.placeholder.com/300x200',
  //     price: '$250'
  //   },
  //   {
  //     id: 5,
  //     name: 'Kids Product 1',
  //     description: 'Description for kids product 1.',
  //     image: 'https://via.placeholder.com/300x200',
  //     price: '$50'
  //   },
  //   {
  //     id: 6,
  //     name: 'Kids Product 2',
  //     description: 'Description for kids product 2.',
  //     image: 'https://via.placeholder.com/300x200',
  //     price: '$70'
  //   },
  //   // Add more products as needed
  // ];

  const renderContent = () => {
    switch (selectedSection) {
      case 'mens':
        // debugger;
        const mens = allProducts.filter(i => i.type === 'men')
        return <Men products={mens} title={"ShopNest - Men's Clothing"} />;
      case 'womens':
        const womens = allProducts.filter(i => i.type === 'women')
        return <Men products={womens} title={"ShopNest - Women's Clothing"} />;
      case 'kids':
        const kids = allProducts.filter(i => i.type === 'kids')
        return <Men products={kids} title={"ShopNest - Kids Clothing"} />;
      default:
        return <Men products={allProducts} title={"ShopNest - All Products"} />;
    }
  };

  return (
    <div className='containerStyle'>
      <ul className='ulstyle' style={{ justifyContent: 'left' }}>
        <li><button className='filter-button' onClick={() => setSelectedSection(null)}>ALL PRODUCTS</button></li>
        <li><button className='filter-button' onClick={() => setSelectedSection('mens')}>MENS</button></li>
        <li><button className='filter-button' onClick={() => setSelectedSection('womens')}>WOMENS</button></li>
        <li><button className='filter-button' onClick={() => setSelectedSection('kids')}>KIDS</button></li>
      </ul>
      <div className='content'>
        {renderContent()}
      </div>
    </div>
  );
};

export default Shop;
