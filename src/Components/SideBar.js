import React from "react";
import "../styles/SideBar.css";
import CloseIcon from "@material-ui/icons/Close";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useDispatch } from "react-redux";
import { notclicked } from "../Redux/Duck/Clicker";

function SideBar() {
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(notclicked());
  }
  return (
    <div className="sideBar">
      <div>
        <div className="sidebar__user ">
          <AccountCircleIcon
            className="sidebar__image"
            style={{ fontSize: "50px" }}
          />
          <CloseIcon
            onClick={handleClose}
            className="sidebar__close"
            style={{ fontSize: "20px" }}
          />
          <span className="sidebar__userName">Hello Guest</span>
        </div>
        <div className="sidebar__options">
          <span>Sign In</span>
        </div>
        <div className="sidebar__options">
          <span>Returns & Orders</span>
        </div>
        <div className="sidebar__options">
          <span>Try Prime</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
