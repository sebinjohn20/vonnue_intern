import React, { useEffect, useState } from 'react';
import "../../Fonts/font.css";
import './Footer.css';

function Footer() {
  const [footerProducts, setFooterProducts] = useState([]);

  useEffect(() => {
    fetch("/footerData.json")
      .then((res) => res.json())
      .then((data) => {
        setFooterProducts(data.footerSections || []); // ✅ match JSON key
      })
      .catch((err) => console.error("Failed to fetch footer data:", err));
  }, []); // ✅ prevent infinite fetch loop

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-heading">
          Top Stories : <span>Brand Directory</span>
        </div>

        {footerProducts.map((section, index) => (
          <div className="footer-first-section" key={index}>
            <span className="footer-first-section-heading">
              {section.title} :
            </span>
            {section.items.map((item, i) => (
              <span className="first-section-content" key={i}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-container-two">
         <div className="footer-settion-two-heading">
  <div>
  <h1>Flipkart: India's Ultimate One-Stop Online Shopping Destination</h1>
  Welcome to Flipkart, India's trusted and beloved e-commerce platform, revolutionising online shopping since 2007. With over 200 million users, 150 million+ products across 80+ categories, and a relentless focus on customer satisfaction, Flipkart isn't just an online store; it's your digital shopping companion. Be it the Flipkart app or the comprehensive Flipkart website, discover an unmatched universe of products, incredible Flipkart offers, blockbuster Flipkart sale events, and seamless service. From the latest gadgets to daily groceries, fashion must-haves to furniture solutions, Flipkart is your definitive destination for e-commerce in India, offering convenience, value, and reliability at every click. Experience the joy of buying online with India's homegrown leader!
  <br/><br/>
  <h2>What Can You Buy from Flipkart?</h2>
  Flipkart's strength lies in its incredible diversity. With offerings for every need, aspiration, and budget, you can dive into the meticulously curated categories for your needs:
  <br/><br/>
  <strong>Mobile and Electronics</strong>: Flipkart has a wide range of mobiles with advanced features and the latest technology. As a leading e-commerce platform, we offer all the latest models from top brands. Explore the newest flagships from Samsung, Apple, OnePlus, Xiaomi, Vivo, Oppo, and more. Find budget-friendly <span>smartphones</span>, 5G powerhouses, gaming phones, and refurbished options. Additionally, Flipkart Complete Mobile Protection offers comprehensive coverage for post-purchase issues, including door-to-door services. Complement your device with extensive accessories: durable <span>back covers</span>, screen protectors, fast chargers, power banks, wireless <span>earbuds</span>, <span>smartwatches</span>, <span>fitness bands</span>, and VR headsets.
  <br/><br/>
  Check out different types of laptops to power your work, creativity, and entertainment. Shop a vast range of <span>laptops</span> like ultraportables, <span>gaming laptops</span>, business notebooks, Chromebooks, and all-in-one PCs. Our Back To College Store segregates laptops purpose-wise with recommendations from top brands and industry experts. You can also find a wide selection of tablets, <span>bluetooth speakers</span>, and <span>headphones</span> from top brands. In addition, explore <span>digital cameras</span>, smart home devices, printers, security cameras, powerful desktops and monitors to serve every purpose.
  <br/><br/>
  <strong>Home and Kitchen Appliances</strong>: Upgrade your home and kitchen appliances to make your days more comfortable and convenient. Discover stunning Smart TVs, <span>home theatre systems</span>, soundbars, and streaming devices. Invest in essential large appliances: energy-efficient <span>refrigerators</span>, <span>washing machines</span>, <span>air conditioners</span>, microwaves, <span>water purifiers</span>, air coolers, and geysers from trusted brands like LG, Samsung, Whirlpool, Godrej, and Voltas. Benefit from installation services and extended warranties. Flipkart has a massive collection of all the latest and trending range of these products. You can shop for your favourites among them at affordable prices. Additionally, our Dependable TV and Appliance Store ensures zero transit damage, with a replacement guarantee if anything goes wrong.
  <br/><br/>
  Make daily chores effortless and enjoyable with modern kitchen appliances. Equip your kitchen with microwaves, <span>mixer-grinders</span>, air fryers, OTGs, <span>electric kettles</span>, induction cooktops, rice cookers, <span>coffee makers</span>, blenders, and sandwich makers. Keep your home spotless with robotic vacuum cleaners, handheld vacuums, steam mops, <span>irons</span>, and garment care. Enhance comfort with heaters, fans, and humidifiers. With the increase in pollution, make your home clean and hygienic with <span>air purifiers</span>.
  <br/><br/>
  <strong>Fashion and Beauty</strong>: Flipkart, India ka Fashion Capital, is your one-stop destination for anything and everything you need to look good. Express your unique style. Explore an enormous collection of clothing for men, women, and kids. You can choose from ethnic wear, western wear, activewear, nightwear, and innerwear. You can find footwear for every occasion and accessorise your outfits with <span>Handbags</span>, <span>watches</span>, <span>sunglasses</span>, belts, and jewellery.
  <br/><br/>
  Beauty and grooming products for everyone are available on Flipkart. Choose from a comprehensive range of skincare, <span>makeup</span>, <span>haircare</span>, <span>fragrances</span>, men's grooming, salon-style tools, and personal care essentials. You can choose offerings from top Indian and international brand.
  <br/><br/>
  <strong>Home and Furniture</strong>: Upgrade the decor and functionality of your home with various items for home decor, options for <span>home lighting</span>, and equipment for home improvement. Furnish all the rooms in your home with exquisite offerings available for living rooms, bedrooms, dining rooms, study, and outdoor spaces. Explore modern <span>home decor</span> options like curtains, cushions, rugs, lamps, clocks, wall art, mirrors, photo frames, and decorative items.
  <br/><br/>
  Add comfort and style to your rooms with several furniture of different designs and materials. You can find space-saving solutions and <span>modular furniture</span>. Check out <span>sofa sets</span>, <span>bedsets</span>, <span>mattresses</span>, <span>cupboards</span> for your bedroom, living room, and office spaces. Our Durability Certified Furniture Store has not only curated a range of furniture keeping in mind the modern Indian consumer but also furniture that comes with a lab certification, ensuring they last you for up to 10 years. Moreover, all our furniture has gone through 35 stability and load tests, so that you receive only the best-quality furniture. Be FurniSure, always.
  <br/><br/>
  <strong>Daily Essentials</strong>: Order <span>household supplies</span> like detergents, dishwash, cleaners, tissues, and toilet paper. Stock up on health and hygiene products (sanitizers, masks, vitamins, first-aid). Find pet food and supplies. Discover organic and sustainable options. Explore a variety of baby care needs on Flipkart. Find everything from <span>diapers</span>, wipes, baby food, and feeding bottles to strollers, car seats, cribs, high chairs, baby monitors, and bath essentials. Discover a world of <span>toys</span> (educational, soft, ride-ons), kids' apparel, footwear, school supplies, and maternity care products. Furthermore, browse through bestseller books, including fiction, non-fiction, academic texts, competitive exam guides, and children's books.
  <br/><br/>
  <strong>Sports Equipment and Two Wheelers</strong>: You can explore a wide range of <span>scooters</span>, <span>motorcycles</span>, and <span>electric vehicles</span> (EVs) from leading manufacturers like Hero, Honda, TVS, Bajaj, Ola, Ather, and more. Access detailed specifications, compare models, check on-road prices, and explore financing options conveniently. You can also gear up for sports with equipment for cricket, football, badminton, tennis, <span>cycling</span>, fitness, and gym wear. You can also find video games (consoles, titles, accessories), board games, puzzles, and <span>musical instruments</span>
  <br/><br/>
  <strong>Gift Cards</strong>: Flipkart <span>Gift Cards</span> and e-Gift Vouchers offer unparalleled flexibility, allowing recipients to choose exactly what they desire from Flipkart's vast catalog. Different types of gift cards are available for every occasion: birthdays, anniversaries, weddings, festivals, corporate gifting, and more. Check out digital, personalised, physical, and corporate gift cards. You can also find multi-brand gift cards to shop across popular stores and services. These cards are available in various denominations, instantly delivered via email or SMS.
  <br/><br/>
  <h2>Flipkart Loyalty and Rewards Program</h2>
  Elevate your Flipkart shopping experience and earn rewarding benefits with multiple programs provided by us.
  <br/><br/>
  <strong>Earn SuperCoins</strong>: Get your hands on exciting deals and rewards with the Flipkart SuperCoin program. It is a Flipkart loyalty program that offers reward points in the form of SuperCoins every time you shop. Think of them as digital rewards currency. (e.g., ₹100 spent = 2 SuperCoin). Flipkart Plus members can earn up to 25 coins with every purchase. You can use your accumulated <span>SuperCoins</span> like cash during checkout. With cashback offers offering you 1 SuperCoin for every rupee spent, you earn as you spend. You can redeem them when you check out products on Flipkart, SuperCoin Zone for offers and gift cards, subscriptions to access OTT platforms, music services, or Flipkart Plus services. You can redeem supercoins to get additional offers and discounts at Flipkart's partner brands and services.
  <br/><br/>
  <strong>Flipkart Plus</strong>: Activate your <span>Flipkart Plus</span> membership to multiply the rewards you earn from shopping online. A Flipkart Plus membership allows you to earn more SuperCoins as well as get access to many more exclusive deals and offers before anyone else. Additionally, you also get priority assistance and an assured enrollment in the Flipkart Pay Later program. If you shop 10 times a year, you become a Plus Silver member. Then, you can get a 12% instant discount during early sale access. If you shop 20 times a year, you become a Plus Gold member and get a 15% early access discount during sale.
  <br/><br/>
  <strong>Flipkart Black:</strong> Flipkart Black membership is a new subscription plan that offers a combination of shopping benefits, entertainment access, and travel offers. This membership ensures customer convenience. Members will also get a free YouTube Premium subscription, exclusive deals, and travel perks. Additionally, they will receive 5% SuperCoins cashback on purchases made through Flipkart and Flipkart minutes. Other benefits include priority customer service, early access to sales, and exclusive offers on premium electronics.
  <br/><br/>
  <h2>Payment and Affordability: Shop Smart, Pay Smarter</h2>
  Flipkart understands that affordability is key. You can choose from a suite of payment and financing options which includes options like:
  <br/><br/>
  1. No Cost EMI: You can split the cost of your purchase into easy monthly instalments without paying any extra interest. No Cost EMI is applicable on select mobiles, laptops, large and small appliances, furniture, electronics, and watches. Terms and conditions apply.
  <br/>
  2. EMI on Debit Cards:You can choose to convert large purchases into manageable monthly payments directly debited from your bank account. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India, and ICICI Bank for this facility.
  <br/>
  3. UPI, Pay Later, and Flexible Payments: Enjoy ultimate payment flexibility with options like UPI, Pay Later, Credit/Debit Cards, Net Banking.
  <br/><br/>
  <h2>Flipkart Flights: Book Your Next Getaway Effortlessly</h2>
  Beyond products, Flipkart simplifies your travel planning! <span>Flipkart Flights</span> offers a powerful platform to search, compare, and book domestic flights across India at the most competitive prices. You can search for the flights you want and compare prices across multiple airlines, dates, and routes. Look for the Top Deals section to explore several flight offers. You can also use the Travel Checklist category to proceed with the web check-in process. Do not forget to check the 'Your Safety Is Important To Us' section to know more about the safety guidelines. Check out the Best Deals section to save money while booking. You can use SuperCoins or opt for the EMI option to book tickets.
  <br/><br/>
  <h2>Flipkart Minutes: Groceries and Gadgets in a Flash</h2>
  Experience the future of hyperlocal convenience with <span>Flipkart Minutes</span>. With this, you get:
  <br/><br/>
  <strong>Hyperlocal Delivery of Daily Essentials and Gadgets:</strong> Flipkart Minutes delivers a curated selection of high-demand grocery items, personal care products, and small electronics within minutes, not hours or days.
  <br/>
  <strong>Fast Delivery via Dark Stores and Local Fulfillment</strong>: These 'dark stores' are micro-fulfillment centers which are stocked with thousands of essential products and are optimized for picking and packing efficiency.
  <br/>
  <strong>Availability in Select Cities:</strong> Currently transforming convenience in major metropolitan areas and rapidly expanding to more cities, you can check the Flipkart app to see if Minutes is available at your location.
  <br/><br/>
  <h2>Flipkart Reset and Exchange Program: Trade-in Your Old Device</h2>
  Flipkart Reset offers you the opportunity to sell your old phone at the best price. You can also get an extra 4% value on your phone if you choose Flipkart Gift Card at checkout. Not only is this an effective way to <span>sell old phones</span> but it also helps reduce electronic waste that would be caused otherwise. Provide your phone details, set up an appointment with an executive, who will evaluate your phone at pickup and offer a final price. Money will be paid instantly.
  <br/><br/>
  Check out <span>Flipkart Exchange Store</span> to exchange your old electronic device for a new one on Flipkart. You can exchange laptops, phones, TVs, washing machines, mixers, refrigerators, tablets, and ACs. We take it even if the product does not work. It only takes a few simple steps. Find the product you want to buy, select the exchange option, provide details of the old product, and you will get an instant exchange discount on the new product.
  <br/><br/>
  <h2>Flipkart Kilos: Your Online Grocery Supermarket</h2>
  Say goodbye to heavy bags and long queues. <span>Flipkart Kilos</span> brings the supermarket to your doorstep. Find everything you need for your pantry and home. You can shop for Fresh Produce Fruits &amp; Vegetables, Staples, Beverages, Snacks, Frozen and Ready-to-Eat, Baby Care, Pet Food and Dairy Products at unbeatable prices. Our Supermart brings everyday essentials close to you. In addition, our 1 Rupee Store presents new products every day for a nominal price of 1 Rupee only. Terms and conditions apply.
  <br/><br/>
  <h2>Why Choose Flipkart? The Unbeatable Advantages</h2>
  1. India's Largest Selection: Millions of genuine products across every conceivable category.
  <br/>
  2. Unbeatable Value: Best prices guaranteed, amplified by frequent <span>Flipkart offers</span>, Flipkart sale mega-events, and coupon discounts.
  <br/>
  3. Seamless Shopping: Intuitive Flipkart website and award-winning Flipkart app for a smooth experience anytime, anywhere.
  <br/>
  4. Lightning-Fast and Reliable Delivery: From standard shipping to 10-minute deliveries and slot-based options, get what you want delivered to you quickly and reliably. Plus, easy 10-day returns.
  <br/>
  5. Trust &amp; Authenticity: 100% genuine products, secure payment gateways, and transparent policies.
  <br/>
  6. Customer First: Dedicated 24x7 customer support to resolve any queries.
  <br/>
  7. Innovation Leader: Constantly pioneering new services (like Minutes, Plus, Fintech) to enhance your experience.
  <br/>
  8. Your Partner in Life: From daily groceries to dream gadgets, festival shopping to furniture, we're here for every need.
  <br/><br/>
  Experience the Future of E-commerce Today! Download the Flipkart App or Visit Flipkart.com.
  <br/><br/>
  <h2>Get Exclusive Offers and Deals in Popular Sale Events</h2>
  Flipkart offers you the opportunity of getting the products of your choice with regular sales events that bring you some great offers and discounts. With major annual events like the Big Billion Days, End of Season Sale (EOSS), GOAT Sale, and more to choose from, you can plan your new purchases to make sure you get the best benefits and discounts. Additionally, you can also choose to shop during smaller but equally attractive monthly sales to get the products you want.
</div>
         </div>
      </div>
      <div className="footer-bottom-container">
        <div>
            <div className='about-container'>
                ABOUT
            </div>
            <span>Contact Us</span>
             <span>About Us</span>

            <span>Careers</span>
            <span>Flipkart Stories</span>
            <span>Press</span>
            <span>Corporate Information</span>
        </div>
         <div>
            <div className='about-container'>
                GROUP COMPANIES
            </div>
            <span>Myntra</span>
            <span>Cleartrip</span>
            <span>Shopsy</span>
        </div>
         <div>
          <div>
            <div className='about-container'>
                HELP            
                </div>
            <span>Payments</span>
            <span>Shipping</span>
          <span>Cancellation & Returns</span>
          <span>FAQ</span>
          </div>
            </div>
            <div className="consumer-container">
              <div className='about-container'>
              CONSUMER POLICY           
                </div>
            <span>Cancellation & Returns</span>
            <span>Terms Of Use</span>
          <span>Security</span>
          <span>Privacy</span>
          <span>Sitemap</span>
          <span>Grievance Redressal</span>
          <span>EPR Compliance</span>
            </div>
            <div className="consumer-container">
              <div className='about-container'>
                Mail Us:         
                </div>
                <div className="fipkart-address">
            <p>Flipkart Internet Private Limited, </p>
            <p> Buildings Alyssa, Begonia & </p>
            <p> Clove Embassy Tech Village, </p>
           <p> Outer Ring Road, Devarabeesanahalli Village, </p>
          <p> Bengaluru, 560103, </p>
          <p> Karnataka, India</p>
          </div>
          <div className="social-text">
            Social:
          </div>
          <div className="social-media-container">
            <div className='social-media-img'>
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjkzMzEgMjFDMTcuOTAzNyAyMSAyMS45MzMxIDE2Ljk3MDYgMjEuOTMzMSAxMkMyMS45MzMxIDcuMDI5NDQgMTcuOTAzNyAzIDEyLjkzMzEgM0M3Ljk2MjU0IDMgMy45MzMxMSA3LjAyOTQ0IDMuOTMzMTEgMTJDMy45MzMxMSAxNi45NzA2IDcuOTYyNTQgMjEgMTIuOTMzMSAyMVoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE2LjY4MzEgOC4yNUgxNS4xODMxQzE0LjU4NjQgOC4yNSAxNC4wMTQxIDguNDg3MDUgMTMuNTkyMSA4LjkwOTAxQzEzLjE3MDIgOS4zMzA5NyAxMi45MzMxIDkuOTAzMjYgMTIuOTMzMSAxMC41VjIxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjkzMzExIDEzLjVIMTUuOTMzMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" alt="Facebook" width="24" height="24"></img>
            </div>
             <div className='social-media-img'>
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4M18yMCkiPgo8cGF0aCBkPSJNMTMuNTQzNiAxMC42MTc5TDIwLjA5NzEgM0gxOC41NDQxTDEyLjg1MzcgOS42MTQ0OEw4LjMwODg3IDNIMy4wNjY4OUw5LjkzOTY0IDEzLjAwMjNMMy4wNjY4OSAyMC45OTA4SDQuNjE5OTRMMTAuNjI5MSAxNC4wMDU2TDE1LjQyODggMjAuOTkwOEgyMC42NzA4TDEzLjU0MzIgMTAuNjE3OUgxMy41NDM2Wk0xMS40MTY1IDEzLjA5MDRMMTAuNzIwMiAxMi4wOTQ0TDUuMTc5NTMgNC4xNjkxMUg3LjU2NDkxTDEyLjAzNjMgMTAuNTY1MUwxMi43MzI2IDExLjU2MTFMMTguNTQ0OCAxOS44NzQ4SDE2LjE1OTVMMTEuNDE2NSAxMy4wOTA4VjEzLjA5MDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4M18yMCI+CjxyZWN0IHg9IjMuMDY2ODkiIHk9IjMiIHdpZHRoPSIxNy42MDM5IiBoZWlnaHQ9IjE4IiByeD0iMC4yIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=" alt="Twitter" width="24" height="24"></img>
            </div>
             <div className='social-media-img'>
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/YoutubeLogo-8425c4.svg" alt="YouTube" width="24" height="24"></img>
            </div>

          <div className='social-media-img'>
               <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/InstagramLogo-43f906.svg" alt="Instagram" width="20" height="20"></img>

              </div>
          </div>
            </div>
        <div className="Registered-office-conatainer">
          <div className="registered-tittle">
            Registered Office Address:
          </div>
          <div>
            <p>Flipkart Internet Private Limited, </p>
            <p> Buildings Alyssa, Begonia & </p>
            <p> Clove Embassy Tech Village, </p>
            <p> Outer Ring Road, Devarabeesanahalli Village, </p>
            <p> Bengaluru, 560103, </p>
            <p> Karnataka, India</p>
            <p> CIN : U51109KA2012PTC066107 </p>
            <p> Telephone: <span>044-45614700</span> /

            <span> 044-67415800</span></p>
      
          </div>
        </div>
      </div>
      <div className="footer-final-container">
        <div className="become-seller-container">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg" alt="Become a Seller" width="13" height="12"></img>
          <span>Become a Seller</span>
        </div>
         <div className="become-seller-container">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg" alt="Advertise" width="14" height="14"></img>
          <span>Advertise</span>
        </div>
         <div className="become-seller-container">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg" alt="Gift Cards" width="13" height="13"></img>
          <span>Gift Cards</span>
        </div>
          <div className="become-seller-container">
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg" alt="Help Center" width="13" height="13"></img>
          <span>Help Center</span>
        </div>
        <span className='footer-email'>© 2007-2025 Flipkart.com</span>
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="Payment methods"></img>
      </div>
    </footer>
  );
}

export default Footer;
