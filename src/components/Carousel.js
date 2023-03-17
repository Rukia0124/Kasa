import React, { useState } from "react";
import data from "../data/data.json";
import { useParams } from "react-router-dom";

const Carousel = () => {
  const id = useParams();
  const fiche = data.find((data) => data.id === id.id);
  const [currentImage, setCurrentImage] = useState(0);
  const images = fiche.pictures;

  const handlePrev = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="carousel">
      <img src={images[currentImage]} alt={fiche.title} />
      <div className="carousel-controls">
        <button onClick={handlePrev}>
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={handleNext}>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
