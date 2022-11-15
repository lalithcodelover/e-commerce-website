import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={classes.header}>
        <div>HOME</div>
        <div>STORE</div>
        <div>ABOUT</div>
      </div>
      <div className={classes.cart}>
        <span>Cart</span>
      </div>
    </div>
  );
};

export default Header;
