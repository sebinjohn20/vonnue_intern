import React, { useState, useEffect } from "react";
import "./Banner.css";

function Banner() {
  const banners = [
    "https://rukminim2.flixcart.com/fk-p-flap/960/460/image/6f1cd1ac45d63912.jpeg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/960/460/image/f34037cb3614110d.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/960/460/image/14d54d801acaea7a.jpeg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/960/460/image/ec6bada343d545db.jpeg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/960/460/image/e3d79eb3e3bcc4f4.jpeg?q=60",
     "https://rukminim2.flixcart.com/fk-p-flap/960/460/image/6f1cd1ac45d63912.jpeg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/960/460/image/f34037cb3614110d.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/960/460/image/14d54d801acaea7a.jpeg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/960/460/image/ec6bada343d545db.jpeg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/960/460/image/e3d79eb3e3bcc4f4.jpeg?q=60",
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="media-margin-banner">
    <div className="banner-container">
      <div
        className="banner-container-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((img, index) => (
          <div className="banner-inner-one" key={index}>
            <div className="banner-inner-two">
              <img className="banner-image" src={img} alt={`banner-${index}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="silder-widthbar-container">
        {banners.map((_,index)=>(
        <div key={index}
      className={`width-bar ${index === currentIndex ? "active" : ""}`}>

        </div>
        ))}

      </div>
      
    </div>
    </div>
  );
}

export default Banner;
