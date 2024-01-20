// Gallery.jsx
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Gallery.scss";

function Gallery() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) => {
        console.error("Error fetching logements:", error);
      });
  }, []);

  return (
    <div className="gallery">
      {logements.map((logement) => (
        <Card
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
    </div>
  );
}

export default Gallery;
