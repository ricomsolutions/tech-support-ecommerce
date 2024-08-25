import React from "react";
import "../styles/HowItWorks.css";
import image from "../images/2152177.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <h2>How it works</h2>
      <div className="how-it-works-content">
        <img src={image} alt="Application process" className="image" />
        <div className="text-content">
          <h3>1. Complete your application</h3>
          <p>
            Submit your application, proceed to a background check, and complete
            a skills assessment.
          </p>
          <a className="get-started-button" href="/apply">
            Get Started
          </a>
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
