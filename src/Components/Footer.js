import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Rudra Electropower</h3>
            <p>Providing premium oil filtration services since 2010.</p>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>Email: info@rudraelectropower.com</p>
            <p>Phone: +91 123-456-7890</p>
            <p>Address: 123 Industrial Lane, Mumbai, MH 400001, India</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <p className="footer-bottom">© 2025 Rudra Electropower. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;