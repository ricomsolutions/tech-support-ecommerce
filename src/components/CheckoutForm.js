// src/components/CheckoutForm.js
import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "../styles/CheckoutForm.css";
import axios from "axios";

const CheckoutForm = ({ selectedItem }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    const cardElement = elements.getElement(CardElement);

    try {
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        setError(error.message);
        setIsLoading(false);
        return;
      }

      await axios.post("http://localhost:5000/api/orders/create", {
        cartItems: [selectedItem],
        totalAmount: selectedItem.price,
        userId: "currentUserId", // Replace with actual user ID
        paymentMethod: paymentMethod.id,
      });

      setIsLoading(false);
    } catch (error) {
      setError("Order creation failed. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="payment-section">
        <CardElement className="card-input" />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button type="submit" className="submit-button" disabled={isLoading}>
        {isLoading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default CheckoutForm;
