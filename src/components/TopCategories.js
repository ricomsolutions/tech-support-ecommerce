import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faMobileAlt,
  faDesktop,
  faTabletAlt,
  faWifiStrong,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/TopCategories.css";

const categories = [
  {
    id: 1,
    icon: faLaptop,
    name: "Laptops",
    description: "Find the best tech support for all laptop brands and models.",
  },
  {
    id: 2,
    icon: faMobileAlt,
    name: "Mobile Phones",
    description: "Get expert help with mobile phone issues and upgrades.",
  },
  {
    id: 3,
    icon: faDesktop,
    name: "Computers & Printers",
    description: "Professional support for desktop computers and peripherals.",
  },
  {
    id: 4,
    icon: faTabletAlt,
    name: "Tablets",
    description:
      "Expert support for tablet setup, troubleshooting, and optimization.",
  },
  {
    id: 5,
    icon: faWifiStrong,
    name: "WiFi & Network",
    description:
      "Reliable assistance for WiFi setup, network security, and connectivity issues.",
  },
];

const TopCategories = () => {
  return (
    <section className="top-categories">
      <h2>Top Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <FontAwesomeIcon icon={category.icon} className="category-icon" />
            <h3 className="category-name">{category.name}</h3>
            <p className="category-description">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
