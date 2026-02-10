import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiMail } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">ÉVORA</h3>
          <p className="footer-desc">Elegance Beyond Ordinary.</p>
         {/*} <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <FiFacebook size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <FiInstagram size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <FiTwitter size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Email">
              <FiMail size={20} />
            </a>
          </div>*/}
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">QUICK LINKS</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">ALL PRODUCTS</Link>
            </li>
            <li>
              <Link to="/">SKINCARE</Link>
            </li>
            <li>
              <Link to="/">ACCESSORIES</Link>
            </li>
            <li>
              <Link to="/">CASUAL WEAR</Link>
            </li>
            <li>
              <Link to="/products">CONTACT</Link>
            </li>
          </ul>
        </div>

        {/*<div className="footer-section">
          <h4 className="footer-subtitle">NEWSLETTER</h4>
          <p className="newsletter-desc">
            Subscribe to get special offers and updates
          </p>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>*/}

        <div className="footer-section footer-connect">
          <h4 className="footer-subtitle">CONNECT WITH US</h4>
          <div className="social-links social-right">
            <a
              href="https://facebook.com"
              className="social-link"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              className="social-link"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram size={20} />
            </a>
            <a
              href="https://tiktok.com"
              className="social-link"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTiktok size={20} />
            </a>
            <a
              href="mailto:info@evora.com"
              className="social-link"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Évora. All rights reserved.</p>
        <div className="footer-policies">
          <a href="#/">Privacy Policy</a>
          <span>|</span>
          <a href="#/">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
