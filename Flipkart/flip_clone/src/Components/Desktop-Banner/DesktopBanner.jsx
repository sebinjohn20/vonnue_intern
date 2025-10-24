import React, { useEffect, useState } from 'react'
import './DesktopBanner.css'

function DesktopBanner() {
    const banners = [
        "https://rukminim2.flixcart.com/fk-p-flap/2020/340/image/314c293b594f97f6.jpg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/2020/340/image/303d6d8f313d3386.jpg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/2020/340/image/3f893004a60d1fbf.jpeg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/2020/340/image/684385d69537e9fc.jpg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/2020/340/image/7acd6b6cdf1fe169.jpeg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/2020/340/image/314c293b594f97f6.jpg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/2020/340/image/303d6d8f313d3386.jpg?q=60",
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
   const [isTransitioning, setIsTransitioning] = useState(false)


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev === banners.length - 1 ? 0 : prev + 1))
        }, 3000)
        return () => clearInterval(timer)
    }, [banners.length])
    const handlePrev=()=>{
       if (isTransitioning) return
        setIsTransitioning(true)
        setCurrentIndex(prev => prev === 0 ? banners.length - 1 : prev - 1)
        setTimeout(() => setIsTransitioning(false), 1000)
    }
     const handleNext=()=>{
          if (isTransitioning) return
        setIsTransitioning(true)
        setCurrentIndex(prev => prev === banners.length - 1 ? 0 : prev + 1)
        setTimeout(() => setIsTransitioning(false), 1000)
    }

    return (
        <div className="desktop-banner-container">
            <div className="desktop-banner-inner-container">
                <div className="desktop-banner-carousel-wrapper">
                    <div 
                        className="desktop-banner-carousel-track"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {banners.map((img, index) => (
                            <div className="desktop-banner-slide" key={index}>
                                <div className="desktop-banner-image-container">
                                    <img src={img} alt={`Banner ${index + 1}`} className='desktop-banner-logo'/>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className='silder-left-side-btn' onClick={handlePrev}>
                        <span className='silder-arrow'></span>
                    </button>
                     <button className='silder-right-side-btn' onClick={handleNext}>
                        <span className='silder-arrow-right'></span>
                    </button>
                </div>
                <div className="desktop-banner-silder-bar-container">
                    {banners.map((_, index) => (
                        <div 
                            key={index} 
                            className={`with-bar ${index === currentIndex ? "active" : ""}`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DesktopBanner