// Sort function
  const sortProducts = (products, sortBy) => {
    const sortedProducts = [...products];
    
    switch(sortBy) {
      case "Popularity":
        // Sort by rating (assuming higher rating = more popular)
        return sortedProducts.sort((a, b) => b.rating - a.rating);
      
      case "Price -- Low to High":
        return sortedProducts.sort((a, b) => parsePrice(a.offerPrice) - parsePrice(b.offerPrice));
      
      case "Price -- High to Low":
        return sortedProducts.sort((a, b) => parsePrice(b.offerPrice) - parsePrice(a.offerPrice));
      
      case "Newest First":
        // Sort by ID (assuming higher ID = newer)
        return sortedProducts.sort((a, b) => b.id - a.id);
      
      case "Customer Rating":
        return sortedProducts.sort((a, b) => b.rating - a.rating);
      
      case "Discount":
        return sortedProducts.sort((a, b) => parseDiscount(b.offerPercentage) - parseDiscount(a.offerPercentage));
      
      default:
        return sortedProducts;
    }
  };