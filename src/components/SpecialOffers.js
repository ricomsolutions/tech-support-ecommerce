import React from "react";
import { Link } from "react-router-dom";
import "../styles/SpecialOffers.css";

const specialOffers = [
  {
    id: 1,
    image: require("../images/a_mounted_tv.png"),
    name: "Mounted TV",
    description:
      "Enjoy 20% off on all TV mounting services this month. Perfect viewing angles guaranteed.",
  },
  {
    id: 2,
    image: require("../images/smart_camera.png"),
    name: "Smart Security Cam Install",
    description:
      "Secure your home with a free camera upgrade on any installation service.",
  },
  {
    id: 3,
    image: require("../images/thermostat.png"),
    name: "Thermostat Install",
    description:
      "Get a free smart home consultation with every smart thermostat installation.",
  },
  {
    id: 4,
    image: require("../images/device_setup_and_configuration-removebg-preview.png"),
    name: "Device Setup",
    description:
      "Bundle and save: Set up multiple devices and get a discount on each additional service.",
  },
];

const SpecialOffers = () => {
  return (
    <section className="special-offers">
      <h2>Exclusive Deals</h2>
      <div className="offers-grid">
        {specialOffers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.image} alt={offer.name} className="offer-image" />
            <h3 className="offer-name">{offer.name}</h3>
            <p className="offer-description">{offer.description}</p>
            <Link to={`/offers/${offer.id}`} className="get-offer-button">
              Claim Offer
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
