import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
            <Link to="/apply"><button>Apply for our Services</button></Link>
            <br /> <br />
      <div className="footer-container">
        {/* Footer Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>

         {/* Contact Info */}
            <div className="footer-contact">
                <p>Tel: 1(209)-822-2194 | <a href="mailto:enquiries@ugwumbacdiala.com">enquiries@ugwumbacdiala.com</a></p>
            </div>

        {/* License Number */}
        {/* <div className="footer-license">
          <h3>License Information</h3>
          <p>License No: <strong>10775 760-953-4853</strong></p>
        </div> */}
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 MBACAL Security & Investigations. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
