const fs=require('fs')
const product=JSON.parse(fs.readFileSync('products.json','utf-8'))




// Get all products that are in stock.



// const instockProducts=product.filter(product=>product.inStock)
// console.log(instockProducts)




// Get the names of all products in the "Electronics" category.


// const ele=product.filter((product)=>product.category="Electronics")
// .map(product=>product.name)
// console.log(ele)


// Calculate the total value of all in-stock products (sum of their prices).


// const Instock=product.filter((product)=>product.inStock)
// .reduce((acc,sum)=>acc+sum.price,0)
// console.log(Instock)
// const uniqueCategories = product
//     .map(product => product.category)
//     .reduce((categories, category) => {
//         if(!categories.includes(category)){
//             categories.push(category)
//         }
//         return categories
//     }, []);

// console.log(uniqueCategories);
const highestRated = product.reduce((max, product) =>{
    if(max<product.price)
    {
        max=product.price
    }
    return max
}, 0);

console.log(highestRated);
// Example Output: Product object with highest rating


const productsByCategory = product.reduce((acc, product) => {

    if(acc[product.category]===undefined){
        acc[product.category]=[]
    }
    acc[product.category]=product.name
    return acc;
}, []);

console.log(productsByCategory);
