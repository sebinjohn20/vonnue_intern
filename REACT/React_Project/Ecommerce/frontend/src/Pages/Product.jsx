import React, { useContext } from 'react'
import Shop from './Shop'
import { ShopContext } from '../Contexts/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../Components/Breadcrums/BreadCrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

function Product() {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams()
  const product=all_product.find((e)=>e.id===Number(productId))

  return (
    <div>
      <BreadCrum product={product}></BreadCrum>
      <ProductDisplay product={product}></ProductDisplay>
      <RelatedProducts></RelatedProducts>
    </div>
  )
}

export default Product
