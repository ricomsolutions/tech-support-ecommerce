import React from "react";
import "../styles/BestSellers.css";

const bestSellers = [
  {
    id: 1,
    name: "PC Repair Toolkit",
    price: "₵99.99",
    text: "Discover the latest innovation that everyone is talking about!",
    image: require("../images/topsellers_4.png"),
  },
  {
    id: 2,
    name: "Cotilla Solutions",
    price: "₵199.99",
    text: "Experience unmatched quality and performance.",
    image: require("../images/topsellers_2.png"),
  },
  {
    id: 3,
    name: "Tech Septer Software",
    price: "₵199.99",
    text: "Elevate your lifestyle with this must-have item!",
    image: require("../images/topsellers_3.png"),
  },
  {
    id: 4,
    name: "Tech Support Solution",
    price: "₵199.99",
    text: "Transform your daily routine with our best-seller!",
    image: require("../images/topseller_1.png"),
  },
];

const BestSellers = () => {
  return (
    <section className="best-sellers">
      <h2>Best Sellers</h2>
      <div className="best-sellers-list">
        {bestSellers.map((product) => (
          <div key={product.id} className="best-seller-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
