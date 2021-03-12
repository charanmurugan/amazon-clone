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
            title="Mi Notebook Horizon Edition 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop(8GB/512GB SSD/Windows 10/Nvidia MX350 2GB Graphics/Grey/1.35Kg), XMA1904-AR+Webcam"
            price={numberFormat(52999)}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRF7MFEaSqhQlUivC59ar5bUsvoVLtoPOJgibNxhJKiSfm-P4zhFTpCcgmp_MVuHf_HwHElY&usqp=CAc"
            rating={4}
          />
          <Product
            key={uniqid()}
            id="49538094"
            title="MI Full HD WiFi 1080p 360° Viewing Area with Intruder Alert, Night Vision, Two-Way Audio Inverted Installation Smart Security Camera (White)"
            price={numberFormat(2899)}
            image="https://m.media-amazon.com/images/I/61JM7nC4OKL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            key={uniqid()}
            id="4953809445"
            title="URBN 10000 mAh Li-Polymer Ultra Compact Power Bank with 12W Fast Charge (Blue)"
            price={numberFormat(749)}
            image="https://m.media-amazon.com/images/I/71tvr44i7LL._AC_UL320_.jpg"
            rating={4}
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
          <Product
            key={uniqid()}
            id="4903850459"
            title="New World PS5 Vertical Stand for Playstation 5 with Cooling Fan Cooling Stand Controller Charging Station for PS5 Digital Edition/Ultra HD Console with 14 Game Disc Rack Storage"
            price={numberFormat(3149)}
            image="https://m.media-amazon.com/images/I/61pGM06on2L._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            key={uniqid()}
            id="4903850098"
            title="Spigen Ultra Hybrid Back Cover Case Compatible with iPhone 12 | iPhone 12 pro - Matte Black"
            price={numberFormat(1599)}
            image="https://m.media-amazon.com/images/I/51+dwfoMdHL._AC_UL320_.jpg"
            rating={4}
          />
        </div>

        <img
          className="home_langImage1"
          src="data:image/jpeg;base64,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"
        />
        <div className="home__row">
          <Product
            key={uniqid()}
            id="49038598"
            title="CAVALLO by Linen Club White Solid Casual Regular Fit Shirts"
            price={numberFormat(1049)}
            image="https://images-na.ssl-images-amazon.com/images/I/61XhFKwerPL._UL1500_.jpg"
            rating={3}
          />
          <Product
            key={uniqid()}
            id="4903858767"
            title="CAVALLO by Linen Club Yellow Solid Casual Regular Fit Shirts"
            price={numberFormat(1119)}
            image="https://images-na.ssl-images-amazon.com/images/I/61F1WRSigqL._UL1500_.jpg"
            rating={5}
          />
          <Product
            key={uniqid()}
            id="4903858756"
            title="CAVALLO by Linen Club Yellow Solid Casual Regular Fit Shirts"
            price={numberFormat(487)}
            image="https://images-na.ssl-images-amazon.com/images/I/51KmjWBKi-L._UL1300_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            key={uniqid()}
            id="49038587095"
            title="Men's Slim Fit Stretchable Formal Trousers"
            price={numberFormat(699)}
            image="https://m.media-amazon.com/images/I/71AAsN7F77L._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            key={uniqid()}
            id="49038587565"
            title="Unisex Acrylic & Wool Beanie Cap with Scarf"
            price={numberFormat(549)}
            image="https://m.media-amazon.com/images/I/61fDpOCkDaL._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            key={uniqid()}
            id="49038587564"
            title="Men's Slim Fit Stretchable Formal Trousers"
            price={numberFormat(700)}
            image="https://m.media-amazon.com/images/I/81Lg1x1O29L._AC_UL320_.jpg"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            key={uniqid()}
            id="4903858709"
            title="Nilesh Women's Silk Saree With Blouse Pices(Nilesh CT101 Gajari)"
            price={numberFormat(1500)}
            image="https://images-na.ssl-images-amazon.com/images/I/91Bk8qGrozL._UL1500_.jpg"
            rating={3}
          />
          <Product
            key={uniqid()}
            id="4903858756"
            title="Yuyutsu Designer Printed Heavy Georgette saree Lace Border with Blouse Pices"
            price={numberFormat(1750)}
            image="https://images-na.ssl-images-amazon.com/images/I/817-luMHu%2BL._UL1500_.jpg"
            rating={3}
          />
          <Product
            key={uniqid()}
            id="4903858756"
            title="VAIVIDHYAM Designer Sarees Women's Banarasi Cotton Silk Saree With Blouse Piece"
            price={numberFormat(2000)}
            image="https://images-na.ssl-images-amazon.com/images/I/61B8o9UlqpL._UL1050_.jpg"
            rating={3}
          />
        </div>
        <img
          className="home_langImage1"
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
        />
        <div className="home__row">
          <Product
            key={uniqid()}
            id="49538094"
            title="Kenwood KMX750RD stand mixer gives you a perfect baking and cooking experience ."
            price={numberFormat(49500)}
            image="https://m.media-amazon.com/images/I/51ae8jtSakL._AC_UY218_.jpg"
            rating={3}
          />
          <Product
            key={uniqid()}
            id="490385875665"
            title="Cello Checkers Plastic PET Canister Set, 18 Pieces, Clear"
            price={numberFormat(499)}
            image="https://m.media-amazon.com/images/I/71AsCDQvKGL._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            key={uniqid()}
            id="4903858756212"
            title="Butterfly Jet Elite Mixer Grinder, 750W, 4 Jars (Grey)"
            price={numberFormat(3135)}
            image="https://m.media-amazon.com/images/I/81aALsqzUlL._AC_UL320_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            key={uniqid()}
            id="49038587097845"
            title="eCraftIndia Antique Music Decorative Canon Brass Showpiece (10 cm x 10 cm x 23.75 cm, Red and Brown)"
            price={numberFormat(329)}
            image="https://m.media-amazon.com/images/I/71XO0veg2JL._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            key={uniqid()}
            id="49038587566578"
            title="Global Grabbers Sitting Buddha Idol Statue Showpiece for Home Decoration and Gifting (Orange and Black)"
            price={numberFormat(498)}
            image="https://m.media-amazon.com/images/I/715ceYF6trL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            key={uniqid()}
            id="4903858756212789"
            title="KridayKraft Metal Gold Color Elephant for Decor Gift Items Home Office - 2 Pc"
            price={numberFormat(549)}
            image="https://m.media-amazon.com/images/I/81yinkPLkVL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
        <img
          className="home_langImage1"
          src="data:image/jpeg;base64,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"
        />
        <div className="home__row">
          <Product
            key={uniqid()}
            id="49038587097845245"
            title="Analogue Men's & Boy's Watch (Black Dial Black Colored Strap)"
            price={numberFormat(269)}
            image="https://m.media-amazon.com/images/I/71k03mCTm4L._AC_UL320_.jpg"
            rating={2}
          />
          <Product
            key={uniqid()}
            id="49038587566578789"
            title="Digital Boy's Watch (Black Dial Black Colored Strap)"
            price={numberFormat(183)}
            image="https://m.media-amazon.com/images/I/61li2weecyL._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            key={uniqid()}
            id="4903858756212789365"
            title="Gold Plated Multi Strand Necklace For Women/Girls"
            price={numberFormat(199)}
            image="https://m.media-amazon.com/images/I/51sRaKeCtyL._AC_UL320_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            key={uniqid()}
            id="49038587097845245789"
            title="Valentine Gift for Girlfriend : Shining Diva Fashion Latest Stylish Multilayer Chain Pendant Necklace for Women and Girls"
            price={numberFormat(1500)}
            image="https://images-na.ssl-images-amazon.com/images/I/51OfVN2yQ9L._UL1000_.jpg"
            rating={4}
          />
          <Product
            key={uniqid()}
            id="49038587566578789402"
            title="Vega Round Brush (Color May Vary)"
            price={numberFormat(133)}
            image="https://m.media-amazon.com/images/I/61ltgr2HzCL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            key={uniqid()}
            id="4903858756212789365982"
            title="ASIAN Men's Wonder-13 Mesh Sports Running Shoes"
            price={numberFormat(750)}
            image="https://images-na.ssl-images-amazon.com/images/I/61utX8kBDlL._UL1100_.jpg"
            rating={4}
          />
        </div>
        <img
          className="home_langImage2"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
