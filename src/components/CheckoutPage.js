import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import useCart

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "../styles/CheckoutPage.css";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { removePurchasedItems } = useCart(); // Use the cart context

  const { selectedItem } = location.state || {};
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const price = selectedItem ? parseFloat(selectedItem.price) : 0;

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setError("Stripe has not loaded yet.");
      setLoading(false);
      return;
    }

    try {
      // 1. Create a Payment Intent by calling your backend
      const response = await axios.post(
        "http://localhost:5000/api/payment/create-payment-intent",
        {
          amount: price,
        }
      );

      const { clientSecret } = response.data;

      // 2. Confirm the card payment with the clientSecret from the backend
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: e.target.cardholderName.value,
              email: e.target.email.value,
              address: {
                line1: e.target.address.value,
              },
            },
          },
        }
      );

      if (error) {
        setError(error.message);
        setSuccess(false);
      } else if (paymentIntent.status === "succeeded") {
        // After successful payment, create the order in the backend
        const orderResponse = await axios.post(
          "http://localhost:5000/api/payment/create-order",
          {
            cartItems: [selectedItem],
            totalAmount: price,
            userId: "currentUserId", // Replace with actual user ID if available
            paymentMethod: paymentIntent.payment_method,
            cardholderName: e.target.cardholderName.value,
            email: e.target.email.value,
            billingAddress: e.target.address.value,
          }
        );

        setSuccess(true);
        setError("");

        // Remove purchased item(s) from the cart
        removePurchasedItems([selectedItem.id]);

        // Extract the order ID from the orderResponse
        const orderId = orderResponse.data.order._id;

        // Redirect to the order confirmation page after 5 seconds
        setTimeout(() => {
          navigate("/order-confirmation", {
            state: {
              orderDetails: orderResponse.data.order,
              orderId: orderId, // Pass the order ID to the confirmation page
              totalAmount: price, // Pass the total amount paid
            },
          });
        }, 5000); // Wait 5 seconds before redirecting
      }
    } catch (error) {
      setError("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-container">
      {selectedItem ? (
        <div className="checkout-item-card">
          <h2 className="item-heading">Order Summary</h2>
          <div className="item-details">
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="item-image"
            />
            <div className="item-info">
              <h3 className="item-name">{selectedItem.name}</h3>
              <p className="item-description">{selectedItem.description}</p>
              <p className="item-price">Price: ₵{price.toFixed(2)}</p>
              <p className="item-total">Total: ₵{price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No item selected.</p>
      )}

      <div className="payment-info-card">
        <h3>Payment Information</h3>
        <form onSubmit={handlePaymentSubmit} className="payment-form">
          <div className="form-group">
            <label htmlFor="cardholder-name">Cardholder Name</label>
            <input
              type="text"
              id="cardholder-name"
              name="cardholderName"
              placeholder="Enter the cardholder's name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Billing Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your billing address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="card-element">Card Details</label>
            <CardElement id="card-element" />
          </div>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">Redirecting...</div>}

          <button
            type="submit"
            className="pay-button"
            disabled={loading || !stripe}
          >
            {loading ? <span className="spinner"></span> : "Pay Now"}
          </button>
        </form>
      </div>

      {loading && <div className="loading-overlay">Processing...</div>}
    </div>
  );
};

export default CheckoutPage;
