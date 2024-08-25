import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faShieldAlt,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/FeaturesSection.css";

const features = [
  {
    icon: faCogs,
    title: "Advanced Technical Support",
    description:
      "Our experts provide comprehensive technical assistance for your devices and software.",
  },
  {
    icon: faShieldAlt,
    title: "Security & Protection",
    description:
      "We ensure your devices and data are safe with our robust security solutions.",
  },
  {
    icon: faHeadset,
    title: "24/7 Customer Service",
    description:
      "Our support team is available around the clock to assist you with any queries or issues.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
