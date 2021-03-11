import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import Hidden from "@material-ui/core/Hidden";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { clicked } from "../Redux/Duck/Clicker";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(clicked());
  }
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  let click = useSelector((state) => state.click.click);
  let basket = useSelector((state) => state.basket.basket);
  let user = useSelector((state) => state.basket.user);

  return (
    <div className="header">
      <Hidden mdUp>
        <MenuSharpIcon
          onClick={handleClick}
          style={{ fontSize: "30px" }}
          className="header__menuIcon"
        />
      </Hidden>
      <ToastContainer className="toastStyle" />
      <div style={{ display: click ? "block" : "none" }}>
        <SideBar />
      </div>
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
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

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
