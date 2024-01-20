import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="PageNotFoundSection">
      <div className="erreur_404">404</div>
      <div className="Oups">Oups! La page que vous demandez n'existe pas.</div>
      <Link to="/" className="linkToHome">Retourner sur la page d’accueil</Link>
    </section>
  );
}
export default NotFound;