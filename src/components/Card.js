import React from "react";

function Card({ id, image, titre }) {
  return (
    <div className="card" id={id}>
      <img className="card-image" src={image} alt={titre} />
      <div className="gradient-overlay"></div>
      <span className="card-title">{titre}</span>
    </div>
  );
}

export default Card;
