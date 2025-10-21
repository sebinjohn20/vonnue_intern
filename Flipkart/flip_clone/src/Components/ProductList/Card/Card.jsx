import React, { useEffect, useState } from "react";
import "./Card.css"
import { useNavigate } from "react-router-dom";
import "../../../Fonts/font.css";
import { useFilter } from "../../Context/FilterContext";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const { selectedBrands, selectedPrices, selectedDiscounts, selectedRatings } = useFilter();

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  useEffect(() => {
    const filtered = products
      // Brand filter
      .filter(product =>
        selectedBrands.length === 0 || selectedBrands.includes(product.name)
      )
      // Price filter
      .filter(product =>
        selectedPrices.length === 0 || 
        selectedPrices.some(range => isPriceInRange(parsePrice(product.offerPrice), range))
      )
      // Discount filter - FIXED: Added length check
      .filter(product =>
        selectedDiscounts.length === 0 ||
        selectedDiscounts.some(range => isDiscountRange(parseDiscount(product.offerPercentage), range))
      )
      // Rating filter - ADDED: Implement rating filtering
      .filter(product =>
        selectedRatings.length === 0 ||
        selectedRatings.some(rating => isRatingInRange(product.rating, rating))
      );
      
    setFilteredProducts(filtered);   
  }, [selectedBrands, selectedPrices, selectedDiscounts, selectedRatings, products]);

  const parsePrice = priceStr => parseInt(priceStr.replace(/[₹,]/g, '')) || 0;
  
  const isPriceInRange = (price, range) => {
    switch (range) {
      case "Rs. 500 and Below": return price <= 500;
      case "Rs. 501 - Rs. 2000": return price >= 501 && price <= 2000;
      case "Rs. 2001 - Rs. 5000": return price >= 2001 && price <= 5000;
      case "Rs. 5001 - Rs. 10000": return price >= 5001 && price <= 10000;
      case "Rs. 10001 - Rs. 20000": return price >= 10001 && price <= 20000;
      case "Rs. 20001 and Above": return price >= 20001;
      default: return true;
    }
  };

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

  // ADDED: Rating filter function
  const isRatingInRange = (rating, range) => {
    switch(range) {
      case "4★ & above": return rating >= 4.0;
      case "3★ & above": return rating >= 3.0;
      case "2★ & above": return rating >= 2.0;
      case "1★ & above": return rating >= 1.0;
      default: return true;
    }
  };

  return (
    
    <div className="large-card">
      <div className="card-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card-container" onClick={() => navigate(`/product/${product.id}`)}>
            <div className="product-image-container">
              <div className="product-image-bg"></div>
              <div className="watch-image-con">
                <img
                  src={product.image}
                  className="product-watch-image"
                  alt={product.name}
                />
                {product.isAd && <div className="ad-icon-container">AD</div>}
               
                <div className="win-icon-container">
                  <img
                    src="https://rukminim2.flixcart.com/www/40/40/promos/30/06/2025/ca99011a-0436-4c4c-a3e6-3a5d6ef01f75.png?q=60"
                    className="heart-img"
                    alt="heart"
                  />
                </div>
                <div className="rating-container">
                  <div className="rating-container-body">
                    <div className="rating-container-left">{product.rating}</div>
                    <div className="star-container">
                      <img
                        src="https://rukminim2.flixcart.com/www/24/24/promos/15/12/2024/a72b6403-9a02-41f8-b683-a78d9f54a61e.png?q=60"
                        className="star-img"
                        alt="star"
                      />
                    </div>
                    <div className="rating-container-right">| {product.ratingCount}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-description-container">
              <div className="product-model-name">{product.name}</div>
              <div className="product-model-desc">
                <div className="product-model-desc-inner">{product.description}</div>
              </div>
              <div className="price-offer-container">
                <div className="offer-percentage-text">{product.offerPercentage}</div>
                <div className="offer-price-cutoff">{product.originalPrice}</div>
                <div className="original-price">{product.offerPrice}</div>
              </div>
              <div className="bank-offer-conatainer">
                <div className="wow-container">
                  <img
                    src="https://rukminim2.flixcart.com/www/76/32/promos/30/08/2023/59dc7885-72bf-4135-9099-025f074b0eb1.png?q=90"
                    className="wow-img"
                    alt="wow"
                  />
                </div>
                <div className="bank-offer-price">{product.bankOfferPrice}</div>
                <div className="with-bank-offer-text">with Bank offer</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;