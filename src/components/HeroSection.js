import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Tech Support</h1>
        <p>Discover the best tech products and support services.</p>
        <a href="/services" className="btn-primary">
          Book a Service
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
