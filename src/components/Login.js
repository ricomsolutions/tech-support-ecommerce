import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "../styles/Login.css";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Reset errors
    setErrors({});

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        alert("Login successful!");
        navigate("/"); // Redirect to the home page after login
      }
    } catch (err) {
      // Handle error response from the backend
      if (err.response && err.response.data) {
        const backendErrors = err.response.data.errors || {}; // Use empty object if errors is undefined
        setErrors(backendErrors);
      } else {
        alert("Error logging in user");
      }
    }
  };

  return (
    <div className="login-page">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="back-arrow"
        onClick={() => navigate("/")}
      />
      <div className="login-container">
        <h2>Login</h2>
        {errors.email && <p className="error">{errors.email}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <div className="password-field">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEyeSlash : faEye}
              className="password-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit">Login</button>
        </form>
        <p>
          Create new account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
