import React, { useEffect, useState } from "react";
import "./Products.css"; // your CSS

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <div className="large-card">
      <div className="card-container">
        {products.map((product) => (
          <div key={product.id} className="product-card-container">
            <div className="product-image-container">
              <div className="product-image-bg"></div>
              <div className="watch-image-con">
                <img
                  src={product.image}
                  className="product-watch-image"
                  alt={product.name}
                />
                <div className="ad-icon-container">AD</div>
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
                <div className="offer-price-cutoff">{product.offerPrice}</div>
                <div className="original-price">{product.originalPrice}</div>
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
