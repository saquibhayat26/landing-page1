import React from "react";
import NavBar from "./NavBar";
import "./Header.css";
import img1 from "./../image/1.png";

const Header = () => {
  return (
    <div className="header">
      <NavBar />
      <div className="header__container">
        <div className="header__containerLeft">
          <img src={img1} />
        </div>
        <div className="header__containerRight">
          <h1>Enojy every single beat on headphone!</h1>
          <p>
            For iPhone, iPad, and Android users, be sure your product’s firmware
            is up to date through the Bose connect app.
          </p>
          <div className="header__priceContainer">
            <div className="header__price">
              <p>$299</p>
              <span>Save 30% today</span>
            </div>
            <p>Original price $399</p>
          </div>
          <div className="header__cartContainer">
            <div className="header__cartQuantity">
              <p>1</p>
              <div className="header__cartUnit">
                <span className="plus">+</span>
                <span className="minus">_ </span>
              </div>
            </div>
            <button className="header__btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
