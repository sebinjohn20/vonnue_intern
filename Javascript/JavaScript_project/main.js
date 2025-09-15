 fetch("products.json")
    .then(res => res.json())
    .then(data => {
      const productList = document.getElementById("product-list");

      data.searchResults.forEach(item => {
        // li
        const li = document.createElement("li");
        li.classList.add("item",  "itemBorderRight");

        // ripple container
        const rippleDiv = document.createElement("div");
        rippleDiv.classList.add("ripple-containers");

        // picture & img
        const picture = document.createElement("picture");
        picture.classList.add("img-responsive");
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;
        picture.appendChild(img);

        rippleDiv.appendChild(picture);

        // rating-container
        if(item.rating.value!=="null" && item.rating.ratingCount!=="null"){
        const ratingDiv = document.createElement("div");
        ratingDiv.classList.add("rating-container");

        const ratingText = document.createElement("span");
        ratingText.classList.add("rating-text");
        ratingText.textContent = item.rating.value;

        const star = document.createElement("span");
        star.classList.add("icon-star", "excellent");

        const divider=document.createElement("span");
    
        divider.classList.add("icon-star", "excellent");
        let separator = document.createElement("span");
            separator.style.color = "rgb(148, 150, 159)";
            separator.textContent = "|";

        const ratingCount=document.createElement("span");
        ratingCount.classList.add("rating-count");
        ratingCount.textContent=item.rating.count;
        ratingDiv.append(ratingText, divider,separator,ratingCount);
        rippleDiv.appendChild(ratingDiv);
        }
        // ad-container (if ad true)
        if (item.ad) {
          const adDiv = document.createElement("div");
          adDiv.classList.add("ad-container");
          adDiv.textContent = "AD";
          rippleDiv.appendChild(adDiv);
        }

        // content-wrap
        const contentWrap = document.createElement("div");
        contentWrap.classList.add("content-wrap");

        const h3 = document.createElement("h3");
        h3.classList.add("product-tittle");
        h3.textContent = item.title;

        const h4 = document.createElement("h4");
        h4.classList.add("product-description");
        h4.textContent = item.description;

        // price-container
        const priceDiv = document.createElement("div");
        priceDiv.classList.add("price-container");

        const price = document.createElement("span");
        price.classList.add("price");
       price.innerHTML = `
            <svg width="17" height="17" viewBox="0 0 24 24" class="rupees" fill="#282C3F">
                <g fill="none" fill-rule="evenodd">
                <path d="M0 0h24v24H0z" opacity="0"></path>
                <path fill="#282C3F" d="M7 6.215h4.962v2.43H7.505L7.13 9.858h4.764a3.05 3.05 0 01-.827 1.539 2.99 2.99 0 01-2.022.895l-1.361-.003a.304.304 0 00-.214.519l6.717 6.779 1.697-.004-6.107-6.16a4.193 4.193 0 002.14-1.167 4.256 4.256 0 001.198-2.398h2.474l.376-1.215h-2.799v-2.43h3.496V5H7v1.215z"></path>
                </g>
            </svg>
            `;

        const current = document.createElement("span");
        current.classList.add("price-value");
        current.textContent = item.price.current;
if(item.price.original!=="null" && item.price.discoun!=="null"){


        const orig = document.createElement("span");
        orig.classList.add("orig-price");
        orig.innerHTML = `                                 
        <svg width="10" height="10" viewBox="0 0 9 10" class="strike-rupees"><g fill="#282C3F"><path d="M1.951 5.845l3.91 3.602-.902.376L.7 5.845l.452-.711c.186-.005.392-.02.615-.048a5.2 5.2 0 001.347-.356c.218-.09.42-.201.604-.331.185-.13.345-.281.479-.455.134-.173.231-.371.29-.594H.865v-.841h3.644a1.759 1.759 0 00-.284-.667 1.826 1.826 0 00-.567-.512 2.964 2.964 0 00-.865-.332A5.22 5.22 0 001.63.882H.864V0h6.2v.882H4.18c.173.077.33.174.468.29a2.09 2.09 0 01.612.848c.064.162.11.325.137.489h1.668v.84H5.383a2.38 2.38 0 01-.43 1.03 3.095 3.095 0 01-.8.748 4.076 4.076 0 01-1.043.482 6.15 6.15 0 01-1.159.236z"></path><path d="M0 6.104v-.792h8.14v.792z"></path></g></svg>
` + item.price.original;

        const disc = document.createElement("span");
        disc.classList.add("disc-percent");
disc.innerHTML = `<span> (${item.price.discount})</span>`;


        priceDiv.append( price,current, orig, disc);
}
else{
    priceDiv.append(price,current);
}


        // infotag
        const infoTag = document.createElement("div");
        infoTag.classList.add("infotag");

        // wishlist
        if (item.wishlist) {
          const wishDiv = document.createElement("div");
          wishDiv.classList.add("wishlist-icon-container");
          wishDiv.innerHTML=`<svg width="24" height="24" viewBox="0 0 24 24"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#3E4152"><path d="M8.1703,4.473425 C6.9537,4.473425 5.8134,4.946625 4.95975,5.805525 C4.10435,6.666175 3.63325,7.815575 3.63325,9.042675 C3.63325,10.269775 4.10435,11.419525 4.95975,12.280175 L12,19.362425 L19.0406,12.279825 C19.89565,11.419525 20.36675,10.270125 20.36675,9.042675 C20.36675,7.815575 19.89565,6.665825 19.0406,5.805875 C19.0406,5.805875 19.0406,5.805525 19.04025,5.805525 C18.1866,4.946625 17.0463,4.473425 15.8297,4.473425 C14.6138,4.473425 13.4742,4.946275 12.62055,5.804475 C12.29225,6.134525 11.70845,6.134875 11.3798,5.804475 C10.5258,4.946275 9.3862,4.473425 8.1703,4.473425 L8.1703,4.473425 Z M12.02835,21.276575 L11.972,21.276575 C11.6304,21.276575 11.2965,21.137625 11.05605,20.895075 L3.71865,13.513925 C2.53495,12.323225 1.88325,10.735275 1.88325,9.042675 C1.88325,7.350075 2.53495,5.762475 3.71865,4.571775 C4.9034,3.379675 6.48435,2.723425 8.1703,2.723425 C9.5759,2.723425 10.90905,3.179825 12,4.022625 C13.0913,3.179825 14.4241,2.723425 15.8297,2.723425 C17.516,2.723425 19.09695,3.379675 20.2817,4.572125 C21.46505,5.762475 22.11675,7.350075 22.11675,9.042675 C22.11675,10.735625 21.46505,12.323225 20.2817,13.513925 L12.94325,20.895775 C12.6993,21.141475 12.3745,21.276575 12.02835,21.276575 L12.02835,21.276575 Z"></path></g></g></svg>
`
          contentWrap.appendChild(wishDiv);
        }

        // assemble
        contentWrap.append(h3, h4, priceDiv, infoTag);
        rippleDiv.appendChild(contentWrap);
        li.appendChild(rippleDiv);

        productList.appendChild(li);
      });
    })
    .catch(err => console.error("Error loading JSON:", err));