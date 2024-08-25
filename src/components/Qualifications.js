import React from "react";
import "../styles/Qualifications.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Qualifications = () => {
  return (
    <section className="qualifications-section">
      <h2>Qualifications</h2>
      <p className="description">
        It's very important that we select the best technicians to join our
        platform! Applicants are expected to meet the following requirements:
      </p>
      <ul className="qualifications-list">
        <li>
          <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
          Be 18 years of age or older
        </li>
        <li>
          <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
          Must be residing within Cape Coast Metropolitan
        </li>
        <li>
          <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
          Have access to reliable transportation and a mobile device
        </li>
        <li>
          <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
          Pass a skills assessment and background check
        </li>
        <li>
          <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
          Provide a proof of insurance
        </li>
        <li>
          <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
          Understanding of various technology devices
        </li>
        <li>
          <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
          Have a great attitude and enjoy helping others
        </li>
      </ul>
    </section>
  );
};

export default Qualifications;
