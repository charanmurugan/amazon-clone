import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import Hidden from "@material-ui/core/Hidden";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { clicked } from "../Redux/Duck/Clicker";

function Header() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(clicked());
  }
  let click = useSelector((state) => state.click.click);
  console.log(click);
  return (
    <div className="header">
      <Hidden mdUp>
        <MenuSharpIcon
          onClick={handleClick}
          style={{ fontSize: "30px" }}
          className="header__menuIcon"
        />
      </Hidden>
      <div style={{ display: click ? "block" : "none" }}>
        <SideBar />
      </div>

      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon className="header__basketIcon" />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
      <div className="header__search1">
        <input className="header__searchInput1" type="text" />
        <SearchIcon className="header__searchIcon1" />
      </div>
    </div>
  );
}

export default Header;
