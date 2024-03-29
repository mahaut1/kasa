import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  const logo = "../images/Kasa.jpg";
  return (
    <header>
      <nav>
        <NavLink to="/" className="logo-link">
          <img alt="" src={logo} width="50" />
        </NavLink>
        <div className="divNav">
          <NavLink to="/" className="active-link">
            Accueil
          </NavLink>
          <NavLink to="/apropos" className="active-link">
            A Propos
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;