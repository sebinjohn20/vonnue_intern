import React from 'react'
import './newcollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

function NewCollection() {
  return (
    <div className= 'new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item,i)=>{
            return <Item Key={i}  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.new_price}></Item>
        })}
      </div>
    </div>
  )
}

export default NewCollection
