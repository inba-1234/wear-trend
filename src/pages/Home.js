// src/pages/Home.js
import React from "react";
import Navbar from "../components/Navbar";
import GlobalStyles from "../components/GlobalStyles";

const Home = () => {
  return (
    <div className="home-container">
      <GlobalStyles />
      <Navbar />

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>CLOTHING EVOLVED</h1>
          <p>High Quality, Affordable, Full Comfort</p>
          <a href="/all-clothing" className="shop-btn">SHOP ALL</a>
        </div>
      </div>

      <style jsx>{`
        .home-container {
          min-height: 100vh;
        }
        
        .hero {
          height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          position: relative;
          background-image: url('/api/placeholder/1200/800');
          background-size: cover;
          background-position: center;
        }
        
        .hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.4);
        }
        
        .hero-content {
          position: relative;
          z-index: 1;
        }
        
        .hero h1 {
          font-size: 48px;
          margin-bottom: 10px;
          letter-spacing: 3px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          animation: fadeInDown 1s ease-out;
        }
        
        .hero p {
          font-size: 18px;
          margin-bottom: 30px;
          animation: fadeInUp 1s ease-out;
        }
        
        .shop-btn {
          display: inline-block;
          background: linear-gradient(to right, #8B4513, #a86935);
          color: white;
          padding: 12px 30px;
          border: none;
          border-radius: 25px;
          font-size: 16px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          animation: fadeIn 1.2s ease-out;
        }
        
        .shop-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
        
        /* Animations */
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {          
          .hero h1 {
            font-size: 36px;
          }
          
          .hero p {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;