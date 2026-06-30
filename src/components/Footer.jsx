import facebookIcon from "../assets/img/socials/facebook.png";
import instagramIcon from "../assets/img/socials/instagram.png";
import linkedinIcon from "../assets/img/socials/linkedin.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="cherie-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <span className="footer-logo-main">
              Chérie’s
            </span>

            <span className="footer-logo-sub">
              CLOTHING
            </span>
          </div>

          <p className="footer-description">
            Elegant, feminine, and timeless pieces
            made for every moment.
          </p>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Shop</h3>

          <a href="#new-arrivals">New Arrivals</a>
          <a href="#categories">Categories</a>
          <a href="#sale">Sale</a>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Support</h3>

          <a href="#contact">Contact Us</a>
          <a href="#shipping">Shipping</a>
          <a href="#returns">Returns</a>
        </div>

        <div className="footer-column footer-socials">
          <h3 className="footer-heading">Follow Us</h3>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <img src={facebookIcon} alt="Facebook" />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;