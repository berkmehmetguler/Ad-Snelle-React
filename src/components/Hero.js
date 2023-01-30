import React from "react";
import "../styles/Hero.scss";
import RawPhoto from "../assets/RawPhoto.jpg";

const Hero = () => {
  return (
    <section className="bg-dark ">
      <div className="hero-content container">
        <img src={RawPhoto} alt="Hero Banner" className="hero-banner" />
        <div className="hero-text">
          <h1 className="">Welcommen Snelle</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            commodi quae consequatur nam at officia voluptate officiis animi
            eius illo!
          </p>
          <button className="btn  hero-btn ">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
