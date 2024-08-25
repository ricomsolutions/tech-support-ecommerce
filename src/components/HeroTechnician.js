import React from "react";
import image from "../images/concentrated-call-center-operator-talking-with-client.jpg";
import "../styles/HeroTechnician.css";

const HeroTechnician = () => {
  return (
    <section className="hero-technician-section">
      <div className="hero-technician-content">
        <h2>Become a Technician</h2>
        <h1>Earn an average of GH₵500/day</h1>
        <p>
          Ricom is looking for tech support specialists and handymen alike to
          join our tech community!
        </p>
        <a className="apply-button" href="/apply">
          Apply Today
        </a>
      </div>
      <div className="hero-technician-image">
        <img src={image} alt="Technician" />
      </div>
    </section>
  );
};

export default HeroTechnician;
