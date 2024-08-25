import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faLock, faDesktop } from "@fortawesome/free-solid-svg-icons";
import techSupportImage from "../images/person-office-work-day.jpg";
import "../styles/ServicePage.css";

const ServicePage = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      name: "Wifi & Networks",
      icon: <FontAwesomeIcon icon={faWifi} />,
      description:
        "Stay connected with our reliable wifi and network solutions.",
      route: "/services/wifi-networks",
    },
    {
      id: 2,
      name: "Home Security",
      icon: <FontAwesomeIcon icon={faLock} />,
      description:
        "Protect your home with our state-of-the-art security systems.",
      route: "/services/home-security",
    },
    {
      id: 3,
      name: "Computers & Printers",
      icon: <FontAwesomeIcon icon={faDesktop} />,
      description: "Keep your tech running smoothly with our expert support.",
      route: "/services/computers-printers",
    },
  ];

  return (
    <div className="tech-support-service-page">
      <section className="tech-support-hero-section">
        <div className="tech-support-hero-content">
          <div className="tech-support-hero-text">
            <h1>Our Services</h1>
            <p>
              Explore our wide range of tech support services designed to keep
              you connected and secure.
            </p>
          </div>
          <img
            src={techSupportImage}
            alt="Hero"
            className="tech-support-hero-image"
          />
        </div>
      </section>

      <section className="tech-support-services-section">
        {services.map((service) => (
          <div
            key={service.id}
            className="tech-support-service-card"
            onClick={() => navigate(service.route)}
          >
            <div className="tech-support-icon">{service.icon}</div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ServicePage;
