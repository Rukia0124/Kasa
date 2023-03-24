import React from "react";
import Banner from "../components/Banner";
import BannerImg from "../assets/img/banner2.png";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div>
      <Navigation />
      <Banner img={BannerImg} />
      <section className="about">
        <Collapse
          title={"Fiabilité"}
          desc={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          }
        />
        <Collapse
          title={"Respect"}
          desc={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
        <Collapse
          title={"Service"}
          desc={
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          }
        />
        <Collapse
          title={"Responsabilité"}
          desc={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
        />
        <Footer />
      </section>
    </div>
  );
};

export default About;
