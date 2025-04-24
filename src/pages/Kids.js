// src/pages/Kids.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalStyles from "../components/GlobalStyles";

const Kids = () => {
  return (
    <div className="kids-page">
      <GlobalStyles />
      <Navbar />
      
      <div className="page-header">
        <h1>Kids Collection</h1>
        <p>Fun and comfortable clothing for your little ones</p>
      </div>
      
      <div className="age-groups">
        <div className="age-group">
          <div className="age-image babies"></div>
          <h3>Babies</h3>
          <a href="/kids/babies" className="age-link">Shop Now</a>
        </div>
        
        <div className="age-group">
          <div className="age-image toddlers"></div>
          <h3>Toddlers</h3>
          <a href="/kids/toddlers" className="age-link">Shop Now</a>
        </div>
        
        <div className="age-group">
          <div className="age-image children"></div>
          <h3>Children</h3>
          <a href="/kids/children" className="age-link">Shop Now</a>
        </div>
      </div>
      
      <div className="featured-section">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-image kids-product-1"></div>
            <div className="product-badge">New</div>
            <h3>Colorful T-Shirt</h3>
            <p className="price">$19.99</p>
          </div>
          
          <div className="product-card">
            <div className="product-image kids-product-2"></div>
            <h3>Denim Overalls</h3>
            <p className="price">$34.99</p>
          </div>
          
          <div className="product-card">
            <div className="product-image kids-product-3"></div>
            <div className="product-badge sale">Sale</div>
            <h3>Cute Dress</h3>
            <p className="price"><span className="original-price">$29.99</span> $24.99</p>
          </div>
          
          <div className="product-card">
            <div className="product-image kids-product-4"></div>
            <h3>Cozy Sweater</h3>
            <p className="price">$27.99</p>
          </div>
          
          <div className="product-card">
            <div className="product-image kids-product-5"></div>
            <h3>Dinosaur Pajamas</h3>
            <p className="price">$22.99</p>
          </div>
          
          <div className="product-card">
            <div className="product-image kids-product-6"></div>
            <div className="product-badge sale">Sale</div>
            <h3>Summer Shorts</h3>
            <p className="price"><span className="original-price">$21.99</span> $17.99</p>
          </div>
        </div>
      </div>
      
      <div className="banner">
        <div className="banner-content">
          <h2>Back to School Sale!</h2>
          <p>Get 20% off on all kids clothing</p>
          <a href="/kids/sale" className="banner-btn">Shop Sale</a>
        </div>
      </div>
      
      <Footer />
      
      <style jsx>{`
        .kids-page {
          min-height: 100vh;
          padding-bottom: 50px;
        }

        .page-header {
          text-align: center;
          padding: 50px 0 30px;
          color: #8B4513;
        }
        
        .page-header h1 {
          font-size: 36px;
          margin-bottom: 10px;
        }
        
        .page-header p {
          font-size: 18px;
          opacity: 0.8;
        }
        
        .age-groups {
          display: flex;
          justify-content: center;
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto 60px;
          padding: 0 20px;
          flex-wrap: wrap;
        }
        
        .age-group {
          flex: 1;
          min-width: 250px;
          max-width: 350px;
          text-align: center;
          background-color: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }
        
        .age-group:hover {
          transform: translateY(-5px);
        }
        
        .age-image {
          height: 200px;
          background-size: cover;
          background-position: center;
        }
        
        .babies { background-image: url('/api/placeholder/350/200'); }
        .toddlers { background-image: url('/api/placeholder/350/200'); }
        .children { background-image: url('/api/placeholder/350/200'); }
        
        .age-group h3 {
          margin: 15px 0;
          font-size: 20px;
          color: #8B4513;
        }
        
        .age-link {
          display: inline-block;
          color: white;
          background: linear-gradient(to right, #8B4513, #a86935);
          text-decoration: none;
          padding: 8px 25px;
          border-radius: 20px;
          margin-bottom: 20px;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .age-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        
        .featured-section {
          max-width: 1200px;
          margin: 0 auto 60px;
          padding: 0 20px;
        }
        
        .featured-section h2 {
          text-align: center;
          color: #8B4513;
          margin-bottom: 30px;
          position: relative;
          display: inline-block;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .featured-section h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(to right, #8B4513, #a86935);
        }
        
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .product-card {
          position: relative;
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        }
        
        .product-image {
          height: 250px;
          background-color: #e5d6c9;
          background-size: cover;
          background-position: center;
        }
        
        .kids-product-1 { background-image: url('/api/placeholder/250/250'); }
        .kids-product-2 { background-image: url('/api/placeholder/250/250'); }
        .kids-product-3 { background-image: url('/api/placeholder/250/250'); }
        .kids-product-4 { background-image: url('/api/placeholder/250/250'); }
        .kids-product-5 { background-image: url('/api/placeholder/250/250'); }
        .kids-product-6 { background-image: url('/api/placeholder/250/250'); }
        
        .product-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: #3b82f6;
          color: white;
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .product-badge.sale {
          background-color: #ef4444;
        }
        
        .product-card h3 {
          padding: 15px 15px 5px;
          margin: 0;
          font-size: 16px;
          color: #333;
        }
        
        .price {
          padding: 0 15px 15px;
          margin: 0;
          font-weight: bold;
          color: #8B4513;
        }
        
        .original-price {
          text-decoration: line-through;
          color: #777;
          margin-right: 5px;
          font-weight: normal;
        }
        
        .banner {
          background: linear-gradient(to right, #8B4513, #a86935);
          color: white;
          padding: 50px 20px;
          margin-bottom: 60px;
          text-align: center;
        }
        
        .banner-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .banner h2 {
          font-size: 32px;
          margin-bottom: 10px;
        }
        
        .banner p {
          font-size: 18px;
          margin-bottom: 20px;
          opacity: 0.9;
        }
        
        .banner-btn {
          display: inline-block;
          background-color: white;
          color: #8B4513;
          text-decoration: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-weight: 500;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .banner-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        }
        
        @media (max-width: 768px) {
          .age-groups {
            flex-direction: column;
            align-items: center;
          }
          
          .age-group {
            width: 100%;
          }
          
          .product-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 15px;
          }
          
          .product-image {
            height: 180px;
          }
          
          .page-header h1 {
            font-size: 28px;
          }
          
          .page-header p {
            font-size: 16px;
          }
          
          .banner h2 {
            font-size: 24px;
          }
          
          .banner p {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Kids;