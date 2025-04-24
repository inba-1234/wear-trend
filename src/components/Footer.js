// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>WEAR TREND</h3>
          <p>High Quality, Affordable, Full Comfort clothing for everyone.</p>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Pinterest">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>SHOP</h4>
          <ul className="footer-links">
            <li><a href="/all-clothing">All Clothing</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/new-arrivals">New Arrivals</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>HELP</h4>
          <ul className="footer-links">
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/shipping">Shipping & Returns</a></li>
            <li><a href="/size-guide">Size Guide</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/sustainability">Sustainability</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} WEAR TREND. All Rights Reserved.</p>
        <div className="payment-methods">
          <span className="payment-icon">Visa</span>
          <span className="payment-icon">Mastercard</span>
          <span className="payment-icon">PayPal</span>
          <span className="payment-icon">Apple Pay</span>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(to right, #8B4513, #a86935);
          color: white;
          padding: 50px 0 0;
          margin-top: 50px;
        }
        
        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .footer-section {
          flex: 1;
          min-width: 200px;
          margin-bottom: 30px;
          padding-right: 20px;
        }
        
        .footer-section h3 {
          margin-top: 0;
          margin-bottom: 15px;
          font-size: 20px;
          letter-spacing: 1px;
        }
        
        .footer-section h4 {
          margin-top: 0;
          margin-bottom: 15px;
          font-size: 16px;
          letter-spacing: 1px;
        }
        
        .footer-section p {
          margin-bottom: 20px;
          line-height: 1.6;
          opacity: 0.9;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 10px;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s;
        }
        
        .footer-links a:hover {
          color: white;
          text-decoration: underline;
        }
        
        .social-icons {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }
        
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: background-color 0.3s;
        }
        
        .social-icon:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-bottom p {
          font-size: 14px;
          margin: 0;
        }
        
        .payment-methods {
          display: flex;
          gap: 10px;
        }
        
        .payment-icon {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 12px;
        }
        
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
          }
          
          .footer-section {
            margin-bottom: 30px;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;