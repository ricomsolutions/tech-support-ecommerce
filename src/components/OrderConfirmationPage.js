import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/OrderConfirmationPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const OrderConfirmationPage = () => {
  const location = useLocation();
  const { orderId, totalAmount, estimatedDeliveryDate } = location.state || {};

  return (
    <div className="order-confirmation-container">
      <div className="confirmation-card">
        <div className="success-icon-container">
          <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
        </div>

        <h1 className="confirmation-heading">Payment Successful!</h1>

        <p className="order-id">
          <strong>Order ID:</strong> {orderId || "N/A"}
        </p>

        <p className="total-amount">
          <strong>Total Amount Paid:</strong> ₵
          {totalAmount?.toFixed(2) || "0.00"}
        </p>

        <p className="delivery-date">
          <strong>Estimated Delivery Date:</strong>{" "}
          {estimatedDeliveryDate || "Pending"}
        </p>

        <div className="order-actions">
          <Link to="/profile/orders" className="view-order-button">
            View My Orders
          </Link>
          <Link to="/" className="continue-shopping-button">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
