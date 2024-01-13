import React from "react";
import Gallery from "./../../component/Gallery/Gallery";
import Banner from "./../../component/Banner/Banner";
import "./Home.scss";

function Home(){
    return(
        <>
        <section className="section1">
             <Banner
            imgSrc="/images/littoral.png"
            imgId="img0"
            imgAlt="littoral"
            partoutText="Chez vous, partout et ailleurs"
            />
        </section>
        <section id="section2">
            <Gallery/>
        </section>
           
        </>
    )
}

export default Home;