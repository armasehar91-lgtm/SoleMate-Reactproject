
import React, { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Thank you for subscribing to SoleMate!");
    setEmail("");
  };

  return (
    <footer className="footer">

      <div className="footer-main">

        {/* BRAND INFORMATION */}
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            <span className="footer-logo-icon">S</span>
            <span>
              Sole<span>Mate</span>
              <small>STEP INTO STYLE</small>
            </span>
          </a>

          <p>
            Discover footwear that matches your personality.
            At SoleMate, we bring comfort, confidence and style
            together with every step.
          </p>

          <div className="footer-socials">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">IG</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">FB</a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">PI</a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">TK</a>
          </div>
        </div>

        {/* SHOP LINKS */}
        <div className="footer-column">
          <h3>SHOP</h3>
          <a href="#shop">All Products</a>
          <a href="#shop">Men's Collection</a>
          <a href="#shop">Women's Collection</a>
          <a href="#shop">Slides</a>
          <a href="#shop">New Arrivals</a>
        </div>

        {/* CUSTOMER SERVICE */}
        <div className="footer-column">
          <h3>HELP & SUPPORT</h3>
          <a href="#contact">Contact Us</a>
          <a href="#contact">Shipping Information</a>
          <a href="#contact">Returns & Exchanges</a>
          <a href="#contact">FAQs</a>
          <a href="#contact">Size Guide</a>
        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact" id="contact">
          <h3>GET IN TOUCH</h3>
          <p><span>✉</span> support@solemate.com</p>
          <p><span>☎</span> +92 300 1234567</p>
          <p><span>⌖</span> Pakistan</p>
          <p><span>◷</span> Monday – Saturday</p>
        </div>

      </div>

      {/* NEWSLETTER */}
      <div className="footer-newsletter">
        <div>
          <p className="footer-small-title">STAY IN STYLE</p>
          <h2>Get 10% OFF your first order.</h2>
          <p>Subscribe to receive new arrivals, exclusive offers and updates.</p>
        </div>

        <form onSubmit={handleSubscribe}>
          <div className="newsletter-input">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">SUBSCRIBE →</button>
          </div>

          {message && <p className="newsletter-message">{message}</p>}
        </form>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SoleMate. All Rights Reserved.</p>

        <div className="footer-payment">
          <span>VISA</span>
          <span>Mastercard</span>
          <span>COD</span>
        </div>

        <p>Designed with ♥ for footwear lovers.</p>
      </div>

    </footer>
  );
}

export default Footer;
