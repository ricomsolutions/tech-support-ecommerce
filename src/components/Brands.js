import React from "react";
import "../styles/Brands.css";

const brands = [
  { id: 1, name: "Brand 1", logo: require("../images/target.png") },
  { id: 2, name: "Brand 2", logo: require("../images/xfinity.png") },
  { id: 3, name: "Brand 3", logo: require("../images/hellotech.png") },
  { id: 4, name: "Brand 4", logo: require("../images/ricom.png") },
  { id: 5, name: "Brand 5", logo: require("../images/Samsung.png") },
  { id: 6, name: "Brand 6", logo: require("../images/techcrunch.png") },
];

const Brands = () => {
  return (
    <section className="brands">
      <h2>Partnered With</h2>
      <div className="brands-list">
        {brands.map((brand) => (
          <div key={brand.id} className="brand-item">
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
