import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";

const Error404 = () => {
  return (
    <div>
      <Navigation />
      <div className="error">
        <h1 className="error404">404</h1>
        <p className="error">Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to={"/home"}>
          <span>Retourner sur la page d'accueil.</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Error404;
