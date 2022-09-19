import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav__menu">
      <div className="nav__menuLeft">
        <p>Omega</p>
      </div>
      <div className="nav__menuCenter">
        <ul>
          <li>Demos</li>
          <li>Pages</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="nav__menuRight">
        <p>Cart</p>
        <span>3</span>
      </div>
    </div>
  );
};

export default NavBar;
