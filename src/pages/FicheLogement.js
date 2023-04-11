import React from "react";
import Collapse from "../components/Collapse";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import DataService from "../data/Service";
import { useParams, Navigate } from "react-router-dom";
import Tags from "../components/Tags";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";

const FicheLogement = () => {
  const { id } = useParams();
  const fiche = DataService.getDataById(id);
  if (!fiche) {
    return <Navigate to="*" />;
  }
  return (
    <div>
      <Navigation />
      <Carousel />
      <div className="infos">
        <div className="housing-infos">
          <h2>{fiche.title}</h2>
          <p className="location">{fiche.location}</p>
        </div>
        <Tags />
        <div className="host-infos">
          <div className="host">
            <p>
              {fiche.host.name.split(" ").map((name, index) => (
                <React.Fragment key={index}>
                  {name}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <img
              src={fiche.host.picture}
              alt={"Photo de" + fiche.host.name}
            ></img>
          </div>
          <Rating rate={fiche.rating} />
        </div>
        <div className="fiche-collapse">
          <Collapse title={"Description"} desc={fiche.description} />
          <Collapse
            title={"Equipement"}
            desc={
              <ul>
                {fiche.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FicheLogement;
