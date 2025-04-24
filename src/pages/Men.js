// src/pages/Men.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalStyles from "../components/GlobalStyles";

const Men = () => {
  return (
    <div className="men-page">
      <GlobalStyles />
      <Navbar />
      
      <div className="page-header">
        <h1>Men's Collection</h1>
        <p>Discover the latest trends for men</p>
      </div>
      
      <div className="category-filters">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Shirts</button>
        <button className="filter-btn">Pants</button>
        <button className="filter-btn">Jackets</button>
        <button className="filter-btn">Accessories</button>
      </div>
      
      <div className="product-grid">
        <div className="product-card">
          <div className="product-image men-product-1"></div>
          <h3>Classic Oxford Shirt</h3>
          <p className="price">$45.99</p>
          <div className="color-options">
            <span className="color-dot blue"></span>
            <span className="color-dot black"></span>
            <span className="color-dot white"></span>
          </div>
        </div>
        
        <div className="product-card">
          <div className="product-image men-product-2"></div>
          <h3>Slim Fit Jeans</h3>
          <p className="price">$59.99</p>
          <div className="color-options">
            <span className="color-dot blue"></span>
            <span className="color-dot black"></span>
          </div>
        </div>
        
        <div className="product-card">
          <div className="product-image men-product-3"></div>
          <h3>Leather Jacket</h3>
          <p className="price">$129.99</p>
          <div className="color-options">
            <span className="color-dot brown"></span>
            <span className="color-dot black"></span>
          </div>
        </div>
        
        <div className="product-card">
          <div className="product-image men-product-4"></div>
          <h3>Casual Polo</h3>
          <p className="price">$34.99</p>
          <div className="color-options">
            <span className="color-dot green"></span>
            <span className="color-dot navy"></span>
            <span className="color-dot red"></span>
          </div>
        </div>
        
        <div className="product-card">
          <div className="product-image men-product-5"></div>
          <h3>Formal Trousers</h3>
          <p className="price">$69.99</p>
          <div className="color-options">
            <span className="color-dot gray"></span>
            <span className="color-dot black"></span>
            <span className="color-dot navy"></span>
          </div>
        </div>
        
        <div className="product-card">
          <div className="product-image men-product-6"></div>
          <h3>Casual Sneakers</h3>
          <p className="price">$79.99</p>
          <div className="color-options">
            <span className="color-dot white"></span>
            <span className="color-dot black"></span>
          </div>
        </div>
      </div>
      
      <div className="load-more">
        <button className="load-more-btn">Load More</button>
      </div>
      
      <Footer />
      
      <style jsx>{`
        .men-page {
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
        
        .category-filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 40px;
          padding: 0 20px;
        }
        
        .filter-btn {
          background: none;
          border: 2px solid #8B4513;
          color: #8B4513;
          padding: 8px 18px;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s;
          font-weight: 500;
        }
        
        .filter-btn:hover, .filter-btn.active {
          background: linear-gradient(to right, #8B4513, #a86935);
          color: white;
          border-color: transparent;
        }
        
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .product-card {
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          position: relative;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        }
        
        .product-image {
          height: 300px;
          background-color: #e5d6c9;
          background-size: cover;
          background-position: center;
        }
        
        .men-product-1 { background-image: url('/api/placeholder/280/300'); }
        .men-product-2 { background-image: url('/api/placeholder/280/300'); }
        .men-product-3 { background-image: url('/api/placeholder/280/300'); }
        .men-product-4 { background-image: url('/api/placeholder/280/300'); }
        .men-product-5 { background-image: url('/api/placeholder/280/300'); }
        .men-product-6 { background-image: url('/api/placeholder/280/300'); }
        
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
        
        .color-options {
          display: flex;
          gap: 5px;
          padding: 0 15px 15px;
        }
        
        .color-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: inline-block;
          cursor: pointer;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .blue { background-color: #3b82f6; }
        .black { background-color: #000000; }
        .white { background-color: #ffffff; }
        .brown { background-color: #8B4513; }
        .green { background-color: #10b981; }
        .navy { background-color: #1e3a8a; }
        .red { background-color: #ef4444; }
        .gray { background-color: #6b7280; }
        
        .load-more {
          text-align: center;
          margin: 50px 0;
        }
        
        .load-more-btn {
          background: linear-gradient(to right, #8B4513, #a86935);
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 500;
          transition: transform 0.3s, box-shadow 0.3s;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .load-more-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        }
        
        @media (max-width: 768px) {
          .product-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 15px;
          }
          
          .product-image {
            height: 200px;
          }
          
          .page-header h1 {
            font-size: 28px;
          }
          
          .page-header p {
            font-size: 16px;
          }
          
          .filter-btn {
            padding: 6px 14px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default Men;