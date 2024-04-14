import React from 'react'
import { useState, useEffect } from 'react';
import { addProduct } from '../interactions/productsContract';
import { getAllProducts } from '../interactions/productsContract';

function Addproduct() {

    const [proName, setName] = useState('');
    const [proPrice, setPrice] = useState('');

    useEffect(() => {
        getAllProducts();
      })

    const handleName = (event) => {
        setName(event.target.value);
    };
    const handlePrice = (event) => {
        setPrice(event.target.value);
    };
   

    const addProducts=()=>{
        addProduct(proName,proPrice,localStorage.getItem("userAddress"));
        alert("Product Added.")
    }
    return (
        <>
            <div className='header'>
                <div className='text'>Factory Managment System</div>
            </div>

            <div className='cards1'>
                <div className='cardchild'>
                    <div className='text1'>Add Product</div>
                    <div>
                        <p>Enter Product Name:</p>
                        <input className=''
                            type="text"
                            value={proName}
                            onChange={handleName}
                        />
                    </div>
                    <div>
                        <p>Enter Product Price:</p>
                        <input className=''
                            type="number"
                            value={proPrice}
                            onChange={handlePrice}
                        />
                    </div>
                  
                     <button onClick={addProducts} disabled={proName.length ===0 && proPrice.length===0}>Add Product</button>

                </div></div>

        </>
    )
}

export default Addproduct