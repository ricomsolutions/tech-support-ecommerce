// src/components/PopularProducts.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/PopularProducts.css";

const popularProducts = [
  {
    id: 1,
    image: require("../images/laptop-white-background-3d-rendering-computer-generated-image.jpg"),
    name: "Laptop",
    category: "laptop", // Use a category identifier
  },
  {
    id: 2,
    image: require("../images/security_camera.png"),
    name: "Security Camera",
    category: "securityCameras", // Use a category identifier
  },
  {
    id: 3,
    image: require("../images/vr_headset_on_a_white_background_color.png"),
    name: "VR Headset",
    category: "vrHeadsets", // Use a category identifier
  },
  {
    id: 4,
    image: require("../images/smart_phone_and_tablet_on_a_white_background_color.png"),
    name: "Smart Phone",
    category: "smartPhones", // Use a category identifier
  },
];

const PopularProducts = () => {
  return (
    <section className="popular-products">
      <h2>Popular Products</h2>
      <div className="products-grid">
        {popularProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <Link
              to={`/booking/${product.category}`}
              className="buy-now-button"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
