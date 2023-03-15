import React from "react";
import footerLogo from "../assets/img/footerLogo.png";

const Footer = () => {
  return (
    <footer>
      <div id="footer-container">
        <img src={footerLogo} alt="Logo" />
        <p>&copy; 2023 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
