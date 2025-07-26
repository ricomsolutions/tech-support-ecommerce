import React, { useState, useEffect } from 'react';
import '../styles/ApplyPage.css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGoBack } from './utils';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  state: '',
};

const ApplyPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const goBack = useGoBack('/technician');

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        navigate('/technician-dashboard');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMsg, navigate]);

  const handleStartApplicationClick = () => {
    setShowForm(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, state } = value;
    if (!firstName || !lastName || !email || !phone || !state) {
      return 'Please fill out all required fields.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address.';
    }

    return null;
  };

  const handleSubmission = async (event) => {
    event.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    const validationError = validateForm();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/apply', value);

      if (res.status === 201) {
        setSuccessMsg('Application submitted successfully!');
        setValue(initialValues);
        setShowForm(false);
      } else {
        setErrorMsg(res.data.message || 'Submission failed.');
      }
    } catch (error) {
      console.error(error);
      setErrorMsg(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="apply-container">
      <FontAwesomeIcon onClick={goBack} icon={faArrowLeft} className="back-icon" />
      <h1 className="apply-heading">Become a Tech Today!</h1>
      <p className="apply-description">
        HelloTech is a nationwide, on-demand tech support platform. HelloTech provides affordable,
        same-day, on-site tech support services such as installations, setups, troubleshooting, and
        repairs. Our goal is to make technology accessible to everyone and{' '}
        <u>it all starts with you!</u>
      </p>

      {!showForm && !successMsg && (
        <button className="apply-button" onClick={handleStartApplicationClick}>
          Start Application
        </button>
      )}

      {showForm && (
        <div className="apply-form-container">
          <h2>Start Your Application</h2>

          <form className="apply-form" onSubmit={handleSubmission}>
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={value.firstName}
              onChange={handleChange}
              required
            />

            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={value.lastName}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={value.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={value.phone}
              onChange={handleChange}
              placeholder="(+233) 555-0123"
              required
            />

            <label htmlFor="state">Which state do you plan to primarily work in? *</label>
            <select id="state" name="state" value={value.state} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="GA">Greater Accra</option>
              <option value="AS">Ashanti</option>
              <option value="ER">Eastern</option>
              <option value="NR">Northern</option>
            </select>

            <div className="form-check">
              <input type="checkbox" id="agreement" name="agreement" required />
              <label htmlFor="agreement">
                I agree to allow my phone number to be used for calls or texts regarding my
                application. Message & data rates may apply.
              </label>
            </div>

            <br />
            {errorMsg && <p className="error-message">{errorMsg}</p>}
            {successMsg && <p className="success-message">{successMsg}</p>}

            <button type="submit" className="continue-button" disabled={loading}>
              {loading ? 'Submitting...' : 'Continue'}
            </button>
          </form>
        </div>
      )}

      <div className="apply-section">
        <h2>Why Become a Technician?</h2>
        <ul>
          <li>Set Your Own Schedule - Be your own boss and work whenever you want.</li>
          <li>Get Paid Weekly - Techs average GH₵500+ per job.</li>
          <li>Join the Community - Grow your skills and help people through tech.</li>
        </ul>
      </div>

      <div className="apply-section">
        <h2>The Role:</h2>
        <p className="apply-description">
          As a Technician, you'll help customers with device setup, troubleshooting, and
          installation. Pick jobs like:
        </p>
        <ul>
          <li>TV Mounting</li>
          <li>Computer/Printer/Networking Support</li>
          <li>Home Theater Installation</li>
          <li>Smart Home Installation</li>
          <li>In-Wall Cable Running</li>
        </ul>
      </div>

      <div className="apply-section">
        <h2>Requirements:</h2>
        <ul>
          <li>Knowledge of tech device installation and setup</li>
          <li>Positive attitude and willingness to help</li>
          <li>Access to transportation</li>
          <li>18+ years old</li>
        </ul>
      </div>
    </div>
  );
};

export default ApplyPage;
