import React, { useState } from 'react';
import { placeOrder } from '../interactions/ordersContract';
import { updateSoldProduction, updateUnsoldProduction } from '../interactions/productsContract';

function Marketplace({ name, productionunits, price, id, sellerAddress, sold, unsold }) {
  const [units, setUnits] = useState('');
  const [buyerAddress, setBuyerAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleBuyersAddress = (event) => {
    const { value } = event.target;
    setBuyerAddress(value);
  };

  const handleUnitsChange = (event) => {
    const { value } = event.target;
    setUnits(value);
    setAmount(value * price);
  };

  const handleBuyUnits = async () => {
    try {
      const productId = id;
      const value = amount;
      const result = await placeOrder(productId, units, sellerAddress, buyerAddress, value);
      if (result) {
        const newSold = parseInt(sold) + parseInt(units);
        const newUnsold = parseInt(unsold) - parseInt(units);
        await updateSoldProduction(productId, newSold, sellerAddress);
        await updateUnsoldProduction(productId, newUnsold, sellerAddress);
        alert(`${units} Units of ${name} purchased successfully`);
      }

    } catch (error) {
      console.error('Error buying units:', error);
      alert('Failed to buy units. Please try again later.');
    }
  };

  return (
    <div className='products bold'>
      <div>Product Name: {name}</div>
      <div>Product ID: {id}</div>
      <div>Stock Available: {unsold} units</div>
      <div>Price per Unit: {price} Wei</div>
      <div>Enter Buyer's Address:</div>
      <input
        type="text"
        value={buyerAddress}
        onChange={handleBuyersAddress}
      />
      <div>Enter Units to Purchase:</div>
      <input
        type="text"
        value={units}
        onChange={handleUnitsChange}
      />
      <div>Total Cost: {amount}</div>
      <button onClick={handleBuyUnits} disabled={productionunits == 0}>Buy Units</button>
    </div>
  );
}

export default Marketplace;
