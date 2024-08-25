import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faShieldAlt,
  faTools,
} from "@fortawesome/free-solid-svg-icons"; // Importing icons
import wifiNetworkImage from "../images/wifi&network.png";
import "../styles/WifiNetworkPage.css"; // Import the CSS specific to this page

const WifiNetworkPage = () => {
  const navigate = useNavigate(); // For navigation

  const wifiServices = [
    {
      id: 1,
      name: "Wifi Setup & Installation",
      description:
        "Get professional help setting up your wifi network for optimal performance.",
      icon: faWifi, // Icon for Wifi Setup
      route: "/payment", // Route to the payment form
    },
    {
      id: 2,
      name: "Network Security",
      description:
        "Protect your network from unauthorized access and potential threats.",
      icon: faShieldAlt, // Icon for Network Security
      route: "/payment", // Route to the payment form
    },
    {
      id: 3,
      name: "Troubleshooting & Repair",
      description:
        "Resolve connectivity issues and keep your network running smoothly.",
      icon: faTools, // Icon for Troubleshooting & Repair
      route: "/payment", // Route to the payment form
    },
  ];

  return (
    <div className="wifi-network-page">
      <section className="wifi-hero-section">
        <div className="wifi-hero-content">
          <div className="wifi-hero-text">
            <h1>Wifi & Network Services</h1>
            <p>
              Discover our range of wifi and network support services designed
              to keep you connected and secure.
            </p>
          </div>
          <img
            src={wifiNetworkImage}
            alt="Wifi and Network"
            className="wifi-hero-image"
          />
        </div>
      </section>

      <section className="wifi-services-section">
        {wifiServices.map((service) => (
          <div
            key={service.id}
            className="wifi-service-card"
            onClick={() => navigate(service.route)}
          >
            <FontAwesomeIcon
              icon={service.icon}
              className="wifi-service-icon"
            />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default WifiNetworkPage;
