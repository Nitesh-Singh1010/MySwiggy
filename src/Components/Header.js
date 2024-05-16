import React, { useState,useEffect } from "react";
import { LOGO_LINK } from "../utils/Constants";
import { Link } from "react-router-dom";
const Header = () => {
  
  const [btnName, setBtnName] = useState("Login");
  // useEffect(()=>{
  //   console.log("useEffect rendered. Will be rendered everytime the component renders")
  // })
  // console.log("Header Rendered")
  // useEffect(()=>{
  //   console.log("useEffect rendered, will be called only on initial render")
  // },[])
  // useEffect(()=>{
  //   console.log("useEffect rendered, will be called on initial render, and then everytime btnName changes")
  // },[{btnName}])
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_LINK} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
