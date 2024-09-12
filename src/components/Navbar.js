import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Navbar.css";

function Navbar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track user login status
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  // Check if the user is logged in by looking for a token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true); // User is logged in
    } else {
      setIsAuthenticated(false); // User is not logged in
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token on logout
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <nav
      className={`navbar ${
        location.pathname === "/about" ||
        location.pathname === "/contact" ||
        location.pathname === "/services" ||
        location.pathname === "/services/wifi-networks" ||
        location.pathname === "/services/home-security" ||
        location.pathname === "/services/computers-printers"
          ? "bg-colored"
          : ""
      }`}
    >
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
          <div className="cart-icon">
            <FontAwesomeIcon className="shopping-cart" icon={faCartShopping} />
            <span className="cart-count">{cartItems.length}</span>
          </div>
        </Link>
        <div className="account-icon">
          <FontAwesomeIcon icon={faUser} />
          <div className="dropdown-content">
            {isAuthenticated ? (
              <>
                <Link to="/profile">My Profile</Link>
                <Link to="/settings">Settings</Link>
                <a href="/login" onClick={handleLogout}>
                  Logout
                </a>
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
