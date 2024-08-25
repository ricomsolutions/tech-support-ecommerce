import React from "react";
import "../styles/Testimonials.css";

const testimonials = [
  {
    id: 1,
    image: require("../images/Elisa.png"),
    name: "Harriett S",
    feedback: "This is the best service I have ever used!",
  },
  {
    id: 2,
    image: require("../images/Elisa.png"),
    name: "Larry Biotta",
    feedback: "Amazing experience with top-notch support.",
  },
  {
    id: 3,
    image: require("../images/Miles.png"),
    name: "Shirley W.",
    feedback: "Highly recommend to everyone!",
  },
  {
    id: 4,
    image: require("../images/Elisa.png"),
    name: "Ruth Carol",
    feedback:
      "Great Company to deal with. Always prompt and fixes all problems, however complex!",
  },
  {
    id: 5,
    image: require("../images/Elisa.png"),
    name: "Kojo Smith",
    feedback:
      "Best Services, polite and knowledgeable techs and fast service. Worth every penny!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Customer Testimonials</h2>
      <div className="testimonials-carousel">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-feedback">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
