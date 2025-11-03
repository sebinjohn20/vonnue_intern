import React, { useEffect, useState } from 'react'
import './ProductDesktopDetails.css'
import DproductListHeader from '../DesktoProductLIst/DproductListHeader'
import ProductDetail from '../ProductList/ProductDetail';
import { useParams } from 'react-router-dom';




function ProductDesktopDetails() {

  const productImages = [
    "https://rukminim2.flixcart.com/image/128/128/xif0q/watch/z/i/9/-original-imahfsz7zqhg3fyp.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/watch/g/f/a/-original-imahfsz7se5vwqmy.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/watch/b/j/v/-original-imahfsz7bjeqgnsm.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/watch/q/y/i/-original-imahfsz7gffkqfyk.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/watch/y/u/q/-original-imahfsz7fk2xkfnm.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/watch/4/i/x/-original-imahfsz7zarbmrnr.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/watch/m/s/q/-original-imahfsz7fxtwgfy3.jpeg?q=70&crop=false",
    "https://rukminim2.flixcart.com/image/128/128/xif0q/watch/x/v/e/-original-imahfsz7azeguhxh.jpeg?q=70&crop=false"
  ];
  const newImage=[
    'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/z/i/9/-original-imahfsz7zqhg3fyp.jpeg?q=70&crop=false',
    'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/g/f/a/-original-imahfsz7se5vwqmy.jpeg?q=70&crop=false',
    'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/b/j/v/-original-imahfsz7bjeqgnsm.jpeg?q=70&crop=false',
    'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/q/y/i/-original-imahfsz7gffkqfyk.jpeg?q=70&crop=false',
    'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/y/u/q/-original-imahfsz7fk2xkfnm.jpeg?q=70&crop=false',
    'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/4/i/x/-original-imahfsz7zarbmrnr.jpeg?q=70&crop=false',
    'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/m/s/q/-original-imahfsz7fxtwgfy3.jpeg?q=70&crop=false',
    'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/x/v/e/-original-imahfsz7azeguhxh.jpeg?q=70&crop=false',
    'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/n/s/5/-original-imahfsz7zh6jn5fj.jpeg?q=70&crop=false',
    'https://rukminim2.flixcart.com/image/832/832/xif0q/watch/a/e/h/-original-imahfsz7rjznfyaf.jpeg?q=70&crop=false'
  ]
  const{id}=useParams()
  const[product,setProduct]=useState(null)
  const[selectedImage,setSelectedImage]=useState(newImage[0])
    const [activeImg, setActiveImg] = useState(0);
    useEffect(()=>{
        fetch('/products.json')
        .then(res=>res.json())
        .then(data=>{
            const selectedProduct=data.find(p=>p.id===parseInt(id))
          setProduct(selectedProduct)
       
          })
          .catch(err=>console.error(err))
      
      },[id])
        if (!product) {
      return (
      <div className="loading-screen"></div>
      );
    }
    
    const handleActiveImg=(imageUrl,index)=>{
      setSelectedImage(imageUrl)
      setActiveImg(index)
    }



  return (
    <>
    <div className='product-detail-desktop'>
      <DproductListHeader></DproductListHeader>

      <div className="product-details-page-wrapper">
        <div className="product-details-page-container">
          <div className="product-img-silder-container">
            <div className="product-img-silder-top-container">
              <div className="product-img-silder-small">
                <div className="overflow-silder-container">
                  <ul className='ul-silder-container'>
                    {newImage.map((imageUrl, index) => (
                      <li key={index} className={`li-silder-container ${activeImg === index ? 'active-img' : ''}`}
                       onMouseOver={()=>handleActiveImg(imageUrl,index)}
                      >
                        <div className="li-silder-inner-container">
                         
                          <img 
                            src={imageUrl} 
                            className='silder-desktop-img'
                            alt={`Product view ${index + 1}`}
                          />
                     
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="silder-top-arrow">
                  <svg 
                    width="8" 
                    height="15" 
                    viewBox="0 0 16 27" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="ZpyMwK"
                    style={{position:'relative', top:'4px',transform:'rotate(90deg)'}}
                  >
                    <path 
                      d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" 
                      fill="#000"
                    ></path>
                  </svg>
                </div>
                <div className="silder-bottom-arrow">
                  <svg 
                    width="8" 
                    height="15" 
                    viewBox="0 0 16 27" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="ZpyMwK"
                     style={{position:'relative', top:'4px',transform:'rotate(-90deg)'}}
                  >
                    <path 
                      d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" 
                      fill="#000"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="silder-image-large-container">
                <div className="silder-img-wrapper">
                  <img 
                    src={selectedImage}
                    className='silder-large-img' 
                    alt="Main product view" 
                  />
                </div>
                <div className="img-heart-container">
                  <svg xmlns="http://www.w3.org/2000/svg" className="N1bADF" width="24" height="24" viewBox="0 0 20 16">
                    <path 
                      d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" 
                      fill="#b9bbc0ff" 
                      className="x1UMqG" 
                      stroke="#FFF" 
                      fillRule="evenodd" 
                      opacity=".9"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="buy-now-add-cart-container">
              <div className="buy-now-add-cart-container-inner">
                <ul className='buy-now-ul-container'>
                  <li className="cart-button-item">
                    <button className='add-to-cart-btn'>
                      <svg className="NwyjNT" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" 
                          fill="#fff"
                        ></path>
                      </svg>
                      ADD TO CART
                    </button>
                  </li>
                  <li className="buy-button-item">
                    <button className='buy-now-btn'>
                      <span></span>
                      BUY NOW
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="product-details-page-right-conatainer">
            <div className="page-route-names-container">
              <div>
              <div className="route-one">
                Home
                <svg width="16" height="27" viewBox="0 0 16 27" style={{width:'20px',height:'7px',transform:'rotate(180deg)', verticalAlign: 'middle'}} xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787"  class="wMLTcO"></path></svg>
              </div>
               <div className="route-one">
                Watches
                <svg width="16" height="27" viewBox="0 0 16 27" style={{width:'20px',height:'7px',transform:'rotate(180deg)', verticalAlign: 'middle'}} xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787"  class="wMLTcO"></path></svg>
              </div>
               <div className="route-one">
              {product.description}
                <svg width="16" height="27" viewBox="0 0 16 27" style={{width:'20px',height:'7px',transform:'rotate(180deg)', verticalAlign: 'middle'}} xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787"  class="wMLTcO"></path></svg>
              </div>
              </div>
              <div className="share-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" style={{width:'20px',height:'12px'}} class="jWKn+i"><path d="M14.78 5.883L9.032 0v3.362C3.284 4.202.822 8.404 0 12.606 2.053 9.666 4.927 8.32 9.032 8.32v3.446l5.748-5.883z" class="g9gS7K" fill="#878787" fill-rule="evenodd"></path></svg>
           <span> Share</span>
            </div>
            </div>
            <div className="product-title-container">
              <div>
                <span className="title-brand-name">
                  {product.name}
                </span>
                 <span className='brand-name-desc'>
                 {product.description}
                 </span>
              </div>
            <div className="price-container-de">
              <div>
                <div className="offer-price-container">
                   {product.offerPrice} 
                </div>
                <div className="original-price-container">
                {product.originalPrice}
                </div>
               
              </div>
               <div className="price-details-container">
                  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" ><defs><circle id="b" cx="8" cy="8" r="8"/><filter id="a" width="130%" height="130%" x="-15%" y="-8.8%" filterUnits="objectBoundingBox"><feMorphology in="SourceAlpha" operator="dilate" radius=".4" result="shadowSpreadOuter1"/><feOffset dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/></filter></defs><g fill="none" fillRule="evenodd"><g transform="translate(2 1)"><use fill="#000" filter="url(#a)" xlinkHref="#b"/><use fill="#FCFCFC" stroke="#000" strokeOpacity=".3" strokeWidth=".8" xlinkHref="#b"/></g><text fill="#1D1D1D" fontFamily="Roboto-Medium, Roboto" fontSize="11" fontWeight="400" opacity=".59" transform="translate(2 1)"><tspan x="6.6" y="12.2">i</tspan></text></g></svg>
                </div>
            </div>
            <div className="rating-container-de">
              <div style={{cursor:'pointer',display:'inline-block'}}>
                    <div className="rating-container-inner">
                      <div className="rating-text-container">
                        {product.rating}
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" alt="" style={{height:'12px',margin:'2px 0 0 2px'}} />
                      </div>
                      <div className="ratings-review-container">
                        2,258 ratings and 160 reviews
                      </div>
                      <div className="rating-assured-container">
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" alt=""  style={{marginTop:'-4px',height:'18px',verticalAlign:'middle'}}/>
                      </div>
                    </div>
              </div>
            </div>

            </div>
            <div className="des-offer-containers">
              <div className="avaliable-offer-dcontainer">
                Available offers
              </div>
              <span className="bank-offer-dcontainer">
                <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" style={{marginRight:'10px', width:'18px',height:'18px'}} alt="" />
               <li>
                <span className="bank-offer-text-des">Bank Offer</span>
                <span className='bank-offer-descr'>10% off up to ₹1,500 on BOBCARD EMI Transactions,  Min Txn Value: ₹5,000</span>
                <span className='tc-container'>T&C</span>
               </li>
                
              </span>
               <span className="bank-offer-dcontainer">
               <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" style={{marginRight:'10px', width:'18px',height:'18px'}} alt="" />

               <li>
                <span className="bank-offer-text-des">Bank Offer</span>
                <span className='bank-offer-descr'>10% off up to ₹1,500 on HSBC Credit Card EMI Transactions,  Min Txn Value: ₹4,990</span>
                <span className='tc-container'>T&C</span>
               </li>
                
              </span>
                 <span className="bank-offer-dcontainer">
                 <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" style={{marginRight:'10px', width:'18px',height:'18px'}} alt="" />

               <li>
                <span className="bank-offer-text-des">Bank Offer</span>
                <span className='bank-offer-descr'>5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter</span>
                <span className='tc-container'>T&C</span>
               </li>
                
              </span>
                <span className="bank-offer-dcontainer">
                <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" style={{marginRight:'10px',width:'18px',height:'18px'}} alt="" />
               <li>
                <span className="bank-offer-text-des"><strong>No cost EMI ₹3,065/month</strong></span>
                <span className='bank-offer-descr'>. Standard EMI also available</span>
                <span className='tc-container' style={{marginRight:'4px'}}>View Plans
                  
                </span>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPjEwMzc0NDBFLTZGNDYtNDc5MS1CRkUxLTczQzczMEI2RTU0NTwvdGl0bGU+PHBhdGggZD0iTTEuMiAxTDQgNSAxIDkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSIjMDI3Q0Q1IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==" alt=""style={{ width:'6px',height:'9px'}}/>
               </li>
                
              </span>
              <div className='more-offer-dcontainer'>
                    <span className='more-offer-text-dcontainer'>+4 more offers</span>
              </div>
            </div>
            <div className="warranty-container">
              <div className="watch-logo-container">
                <div className="watch-logo-inner-con">
                  <img src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/ba995d26e20aaf9eada7e40379c0505b2c99ec6f6ee321e80aa2df5b6c248f07.jpg?q=90" className='casio-logo'  alt="" />
                </div>
              </div>
              <div className="warranty-desc-container">
                2 Years All India Manufacturer Warranty
                <span className="tc-container">
                  Know More
                </span>
      
              </div>
            </div>
            <div className="desk-delivery-address-container">
              <div className="desk-delivery-address-left-container">
                      <div className="desk-location-container">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==" alt="" style={{height:'18px',width:'18px',marginBottom:'-4px'}} />
                        <span style={{marginLeft:'8px',fontWeight:'500',color:'#878787' ,whiteSpace:'nowrap'}}>Deliver to</span>

                      </div>
                      <div className="pincode-container">
                        <input type="text" placeholder='Enter delivery pincode' />
                        <span>Check</span>
                      </div>
              
              <div className="delivery-date-time-container">
                <div className="delivery-date-time-top-container">
                  <div>Delivery by <span style={{marginLeft:'4px'}}>6 Nov, Thursday</span> <span style={{width:'16px',height:'16px',fontSize:'11px',fontWeight:'500',margin:'0 2px 0 8px'}}>?</span></div>
                  <div style={{marginBottom:'8px',fontWeight:400,fontSize:'12px'}}>if ordered before 12:33 PM</div>
                  <div className='v-details-container'>View Details</div>
                </div>
               </div>
              
               </div>
               <div className="desk-delivery-address-right-container">
                <div className="desk-delivery-address-right-inner-container">
                  <div className='service-container-text'>Services</div>
                  <ul style={{marginLeft:'110px'}}>
                    <li className='two-year-wra-container'>
                      <div className="blue-tick-container">

                      </div>
                      <div className="two-year-wra-text">
                        2 Years All India Manufacturer Warranty
                      </div>
                    </li>
                     <li className='two-year-wra-container'>
                      <div className="blue-tick-container">

                      </div>
                      <div className="two-year-wra-text">
                        2 Years All India Manufacturer Warranty
                      </div>
                    </li>
                  </ul>
                </div>
               </div>
               
            </div>
            

          </div>
          </div>
      </div>
    </div>
   
    <ProductDetail></ProductDetail>
    </>
  )
}

export default ProductDesktopDetails