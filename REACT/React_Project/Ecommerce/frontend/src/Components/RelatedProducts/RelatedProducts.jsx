import React from 'react'
import data_product from '../Assets/data'
import './relatedproducts.css'
import Item from '../Item/Item'
function RelatedProducts() {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
            {data_product.map((item,i)=>{
                return<Item Key={i}  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.new_price}></Item>
            })}
      </div>
    </div>
  )
}

export default RelatedProducts
