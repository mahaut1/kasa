import React, { useState, useEffect } from "react";
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
    <section className="section1">
      <img id="slideshow-img" alt="Slideshow" src={pictures[currentImgIndex]} />
      {showButtons && (
        <>
          <div className="previous-button" onClick={handlePrevious}>
            <i className="fa-solid fa-chevron-up"></i>
          </div>
          <div className="next-button" onClick={handleNext}>
            <i className="fa-solid fa-chevron-up"></i>
          </div>
        </>
      )}
      {showIndex && (
        <div id="picture-index">
          {currentImgIndex + 1}/{pictures.length}
        </div>
      )}
    </section>
  );
}

export default Slideshow;