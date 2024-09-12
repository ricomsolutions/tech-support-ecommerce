// src/context/CartContext.js
import React, { useState, useEffect, createContext, useContext } from "react";

// Create Cart Context
const CartContext = createContext();

// Custom Hook to use Cart Context
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Retrieve cart from localStorage when the app loads
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Update localStorage whenever the cartItems state changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // New function to remove only purchased items
  const removePurchasedItems = (purchasedItems) => {
    setCartItems(cartItems.filter((item) => !purchasedItems.includes(item.id)));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        removePurchasedItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
