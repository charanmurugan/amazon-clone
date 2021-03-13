import React from "react";
import "../styles/Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer__contact">
        <div>
          <h3> Get to Know Us </h3>
          <ul>
            <li> About Us</li>
            <li> Careers</li>
            <li>Press Releases</li>
            <li>Amazon Cares</li>
            <li>Gift a Smile</li>
          </ul>
        </div>
        <div>
          <h3>Connect with Us </h3>
          <ul>
            <li> Facebook</li>
            <li> Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <h3>Make Money with Us </h3>
          <ul>
            <li> Sell on Amazon </li>
            <li> Sell under Amazon Accelerator</li>
            <li> Amazon Global Selling</li>
            <li> Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
            <li>See More Make Money with Us</li>
          </ul>
        </div>
        <div>
          <h3>Let Us Help You </h3>
          <ul>
            <li> COVID-19 and Amazon</li>
            <li>Your Account </li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Amazon Assistant Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <div className="footer__lang">
        <div className="footer__langOption">
          <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
          <div className="options">
            <i class="fa fa-globe" aria-hidden="true"></i>
            <select>
              <option>English</option>
              <option>தமிழ்</option>
              <option>ಕನ್ನಡ</option>
              <option>తెలుగు</option>
              <option>हिन्दी</option>
            </select>
          </div>
        </div>

        <div className="footer__langCountry">
          <ul>
            <li>Australia </li>
            <li>Brazil</li>
            <li>Canada</li>
            <li>China</li>
            <li>France</li>
            <li>Germany</li>
            <li>Japan</li>
            <li>Italy</li>
            <li>Mexico</li>
            <li>Netherlands</li>
            <li>Singapore</li>
            <li>Spain</li>
            <li>United Arab Emirates</li>
            <li>United Kingdom</li>
            <li>United States</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="footer__year">
          Conditions of Use & Sale Privacy Notice Interest-Based Ads © {year} ,
          charanmurugan.com or its affiliates
        </p>
      </div>
    </div>
  );
}

export default Footer;
