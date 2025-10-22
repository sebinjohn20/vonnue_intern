import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const[selectedDiscounts,setSelectedDiscounts]=useState([])
  const[selectedRatings, setSelectedRatings]=useState([])
 const[selectedSort, setSelectedSort]=useState("Popularity")
  const updateBrandFilter = (brand) =>
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );

  const updatePriceFilter = (priceRange) =>
    setSelectedPrices((prev) =>
      prev.includes(priceRange)
        ? prev.filter((p) => p !== priceRange)
        : [...prev, priceRange]
    );
    const updateDiscountFilter=(discountRange)=>{
        setSelectedDiscounts((prev)=>
            prev.includes(discountRange)
        ?prev.filter(d=>d!==discountRange)
        :[...prev,discountRange]
        )
    }
    const updateRatingFilter=(ratingRange)=>{
        setSelectedRatings((prev)=>
        prev.includes(ratingRange)
        ?prev.filter(r=>r!==ratingRange)
        :[...prev,ratingRange]
    
    )
    }


    const updateSort=(sortOption)=>{
      setSelectedSort(sortOption);
    };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedPrices([]);
    setSelectedDiscounts([]);
    setSelectedRatings([]);
  };

  const value = {
    selectedBrands,
    selectedPrices,
    selectedDiscounts,
    selectedRatings,
    selectedSort,
    updateBrandFilter,
    updatePriceFilter,
    updateDiscountFilter,
    updateRatingFilter,
    updateSort,
    clearFilters
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};
