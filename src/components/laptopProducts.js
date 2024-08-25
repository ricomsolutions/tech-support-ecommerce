// src/data/laptopProducts.js
const laptopProducts = [
  {
    id: 1,
    name: "Gaming Laptop",
    specs: "16GB RAM, 1TB SSD, RTX 3070",
    description: "High-performance laptop suitable for gaming and heavy tasks.",
    image: require("../images/gaming_laptop.png"),
    price: "$1,299.99",
  },
  {
    id: 2,
    name: "Business Laptop",
    specs: "8GB RAM, 512GB SSD, Intel i7",
    description: "Reliable and efficient laptop for business professionals.",
    image: require("../images/bussiness_laptop.png"),
    price: "$999.99",
  },
  {
    id: 3,
    name: "Ultrabook",
    specs: "8GB RAM, 256GB SSD, Intel i5",
    description: "Lightweight and portable, perfect for everyday use.",
    image: require("../images/ultrabook.jpg"),
    price: "$799.99",
  },
];

export default laptopProducts;
