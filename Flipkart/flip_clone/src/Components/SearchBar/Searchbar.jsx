import React from 'react'
import './Searchbar.css'
import "../../Fonts/font.css";

function Searchbar() {
  return (
    <div>
     
        <div className="location-container">
            <div className="location-wrapper">
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M9.08414 13.8688C10.5546 12.555 13 9.89704 13 6.75C13 5.42392 12.4732 4.15215 11.5355 3.21447C10.5979 2.27678 9.32608 1.75 8 1.75C6.67392 1.75 5.40215 2.27678 4.46447 3.21447C3.52678 4.15215 3 5.42392 3 6.75C3 9.89704 5.4454 12.555 6.91586 13.8688C7.38418 14.2872 7.61834 14.4964 8 14.4964C8.38166 14.4964 8.61582 14.2872 9.08414 13.8688ZM10.5 6.75C10.5 8.13071 9.38071 9.25 8 9.25C6.61929 9.25 5.5 8.13071 5.5 6.75C5.5 5.36929 6.61929 4.25 8 4.25C9.38071 4.25 10.5 5.36929 10.5 6.75Z" fill="#1F1F1F"></path><path d="M9.08414 13.8688L8.68438 13.4214L8.68438 13.4214L9.08414 13.8688ZM6.91586 13.8688L7.31562 13.4214L6.91586 13.8688ZM12.4 6.75C12.4 8.16783 11.8481 9.50544 11.0906 10.6696C10.3343 11.832 9.39653 12.7851 8.68438 13.4214L9.4839 14.3162C10.2422 13.6387 11.2624 12.606 12.0964 11.3241C12.9292 10.0441 13.6 8.47922 13.6 6.75H12.4ZM11.1113 3.63873C11.9364 4.46389 12.4 5.58305 12.4 6.75H13.6C13.6 5.26479 13.01 3.84041 11.9598 2.7902L11.1113 3.63873ZM8 2.35C9.16695 2.35 10.2861 2.81357 11.1113 3.63873L11.9598 2.7902C10.9096 1.74 9.48521 1.15 8 1.15V2.35ZM4.88873 3.63873C5.71389 2.81357 6.83305 2.35 8 2.35V1.15C6.51479 1.15 5.09041 1.74 4.0402 2.7902L4.88873 3.63873ZM3.6 6.75C3.6 5.58305 4.06357 4.46389 4.88873 3.63873L4.0402 2.7902C2.99 3.84041 2.4 5.26479 2.4 6.75H3.6ZM7.31562 13.4214C6.60347 12.7851 5.66569 11.832 4.90943 10.6696C4.15193 9.50544 3.6 8.16783 3.6 6.75H2.4C2.4 8.47922 3.07077 10.0441 3.90359 11.3241C4.73765 12.606 5.75779 13.6387 6.5161 14.3162L7.31562 13.4214ZM8 13.8964C7.94117 13.8964 7.89717 13.887 7.81199 13.833C7.69818 13.7607 7.56373 13.643 7.31562 13.4214L6.5161 14.3162C6.93321 14.6889 7.34507 15.0964 8 15.0964V13.8964ZM8.68438 13.4214C8.43627 13.643 8.30182 13.7607 8.18801 13.833C8.10283 13.887 8.05883 13.8964 8 13.8964V15.0964C8.65493 15.0964 9.06679 14.6889 9.4839 14.3162L8.68438 13.4214ZM8 9.85C9.71208 9.85 11.1 8.46208 11.1 6.75H9.9C9.9 7.79934 9.04934 8.65 8 8.65V9.85ZM4.9 6.75C4.9 8.46208 6.28792 9.85 8 9.85V8.65C6.95066 8.65 6.1 7.79934 6.1 6.75H4.9ZM8 3.65C6.28792 3.65 4.9 5.03792 4.9 6.75H6.1C6.1 5.70066 6.95066 4.85 8 4.85V3.65ZM11.1 6.75C11.1 5.03792 9.71208 3.65 8 3.65V4.85C9.04934 4.85 9.9 5.70066 9.9 6.75H11.1Z" fill="#1F1F1F"></path></svg>
          <div className="location-text">
            Location not set
          </div>
           <div className="delivery-location-container">
                <div className="location-text-blue">
                    Select delivery location

                </div>
                <svg width="16" height="16" fill="none" viewBox="0 0 17 17"><path d="m6.627 3.749 5 5-5 5" stroke="#1254E7" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>

            </div>
            </div>

 <div className="search-bar-container"> 
    <div className="search-bar"> 
        <div className="search-bar-wrapper">
             <div className='search-bar-search-logo'>
                 <svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><circle cx="116" cy="116" r="84" fill="none" stroke="#1254E7" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path fill="none" stroke="#1254E7" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M175.4 175.4 224 224"></path></svg> 
                 </div>
                 <div className="searchfor-text">
                    Search for Products
                    </div> 
                 </div> 
                 </div> 
                 </div>          
        </div>
       
      </div>
   
  )
}

export default Searchbar
