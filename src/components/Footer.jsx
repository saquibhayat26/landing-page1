import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <p className="footerTitle">Omega</p>
        <ul>
          <li>Support</li>
          <li> Privacy Policy</li>
          <li>Terms and Conditions</li>
        </ul>
        <p className="footer__bottom">© 2022 UXTheme, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
