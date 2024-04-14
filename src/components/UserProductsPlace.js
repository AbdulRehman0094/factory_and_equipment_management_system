import React from 'react'

function UserProductsPlace({ name, productionunits, price, id, sellerAddress, sold, unsold }) {  
  return (
<div className='products bold'>
      <div>Product Name: {name}</div>
      <div>Product ID: {id}</div>
      <div>Stock Available: {unsold} units</div>
      <div>Price per Unit: {price} Wei</div>
      
    </div>  )
}

export default UserProductsPlace