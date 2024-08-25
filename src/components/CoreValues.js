import React from "react";
import "../styles/CoreValues.css";
import technicianImage from "../images/pexels-mart-production-7709104.jpg";
import professionalsImage from "../images/black-man-using-computer.jpg";
import helpingImage from "../images/afro-american-man-suit-pitching-business-idea-female-colleague-office.jpg";

const CoreValues = () => {
  return (
    <section className="core-values-section">
      <h2>Core Technician Values</h2>
      <div className="values-container">
        <div className="value-card">
          <img
            src={technicianImage}
            alt="We're Technicians"
            className="value-image"
          />
          <h3>We're Technicians</h3>
          <p>
            We are the medics to those machines which are in need of technical
            assistance. We are a community that enjoys solving problems and
            welcome challenges. We are passionate about our work and our
            customers.
          </p>
        </div>
        <div className="value-card">
          <img
            src={professionalsImage}
            alt="We're Professionals"
            className="value-image"
          />
          <h3>We’re Professionals</h3>
          <p>
            We are timely, knowledgeable, and courteous. We treat our customers’
            homes and belongings with utmost respect. We’re honest about our
            abilities. If we don’t know the best answer, we’ll investigate and
            provide an accurate follow-up in a timely manner.
          </p>
        </div>
        <div className="value-card">
          <img
            src={helpingImage}
            alt="We're here to help"
            className="value-image"
          />
          <h3>We’re here to help</h3>
          <p>
            We truly care about our customers. We’re happy to answer questions
            and provide customers with additional information and education
            on-site. We use our knowledge and passion to recommend useful tech
            products and services.
          </p>
        </div>
      </div>
      <div className="apply-button-container">
        <a className="apply-button" href="/apply">
          Apply Today
        </a>
      </div>
    </section>
  );
};

export default CoreValues;
