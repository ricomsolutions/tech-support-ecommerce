import React from "react";
import image from "../images/portrait-handsome-young-dark-skinned-male-dressed-stylish-clothes-exclaiming-excitement-feeling-happy.jpg";
import "../styles/GetStarted.css";

const GetStarted = () => {
  return (
    <section className="get-started-section">
      <div
        className="content"
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <p className="ready-text">Ready to apply?</p>
        <h2>Get started today!</h2>
        <a className="start-application-button" href="/apply">
          Start Your Application
        </a>
      </div>
      <div className="image-container">
        <img
          src={image}
          alt="Get started today"
          className="get-started-image"
        />
      </div>
    </section>
  );
};

export default GetStarted;
