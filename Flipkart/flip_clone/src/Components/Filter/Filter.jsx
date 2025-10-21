import React, { useState } from 'react';
import './Filter.css';
import "../../Fonts/font.css";
import { useFilter } from '../Context/FilterContext';
import { useNavigate } from 'react-router-dom';

function Filter() {
  const filters = [
    "Price",
    "F-Assured",
    "Brand",
    "Ideal for",
    "Discount",
    "Strap Material",
    "Type",
    "Dial Shape",
    "Starp Color",
    "Features",
    "Availability",
    "Customer Ratings",
    "Movement",
    "New Arrivals",
    "Occasion",
    "Collections",
    "Category",
  ];

  const [activeFilter, setActiveFilter] = useState("Brand");
const { selectedBrands, selectedPrices, selectedDiscounts,selectedRatings, updateBrandFilter, updatePriceFilter, updateDiscountFilter,updateRatingFilter, clearFilters } = useFilter();
  const navigate = useNavigate();
  
  const priceOptions = [
    "Rs. 500 and Below",
    "Rs. 501 - Rs. 2000",
    "Rs. 2001 - Rs. 5000",
    "Rs. 5001 - Rs. 10000",
    "Rs. 10001 - Rs. 20000",
    "Rs. 20001 and Above"
  ];
  
  const brandNames = ["Fastrack", "Fossil", "Sonata", "Titan", "Casio"];
  
  const discountOptions = [
    
    "90% or more",
    "80% or more",
    "70% or more",
    "60% or more",
    "50% or more",
    "40% or more",
    "30% or more",
    "20% or more", 
    "10% or more",
   
    
  ];

  const ratingOptions = [
    "4★ & above",
    "3★ & above", 
    "2★ & above",
    "1★ & above"
  ];


  const handleApply = () => {
    navigate('/productlist');
  };

  const handleBack = () => {
    navigate(-1);
  };

 const handleClearAll =()=>{
  clearFilters();

  
 }

  return (
    <div className='filter-container'>
      <div className="filter-navbar-container">
        <div className="back-arrow" onClick={handleBack}>
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
        <div className="filter-text">
          <h1>Filters</h1>
        </div>
        <div className='clear-filter-text'onClick={handleClearAll}>
          Clear Filters
        </div>
      </div>

      {/* Middle Section */}
      <div className="filter-container-middle">
        {/* LEFT SIDE */}
        <div className="filter-container-left-side">
          {filters.map((item, index) => (
            <div
              key={index}
              className={`filter-left-side-text-container ${
                activeFilter === item ? "active" : ""
              }`}
              onClick={() => setActiveFilter(item)}
            >
              <div className="text-wrapper">
                <div
                  className={`text-content ${
                    activeFilter === item ? "blue-text" : ""
                  }`}
                >
                  {item}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="filter-container-right">
          {/* Price Filter */}
          {activeFilter === "Price" && (
            <div className="filter-container-right-content">
              {priceOptions.map((price, index) => (
                <div style={{ height: 48 }} key={index}>
                  <div 
                    className="filter-price-content" 
                     onClick={() => updatePriceFilter(price)}
                  >
                    <div className="input-box">
                      <img
                        src={
                         selectedPrices.includes(price)
                            ? "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/checked-b672f083.png"
                            : "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/unchecked-58d79d4f.png"
                        }
                        className="input-checkbox-img"
                        alt=""
                      />
                    </div>
                    <div className="price-text-content">{price}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Brand Filter */}
          {activeFilter === "Brand" && (
            <div>
              <div className="brand-search-bar-container">
                <div className="search-logo">
                  <img 
                    src="https://rukminim2.flixcart.com/www/36/36/promos/05/02/2019/2c3684ce-966a-43b1-b93b-35d288875e8e.png?q=60" 
                    alt="" 
                    className='lens-logo' 
                  />
                </div>
                <input type="text" placeholder='Search Brand' />
              </div>
              
              <div className="popular-filters-container">
                <div className="popular-filter-body">
                  <div className="popular-filter-text">
                    Popular Filters
                  </div>
                </div>
              </div>
              
              {brandNames.map(brand => (
                <div style={{ height: 48 }} key={brand}>
                  <div 
                    className="filter-price-content"
                    onClick={()=>updateBrandFilter(brand)}
                  >
                    <div className="input-box">
                      <img 
                        src={
                          selectedBrands.includes(brand)
                            ? "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/checked-b672f083.png"
                            : "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/unchecked-58d79d4f.png"
                        }
                        className="input-checkbox-img"
                        alt=""
                      />
                    </div>
                    <div className="price-text-content">{brand}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Discount Filter */}
          {activeFilter === "Discount" && (
            <div className="filter-container-right-content">
              {discountOptions.map((discount, index) => (
                <div style={{ height: 48 }} key={index}>
                  <div 
                    className="filter-price-content" 
                    onClick={() => updateDiscountFilter(discount)}
                  >
                    <div className="input-box">
                      <img
                        src={
                          selectedDiscounts.includes(discount)
                            ? "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/checked-b672f083.png"
                            : "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/unchecked-58d79d4f.png"
                        }
                        className="input-checkbox-img"
                        alt=""
                      />
                    </div>
                    <div className="price-text-content">{discount}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Customer Ratings Filter */}
          {activeFilter === "Customer Ratings" && (
            <div className="filter-container-right-content">
              {ratingOptions.map((rating, index) => (
                <div style={{ height: 48 }} key={index}>
                  <div 
                    className="filter-price-content" 
                    onClick={() =>updateRatingFilter(rating)}
                  >
                    <div className="input-box">
                      <img
                        src={
                       selectedRatings.includes(rating)
                            ? "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/checked-b672f083.png"
                            : "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/unchecked-58d79d4f.png"
                        }
                        className="input-checkbox-img"
                        alt=""
                      />
                    </div>
                    <div className="price-text-content">{rating}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="filter-footer-container">
        <div className='filter-footer-body-container'>
          <div className="filter-footer-left">
            <div className="footer-product-count">
              11
            </div>
            <div className="footer-product-found-text">
             product found
            </div>
          </div>
          <div className="footer-filter-apply-button" onClick={handleApply}>
            Apply 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;