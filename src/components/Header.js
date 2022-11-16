import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div className={classes.headbar}>
      <div className={classes.header}>
        <div><a href="./"> HOME</a></div>
        <div><a href="./">STORE</a></div>
        <div><a href='./'>ABOUT</a></div>
      </div>
        <HeaderCartButton onShow={props.onShow}/>
    </div>
  );
};

export default Header;
