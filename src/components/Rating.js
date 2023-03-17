import React from "react";
import data from "../data/data.json";
import { useParams } from "react-router-dom";
import EmptyStar from "../assets/img/emptystar.png";
import Star from "../assets/img/star.png";

const Rating = ({ rate }) => {
  const id = useParams();
  const fiche = data.find((data) => data.id === id.id);
  const rating = fiche.rating;
  let housingRate = [];
  let fullStar = true;
  for (let index = 0; index < 5; index++) {
    if (index === parseInt(rating)) {
      fullStar = false;
    }
    if (fullStar === true) {
      housingRate.push(
        <img key={index} className="star" src={Star} alt={`${rating}/5`} />
      );
    } else {
      housingRate.push(
        <img key={index} className="star" src={EmptyStar} alt={`${rating}/5`} />
      );
    }
  }

  return <div className="rate">{housingRate}</div>;
};

export default Rating;
