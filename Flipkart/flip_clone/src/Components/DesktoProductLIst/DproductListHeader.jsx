import React from 'react'
import "../../Fonts/font.css";
import "@fontsource/inter"
import './DproductListHeader.css'

function DproductListHeader() {
  return (
    <div>
      <div className="dheader-container">
        <div className="header-container-body">
            <div className="header-blank-space">
                
            </div>
            <div className="header-main-body">
                <div className="header-logo-container">
                    <div className="logo-body-container">
                        <img width="75" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" title="Flipkart" class="W5mR4e"></img>
                        <span className='explore-text'> Explore
                            <span className="plus-text">
                                Plus
                            </span>
                            <img style={{width:10}}  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="" />
                        </span>
                    </div>
                </div>
                <div className="header-searhbar-container">
                    <form action="">
                        <div className="header-searchbar-inner">
                            <input type="text" placeholder='Search for products, brands and more' value="watches" />
                        <button>
                            <svg width="20" height="20" viewBox="0 0 17 18" class="" xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" fill-rule="evenodd"><path class="EwE-Fa" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path class="EwE-Fa" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
                        </button>
                        </div>
                    </form>
                </div>
                <div className="header-loginBtn-container">
                    <div className="header-loginBtn">
                        <div className="header-loginBtn-text">
                             Login
                            
                            </div>
                    </div>
                </div>
                <div className="become-seller-header-component">
                    <span>Become a Seller</span>
                </div>
                <div className="header-more-conatainer">
                    <div className="more-container-body">
                        <div className="more-contaniner-text">More</div>
                        <svg className='more-container-arrow' width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="Wto0b0"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="-dC5Le"></path></svg>
                    </div>
                </div>
            </div>
        </div>
      </div>
  
    </div>
  )
}

export default DproductListHeader
