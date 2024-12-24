import React from "react";
import "./Navbar.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="left-section">
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <span className="contact-text">+90 123 456 7890</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <span className="contact-text">+90 987 654 3210</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span className="contact-text">info@example.com</span>
          </div>
        </div>
        <div className="right-section social-icons">
          <a href="#" className="social-link"><FaFacebookF /></a>
          <a href="#" className="social-link"><FaTwitter /></a>
          <a href="#" className="social-link"><FaInstagram /></a>
          <a href="#" className="social-link"><FaLinkedinIn /></a>
          <a href="#" className="social-link"><FaYoutube /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
