// src/components/Navbar.js
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">WEAR TREND</div>

        {/* Mobile menu button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`menu-icon ${isMenuOpen ? "open" : ""}`}></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a href="/" className="nav-link">
            HOME
          </a>
          <a href="/all-clothing" className="nav-link">
            ALL CLOTHING
          </a>
          <a href="/women" className="nav-link">
            WOMEN
          </a>
          <a href="/men" className="nav-link">
            MEN
          </a>
          <a href="/kids" className="nav-link">
            KIDS
          </a>
          <a href="/login" className="nav-link login-btn">
            LOGIN
          </a>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px; /* This is causing the space */
          background: linear-gradient(to right, #8b4513, #a86935);
          color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%; /* Ensure full width */
          margin: 0; /* Remove any margin */
          box-sizing: border-box; /* Include padding in width calculation */
        }

        .logo {
          font-size: 22px;
          font-weight: bold;
          letter-spacing: 2px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1px;
          position: relative;
          padding: 5px 0;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: white;
          transition: width 0.3s;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .login-btn {
          background-color: rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          padding: 6px 16px;
          transition: background-color 0.3s;
        }

        .login-btn:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }

        /* Mobile menu button */
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          z-index: 100;
        }

        .menu-icon {
          display: block;
          width: 25px;
          height: 2px;
          background-color: white;
          position: relative;
          transition: background-color 0.3s;
        }

        .menu-icon::before,
        .menu-icon::after {
          content: "";
          position: absolute;
          width: 25px;
          height: 2px;
          background-color: white;
          transition: transform 0.3s;
        }

        .menu-icon::before {
          top: -8px;
        }

        .menu-icon::after {
          top: 8px;
        }

        .menu-icon.open {
          background-color: transparent;
        }

        .menu-icon.open::before {
          transform: rotate(45deg) translate(5px, 6px);
        }

        .menu-icon.open::after {
          transform: rotate(-45deg) translate(5px, -6px);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background: linear-gradient(to bottom, #8b4513, #a86935);
            flex-direction: column;
            justify-content: center;
            padding: 50px 0;
            transition: right 0.4s ease;
            gap: 40px;
          }

          .nav-links.active {
            right: 0;
          }

          .nav-link {
            font-size: 16px;
          }

          .login-btn {
            margin-top: 20px;
            padding: 8px 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
