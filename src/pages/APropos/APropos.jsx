import React from "react";
import Collapse from "../../component/Collapse/Collapse";
import Banner from "../../component/Banner/Banner";
import "./APropos.scss";

function APropos() {
  return (
    <section className="aProposSection">
      <Banner
        imgSrc="https://res.cloudinary.com/dpcysdzoq/image/upload/v1705160602/liitgnaniwl6ih2xgbjp.png"
        imgId="bannerImageAPropos"
        imgAlt="Montagnes"
      />
      <div className="collapsWrapper">
        <Collapse title="Fiabilité" className="collapse">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </Collapse>
        <Collapse title="Respect" className="collapse">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage entraînera
          une exclusion de notre plateforme.
        </Collapse>
        <Collapse title="Service" className="collapse">
        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
        </Collapse>
        <Collapse title="Sécurité" className="collapse">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
          les voyageurs, chaque logement correspond aux critères de sécurité
          établis par nos services. En laissant une note aussi bien à l'hôte qu'au
          locataire, cela permet à nos équipes de vérifier que les standards sont
          bien respectés. Nous organisons également des ateliers sur la sécurité
          domestique pour nos hôtes.
        </Collapse>
      </div>
    </section>
  );
}

export default APropos;
