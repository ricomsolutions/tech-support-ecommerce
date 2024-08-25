import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faHeadset,
  faPiggyBank,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Services.css";

function Services() {
  return (
    <div className="services-container">
      <div className="service">
        <FontAwesomeIcon icon={faRocket} className="service-icon" />
        <h3>FREE DELIVERY</h3>
        <p>Free shipping on all orders Within Cape Coast</p>
      </div>
      <div className="service">
        <FontAwesomeIcon icon={faHeadset} className="service-icon" />
        <h3>ONLINE SUPPORT 24/7</h3>
        <p>Support online 24 hours a day</p>
      </div>
      <div className="service">
        <FontAwesomeIcon icon={faPiggyBank} className="service-icon" />
        <h3>MONEY RETURN</h3>
        <p>Back guarantee under 7 days</p>
      </div>
      <div className="service">
        <FontAwesomeIcon icon={faGift} className="service-icon" />
        <h3>MEMBER DISCOUNT</h3>
        <p>Become a member and save up to 100cedis on your next service!</p>
      </div>
    </div>
  );
}

export default Services;
