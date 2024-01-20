import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Slideshow.scss";

function Slideshow({ pictures }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    setCurrentImgIndex(0);
  }, [pictures]);

  const handlePrevious = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showIndex = pictures.length > 1;
  const showButtons = pictures.length > 1;

  return (
    <section className="slideshow">
      <div className="slideshow-container">
        <img
          id="slideshow-img"
          alt={`Slideshow ${currentImgIndex + 1}`}
          src={pictures[currentImgIndex]}
        />
        {showButtons && (
          <>
            <div className="previous-button" onClick={handlePrevious}>
              <FontAwesomeIcon icon={faChevronLeft} className="fa-chevron" />
            </div>
            <div className="next-button" onClick={handleNext}>
              <FontAwesomeIcon icon={faChevronRight} className="fa-chevron" />
            </div>
          </>
        )}
        {showIndex && (
          <div id="picture-index">
            {currentImgIndex + 1}/{pictures.length}
          </div>
        )}
      </div>
    </section>
  );
}

export default Slideshow;
