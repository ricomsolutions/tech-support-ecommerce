import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faPrint,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import computersPrintersImage from "../images/close-up-man-working-computer-chips.jpg";
import "../styles/ComputersPrintersPage.css";

const ComputersPrintersPage = () => {
  const navigate = useNavigate(); // For navigation

  const computerServices = [
    {
      id: 1,
      name: "Computer Repair",
      description: "Professional repair services for desktops and laptops.",
      icon: faDesktop, // Icon for Computer Repair
      route: "/services/computer-repair",
    },
    {
      id: 2,
      name: "Printer Setup",
      description: "Setup and maintenance services for all types of printers.",
      icon: faPrint, // Icon for Printer Setup
      route: "/services/printer-setup",
    },
    {
      id: 3,
      name: "Technical Support",
      description: "24/7 technical support for computer and printer issues.",
      icon: faToolbox, // Icon for Technical Support
      route: "/services/technical-support",
    },
  ];

  return (
    <div className="computers-printers-page">
      <section className="computers-hero-section">
        <div className="computers-hero-content">
          <div className="computers-hero-text">
            <h1>Computers & Printers Services</h1>
            <p>
              We offer a variety of services to ensure your computers and
              printers are always running smoothly.
            </p>
          </div>
          <img
            src={computersPrintersImage}
            alt="Computers and Printers"
            className="computers-hero-image"
          />
        </div>
      </section>

      <section className="computers-services-section">
        {computerServices.map((service) => (
          <div
            key={service.id}
            className="computers-service-card"
            onClick={() => navigate(service.route)}
          >
            <FontAwesomeIcon
              icon={service.icon}
              className="computers-service-icon"
            />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ComputersPrintersPage;
