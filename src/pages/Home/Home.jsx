import React from "react";
import Gallery from "./../../component/Gallery/Gallery";
import Banner from "./../../component/Banner/Banner";
import "./Home.scss";

function Home() {
  return (
    <>
      <section className="homeSection">
        <Banner
          imgSrc="/images/littoral.png"
          imgId="img0"
          imgAlt="littoral"
          partoutText="Chez vous, partout et ailleurs"
        />
      </section>
      <section className="gallerySection">
        <Gallery />
      </section>
    </>
  );
}

export default Home;
