import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">WEAR TREND</div>
        <div className="nav-links">
          <a href="/all-clothing" className="nav-link">ALL CLOTHING</a>
          <a href="/women" className="nav-link">WOMEN</a>
          <a href="/men" className="nav-link">MEN</a>
          <a href="/kids" className="nav-link">KIDS</a>
          <a href="/login" className="nav-link">LOGIN</a>
        </div>
      </nav>

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
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
          background-color: #8B4513;
          color: white;
        }
        
        .logo {
          font-size: 20px;
          font-weight: bold;
          letter-spacing: 1px;
        }
        
        .nav-links {
          display: flex;
          align-items: center;
          gap: 25px;
        }
        
        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: opacity 0.2s;
          padding: 0 5px;
        }
        
        .nav-link:hover {
          opacity: 0.8;
        }
        
        // .hero {
        //   height: 80vh;
        //   display: flex;
        //   justify-content: center;
        //   align-items: center;
        //   text-align: center;
        //   color: white;
        //   position: relative;
        //   background-image: url('/api/placeholder/1200/800');
        //   background-size: cover;
        //   background-position: center;
        // }
        
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
          letter-spacing: 2px;
        }
        
        .hero p {
          font-size: 18px;
          margin-bottom: 30px;
        }
        
        .shop-btn {
          display: inline-block;
          background-color: #8B4513;
          color: white;
          padding: 12px 30px;
          border: none;
          font-size: 16px;
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.3s;
        }
        
        .shop-btn:hover {
          background-color: #724214;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .nav-links {
            gap: 15px;
          }
          
          .nav-link {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;