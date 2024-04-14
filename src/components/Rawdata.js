import React, { useState, useEffect } from 'react';
import Marketplace from './Marketplace';
import { getAllProducts } from '../interactions/productsContract';
import { Link } from 'react-router-dom';

function RenderMarketplaceItems(user, val) {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getAllProducts();
   
        setProducts(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); 

 
  return (
    <>
      <div className='cards'>
        {products.map((product, index) => (
          <Marketplace
            key={index}
            id={product.productId.toString()}
            name={product.productName}
            productionunits={product.totalProduction.toString()}
            price={product.price.toString()}
            sellerAddress={product[6].toString()}
            sold={product.soldProduction.toString()}
            unsold={product.unsoldProduction.toString()} 
          />
        ))}
      </div>
    </>
  );
}

export default RenderMarketplaceItems;
