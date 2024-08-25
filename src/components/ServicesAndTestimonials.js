import React, { useState } from "react";
import "../styles/ServicesAndTestimonials.css";

const services = [
  {
    title: "Fast Free Delivery",
    content:
      "We offer fast and free delivery services for all your tech needs. Experience seamless shopping with us.",
  },
  {
    title: "Expert Tech Support",
    content:
      "Our team of experts is available 24/7 to assist with all your technical issues and ensure your devices run smoothly.",
  },
  {
    title: "Customized Solutions",
    content:
      "We provide customized tech solutions tailored to your specific business needs.",
  },
];

const testimonials = [
  {
    name: "John Sullivan",
    role: "Customer",
    image: require("../images/Miles.png"),
    feedback:
      "These guys have been absolutely outstanding. Best support team ever! Very fast responding! Thank you very much! I highly recommend this service.",
  },
];

const ServicesAndTestimonials = () => {
  const [activeService, setActiveService] = useState(0);

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <div className="services-testimonials">
      <div className="services">
        <h2>What Can We Do For You?</h2>
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-item ${
              activeService === index ? "active" : ""
            }`}
            onClick={() => toggleService(index)}
          >
            <div className="service-title">
              {service.title}
              <span className="arrow">
                {activeService === index ? "▲" : "▼"}
              </span>
            </div>
            {activeService === index && (
              <div className="service-content">{service.content}</div>
            )}
          </div>
        ))}
      </div>
      <div className="testimonial">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <p className="testimonial-feedback">{testimonial.feedback}</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesAndTestimonials;
