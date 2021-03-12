import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Location.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "font-awesome/css/font-awesome.min.css";

function Location() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const getUserLocation = async () => {
      console.log("inside location");
      await axios
        .get(
          `https://geolocation-db.com/json/5c628b10-7e44-11eb-815b-3f039c477713`
        )
        .then((response) => {
          setLocation(response.data.country_name);
        });
    };
    getUserLocation();
  }, []);
  return (
    <div className="location">
      <LocationOnIcon className="location__symbol" style={{ color: "white" }} />
      <div className="location__option">
        <h3 className="location__optionLineOne">
          {location ? `${location}` : `Select Location`}
        </h3>
      </div>

      <div className="location__option">
        <h3 className="location__optionLineOne">Best Sellers</h3>
      </div>

      <div className="location__option">
        <h3 className="location__optionLineOne">Mobiles</h3>
      </div>

      <div className="location__option">
        <h3 className="location__optionLineOne">Today's Deals</h3>
      </div>

      <div className="location__option">
        <h3 className="location__optionLineOne">Fashion</h3>
      </div>

      <div className="location__option">
        <h3 className="location__optionLineOne">New Release</h3>
      </div>

      <div className="location__option  dropdown ">
        <h3 className="location__optionLineOne dropbtn">
          Prime <i class="fa fa-caret-down"></i>
        </h3>
        <div class="dropdown-content ">
          <img
            src="https://m.media-amazon.com/images/G/31/prime/NavFlyout/TryPrime/2018/Apr/IN-Prime-PIN-TryPrime-MultiBen-Apr18-400x400._CB442254244_.jpg"
            alt="prime image"
          />
        </div>
      </div>

      <div className="location__option">
        <h3 className="location__optionLineOne">Electronics</h3>
      </div>
      <div className="location__option">
        <h3 className="location__optionLineOne">Customer Service</h3>
      </div>
      <div className="location__option">
        <h3 className="location__optionLineOne">Amazon Pay</h3>
      </div>
      <div>
        <img
          className="location__logo"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Mirzapurs2/nobranding/400x39-SWM_With-Disclaimer_np._CB415424805_.jpg"
        />
      </div>
    </div>
  );
}

export default Location;
