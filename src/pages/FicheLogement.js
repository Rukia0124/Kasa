import React from "react";
import BannerSimple from "../components/Banner";
import Dropdown from "../components/Collapse";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const FicheLogement = () => {
  return (
    <div>
      <Navigation />
      <BannerSimple />
      <p>fiche logement</p>
      <Dropdown title={"titre"} description={"desc"} />
      <Dropdown title={"titre"} description={"desc"} />
      <Footer />
    </div>
  );
};

export default FicheLogement;
