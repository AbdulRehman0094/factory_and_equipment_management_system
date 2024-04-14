import React from 'react'
import { useState } from 'react';

function Addjob() {

    const [productName, setName] = useState('');
    const [productPrice, setPrice] = useState('');
    const [productUnits, setUnits] = useState('');


    const handleName = (event) => {
        setName(event.target.value);
    };
    const handlePrice = (event) => {
        setPrice(event.target.value);
    };
    const handleUnits = (event) => {
        setUnits(event.target.value);
    };

    const addProduct=()=>{
        alert('Product Added Successfully.')
    }
    return (
        <>
            <div className='header'>
                <div className='text'>Factory Managment System</div>
            </div>

            <div className='cards1'>
                <div className='cardchild'>
                    <div className='text1'>Add Job</div>
                    <div>
                        <p>Enter Job Name:</p>
                        <input className=''
                            type="text"
                            value={productName}
                            onChange={handleName}
                        />
                    </div>
                    <div>
                        <p>Enter Product Price:</p>
                        <input className=''
                            type="text"
                            value={productPrice}
                            onChange={handlePrice}
                        />
                    </div>
                    <div>
                        <p>Enter Production Units:</p>
                        <input className=''
                            type="text"
                            value={productUnits}
                            onChange={handleUnits}
                        />
                    </div>
                     <button onClick={addProduct}>Add Job</button>

                </div></div>

        </>
    )
}

export default Addjob