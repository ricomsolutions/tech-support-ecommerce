import React from "react";
import "../styles/TechnicianTestimonials.css";
import image from "../images/Miles.png";
import image2 from "../images/Elisa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const TechnicianTestimonials = () => {
  return (
    <section className="technician-testimonials-section">
      <h2>Hear from our pros</h2>
      <div className="technician-testimonials-container">
        <div className="technician-testimonial">
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
          </div>
          <p className="technician-testimonial-text">
            I love solving customers technical issues and make their lives
            easier. Ricom has been my favorite platform to meet new customers.
          </p>
          <div className="technician-testimonial-author">
            <img src={image2} alt="Mark R." className="profile-pic" />
            <div className="author-info">
              <h4>Mark R.</h4>
              <p>Rockwall, TX</p>
            </div>
          </div>
        </div>
        <div className="technician-testimonial">
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
          </div>
          <p className="technician-testimonial-text">
            I have been with Ricom since 2016 and enjoy the flexibility and
            variety the tech position brings. I specialize in home automation
            but provide many other services Ricom is recognized for. It is so
            much fun to assist my community in solving their technical problems
            with practical solutions. This isn't work, it's an adventure.
          </p>
          <div className="technician-testimonial-author">
            <img src={image} alt="Hank G." className="profile-pic" />
            <div className="author-info">
              <h4>Hank G.</h4>
              <p>Phoenix, AZ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicianTestimonials;
