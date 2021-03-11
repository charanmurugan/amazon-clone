import React from "react";
import "../styles/Home.css";
import Product from "./Product";
import "react-alice-carousel/lib/alice-carousel.css";
// import Slider from "./Slider";

function Home() {
  function numberFormat(num) {
    return num.toLocaleString("en", { useGrouping: true });
  }
  let uniqid = require("uniqid");

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            key={uniqid()}
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={numberFormat(150)}
            image="https://m.media-amazon.com/images/I/41Q419CMtfL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            key={uniqid()}
            id="49538094"
            title="Kenwood KMX750RD stand mixer gives you a perfect baking and cooking experience ."
            price={numberFormat(49500)}
            image="https://m.media-amazon.com/images/I/51ae8jtSakL._AC_UY218_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            key={uniqid()}
            id="4903850"
            title="OPPO F17 Pro (Matte Black, 8GB RAM, 128GB Storage) With No Cost EMI/Additional Exchange Offers"
            price={numberFormat(21500)}
            image="https://m.media-amazon.com/images/I/71cLxfNqyFL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            key={uniqid()}
            id="23445930"
            title="All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Black)"
            price={numberFormat(3500)}
            image="https://m.media-amazon.com/images/I/61KIy6gX-CL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            key={uniqid()}
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 128GB) - Silver (4th Generation)"
            price={numberFormat(103400)}
            image="https://m.media-amazon.com/images/I/81sL+b9+CtL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            key={uniqid()}
            id="4903850"
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={numberFormat(153900)}
            image="https://m.media-amazon.com/images/I/81vlA84pg6L._AC_UY218_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
