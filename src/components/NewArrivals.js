import React from "react";
import "../styles/NewArrivals.css";

const newArrivals = [
  {
    id: 1,
    name: "Norton Security Suite",
    image: require("../images/norton_security_comprehensive_protection_against_malware_viruses_and_phishing-removebg-preview.png"),
  },
  {
    id: 2,
    name: "McAfee Total Protection",
    image: require("../images/mcafee_total_protection.png"),
  },
  {
    id: 3,
    name: "Malwarebytes Premium",
    image: require("../images/Malwarebytes Premium.png"),
  },
  {
    id: 4,
    name: "Kaspersky Internet Security",
    image: require("../images/Kaspersky Internet Security.png"),
  },
  {
    id: 5,
    name: "Bitdefender Total Security",
    image: require("../images/bitdefender_antivirus_plus.png"),
  },
];

const NewArrivals = () => {
  return (
    <section className="new-arrivals">
      <h2>New Arrivals Coming Soon</h2>
      <div className="new-arrivals-list">
        {newArrivals.map((product) => (
          <div key={product.id} className="new-arrival-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
