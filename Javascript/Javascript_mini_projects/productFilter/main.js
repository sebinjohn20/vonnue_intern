let products={
    data:[
        {
        productName:"Smashic Sneakers For Men",
        category: "Shoes",
        price:"1400",
        image:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/u/f/d/8-394371-8-puma-white-matte-silver-original-imahcm88mg4aupwk.jpeg?q=70&crop=false"
        
    },
    {
        productName:"Apple Watch Series 10",
        category: "Watch",
        price:"30000",
        image:"https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/m/p/5/-original-imah4jndcdfv4rra.jpeg?q=70&crop=false"
        
    },
      {
        productName:"Apple iPhone 16 Pro ",
        category: "Mobile",
        price:"120000",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/h/m/-original-imah4jywmcz5ysz3.jpeg?q=70"
        
    },
       {
        productName:"Apple MacBook Air Apple M4 ",
        category: "Computer",
        price:"110000",
        image:"https://rukminim2.flixcart.com/image/832/832/xif0q/computer/m/3/7/-original-imahayjpgztvrfyj.jpeg?q=70&crop=false"
        
    },
      {
        productName:"Smashic Sneakers For Men",
        category: "Shoes",
        price:"1400",
        image:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/u/f/d/8-394371-8-puma-white-matte-silver-original-imahcm88mg4aupwk.jpeg?q=70&crop=false"
        
    },
    {
        productName:"Apple Watch Series 10",
        category: "Watch",
        price:"30000",
        image:"https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/m/p/5/-original-imah4jndcdfv4rra.jpeg?q=70&crop=false"
        
    },
      {
        productName:"Apple iPhone 16 Pro ",
        category: "Mobile",
        price:"120000",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/h/m/-original-imah4jywmcz5ysz3.jpeg?q=70"
        
    },
       {
        productName:"Apple MacBook Air Apple M4 ",
        category: "Computer",
        price:"110000",
        image:"https://rukminim2.flixcart.com/image/832/832/xif0q/computer/m/3/7/-original-imahayjpgztvrfyj.jpeg?q=70&crop=false"
        
    },
      {
        productName:"Smashic Sneakers For Men",
        category: "Shoes",
        price:"1400",
        image:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/u/f/d/8-394371-8-puma-white-matte-silver-original-imahcm88mg4aupwk.jpeg?q=70&crop=false"
        
    },
    {
        productName:"Apple Watch Series 10",
        category: "Watch",
        price:"30000",
        image:"https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/m/p/5/-original-imah4jndcdfv4rra.jpeg?q=70&crop=false"
        
    },
      {
        productName:"Apple iPhone 16 Pro ",
        category: "Mobile",
        price:"120000",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/h/m/-original-imah4jywmcz5ysz3.jpeg?q=70"
        
    },
       {
        productName:"Apple MacBook Air Apple M4 ",
        category: "Computer",
        price:"110000",
        image:"https://rukminim2.flixcart.com/image/832/832/xif0q/computer/m/3/7/-original-imahayjpgztvrfyj.jpeg?q=70&crop=false"
        
    }
]
}
for(let i of products.data){
    let card=document.createElement("div");
    card.classList.add("card","hide",i.category);
    let imageContainer=document.createElement("div");
    imageContainer.classList.add("image-container");
    let image=document.createElement("img")
    image.setAttribute("src",i.image);
    imageContainer.appendChild(image);
    card.appendChild(imageContainer);
    document.getElementById("products").appendChild(card);
        
    let container=document.createElement("div");
    container.classList.add("container")
    let name=document.createElement("h5")
    name.innerText=i.productName.toUpperCase()
    container.appendChild(name)
    card.appendChild(container)
    let price=document.createElement("h6")
    price.innerText= "₹"+ i.price

    container.appendChild(price)
}


// Filter the products
function filterProduct(value){
    let buttons=document.querySelectorAll(".button-value");
    buttons.forEach((button)=>{
        if(value.toUpperCase()===button.innerText.toUpperCase()){
            button.classList.add("active");

        }
        else{
            button.classList.remove('active');
        }
    });
    //Select all cards
    let elements=document.querySelectorAll(".card")
    elements.forEach((element)=>{
        if(value=="all"){
            element.classList.remove("hide");
        }
        else{
            //Check if elements contains category class
            if(element.classList.contains(value)){
                //disp;y elements based on catefory
                element.classList.remove("hide");

            }
            else{
                element.classList.add("hide")
            }

        }
    })
}

    document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".card h5"); // product names
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if (element.innerText.toUpperCase().includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    });
});