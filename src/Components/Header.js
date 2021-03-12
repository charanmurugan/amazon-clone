import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase";
import { useSelector } from "react-redux";

function Header() {
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  let basket = useSelector((state) => state.basket.basket);
  let user = useSelector((state) => state.basket.user);

  return (
    <div className="header">
      <ToastContainer className="toastStyle" />

      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? `${user.email} ` : `Guest`}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="header__basketIcon" />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      <div className="header__search1">
        <input className="header__searchInput1" type="text" />
        <SearchIcon className="header__searchIcon1" />
      </div>
    </div>
  );
}

export default Header;
