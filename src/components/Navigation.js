import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Navigation = () => {
  return (
    <header>
      <nav className="navigation">
        <img src={logo} alt="Logo de Kasa" />
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about">
            <li>A propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
