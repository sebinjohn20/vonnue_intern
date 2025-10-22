import React, { useState } from 'react'
import './ProductNabar.css'
import "../../../Fonts/font.css";
import { Link } from 'react-router-dom';
import { useFilter } from '../../Context/FilterContext';
import { useNavigate } from 'react-router-dom';



function ProductNavbar() {
    const [showSort, setShowSort] = useState(false);
    const {selectedSort, updateSort}=useFilter()
    const navigate=useNavigate()
const handleSortClick=(option)=>{
    updateSort(option);
    setShowSort(false);
}

  const handleBack=()=>{
    navigate(-1)
  }
  const sortOptions=[
    "Popularity",
    "Price -- Low to High",
    "Price -- High to Low",
    "Newest First"

  ]
  return (
    <>
    <div className='product-nav-bar-container'>
      <div className="prodcut-nav-section">
       
      <div style={{display:'flex'}}>
       <div className="back-arrow" onClick={()=>handleBack()}>
        <svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg"><path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
        </div> 
            <div className='flip-icon'>
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-ea579c.png" className="imageicon" alt="" />
                
            </div>   
            <div className='iphone-text'>
              <h1>watch</h1>  
            </div>
            </div>
            <div style={{display:'flex'}}>
            <div className="lens-container">
                <svg height="30" viewBox="0 0 32 32" width="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.0012 0H0.0012207V32H32.0012V0Z"></path><path d="M15.0012 21.9999C18.8671 21.9999 22.0011 18.8659 22.0011 14.9999C22.0011 11.134 18.8671 8 15.0012 8C11.1352 8 8.00122 11.134 8.00122 14.9999C8.00122 18.8659 11.1352 21.9999 15.0012 21.9999Z" stroke="#111112" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.9524 19.95L24.0024 24" stroke="#111112" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            <div className="lens-container">
           <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 23H8.56185C8.32766 23 8.1009 22.9178 7.9211 22.7678C7.7413 22.6177 7.61987 22.4093 7.57797 22.1789L4.2402 3.82112C4.19831 3.5907 4.07688 3.3823 3.89708 3.23225C3.71728 3.08219 3.49052 3 3.25633 3H1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 28C10.3807 28 11.5 26.8807 11.5 25.5C11.5 24.1193 10.3807 23 9 23C7.61929 23 6.5 24.1193 6.5 25.5C6.5 26.8807 7.61929 28 9 28Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24 28C25.3807 28 26.5 26.8807 26.5 25.5C26.5 24.1193 25.3807 23 24 23C22.6193 23 21.5 24.1193 21.5 25.5C21.5 26.8807 22.6193 28 24 28Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 8H26.8018C26.9483 8 27.0929 8.03218 27.2256 8.09425C27.3583 8.15633 27.4757 8.2468 27.5695 8.35925C27.6634 8.4717 27.7314 8.6034 27.7687 8.74504C27.8061 8.88667 27.8119 9.03478 27.7857 9.17889L26.1493 18.1789C26.1074 18.4093 25.986 18.6177 25.8062 18.7678C25.6264 18.9178 25.3996 19 25.1654 19H7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            <div className="login-button">
                <span>Login</span>
            </div>
            </div>
      </div>
    </div>
    <div className="sort-filter-btn-container">
        <div className="sort-filter-wrapper">
            <div style={{flex:1}}>
                <div className="sortBtn-container" onClick={()=>setShowSort(!showSort)}>
                    <svg width="20" height="20" style={{marginLeft:-1}} viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="m144 168 40 40 40-40M184 112v96M48 128h72M48 64h136M48 192h56"></path></svg>
                        <div className="sort-text">
                            Sort
                        </div>
                </div>
            </div>
                <div className="center-bar">

                </div>

                        <div style={{flexGrow: 1, flexShrink: 0, flexBasis: '0%'}}>
                            <Link to="/filter">
                <div className="sortBtn-container">
                        <svg width="20" height="20" style={{marginLeft:1}}  viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M148 172H40M216 172h-28"></path><circle cx="168" cy="172" r="20" fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle><path fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M84 84H40M216 84h-92"></path><circle cx="104" cy="84" r="20" fill="none" stroke="#111112" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle></svg>
                        <div className="sort-text">
                            Filter
                        </div>
                </div>
                </Link>
            </div>
        </div>
    </div>

            {/* Sort Container - appears when showSort is true */}


{showSort &&(
    <div className="sort-container-active">
        <div className="sort-header-container">
            <div className="sort-title">
                    SORT BY
            </div>
           <div className="bar-sortby">

           </div>
 {sortOptions.map((option, index) => (
                            <div 
                                key={index} 
                                className="popularity-container"
                                onClick={() => handleSortClick(option)}
                            >
                                <div className="popularity-container-left">
                                    {option}
                                </div>
                                <div className="sort-radio-image">
                                    <img 
                                        src={
                                            selectedSort === option 
                                                ? "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/checked-b672f083.png"
                                                : "https://rukminim2.flixcart.com/www/32/32/promos/28/04/2022/7b036604-c843-4bb5-af27-7c675bf60f67.png?q=60"
                                        } 
                                        className='sort-radio-img' 
                                        alt="" 
                                    />
                                </div>
                            </div>
                        ))}
        </div>
    </div>
)}


    <div className="top-sale-container">
        <div className="top-sale-wrapper">
            <div style={{ padding: 0, paddingLeft: 11 ,display:'flex'}}>
         <div className="sale-dicount-wrapper" style={{width:108.583}}>
            <div className="percentage-logo">
                <div className="percentage-logo-one">
                    <img src="https://rukminim2.flixcart.com/www/64/64/promos/03/10/2025/fab7ebe1-ff85-4a7d-92d9-6219b369e69d.jpg?q=60" className='logo-image' alt="" />

                </div>
            </div>
          <span className='top-sale-text' style={{ display: 'inline-block' }}>
                 Top Sale
         < span style={{ display: 'block' }}>Discounts</span>
        </span>

            
         </div>
          <div className="sale-dicount-wrapper" style={{width:70.8542}}>
            <div className="percentage-logo">
                <div className="percentage-logo-one">
                    <img src="https://rukminim2.flixcart.com/www/64/64/promos/13/10/2022/9f35831d-1207-45a3-8bff-808c06d045d3.png?q=60" className='logo-image' alt="" />

                </div>
            </div>
          <span className='top-sale-text' >
                 5G
        </span>

            
         </div>
           <div className="sale-dicount-wrapper"style={{width:111.802}}>
            <div className="percentage-logo">
                <div className="percentage-logo-one">
                    <img src="https://rukminim2.flixcart.com/www/64/64/promos/31/05/2023/a8b4d164-3eaf-4156-acf5-44c9db07daa5.png?q=60" className='logo-image' alt="" />

                </div>
            </div>
          <span className='top-sale-text' style={{ display: 'inline-block' }}>
                 Rs. 15000 -
         < span style={{ display: 'block' }}>Rs. 20000</span>
        </span>

            
         </div>
     
     
         </div>
        
        </div>
    </div>
  
  <div className="sort-container">

  </div>


    </>
  )
}

export default ProductNavbar
