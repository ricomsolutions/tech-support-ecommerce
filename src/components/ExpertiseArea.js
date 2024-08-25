import React from "react";
import "../styles/ExpertiseArea.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTv,
  faDesktop,
  faWifi,
  faHome,
  faTheaterMasks,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

const ExpertiseArea = () => {
  return (
    <section className="expertise-area-section">
      <h2>Choose your area of expertise</h2>
      <div className="expertise-grid">
        <div className="expertise-item">
          <FontAwesomeIcon icon={faTv} className="expertise-icon" />
          <p>TV Mounting</p>
        </div>
        <div className="expertise-item">
          <FontAwesomeIcon icon={faDesktop} className="expertise-icon" />
          <p>Computer Support</p>
        </div>
        <div className="expertise-item">
          <FontAwesomeIcon icon={faWifi} className="expertise-icon" />
          <p>WiFi Support</p>
        </div>
        <div className="expertise-item">
          <FontAwesomeIcon icon={faHome} className="expertise-icon" />
          <p>Smart Home Setup</p>
        </div>
        <div className="expertise-item">
          <FontAwesomeIcon icon={faTheaterMasks} className="expertise-icon" />
          <p>Home Theater Setup</p>
        </div>
        <div className="expertise-item">
          <FontAwesomeIcon icon={faMobileAlt} className="expertise-icon" />
          <p>Mobile or Tablet Support</p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseArea;
