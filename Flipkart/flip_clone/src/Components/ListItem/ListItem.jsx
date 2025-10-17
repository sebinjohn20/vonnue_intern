import React from 'react';
import './ListItem.css';
import "../../Fonts/font.css";
import listItem from "../../Data/listitem.json";
import { Link } from 'react-router-dom';

function ListItem() {
    const firstRow=listItem.slice(0,8)
    const secondRow=listItem.slice(8,18)
  return (<>
    <div className='list-item-container'>
      <div className="top-order-item">
        <div className="items-in-first-row">
          <div className="item-one">
            <div className='item-one-container'>
              <img
                className='minutes-img'
                style={{ objectFit: "cover" }}
                src="data:image/webp;base64,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"
                alt="item"
              />
            </div>
            <div className="item-one-text">
                Flipkart Minutes
            </div>
          </div>

            {firstRow.map((item,i)=>(
              <Link to='/productlist' key={i}>
          <div className="mobile-list-container" >
            <div className="mobile-list-image">
                <img src={item.image} className='mobile-image'alt=""  />
            </div>
            <div className="mobile-list-text">
                {item.text}
            </div>
          </div>
          </Link>
          ))}
         
        </div>
          <div className="items-in-first-row">
          

            {secondRow.map((item,i)=>(
              <Link to='/productlist'  key={i}>
          <div className="mobile-list-container ">
            <div className="mobile-list-image">
                <img src={item.image} className='mobile-image'alt=""  />
            </div>
            <div className="mobile-list-text">
                {item.text}
            </div>
          </div>
          </Link>
          ))}
         
        </div>
      </div>
    </div>
    <div className='mini-banner-container'>
        <div className="mini-banner-image">
            <img src="https://rukminim2.flixcart.com/fk-p-flap/880/200/image/429d37cbf5c910b4.jpeg?q=60" className='min-ban-img' alt="" />
        </div>

    </div>
    </>
  );
}

export default ListItem;
