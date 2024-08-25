import React from "react";
import { Link } from "react-router-dom";
import "../styles/FeaturedProducts.css";

const products = [
  {
    id: 1,
    image: require("../images/laptop.png"),
    name: "Computer Support",
    description:
      "Comprehensive solutions for all your computer issues, from hardware fixes to software troubleshooting.",
  },
  {
    id: 2,
    image: require("../images/wifi_support.png"),
    name: "WiFi Support",
    description:
      "Get your network up and running with our expert WiFi setup and troubleshooting services.",
  },
  {
    id: 3,
    image: require("../images/printer.png"),
    name: "Printer Support",
    description:
      "Fast and reliable printer setup and repair services to keep your office running smoothly.",
  },
  {
    id: 4,
    image: require("../images/stream.png"),
    name: "Device Installation",
    description:
      "Seamlessly connect and configure your streaming devices for the ultimate entertainment experience.",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h2>Popular Online Services</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>

            <Link to="/services" className="view-details-button">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
