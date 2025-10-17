
import React, { useEffect, useState } from "react";

import './ProductDetail.css';
import "../../Fonts/font.css";
import adsData from '../ads.json';

function ProductDetail() {
    const [ads, setAds] = useState([]);
     useEffect(() => {
   
   setAds(adsData);
  }, []);
  return (<>
    <div className="product-detail-navbar-container">
      <div className="product-detail-navbar-inner-body">
     
        <div className="product-arrow">
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 32 32"
          >
            <path
              d="M27 16H5M14 7l-9 9 9 9"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

     
        <div className="product-searchbar">
            <div className='search-log'>
        <svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><circle cx="116" cy="116" r="84" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M175.4 175.4 224 224"></path></svg>
            </div>
            <div className='search-product-text'> Search for products</div>
        </div>


        <div className="product-cart-logo-conatiner">
         <div className="product-cart">
        <svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path d="M184 184H69.8L41.9 30.6a8 8 0 0 0-7.8-6.6H16" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path><circle cx="80" cy="204" r="20" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle><circle cx="184" cy="204" r="20" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle><path d="M62.5 144h125.6a15.9 15.9 0 0 0 15.7-13.1L216 64H48" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path></svg>
         </div>
        </div>
      </div>
    </div>
   <div className="ad-animation-container">
      <div className="ad-scroll-wrapper">
        {ads.map((ad) => (
          <div key={ad.id} className="add-watch-container">
            <div className="add-watch-container-body">
              <div className="add-watch-img-container">
                <img src={ad.image} alt={ad.title} className="add-watch-img" />
              </div>

              <div className="add-watch-desc-container">
                <div className="add-watch-brandname">{ad.title}</div>

                <div className="ad-watch-offer-container">
                  <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
                    <path
                      d="M6 1.875v8.25M2.625 6.75 6 10.125 9.375 6.75"
                      stroke="#008b37ff"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div className="ad-watch-offer-per">{ad.offer}</div>
                  <div className="ad-watch-cutoff-price">{ad.cutPrice}</div>
                  <div className="ad-watch-offer-price">{ad.price}</div>
                </div>
              </div>

              <div className="ad-watch-add-logo-container">AD</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default ProductDetail;
