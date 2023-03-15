import React from "react";

function Banner({ img, txt }) {
  return (
    <div className="banner-container">
      <div className="banner">
        <img className="banner-img" src={img} alt="Bannière" />
        <span className="banner-txt">{txt}</span>
      </div>
    </div>
  );
}

export default Banner;
