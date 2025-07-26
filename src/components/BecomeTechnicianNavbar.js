import React, { useState } from 'react';
import '../styles/BecomeTechnicianNavbar.css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGoBack } from './utils';

const BecomeTechnicianNavbar = () => {
  const goBack = useGoBack('/');

  return (
    <nav className="technician-navbar">
      <div className="technician-navbar-brand">
        <FontAwesomeIcon onClick={goBack} icon={faArrowLeft} className="back-icon" />
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
