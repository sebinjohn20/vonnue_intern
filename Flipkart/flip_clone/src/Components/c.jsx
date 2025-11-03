  <div className="selectedfilter-container">
  <div className="selectedfilter-container-inner">
    
    {selectedBrands.map((brand) => (
      <div className="selectedfilter-single-element" key={`brand-${brand}`}>
        <div 
          className="remove-filter"
          onClick={() => updateBrandFilter(brand)}
        >
         
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