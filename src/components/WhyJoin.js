import React from "react";
import "../styles/WhyJoin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faCalendarCheck,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

const WhyJoin = () => {
  return (
    <section className="why-join-section">
      <h2>Why join Ricom?</h2>
      <div className="features">
        <div className="feature">
          <FontAwesomeIcon icon={faDollarSign} className="icon" />
          <h3>Earn great money</h3>
          <p>Get paid twice a week and earn an average of GH₵500/day.</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faCalendarCheck} className="icon" />
          <h3>Set your own schedule</h3>
          <p>Only accept the jobs that you want to work.</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faSmile} className="icon" />
          <h3>Join the tech community</h3>
          <p>Grow your skill set while bettering people’s lives.</p>
        </div>
      </div>
      <a className="apply-button" href="/apply">
        Apply Today
      </a>
    </section>
  );
};

export default WhyJoin;
