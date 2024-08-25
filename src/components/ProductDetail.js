// src/pages/ProductDetail.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import laptopProducts from "../components/laptopProducts";
import securityCameraProducts from "../components/securityCameraProducts";
import vrHeadsetProducts from "../components/vrHeadsetProducts";
import smartphoneProducts from "../components/smartphoneProducts";
import "../styles/ProductDetail.css";

const productData = {
  laptop: laptopProducts,
  securityCameras: securityCameraProducts,
  vrHeadsets: vrHeadsetProducts,
  smartPhones: smartphoneProducts,
};

const ProductDetail = () => {
  const { category } = useParams();
  const { addToCart } = useCart();
  const [message, setMessage] = useState("");
  const products = productData[category];

  if (!products) return <p>No products found for this category.</p>;

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      specs: product.specs,
      description: product.description,
    });
    setMessage(`"${product.name}" has been added to the cart.`);
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    <section className="product-detail">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h2>
      {message && <p className="success-message">{message}</p>}
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-specs">{product.specs}</p>
            <p className="product-description">{product.description}</p>
            <h4 className="product-price">{product.price}</h4>
            <button
              onClick={() => handleAddToCart(product)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDetail;
