import React from "react";
import "../styles/CustomerReviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment: "Excellent service! Highly recommended.",
    image: require("../images/Elisa.png"),
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    comment: "Great support and quick response.",
    image: require("../images/Miles.png"),
  },
  {
    id: 3,
    name: "Sam Wilson",
    rating: 5,
    comment: "Very professional and knowledgeable staff.",
    image: require("../images/Elisa.png"),
  },
  {
    id: 4,
    name: "Mark Jugo",
    rating: 4,
    comment: "Very professional and knowledgeable staff.",
    image: require("../images/Miles.png"),
  },
];

const CustomerReviews = () => {
  return (
    <section className="customer-reviews">
      <h2>Customer Reviews</h2>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img
              src={review.image}
              alt={review.name}
              className="review-image"
            />
            <h3 className="review-name">{review.name}</h3>
            <div className="review-rating">
              {[...Array(review.rating)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
              ))}
            </div>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
