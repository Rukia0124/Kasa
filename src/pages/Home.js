import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import data from "../data/data.json";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />

      <div className="accueil">
        <div className="liste-datas">
          {data.map((data) => (
            <NavLink to="FicheLogement">
              <Card
                key={data.id}
                id={data.id}
                image={data.cover}
                titre={data.title}
              />
            </NavLink>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
