import React, { useState, useEffect } from "react";
import { LOGO_LINK } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
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
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="justify-between flex bg-pink-200 shadow-md m-2">
      <div className="logo-container">
        <img className="logo w-56" src={LOGO_LINK} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-6 font-bold ">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-6 font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-6 font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-6 font-bold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-6 font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-6 font-bold text-xl">
            <Link to="/cart"> Cart({cartItems.length})</Link>
          </li>
          <button
            className="login font-bold"
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
