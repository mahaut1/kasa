import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Location.scss";
import Collapse from "../../component/Collapse/Collapse";
import { Navigate } from "react-router-dom";
import Slideshow from "../../component/Slideshow/Slideshow";

function Location() {
  const [logement, setLogement] = useState();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedLogement = data.find((logement) => logement.id === id);
        setLoading(false);
        setLogement(selectedLogement);
      })
      .catch((error) => {
        console.error("Error fetching logements:", error);
      });
  }, [id]);

  if (loading) {
    return <div className="loading">Chargement...</div>;
  } else if (logement === undefined) {
    return <Navigate to="/not-found" />;
  }

  const {
    title,
    host,
    tags,
    location,
    rating,
    description,
    equipments,
    pictures,
  } = logement;

  return (
    <section className="logementSection">
      <Slideshow pictures={pictures} />
      <div className="divInit">
        <div className="div1">
          <div className="logementLocation">
            <span className="logementTitle">{title}</span>
            {location}
          </div>

          <div className="tags">
            {tags.map((tag, index) => (
              <span className="tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="div2">
          <div className="logementHost">
            <div className="logementHostName">{host.name}</div>
            <div>
              <img src={host.picture} alt="hostPicture" />
            </div>
          </div>
          <div className="logementStars">
            {Array.from({ length: 5 }, (_, index) => (
              <i
                key={index}
                className={
                  index < rating
                    ? "fa-solid fa-star ic_pink"
                    : "fa-solid fa-star ic_grey"
                }
              ></i>
            ))}
          </div>
        </div>
      </div>
      <div className="logementCollapse">
        <div className="classCollaps">
          <Collapse title="Description" className="collapse">
            {description}
          </Collapse>
        </div>
        <div className="classCollaps">
          <Collapse title="Equipements" className="collapse">
            <ul>
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </section>
  );
}

export default Location;
