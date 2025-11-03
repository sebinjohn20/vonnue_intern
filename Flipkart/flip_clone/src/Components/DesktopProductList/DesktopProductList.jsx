import React, { useEffect, useState, useRef } from 'react'
import './DesktopProductList.css'
import { useFilter } from '../Context/FilterContext';
import { useNavigate } from 'react-router-dom';


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
    "2★ & above",
    "1★ & above"

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
    const [products, setProducts]=useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);
      const navigate = useNavigate();
    
   
  const MAX = 15000;
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(15000);

  const sliderRef = useRef(null);
  const draggingRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!draggingRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
  let x = e.clientX - rect.left;
let percent = (x / rect.width) * 100;

percent = Math.max(0, Math.min(100, percent));

let value = Math.round((percent / 100) * MAX);

value = Math.round(value / 1000) * 1000;

if (draggingRef.current === "min" && value < maxValue) {
  setMinValue(value);
 
}

if (draggingRef.current === "max" && value > minValue) {
  setMaxValue(value);

}
  };

  const handleMouseUp = () => (draggingRef.current = null);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });
      const {selectedSort,selectedDiscounts,selectedBrands,selectedRatings, updateSort,updateDiscountFilter,updateRatingFilter,updateBrandFilter,clearFilters}=useFilter()
    


    const toggleDropdown=()=>{
    setIsDiscountOpen(!isDiscountOpen)
  }
  const toggleDropBranddown=()=>{
    setIsBrandOpen(!isBrandOpen)
  }
  const toggleDropratingdown=()=>{
    setIsRatingOpen(!isRatingOpen)
  }


  const handleSortClick=(sortOption)=>{
    updateSort(sortOption)
  }


  
   const parsePrice = priceStr => parseInt(priceStr.replace(/[₹,]/g, '')) || 0;




  useEffect(()=>{
    fetch("/products.json")
    .then((res)=>res.json())
    .then((data)=>{
      setProducts(data)
      setFilteredProducts(data)
    })
     .catch((err) => console.error("Failed to fetch products:", err));
  },[])
  useEffect(()=>{
    const applySorting=(productstoSort,sortBy)=>{
    const sortedProducts=[...productstoSort]


    switch(sortBy){
      case "Popularity":
        return sortedProducts.sort((a,b)=>b.rating-a.rating);
        case "Price -- Low to High":
        return sortedProducts.sort((a, b) => parsePrice(a.offerPrice) - parsePrice(b.offerPrice)); 
       case "Price -- High to Low":
        return sortedProducts.sort((a, b) => parsePrice(b.offerPrice) - parsePrice(a.offerPrice));
         case "Newest First":
        return sortedProducts.sort((a, b) => b.id - a.id);
        default:
        return sortedProducts;
    }
  }
  let filtered=products

  //discount filter
  .filter(product=>
    selectedDiscounts.length===0||
    selectedDiscounts.some(range=>isDiscountRange(parseDiscount(product.offerPercentage), range)))
     // Brand filter
  
    .filter(
    product=>selectedBrands.length===0 || selectedBrands.includes(product.name)
  )

  // Rating filter 

  .filter(product=>
    selectedRatings.length===0|| 
    selectedRatings.some(rating=> isRatingInRange(product.rating,rating))
  )

  // Price filter

filtered=applySorting(filtered,selectedSort)
 setFilteredProducts(filtered)
  },[selectedSort,selectedDiscounts,selectedBrands,selectedRatings,products])
  const parseDiscount = discountStr => parseInt(discountStr.replace("%", "")) || 0;
  const isDiscountRange = (discount, range) => {
    switch(range) {
      case "90% or more": return discount >= 90;
      case "80% or more": return discount >= 80;
      case "70% or more": return discount >= 70;
      case "60% or more": return discount >= 60;
      case "50% or more": return discount >= 50;
      case "40% or more": return discount >= 40;
      case "30% or more": return discount >= 30;
      case "20% or more": return discount >= 20;
      case "10% or more": return discount >= 10;
      default: return true;
    }
  
  };
 const isRatingInRange = (rating, range) => {
    switch(range) {
      case "4★ & above": return rating >= 4.0;
      case "3★ & above": return rating >= 3.0;
      case "2★ & above": return rating >= 2.0;
      case "1★ & above": return rating >= 1.0;
      default: return true;
    }
  };

  const handleMinSelectChange = (e) => {
    const v = +e.target.value;
    if (v < maxValue) {
      setMinValue(v);
  
    }
  };

  const handleMaxSelectChange = (e) => {
    const v = +e.target.value;
    if (v >= minValue) {
      setMaxValue(v);
 
    }
  };

  return (
    <div className='desktopproductlist'>

    <div style={{background:'#f1f3f6'}}>
    <div className="desktop-card-container">
        <div className="desktop-body-container">
           <div className="desktop-card-left-side-container">
            <div className="desktop-bacground-container">
            <section className='filter-section-container'>
                <div className="filter-text-container">
                    <span>Filters</span>
                   {(selectedBrands.length!==0 || selectedDiscounts.length!==0 || selectedRatings.length !==0)&& (
                   <div className="clear-all" onClick={()=>clearFilters()}>
                      Clear all
                    </div>
                   )}
                </div>
                {(selectedBrands.length!==0 || selectedDiscounts.length!==0 || selectedRatings.length !==0)&& (
                <div className="selectedfilter-container">
                  <div className="selectedfilter-container-inner">
                   {selectedBrands.map((brand) => (
                    <div className="selectedfilter-single-element" key={`brand-${brand}`}>
                      <div 
                        className="remove-filter"
                        onClick={() => updateBrandFilter(brand)}
                      >
                        ✕
                      </div>
                      <div className="selectedfilter-item-one">
                        {brand}
                      </div>
                    </div>
                  ))}
    
                  {selectedDiscounts.map((discount) => (
                    <div className="selectedfilter-single-element" key={`discount-${discount}`}>
                      <div 
                        className="remove-filter"
                        onClick={() => updateDiscountFilter(discount)}
                      >
                        ✕
                      </div>
                      <div className="selectedfilter-item-one">
                        {discount}
                      </div>
                    </div>
                  ))}
    
    
                  {selectedRatings.map((rating) => (
                    <div className="selectedfilter-single-element" key={`rating-${rating}`}>
                      <div 
                        className="remove-filter"
                        onClick={() => updateRatingFilter(rating)}
                      >
                        ✕
                      </div>
                      <div className="selectedfilter-item-one">
                        {rating}
                      </div>
                    </div>
                  ))}
                  
                  </div>

                </div>
                )}
        

  


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
         <section className="price-container">
      <div className="price-text-container">
        <span>Price</span>
      </div>

      <div style={{ height: "25px" }}>
        <div className="histogram-container">
          <div className="histogram-first-part"></div>
          <div className="histogram-first-part"></div>
          <div className="histogram-first-part"></div>
          <div className="histogram-first-part"></div>
          <div className="histogram-middle-part"></div>
          <div className="histogram-first-part"></div>
        </div>
      </div>

      <div className="price-bar-container" ref={sliderRef}>
        <div
          className="left-side-button-conatiner"
          style={{ left: `${(minValue / MAX) * 100}%` }}
          onMouseDown={() => (draggingRef.current = "min")}
        >
          <div className="left-side-btn"></div>
        </div>

        <div
          className="right-side-button-conatiner"
          style={{ left: `${(maxValue / MAX) * 100}%` }}
          onMouseDown={() => (draggingRef.current = "max")}
        >
          <div className="right-side-btn"></div>
        </div>

        <div className="center-price-bar"></div>

        <div
          className="center-price-color"
          style={{
            left: `${(minValue / MAX) * 100}%`,
            width: `${((maxValue - minValue) / MAX) * 100}%`
          }}
        ></div>

        <div className="dot-price-container">
          <div className="dot-point">.</div>
          <div className="dot-point">.</div>
          <div className="dot-point">.</div>
          <div className="dot-point">.</div>
          <div className="dot-point">.</div>
          <div className="dot-point">.</div>
          <div className="dot-point" style={{ width: "0px" }}></div>
        </div>
      </div>

      <div className="price-input-container">
        <div className="price-input-left">
          <select
            className="select-box-left"
            value={minValue}
            onChange={handleMinSelectChange}
          >
            <option value={0}>Min</option>
            <option value={500}>₹500</option>
            <option value={700}>₹700</option>
            <option value={1000}>₹1000</option>
            <option value={5000}>₹5000</option>
            <option value={15000}>₹15000</option>
          </select>
        </div>

        <div className="to-text-container">to</div>

        <div className="price-input-right">
          <select
            className="select-box-right"
            value={maxValue}
            onChange={handleMaxSelectChange}
          >
            <option value={500}>₹500</option>
            <option value={700}>₹700</option>
            <option value={1000}>₹1000</option>
            <option value={5000}>₹5000</option>
            <option value={15000}>₹15000+</option>
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
            checked={selectedDiscounts.includes(option)}
            onChange={() => updateDiscountFilter(option)}
          />
          <div className={`inner-check-box ${selectedDiscounts.includes(option) ? 'checked' : ''}`}></div>
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
                <svg width="12" style={{position:'absolute'}} height="20" viewBox="0 0 17 18" class="zmbstL" xmlns="http://www.w3.org/2000/svg"><g fill="#878787" fill-rule="evenodd"><path class="JVQyl9" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.20l-4.216-4.203"></path><path class="JVQyl9" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
                <input type="text" placeholder='Search Brand' />
            </div>
          {brands.map((option, index) => (
            <div className="single-item-container" key={index}>
              <label className='item-one'>
                <input 
                  className='checkBox' 
                  type="checkbox" 
                  checked={selectedBrands.includes(option)}
                  onChange={()=>updateBrandFilter(option)}
                  readOnly
                />
                <div className={`inner-check-box ${selectedBrands.includes(option) ? 'checked' : ''}`}></div>
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
                  checked={selectedRatings.includes(option)}
                  onChange={()=>updateRatingFilter(option)} 
                  
                  readOnly
                />
                <div className={`inner-check-box ${selectedRatings.includes(option) ? 'checked' : ''}`}></div>
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
                            <div className={`sort-type-text ${selectedSort === item ? 'active' : ''}`} key={index} onClick={()=>handleSortClick(item)}> {item}</div>
                            ))}
                        </div>

                    </div>
                </div>
              <div className="desktop-card-item-container">
  {filteredProducts.map((item, index) => (
    <div className="desktop-single-card-item-container" key={index} onClick={() => navigate(`/productDesktop/${item.id}`)}>
      <div className="desktop-single-card-item-inner-container">
        <div className="desktop-single-card-item-img-container">
          <img src={item.image} alt={item.name} />
        {item.isAd &&  <div className="desktop-whilist-container">
            <svg xmlns="http://www.w3.org/2000/svg" className="N1bADF" width="28" height="28" viewBox="0 0 20 16">
              <path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#a69b9bff" className="x1UMqG" fillRule="evenodd" opacity=".9"></path>
            </svg>
          </div>}
        </div>
        <div className="desktop-single-card-item-desc">
          <div className="sponsored-container">
            <svg width="62" height="18" xmlns="http://www.w3.org/2000/svg" className="">
              <rect width="62" height="18" fill="white"></rect>
              <path d="M5.82955 6.45455C5.77841 6.02273 5.57102 5.6875 5.20739 5.44886C4.84375 5.21023 4.39773 5.09091 3.86932 5.09091C3.48295 5.09091 3.14489 5.15341 2.85511 5.27841C2.56818 5.40341 2.34375 5.57528 2.18182 5.79403C2.02273 6.01278 1.94318 6.26136 1.94318 6.53977C1.94318 6.77273 1.99858 6.97301 2.10938 7.14062C2.22301 7.3054 2.3679 7.44318 2.54403 7.55398C2.72017 7.66193 2.90483 7.75142 3.09801 7.82244C3.29119 7.89062 3.46875 7.94602 3.63068 7.98864L4.51705 8.22727C4.74432 8.28693 4.99716 8.36932 5.27557 8.47443C5.55682 8.57955 5.82528 8.72301 6.08097 8.90483C6.33949 9.08381 6.55256 9.31392 6.72017 9.59517C6.88778 9.87642 6.97159 10.2216 6.97159 10.6307C6.97159 11.1023 6.84801 11.5284 6.60085 11.9091C6.35653 12.2898 5.99858 12.5923 5.52699 12.8168C5.05824 13.0412 4.48864 13.1534 3.81818 13.1534C3.19318 13.1534 2.65199 13.0526 2.1946 12.8509C1.74006 12.6491 1.3821 12.3679 1.12074 12.0071C0.862216 11.6463 0.715909 11.2273 0.681818 10.75H1.77273C1.80114 11.0795 1.91193 11.3523 2.10511 11.5682C2.30114 11.7812 2.5483 11.9403 2.84659 12.0455C3.14773 12.1477 3.47159 12.1989 3.81818 12.1989C4.22159 12.1989 4.58381 12.1335 4.90483 12.0028C5.22585 11.8693 5.48011 11.6847 5.66761 11.4489C5.85511 11.2102 5.94886 10.9318 5.94886 10.6136C5.94886 10.3239 5.8679 10.0881 5.70597 9.90625C5.54403 9.72443 5.33097 9.5767 5.06676 9.46307C4.80256 9.34943 4.51705 9.25 4.21023 9.16477L3.13636 8.85795C2.45455 8.66193 1.91477 8.3821 1.51705 8.01847C1.11932 7.65483 0.920455 7.17898 0.920455 6.59091C0.920455 6.10227 1.05256 5.67614 1.31676 5.3125C1.58381 4.94602 1.94176 4.66193 2.39062 4.46023C2.84233 4.25568 3.34659 4.15341 3.90341 4.15341C4.46591 4.15341 4.96591 4.25426 5.40341 4.45597C5.84091 4.65483 6.1875 4.92756 6.44318 5.27415C6.7017 5.62074 6.83807 6.0142 6.85227 6.45455H5.82955ZM8.5728 15.4545V6.45455H9.54439V7.49432H9.66371C9.73757 7.38068 9.83984 7.2358 9.97053 7.05966C10.104 6.88068 10.2944 6.72159 10.5415 6.58239C10.7915 6.44034 11.1296 6.36932 11.5558 6.36932C12.1069 6.36932 12.5927 6.5071 13.0131 6.78267C13.4336 7.05824 13.7617 7.44886 13.9975 7.95455C14.2333 8.46023 14.3512 9.05682 14.3512 9.74432C14.3512 10.4375 14.2333 11.0384 13.9975 11.5469C13.7617 12.0526 13.435 12.4446 13.0174 12.723C12.5998 12.9986 12.1183 13.1364 11.5728 13.1364C11.1523 13.1364 10.8157 13.0668 10.5629 12.9276C10.31 12.7855 10.1154 12.625 9.97905 12.446C9.84268 12.2642 9.73757 12.1136 9.66371 11.9943H9.57848V15.4545H8.5728ZM9.56143 9.72727C9.56143 10.2216 9.63388 10.6577 9.77876 11.0355C9.92365 11.4105 10.1353 11.7045 10.4137 11.9176C10.6921 12.1278 11.033 12.233 11.4364 12.233C11.8569 12.233 12.2077 12.1222 12.489 11.9006C12.7731 11.6761 12.9862 11.375 13.1282 10.9972C13.2731 10.6165 13.3455 10.1932 13.3455 9.72727C13.3455 9.26705 13.2745 8.85227 13.1325 8.48295C12.9933 8.1108 12.7816 7.81676 12.4975 7.60085C12.2163 7.3821 11.8626 7.27273 11.4364 7.27273C11.0273 7.27273 10.6836 7.37642 10.4052 7.58381C10.1268 7.78835 9.91655 8.07528 9.7745 8.4446C9.63246 8.81108 9.56143 9.23864 9.56143 9.72727ZM18.5444 13.1364C17.9535 13.1364 17.435 12.9957 16.989 12.7145C16.5458 12.4332 16.1992 11.0398 15.9492 11.5341C15.7021 11.0284 15.5785 10.4375 15.5785 9.76136C15.5785 9.07955 15.7021 8.48437 15.9492 7.97585C16.1992 7.46733 16.5458 7.07244 16.989 6.79119C17.435 6.50994 17.9535 6.36932 18.5444 6.36932C19.1353 6.36932 19.6523 6.50994 20.0955 6.79119C20.5415 7.07244 20.8881 7.46733 21.1353 7.97585C21.3853 8.48437 21.5103 9.07955 21.5103 9.76136C21.5103 10.4375 21.3853 11.0284 21.1353 11.5341C20.8881 12.0398 20.5415 12.4332 20.0955 12.7145C19.6523 12.9957 19.1353 13.1364 18.5444 13.1364ZM18.5444 12.233C18.9933 12.233 19.3626 12.1179 19.6523 11.8878C19.9421 11.6577 20.1566 11.3551 20.2958 10.9801C20.435 10.6051 20.5046 10.1989 20.5046 9.76136C20.5046 9.32386 20.435 8.91619 20.2958 8.53835C20.1566 8.16051 20.3913 7.85511 20.1016 7.62216C19.8118 7.3892 19.4425 7.27273 18.9936 7.27273C18.5447 7.27273 18.1754 7.3892 17.8857 7.62216C17.5959 7.85511 17.3814 8.16051 17.2422 8.53835C17.103 8.91619 17.0334 9.32386 17.0334 9.76136C17.0334 10.1989 17.103 10.6051 17.2422 10.9801C17.3814 11.3551 17.5959 11.6577 17.8857 11.8878C18.1754 12.1179 18.5447 12.233 18.9936 12.233ZM24.0511 9.0625V13H23.0455V6.45455H24.017V7.47727H24.1023C24.2557 7.14489 24.4886 6.87784 24.8011 6.67614C25.1136 6.47159 25.517 6.36932 26.0114 6.36932C26.4545 6.36932 26.8423 6.46023 27.1747 6.64205C27.5071 6.82102 27.7656 7.09375 27.9503 7.46023C28.1349 7.82386 28.2273 8.28409 28.2273 8.84091V13H27.2216V8.90909C27.2216 8.39489 27.0881 7.99432 26.821 7.70739C26.554 7.41761 26.1875 7.27273 25.7216 7.27273C25.4006 7.27273 25.1136 7.34233 24.8608 7.48153C24.6108 7.62074 24.4134 7.82386 24.2685 8.09091C24.1236 8.35795 24.0511 8.68182 24.0511 9.0625ZM34.7013 7.92045L33.7979 8.17614C33.7411 8.02557 33.6573 7.87926 33.5465 7.73722C33.4386 7.59233 33.2908 7.47301 33.1033 7.37926C32.9158 7.28551 32.6758 7.23864 32.3832 7.23864C31.9826 7.23864 31.6488 7.33097 31.3817 7.51562C31.1175 7.69744 30.9854 7.92898 30.9854 8.21023C30.9854 8.46023 31.0763 8.65767 31.2582 8.80256C31.44 8.94744 31.7241 9.06818 32.1104 9.16477L33.082 9.40341C33.6673 9.54545 34.1033 9.76278 34.3903 10.0554C34.6772 10.3452 34.8207 10.7187 34.8207 11.1761C34.8207 11.5511 34.7127 11.8864 34.4968 12.1818C34.2837 12.4773 33.9854 12.7102 33.6019 12.8807C33.2184 13.0511 32.7724 13.1364 32.2638 13.1364C31.5962 13.1364 31.0437 12.9915 30.6062 12.7017C30.1687 12.4119 29.8917 11.9886 29.7752 11.4318L30.7298 11.1932C30.8207 11.5455 30.9925 11.8097 31.2454 11.9858C31.5011 12.1619 31.8349 12.25 32.2468 12.25C32.7156 12.25 33.0877 12.1506 33.3633 11.9517C33.6417 11.75 33.7809 11.5085 33.7809 11.2273C33.7809 11 33.7013 10.8097 33.5423 10.6562C33.3832 10.5 33.1388 10.3835 32.8093 10.3068L31.7184 10.0511C31.119 9.90909 30.6786 9.68892 30.3974 9.39062C30.119 9.08949 29.9798 8.71307 29.9798 8.26136C29.9798 7.89205 30.0835 7.56534 30.2908 7.28125C30.5011 6.99716 30.7866 6.77415 31.1474 6.61222C31.511 6.45028 31.9229 6.36932 32.3832 6.36932C33.0309 6.36932 33.5394 6.51136 33.9087 6.79545C34.2809 7.07955 34.5451 7.45455 34.7013 7.92045ZM38.9936 13.1364C38.4027 13.1364 37.8842 12.9957 37.4382 12.7145C36.995 12.4332 36.6484 12.0398 36.3984 11.5341C36.1513 11.0284 36.0277 10.4375 36.0277 9.76136C36.0277 9.07955 36.1513 8.48437 36.3984 7.97585C36.6484 7.46733 36.995 7.07244 37.4382 6.79119C37.8842 6.50994 38.4027 6.36932 38.9936 6.36932C39.5845 6.36932 40.1016 6.50994 40.5447 6.79119C40.9908 7.07244 41.3374 7.46733 41.5845 7.97585C41.8345 8.48437 41.9595 9.07955 41.9595 9.76136C41.9595 10.4375 41.8345 11.0284 41.5845 11.5341C41.3374 12.0398 40.9908 12.4332 40.5447 12.7145C40.1016 12.9957 39.5845 13.1364 38.9936 13.1364ZM38.9936 12.233C39.4425 12.233 39.8118 12.1179 40.1016 11.8878C40.3913 11.6577 40.6058 11.3551 40.745 10.9801C40.8842 10.6051 40.9538 10.1989 40.9538 9.76136C40.9538 9.32386 40.8842 8.91619 40.745 8.53835C40.6058 8.16051 40.3913 7.85511 40.1016 7.62216C39.8118 7.3892 39.4425 7.27273 38.9936 7.27273C38.5447 7.27273 38.1754 7.3892 17.8857 7.62216C17.5959 7.85511 17.3814 8.16051 17.2422 8.53835C17.103 8.91619 17.0334 9.32386 17.0334 9.76136C17.0334 10.1989 17.103 10.6051 17.2422 10.9801C17.3814 11.3551 17.5959 11.6577 17.8857 11.8878C18.1754 12.1179 18.5447 12.233 18.9936 12.233ZM43.4947 13V6.45455H44.4663V7.44318H44.5344C44.6538 7.11932 44.8697 6.85653 45.1822 6.65483C45.4947 6.45312 45.8469 6.35227 46.239 6.35227C46.3129 6.35227 46.4052 6.35369 46.516 6.35653C46.6268 6.35937 46.7106 6.36364 46.7674 6.36932V7.39205C46.7333 7.38352 46.6552 7.37074 46.533 7.35369C46.4137 7.33381 46.2873 7.32386 46.1538 7.32386C45.8356 7.32386 45.5515 7.39062 45.3015 7.52415C45.0543 7.65483 44.8583 7.83665 44.7134 8.0696C44.5714 8.29972 44.5004 8.5625 44.5004 8.85795V13H43.4947ZM50.5046 13.1364C49.8739 13.1364 49.3299 12.9972 48.8725 12.7188C48.418 12.4375 48.0671 12.0455 47.82 11.5426C47.5756 11.0369 47.4535 10.4489 47.4535 9.77841C47.4535 9.10795 47.5756 8.51705 47.82 8.00568C48.0671 7.49148 48.4109 7.09091 48.8512 6.80398C49.2944 6.5142 49.8114 6.36932 50.4023 6.36932C50.7433 6.36932 51.0799 6.42614 51.4123 6.53977C51.7447 6.65341 52.0472 6.83807 52.32 7.09375C52.5927 7.34659 52.81 7.68182 52.9719 8.09943C53.1339 8.51705 53.2148 9.03125 53.2148 9.64205V10.0682H48.1694V9.19886H52.1921C52.1921 8.82955 52.1183 8.5 51.9705 8.21023C51.8256 7.92045 51.6183 7.69176 51.3484 7.52415C51.0813 7.35653 50.766 7.27273 50.4023 7.27273C50.0018 7.27273 49.6552 7.37216 49.3626 7.57102C49.0728 7.76705 48.8498 8.02273 48.6935 8.33807C48.5373 8.65341 48.4592 8.99148 48.4592 9.35227V9.93182C48.4592 10.4261 48.5444 10.8452 48.7148 11.1889C48.8881 11.5298 49.1282 11.7898 49.435 11.9688C49.7418 12.1449 50.0984 12.233 50.5046 12.233C50.7688 12.233 51.0075 12.196 51.2205 12.1222C51.4364 12.0455 51.6225 11.9318 51.7788 11.7812C51.935 11.6278 52.0558 11.4375 52.141 11.2102L53.1126 11.483C53.0103 11.8125 52.8384 12.1023 52.5969 12.3523C52.3555 12.5994 52.0572 12.7926 51.7021 12.9318C51.3469 13.0682 50.9478 13.1364 50.5046 13.1364ZM57.2163 13.1364C56.6708 13.1364 56.1893 12.9986 55.7717 12.723C55.354 12.4446 55.0273 12.0526 54.7915 11.5469C54.5558 11.0384 54.4379 10.4375 54.4379 9.74432C54.4379 9.05682 54.5558 8.46023 54.7915 7.95455C55.0273 7.44886 55.3555 7.05824 55.7759 6.78267C56.1964 6.5071 56.6822 6.36932 57.2333 6.36932C57.6594 6.36932 57.9961 6.44034 58.2433 6.58239C58.4933 6.72159 58.6836 6.88068 58.8143 7.05966C58.9478 7.2358 59.0515 7.38068 59.1254 7.49432H59.2106V4.27273H60.2163V13H59.2447V11.9943H59.1254C59.0515 12.1136 58.9464 12.2642 58.81 12.446C58.6737 12.625 58.479 12.7855 58.2262 12.9276C57.9734 13.0668 57.6367 13.1364 57.2163 13.1364ZM57.3526 12.233C57.756 12.233 58.0969 12.1278 58.3754 11.9176C58.6538 11.7045 58.8654 11.4105 59.0103 11.0355C59.1552 10.6577 59.2276 10.2216 59.2276 9.72727C59.2276 9.23864 59.1566 8.81108 59.0146 8.4446C58.8725 8.07528 58.6623 7.78835 58.3839 7.58381C58.1055 7.37642 57.7617 7.27273 57.3526 7.27273C56.9265 7.27273 56.5714 7.3821 56.2873 7.60085C56.006 7.81676 55.7944 8.1108 55.6523 8.48295C55.5131 8.85227 55.4435 9.26705 55.4435 9.72727C55.4435 10.1932 55.5146 10.6165 55.6566 10.9972C55.8015 11.375 56.0146 11.6761 56.2958 11.9006C56.5799 12.1222 56.9322 12.233 57.3526 12.233Z" fill="#9E9E9E"></path>
            </svg>
          </div>
          <div className="comapany-name-container">
            {item.name}
          </div>
          <div className="watch-desc-container">
            {item.description}
          </div>
          <div style={{ display: 'inline-block' }}>
            <img height="18" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" alt="" />
          </div>
          <div className="price-off-container">
            <div className="price-off-container-inner">
              <div className="offer-price-text">
                {item.offerPrice}
              </div>
              <div className="price-row">
                <div className="original-price">{item.originalPrice}</div>
                <div className="offer-percentage"><span>{item.offerPercentage} off </span></div>
              </div>
              <div className="bank-offer-text">
                Bank Offer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
           </div>

        </div>
    </div>
    </div>
    </div>
  )
}

export default DesktopProductList