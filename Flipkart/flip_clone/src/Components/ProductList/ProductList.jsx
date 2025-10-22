import React from 'react'
import ProductNavbar from './ProductNav/ProductNavbar';
import './ProductList.css';
import Card from './Card/Card';

function ProductList() {
  return (
  <>
    <div className='product-list-container'>
      <ProductNavbar/>
  
    </div>
        <Card/>
    </>
  )
}

export default ProductList
