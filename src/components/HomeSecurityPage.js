import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faCamera,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import homeSecurityImage from "../images/homesecurity.png";
import "../styles/HomeSecurityPage.css"; // Import the CSS specific to this page

const HomeSecurityPage = () => {
  const navigate = useNavigate(); // For navigation

  const securityServices = [
    {
      id: 1,
      name: "Home Alarm Systems",
      description:
        "Install and maintain advanced alarm systems for complete home security.",
      icon: faLock, // Icon for Alarm Systems
      route: "/services/home-alarm",
    },
    {
      id: 2,
      name: "Surveillance Cameras",
      description:
        "Set up high-definition cameras for monitoring and recording.",
      icon: faCamera, // Icon for Surveillance Cameras
      route: "/services/surveillance-cameras",
    },
    {
      id: 3,
      name: "Security Consulting",
      description:
        "Get expert advice on securing your home and preventing potential threats.",
      icon: faShieldAlt, // Icon for Security Consulting
      route: "/services/security-consulting",
    },
  ];

  return (
    <div className="home-security-page">
      <section className="security-hero-section">
        <div className="security-hero-content">
          <div className="security-hero-text">
            <h1>Home Security Services</h1>
            <p>
              Explore our range of home security solutions designed to keep your
              property safe and secure.
            </p>
          </div>
          <img
            src={homeSecurityImage}
            alt="Home Security"
            className="security-hero-image"
          />
        </div>
      </section>

      <section className="security-services-section">
        {securityServices.map((service) => (
          <div
            key={service.id}
            className="security-service-card"
            onClick={() => navigate(service.route)}
          >
            <FontAwesomeIcon
              icon={service.icon}
              className="security-service-icon"
            />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomeSecurityPage;
