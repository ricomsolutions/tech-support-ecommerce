import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/ContactPage.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p>
            We are here to provide the best tech support for your business
            needs. Reach out to us through the following methods:
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              <span>1234 Tech Avenue, Silicon Valley, CC</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <span>support@techsupport.com</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" />
              <span>+233 (54) 123-4567</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faClock} className="contact-icon" />
              <span>24 Hours</span>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2>Tell Us About Your Issue</h2>
          <form>
            <input type="text" name="name" placeholder="Your Name *" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message *"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <h2 className="map-head">Find Us Here</h2>
        <div className="map-container">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0176696187687!2d-122.08424968468206!3d37.4219997798196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb6cbf8310b87%3A0x8f8f8f8f8f8f8f8f!2sGoogleplex!5e0!3m2!1sen!2sus!4v1600219132891!5m2!1sen!2sus"
            width="600"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
