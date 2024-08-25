import React from "react";
import "../styles/AboutSection.css";

const aboutItems = [
  {
    image: require("../images/4498903.jpg"),
    title: "What Do We Do?",
    description:
      "We offer a wide range of tech support services to ensure your devices and systems run smoothly.",
  },
  {
    image: require("../images/5381412.jpg"),
    title: "Our Mission",
    description:
      "Our mission is to provide top-notch technical support to help you achieve your business goals.",
  },
  {
    image: require("../images/SL-030821-41340-13.jpg"),
    title: "History Of Us",
    description:
      "With years of experience, we've built a reputation for delivering exceptional tech support services.",
  },
];

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {aboutItems.map((item, index) => (
          <div key={index} className="about-item">
            <img src={item.image} alt={item.title} className="about-image" />
            <h3 className="about-title">{item.title}</h3>
            <p className="about-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
