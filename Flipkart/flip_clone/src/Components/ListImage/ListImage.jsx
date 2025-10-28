import "../../Fonts/font.css";
import React from 'react'
import './ListImage.css'
import DesktopBanner from "../Desktop-Banner/DesktopBanner";
import { Link } from 'react-router-dom';


// Categories data array
const categories = [
  {
    name: "Minutes",
    image: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/3dbe4c89fbf0003d.png?q=100"
  },
  {
    name: "Mobiles & Tablets",
    image: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/cd6aca4f61e8ea95.png?q=100"
  },
  {
    name: "TVs & Appliances",
    image: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/9c64dfa667885ca9.png?q=100"
  },
  {
    name: "Electronics",
    image: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/4d6b13d5a0e0724a.png?q=100"
  },
  {
    name: "Fashion",
    image: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/ec2982e5564fe07c.png?q=100"
  },
  {
    name: "Home & Kitchen",
    image: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/febcb9896245caf4.png?q=100"
  },
  {
    name: "Beauty & toys",
    image: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/3d7144345bbcf2e4.png?q=100"
  },
  {
    name: "Furniture",
    image: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/cddd92e134ba3ea9.png?q=100"
  },
  {
    name: "Flight Bookings",
    image: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/d9eea6cd0e7b68bb.png?q=100"
  },
  {
    name: "Grocery",
    image: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/2ebb95ec20eae8f1.png?q=100"
  }
];

function ListImage() {
  return (
    <div className="list-image-container">
      <div className="list-image-grid-container">
        <div className="list-image-wrapper">
          <div className="list-image-body-container">
            <div className="list-image-scroll-container">
              {categories.map((category, index) => (
                 <Link to='/productlist' key={index}>
                <div  className="list-image-one">
                  <div className="list-image-one-container">
                    <div className="minutes-image-list-container">
                      <img 
                        className="minutes-logo" 
                        alt={category.name} 
                        src={category.image}
                      />
                    </div>
                    <div className="minutes-logo-text">
                      <span>{category.name}</span>
                    </div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
            <div className="list-image-bar-center">
               
            </div>
          </div>
        </div>
        <DesktopBanner></DesktopBanner>
      </div>
    </div>
  )
}

export default ListImage