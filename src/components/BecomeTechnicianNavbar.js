import React from "react";
import "../styles/BecomeTechnicianNavbar.css";

const BecomeTechnicianNavbar = () => {
  return (
    <nav className="technician-navbar">
      <div className="technician-navbar-brand">
        {/* <img src={image} alt="Ricom Tech Support Logo" className="logo" /> */}
        <a href="/">Ricom Solution</a>
      </div>
      <ul className="technician-navbar-links">
        <li>
          <a className="tech-link" href="#why-join">
            Why join us?
          </a>
        </li>
        <li>
          <a className="tech-link" href="#how-it-works">
            How it works
          </a>
        </li>
        <li>
          <a className="tech-link" href="#qualifications">
            Qualifications
          </a>
        </li>
        <li>
          <a className="tech-link" href="#testimonials">
            Testimonials
          </a>
        </li>
      </ul>
      <a className="apply-button" href="/apply">
        Apply Today
      </a>
    </nav>
  );
};

export default BecomeTechnicianNavbar;
