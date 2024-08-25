import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import the useCart hook
import "../styles/Navbar.css";

function Navbar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart(); // Use cart context

  useEffect(() => {
    // Check if user is logged in by checking for a token in localStorage
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Convert token to boolean
  }, []);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const applyBackgroundColor =
    location.pathname === "/about" ||
    location.pathname === "/contact" ||
    location.pathname === "/services" ||
    location.pathname === "/services/wifi-networks" ||
    location.pathname === "/services/home-security" ||
    location.pathname === "/services/computers-printers";

  return (
    <nav className={`navbar ${applyBackgroundColor ? "bg-colored" : ""}`}>
      <div className="logo">
        <a href="/">Ricom Solutions</a>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="dropdown">
          <a href="/services">Services</a>
          <div className="dropdown-content">
            <Link to="/services/wifi-networks">Wifi & Network</Link>
            <Link to="/services/home-security">Home Security</Link>
            <Link to="/services/computers-printers">Computers & Printers</Link>
          </div>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/technician">Become A Technician</Link>
        </li>
      </ul>
      <div className="icons">
        <FontAwesomeIcon
          icon={faSearch}
          className="search-icon"
          onClick={toggleSearch}
        />
        {searchVisible && (
          <input type="text" className="search-input" placeholder="Search..." />
        )}
        <Link to="/cart">
          <FontAwesomeIcon className="shopping-cart" icon={faCartShopping} />
          <span className="cart-count">{cartItems.length}</span>
        </Link>

        <div className="account-icon">
          <FontAwesomeIcon icon={faUser} />
          <div className="dropdown-content">
            {isAuthenticated ? (
              <>
                <Link to="/profile">My Profile</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/" onClick={handleLogout}>
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
