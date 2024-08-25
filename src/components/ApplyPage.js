import React, { useState } from "react";
import "../styles/ApplyPage.css";

const ApplyPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleStartApplicationClick = () => {
    setShowForm(true);
  };

  return (
    <div className="apply-container">
      <h1 className="apply-heading">Become a Tech Today!</h1>
      <p className="apply-description">
        HelloTech is a nationwide, on-demand tech support platform. HelloTech
        provides affordable, same-day, on-site tech support services such as
        installations, setups, troubleshooting, and repairs. Our goal is to make
        technology accessible to everyone and <u>it all starts with you!</u>
      </p>

      <button className="apply-button" onClick={handleStartApplicationClick}>
        Start Application
      </button>

      {showForm && (
        <div className="apply-form-container">
          <h2>Start Your Application</h2>
          <form className="apply-form">
            <label htmlFor="firstName">First Name *</label>
            <input type="text" id="firstName" name="firstName" required />

            <label htmlFor="lastName">Last Name *</label>
            <input type="text" id="lastName" name="lastName" required />

            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(+233) 555-0123"
              required
            />

            <label htmlFor="state">
              Which state do you plan to primarily work in? *
            </label>
            <select id="state" name="state" required>
              <option value="">Select</option>
              <option value="CC">Cape Coast</option>
            </select>

            <div className="form-check">
              <input type="checkbox" id="agreement" name="agreement" required />
              <label htmlFor="agreement">
                I agree to allow my phone number to be used for calls or texts
                regarding my application. Message & data rates may apply.
              </label>
            </div>

            <button type="submit" className="continue-button">
              Continue
            </button>
          </form>
        </div>
      )}

      <div className="apply-section">
        <h2>Why Become a Technician?</h2>
        <ul>
          <li>
            Set Your Own Schedule - Be your own boss and work whenever you want.
            Select the jobs that fit your schedule and skill-set.
          </li>
          <li>
            Get Paid Weekly - Techs average GH₵500+ per job. Add skills to your
            profile to increase your weekly earnings.
          </li>
          <li>
            Join the Community - Grow your skill-set and network while bettering
            people's lives through tech.
          </li>
        </ul>
      </div>

      <div className="apply-section">
        <h2>The Role:</h2>
        <p className="apply-description">
          As a Technician, you will provide on-site user support for customers
          in need of help with their various technology devices and systems. You
          will be able to select from a range of jobs such as:
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
          <li>
            Understanding of various technology devices, including installation,
            set up and security
          </li>
          <li>Great attitude and enjoy helping people!</li>
          <li>Car/transportation required</li>
          <li>Must be at least 18 years of age</li>
        </ul>
      </div>
    </div>
  );
};

export default ApplyPage;
