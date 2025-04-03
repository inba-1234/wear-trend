import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles.css"; // Ensure you create a matching CSS file

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">WEAR TREND</div>
        <div className="nav-links">
          <Link to="/all-clothing">ALL CLOTHING</Link>
          <Link to="/women">WOMEN</Link>
          <Link to="/men">MEN</Link>
          <Link to="/kids">KIDS</Link>
          <Link to="/login">
            <img
              src="../assets/images_folder/user-solid.svg"
              alt="User"
              className="user-icon"
            />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1>CLOTHING EVOLVED</h1>
        <p>High Quality, Affordable, Full Comfort</p>
        <Link to="/all-clothing" className="btn">SHOP ALL</Link>
      </div>
    </div>
  );
};

export default Home;
