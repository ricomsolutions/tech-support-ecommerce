import React, { useEffect } from "react";
import "../styles/AboutPage.css";
import aboutImage from "../images/aboutPage.jpg";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About | Ricom Soltions";
  }, []);
  return (
    <div className="aboutContainer">
      <div className="about-content">
        <div className="about-text">
          <h2>About Ricom Tech Support</h2>
          <p>
            At Ricom Tech Support, we understand that technology is at the heart
            of your daily life, whether it's at home or in the office. Our
            mission is to ensure that your devices and systems run smoothly, so
            you can focus on what truly matters.
          </p>
          <p>
            We offer a wide range of tech support services, from troubleshooting
            and repairs to comprehensive system setups. Our team of experts is
            dedicated to providing top-notch support, with attention to every
            detail and a commitment to excellence. We believe that no problem is
            too small, and no challenge is too big. At Ricom, we take pride in
            going the extra mile to ensure that your tech is always in good
            hands.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About Ricom Tech Support" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
