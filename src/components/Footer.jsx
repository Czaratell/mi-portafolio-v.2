import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          CZ<span>.</span>
        </div>

        <p className="footer-info">
          Cristian Daniel Zárate · Ingeniería Informática
        </p>

        <div className="footer-quote">
          <p>"The measure of a man is what he does with power."</p>
          <span className="quote-author">- Platón</span>
        </div>

        <p className="footer-copy">
          © 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;