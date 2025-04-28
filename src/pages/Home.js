import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalStyles from "../components/GlobalStyles";
import { Link } from "react-router-dom";

// Import placeholder images (replace with your actual images)
import HeroImage from "../assets/background.jpg";
import DressShirt from "../assets/images_folder/DressShirt.webp";
import FloralDress from "../assets/images_folder/SummarFLoral.webp";
import DinoPajamas from "../assets/images_folder/DinoPajamas.webp";
import PufferVest from "../assets/images_folder/PufferVest.webp";
import WrapDress from "../assets/images_folder/WrapDress.webp";
import CartoonHoodie from "../assets/images_folder/CartoonHoodie.webp";

const Home = () => {
  return (
    <div className="home-container">
      <GlobalStyles />
      <Navbar />

      {/* Hero Section */}
      <div className="hero" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="hero-content">
          <h1>CLOTHING EVOLVED</h1>
          <p>High Quality, Affordable, Full Comfort</p>
          <Link to="/all-clothing" className="shop-btn">
            SHOP ALL
          </Link>
        </div>
      </div>

      {/* Category Sections */}
      <div className="category-section">
        <h2 className="section-title">SHOP BY CATEGORY</h2>
        <div className="category-cards">
          <div className="category-card">
            <div className="category-image">
              <img src={DressShirt} alt="Men's Clothing" />
            </div>
            <div className="category-info">
              <h3>MEN</h3>
              <p>Modern styles for the confident man</p>
              <Link to="/men" className="category-btn">
                SHOP MEN
              </Link>
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src={FloralDress} alt="Women's Clothing" />
            </div>
            <div className="category-info">
              <h3>WOMEN</h3>
              <p>Elegant options for every occasion</p>
              <Link to="/women" className="category-btn">
                SHOP WOMEN
              </Link>
            </div>
          </div>

          <div className="category-card">
            <div className="category-image">
              <img src={DinoPajamas} alt="Kids' Clothing" />
            </div>
            <div className="category-info">
              <h3>KIDS</h3>
              <p>Comfortable clothes for active children</p>
              <Link to="/kids" className="category-btn">
                SHOP KIDS
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* New Arrivals Cards Section */}
      <div className="new-arrivals-section">
        <h2 className="section-title">NEW ARRIVALS</h2>
        <div className="new-arrivals-cards">
          <div className="product-card">
            <div className="product-image">
              <img src={PufferVest} alt="Puffer Vest" />
            </div>
            <div className="product-info">
              <h3>Puffer Vest</h3>
              <p className="product-category">Men</p>
              <p className="product-price">$59.99</p>
              <div className="product-colors">
                <span className="color-dot navy"></span>
                <span className="color-dot black"></span>
                <span className="color-dot olive"></span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src={WrapDress} alt="Wrap Dress" />
            </div>
            <div className="product-info">
              <h3>Wrap Dress</h3>
              <p className="product-category">Women</p>
              <p className="product-price">$74.99</p>
              <div className="product-colors">
                <span className="color-dot black"></span>
                <span className="color-dot navy"></span>
                <span className="color-dot emerald"></span>
                <span className="color-dot burgundy"></span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src={CartoonHoodie} alt="Cartoon Character Hoodie" />
            </div>
            <div className="product-info">
              <h3>Cartoon Character Hoodie</h3>
              <p className="product-category">Kids</p>
              <p className="product-price">$32.99</p>
              <div className="product-colors">
                <span className="color-dot blue"></span>
                <span className="color-dot red"></span>
                <span className="color-dot purple"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h2>JOIN OUR MAILING LIST</h2>
          <p>Subscribe to receive updates on new arrivals and special offers</p>
          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed successfully!");
              e.target.reset();
            }}
          >
            <input type="email" placeholder="Your email address" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* CSS Styles */}
      <style jsx>{`
        .home-container {
          font-family: Arial, sans-serif;
          max-width: 100%;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          color: #333;
        }

        /* Hero Section */
        .hero {
          height: 80vh;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
        }

        .hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
        }

        .hero-content {
          z-index: 10;
          max-width: 800px;
          padding: 0 20px;
        }

        .hero h1 {
          font-size: 3.5rem;
          margin-bottom: 20px;
          letter-spacing: 2px;
          font-weight: 700;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .hero p {
          font-size: 1.5rem;
          margin-bottom: 30px;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }

        .shop-btn {
          display: inline-block;
          padding: 15px 30px;
          background-color: #8b4513;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 600;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .shop-btn:hover {
          background-color: #6d350f;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        /* Category Section */
        .category-section {
          padding: 60px 5% 80px;
          background-color: #f9f5f0;
        }

        .section-title {
          text-align: center;
          font-size: 2rem;
          color: #333;
          margin-bottom: 40px;
          letter-spacing: 1px;
          position: relative;
        }

        .section-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background-color: #8b4513;
        }

        .category-cards {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 30px;
        }

        .category-card {
          flex: 1;
          min-width: 300px;
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .category-card:hover {
          transform: translateY(-10px);
        }

        .category-image {
          height: 250px;
          overflow: hidden;
        }

        .category-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .category-card:hover .category-image img {
          transform: scale(1.1);
        }

        .category-info {
          padding: 25px;
          text-align: center;
        }

        .category-info h3 {
          font-size: 1.8rem;
          margin-bottom: 10px;
          color: #333;
        }

        .category-info p {
          color: #666;
          margin-bottom: 20px;
        }

        .category-btn {
          display: inline-block;
          padding: 12px 25px;
          background-color: #8b4513;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 600;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .category-btn:hover {
          background-color: #6d350f;
        }

        /* Featured Section */
        .featured-section {
          padding: 60px 5% 80px;
        }

        .featured-banner {
          height: 400px;
          background-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.3)
            ),
            url("../assets/images_folder/featured-banner.webp");
          background-size: cover;
          background-position: center;
          border-radius: 8px;
          display: flex;
          align-items: center;
          padding: 0 5%;
        }

        .featured-content {
          max-width: 500px;
          color: white;
        }

        .featured-content h3 {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .featured-content p {
          font-size: 1.2rem;
          margin-bottom: 25px;
        }

        .featured-btn {
          display: inline-block;
          padding: 14px 28px;
          background-color: white;
          color: #333;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 600;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .featured-btn:hover {
          background-color: #f0f0f0;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        /* New Arrivals Section */
        .new-arrivals-section {
          padding: 60px 5% 80px;
          background-color: #f9f9f9;
        }

        .new-arrivals-cards {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 30px;
        }

        .product-card {
          flex: 1;
          min-width: 280px;
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }

        .product-image {
          height: 280px;
          overflow: hidden;
          position: relative;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-card:hover .product-image img {
          transform: scale(1.08);
        }

        .quick-view {
          position: absolute;
          bottom: -50px;
          left: 0;
          width: 100%;
          background-color: rgba(139, 69, 19, 0.85);
          color: white;
          text-align: center;
          padding: 12px 0;
          transition: bottom 0.3s ease;
        }

        .product-card:hover .quick-view {
          bottom: 0;
        }

        .quick-view a {
          color: white;
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 1px;
          font-size: 0.9rem;
        }

        .product-info {
          padding: 20px;
        }

        .product-info h3 {
          font-size: 1.2rem;
          margin-bottom: 5px;
          color: #333;
          font-weight: 600;
        }

        .product-category {
          color: #888;
          font-size: 0.9rem;
          margin-bottom: 5px;
        }

        .product-price {
          font-weight: 600;
          color: #8b4513;
          margin-bottom: 10px;
          font-size: 1.1rem;
        }

        .product-colors {
          display: flex;
          gap: 8px;
        }

        .color-dot {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          display: inline-block;
        }

        .color-dot.navy {
          background-color: #001f3f;
        }
        .color-dot.black {
          background-color: #000;
        }
        .color-dot.olive {
          background-color: #3d9970;
        }
        .color-dot.emerald {
          background-color: #2ecc71;
        }
        .color-dot.burgundy {
          background-color: #800020;
        }
        .color-dot.blue {
          background-color: #0074d9;
        }
        .color-dot.red {
          background-color: #ff4136;
        }
        .color-dot.purple {
          background-color: #b10dc9;
        }

        /* Newsletter Section */
        .newsletter-section {
          padding: 60px 5%;
          background-color: #333;
          color: white;
          text-align: center;
        }

        .newsletter-content {
          max-width: 700px;
          margin: 0 auto;
        }

        .newsletter-content h2 {
          font-size: 2rem;
          margin-bottom: 15px;
        }

        .newsletter-content p {
          margin-bottom: 30px;
          color: #ccc;
        }

        .newsletter-form {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
        }

        .newsletter-form input {
          flex: 1;
          padding: 15px;
          border: none;
          border-radius: 4px 0 0 4px;
          font-size: 16px;
        }

        .newsletter-form button {
          padding: 0 25px;
          background-color: #8b4513;
          color: white;
          border: none;
          border-radius: 0 4px 4px 0;
          font-weight: 600;
          letter-spacing: 1px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .newsletter-form button:hover {
          background-color: #6d350f;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }

          .hero p {
            font-size: 1.2rem;
          }

          .category-cards,
          .new-arrivals-cards {
            flex-direction: column;
          }

          .category-card,
          .product-card {
            width: 100%;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .newsletter-form input {
            border-radius: 4px;
            margin-bottom: 10px;
          }

          .newsletter-form button {
            border-radius: 4px;
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
