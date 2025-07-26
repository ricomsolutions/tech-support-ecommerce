// src/pages/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Cart.css';
import { useGoBack } from './utils';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate(); // Initialize navigate

  const handleOrderClick = (item) => {
    navigate('/checkout', { state: { selectedItem: item } });
  };

  const goBack = useGoBack('/');

  return (
    <div className="cart-page">
      <FontAwesomeIcon onClick={goBack} icon={faArrowLeft} className="back-icon" />

      <h2 className="cart-page-head">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="cart-page-text">Your cart is empty.</p>
      ) : (
        <div className="cart-items-container">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-specs">{item.specs}</p>
                <p className="cart-item-description">{item.description}</p>
                <h4 className="cart-item-price">₵{item.price}</h4>
                <button onClick={() => removeFromCart(item.id)} className="remove-button">
                  Remove
                </button>
                <button
                  onClick={() => handleOrderClick(item)} // Navigate to Checkout page
                  className="proceed-button"
                >
                  Order Item
                </button>
              </div>
            </div>
          ))}
          <button onClick={clearCart} className="clear-cart-button">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
