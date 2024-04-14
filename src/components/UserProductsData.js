import React, { useState, useEffect } from 'react';
import UserProductsPlace from './UserProductsPlace';
import { getAllProducts } from '../interactions/productsContract';

function UserProductsData() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await getAllProducts();
                const userAddress = localStorage.getItem("userAddress");
                const filteredProducts = result.filter(product => {
                    return product.userAddress.toLowerCase() == userAddress.toLowerCase()
                })
                setProducts(filteredProducts);
                setError(null);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(error.message);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            {error && <div>Error: {error}</div>}
            <div className='cards'>
                {products.map((product, index) => (
                    <UserProductsPlace
                        key={index}
                        id={product.productId.toString()}
                        name={product.productName}
                        productionunits={product.totalProduction.toString()}
                        price={product.price.toString()}
                        sellerAddress={product.userAddress} 
                        sold={product.soldProduction.toString()}
                        unsold={product.unsoldProduction.toString()}
                    />
                ))}
            </div>
        </>
    );
}

export default UserProductsData;
