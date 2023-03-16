import React from "react";
import Collapse from "../components/Collapse";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import data from "../data/data.json";
import { useParams } from "react-router-dom";
import Tags from "../components/Tags";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";

const FicheLogement = () => {
  const id = useParams();
  const fiche = data.find((data) => data.id === id.id);
  return (
    <div>
      <Navigation />
      <Carousel />
      <div className="infos">
        <h2>{fiche.title}</h2>
        <p className="location">{fiche.location}</p>
        <div className="host">
          <p>{fiche.host.name}</p>
          <img
            src={fiche.host.picture}
            alt={"Photo de" + fiche.host.name}
          ></img>
        </div>
        <Tags />
        <Rating rate={fiche.rating} />
      </div>
      <Collapse title={"Description"} desc={fiche.description} />
      <Collapse title={"Equipement"} desc={fiche.equipments} />

      <Footer />
    </div>
  );
};

export default FicheLogement;
