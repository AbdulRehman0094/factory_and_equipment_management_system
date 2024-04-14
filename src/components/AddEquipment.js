import React from 'react'
import { useState, useEffect } from 'react';
import { addEquipment } from '../interactions/equipmentsContract';
import { getAllEquipments } from '../interactions/equipmentsContract';
import { getAllProducts } from '../interactions/productsContract';

function AddEquipment() {

    const [equipmentName, setName] = useState('');
    const [produID, setProductID] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await getAllProducts();
                setProducts(result);
                if (result.length > 0) {
                    setProductID(result[0].productId);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleName = (event) => {
        setName(event.target.value);
    };
    const handleProductChange = (event) => {
        setProductID(event.target.value);
        console.log(event.target.value)
    };
    const addEqui = async () => {

        await addEquipment(equipmentName, produID, localStorage.getItem("userAddress"));
        getAllEquipments();
        alert('Equipment Added Successfully.')
    }
    return (
        <>
            <div className='header'>
                <div className='text'>Factory Managment System</div>
            </div>

            <div className='cards1'>
                <div className='cardchild'>
                    <div className='text1'>Add Equipment</div>
                    <div>
                        <p>Enter Equipment Name:</p>
                        <input className=''
                            type="text"
                            value={equipmentName}
                            onChange={handleName}
                        />
                    </div>
                    <div>
                        <p>Select Product:</p>
                        <select id="dropdown" onChange={handleProductChange}>
                            {products?.map((product) => {
                                return <option value={product.productId.toString()}>{product.productName}</option>
                            }
                            )}


                        </select>

                    </div>

                    <button onClick={addEqui}>Add Equipment</button>

                </div></div>

        </>
    )
}

export default AddEquipment