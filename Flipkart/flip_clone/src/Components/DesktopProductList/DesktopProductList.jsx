import React, { useState } from 'react'
import './DesktopProductList.css'

const menuItems = [
  "Electronics",
  "TVs & Appliances",
  "Men",
  "Women",
  "Baby & Kids",
  "Home & Furniture",
  "Sports, Books & More",
  "Flights",
  "Offer Zone"
];


   

 const discountOptions = [
    '90% or more',
    '80% or more', 
    '70% or more',
    '60% or more',
    '50% or more',
    '40% or more',
    '30% or more',
    '20% or more',
    '10% or more'
  ];
  const brands=[
    "Titan",
    "Fastrack",
    "Casio",
    "Timex",
    "Sonata"

  ]
  const ratings=[
    "4★ & above",
    "3★ & above",

  ]
  const items=[
    "Ideal for",
    "dial shape",
    "strap material",
    "type",
    "dial color",
    "strap color"
  ]
  const itemTwo=[
    "Features",
    "collections",
    "new arrivals",
    "offers",
    "avaliability"
  ]
  const sortOptions=[
    "Relevance",
    "Popularity",
    "Price -- Low to High",
    "Price -- High to Low",
    "Newest First"

  ]

  


function DesktopProductList() {
     const [isDiscountOpen,setIsDiscountOpen]=useState(false)
 const [isBrandOpen,setIsBrandOpen]=useState(false)
 const[isRatingOpen,setIsRatingOpen]=useState(false)

    const toggleDropdown=()=>{
    setIsDiscountOpen(!isDiscountOpen)
  }
  const toggleDropBranddown=()=>{
    setIsBrandOpen(!isBrandOpen)
  }
  const toggleDropratingdown=()=>{
    setIsRatingOpen(!isRatingOpen)
  }
  return (
    <div className='desktopproductlist'>
        <div className="products-type-container">
      <div className="products-type-flex-container">
        {menuItems.map((item, index) => (
          <span className="products-type-body" key={index}>
            {item}
            <svg 
              className={`more-container-arrow ${index >= menuItems.length - 2 ? 'hide-arrow' : ''}`}
              width="4.7" 
              height="8" 
              viewBox="0 0 16 27" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" 
                fill="grey" 
              />
            </svg>
          </span>
        ))}
      </div>
    </div>
    <div style={{background:'#f1f3f6'}}>
    <div className="desktop-card-container">
        <div className="desktop-body-container">
           <div className="desktop-card-left-side-container">
            <div className="desktop-bacground-container">
            <section className='filter-section-container'>
                <div className="filter-text-container">
                    <span>Filters</span>
                </div>
            </section>
            <section className='categories-container'>
                <div className="categories-text">
                    <span>Categories</span>
                </div>
                <div className="categories-type">
                    <span><svg width="10" height="10" style={{marginRight:'5px',cursor:'pointer'}} viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="IZmjtf"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#212121" class="S6zWo2" ></path></svg></span>
                    <span className='watch-type-text'>Watches</span>
                </div>
            </section>
            <section className='price-container'>
                   <div className="price-text-container">
                    <span>Price</span>
                </div>
                <div style={{height:'25px'}}>
                <div className="histogram-container">
                  <div className='histogram-first-part'></div>
                  <div className='histogram-first-part'></div>
                  <div className='histogram-first-part'></div>
                  <div className='histogram-first-part'></div>
                  <div className='histogram-middle-part'></div>
                  <div className='histogram-first-part'></div>
                </div>
                </div>
                <div className="price-bar-container">
                    <div className="left-side-button-conatiner">
                        <div className="left-side-btn">

                        </div>
                    </div>
                      <div className="right-side-button-conatiner">
                        <div className="right-side-btn">
                            
                        </div>
                    </div>
                    <div className="center-price-bar">
                        

                        </div>
                        <div className="center-price-color">
                    </div>
                    <div className="dot-price-container">
                        <div className="dot-point">
                            .
                        </div>
                        <div className="dot-point">
                            .
                        </div>
                        <div className="dot-point">
                            .
                        </div>
                        <div className="dot-point">
                            .
                        </div>
                        <div className="dot-point">
                            .
                        </div>
                        <div className="dot-point">
                            .
                        </div>
                        <div className="dot-point" style={{width:'0px'}}>
                            .
                        </div>
                        
                    </div>
                </div>
                <div className="price-input-container">
                    <div className="price-input-left">
                        <select className='select-box-left' name="" id="">
                            <option value="Min" style={{padding:'0px 7px'}} selected> Min</option>
                            <option value="500" style={{padding:'0px 7px'}}> ₹500</option>
                            <option value="700" style={{padding:'0px 7px'}}> ₹700</option>
                            <option value="1000" style={{padding:'0px 7px'}}> ₹1000</option>
                            <option value="5000" style={{padding:'0px 7px'}}> ₹5000</option>
                            <option value="15000" style={{padding:'0px 7px'}}> ₹15000</option>

                        </select>
                    </div>
                    <div className="to-text-container">
                        to
                    </div>
                     <div className="price-input-right">
                        <select className='select-box-right' name="" id="">
                           
                            <option value="500" style={{padding:'0px 7px'}}> ₹500</option>
                            <option value="700" style={{padding:'0px 7px'}}> ₹700</option>
                            <option value="1000" style={{padding:'0px 7px'}}> ₹1000</option>
                            <option value="5000" style={{padding:'0px 7px'}}> ₹5000</option>
                            <option value="Max" style={{padding:'0px 7px'}} selected> ₹15000+</option>

                        </select>
                    </div>
                </div>
            </section>
        <section className='discount-container'>
      <div className="dicount-container-box" onClick={toggleDropdown}>
        <span>DISCOUNT</span>
        <svg 
          width="16" 
          height="27" 
          viewBox="0 0 16 27" 
          xmlns="http://www.w3.org/2000/svg" 
          className={`downarrow ${isDiscountOpen ? 'open' : ''}`}
        >
          <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#212121"></path>
        </svg>
      </div>
      
      {isDiscountOpen && (
        <div className='drop-down-box-container'>
          {discountOptions.map((option, index) => (
            <div className="single-item-container" key={index}>
              <label className='item-one'>
                <input 
                  className='checkBox' 
                  type="checkbox" 
                  
                  readOnly
                />
                <div className="inner-check-box"></div>
                <div className="dicount-text-container">
                  {option}
                </div>
              </label>
            </div>
          ))}
        </div>
      )}
    </section>
     <section className='discount-container'>
      <div className="dicount-container-box" onClick={toggleDropBranddown}>
        <span>Brands</span>
        <svg 
          width="16" 
          height="27" 
          viewBox="0 0 16 27" 
          xmlns="http://www.w3.org/2000/svg" 
          className={`downarrow ${isBrandOpen ? 'open' : ''}`}
        >
          <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#212121"></path>
        </svg>
      </div>
      
      {isBrandOpen && (
        <div className='drop-down-box-container'>
            <div className="search-brand-container">
                <svg width="12" style={{position:'absolute'}} height="20" viewBox="0 0 17 18" class="zmbstL" xmlns="http://www.w3.org/2000/svg"><g fill="#878787" fill-rule="evenodd"><path class="JVQyl9" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path class="JVQyl9" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
                <input type="text" placeholder='Search Brand' />
            </div>
          {brands.map((option, index) => (
            <div className="single-item-container" key={index}>
              <label className='item-one'>
                <input 
                  className='checkBox' 
                  type="checkbox" 
                  
                  readOnly
                />
                <div className="inner-check-box"></div>
                <div className="dicount-text-container">
                  {option}
                </div>
              </label>
            </div>
          ))}
        </div>
      )}
    </section>
      <section className='discount-container'>
      <div className="dicount-container-box" onClick={toggleDropratingdown}>
        <span>Customer ratings</span>
        <svg 
          width="16" 
          height="27" 
          viewBox="0 0 16 27" 
          xmlns="http://www.w3.org/2000/svg" 
          className={`downarrow ${isRatingOpen ? 'open' : ''}`}
        >
          <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#212121"></path>
        </svg>
      </div>
      
      {isRatingOpen && (
        <div className='drop-down-box-container'>
          {ratings.map((option, index) => (
            <div className="single-item-container" key={index}>
              <label className='item-one'>
                <input 
                  className='checkBox' 
                  type="checkbox" 
                  
                  readOnly
                />
                <div className="inner-check-box"></div>
                <div className="dicount-text-container">
                  {option}
                </div>
              </label>
            </div>
          ))}
        </div>
      )}
    </section>
    <div>
    {items.map((item, index) => (
     <section className='discount-container'>
       
      <div className="dicount-container-box"  key={index}>
        
        <span>{item}</span>
       
        <svg 
          width="16" 
          height="27" 
          viewBox="0 0 16 27" 
          xmlns="http://www.w3.org/2000/svg" 
          className={`downarrow`}
        >
          <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#212121"></path>
        </svg>
      </div>
   
      
  
       
     
    </section>
        ))}
    </div>
    <section className='assured-container'>
        <label className='label-assured'>
            <input type="checkbox" readOnly/>
             <div className="inner-check-box"></div>
             <div className="assured-image-container">
                <img style={{height:'21px'}} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" alt="" />
             </div>
        </label>
        <span>?</span>
    </section>
     <div>
    {itemTwo.map((item, index) => (
     <section className='discount-container'>
       
      <div className="dicount-container-box"  key={index}>
        
        <span>{item}</span>
       
        <svg 
          width="16" 
          height="27" 
          viewBox="0 0 16 27" 
          xmlns="http://www.w3.org/2000/svg" 
          className={`downarrow`}
        >
          <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#212121"></path>
        </svg>
      </div>
   
      
  
       
     
    </section>
        ))}
    </div>
            </div>
           </div>
           <div className="desktop-card-right-side-container">
                <div className="desktop-card-right-side-top-container">
                    <div className="top-container-body">
                        <div className="top-container-wrapper" style={{height:19.59 ,display:"flex"}}>
                        <div className="top-container-heading">
                            <span>Home</span>
                            <svg width="20" height="7" style={{transform:'rotate(180deg)'}} viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="wMLTcO"></path></svg>
                            <span> Watches</span>
                        </div>
                        </div>
                        <div className="top-container-main-heading">
                            Showing 1 – 40 of 6,02,839 results for "
                            <span> watches"</span> 
                        </div>
                        <div className="desktop-sort-container">
                            
                            <span className='sort-name'>Sort By</span>
                            {sortOptions.map((item,index)=>(
                            <div className='sort-type-text' key={index}> {item}</div>
                            ))}
                        </div>

                    </div>
                </div>
                <div className="desktop-card-item-container">
                  
                </div>
           </div>

        </div>
    </div>
    </div>
    </div>
  )
}

export default DesktopProductList
