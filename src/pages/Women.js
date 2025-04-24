// src/pages/Women.js
import React from "react";
import Navbar from "../components/Navbar";
import GlobalStyles from "../components/GlobalStyles";

import summerDress from "../assets/images_folder/WmenSummer.webp";
import casualJeans from "../assets/images_folder/WomenJean.webp";
import elegantBlouse from "../assets/images_folder/WomenBlouse.jpg";
import winterCoat from "../assets/images_folder/WomenCoat.webp";

const Women = () => {
    const products = [
        {
          name: "Summer Dress",
          price: "$49.99",
          image: summerDress
        },
        {
          name: "Casual Jeans",
          price: "$39.99",
          image: casualJeans
        },
        {
          name: "Elegant Blouse",
          price: "$29.99",
          image: elegantBlouse
        },
        {
          name: "Winter Coat",
          price: "$89.99",
          image: winterCoat
        }
      ];
  return (
    <div className="women-page">
      <GlobalStyles />
      <Navbar />

      <div className="page-header">
        <h1>Women's Collection</h1>
        <p>Discover the latest trends for women</p>
      </div>

      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div
              className="product-image"
              style={{
                backgroundImage: `url(${product.image})`,
                height: "250px",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;