import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import DataService from "../data/Service";
import Banner from "../components/Banner";
import BannerImg from "../assets/img/banner1.png";

const Home = () => {
  const data = DataService.getAllData();
  return (
    <div>
      <Navigation />
      <Banner txt={"Chez vous, partout et ailleurs"} img={BannerImg} />
      <section className="accueil">
        <div className="liste-datas">
          {data.map((data) => (
            <NavLink key={data.id} to={"/fichelogement/" + data.id}>
              <Card
                key={data.id}
                id={data.id}
                image={data.cover}
                titre={data.title}
              />
            </NavLink>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
