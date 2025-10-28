import React from 'react'
import ProductNavbar from './ProductNav/ProductNavbar';
import './ProductList.css';
import Card from './Card/Card';
import DproductListHeader from '../DesktoProductLIst/DproductListHeader';
import DesktopProductList from '../DesktopProductList/DesktopProductList';

function ProductList() {
  return (
  <>
    <div className='product-list-container'>
      <ProductNavbar/>
  
    </div>
        <Card/>

        <DproductListHeader></DproductListHeader>
        <DesktopProductList></DesktopProductList>
    </>
  )
}

export default ProductList
