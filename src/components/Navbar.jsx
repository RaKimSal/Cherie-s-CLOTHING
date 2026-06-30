import { useState } from "react";
import "./Navbar.css";

const Navbar = ({ cartCount = 0, onCategoryChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "New In",
    "Clothing",
    "Dresses",
    "Tops",
    "Bottoms",
    "Accessories",
    "Sale",
  ];

  const handleNavClick = (item) => {
    if (onCategoryChange) {
      onCategoryChange(item);
    }

    setIsMenuOpen(false);
  };

  return (
    <header className="cherie-header">
      <div className="promo-bar">
        Free shipping on orders over $100 ♡
      </div>

      <nav className="cherie-navbar">
        <button
          className="mobile-menu-btn"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Open navigation menu"
        >
          ☰
        </button>

        <button
          type="button"
          className="cherie-logo"
          onClick={() => handleNavClick("Home")}
        >
          <span className="cherie-logo-main">
            Chérie’s
          </span>

          <span className="cherie-logo-sub">
            CLOTHING
          </span>
        </button>

        <div
          className={`cherie-nav-links ${
            isMenuOpen ? "show-menu" : ""
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              className="cherie-nav-link"
              onClick={() => handleNavClick(item)}
            >
              {item}

              {item === "Clothing" && (
                <span className="nav-arrow">⌄</span>
              )}
            </button>
          ))}
        </div>

        <div className="cherie-nav-icons">
          <button
            type="button"
            className="nav-icon-btn"
            aria-label="Search"
          >
            ⌕
          </button>

          <button
            type="button"
            className="nav-icon-btn"
            aria-label="Account"
          >
            ♙
          </button>

          <button
            type="button"
            className="nav-icon-btn cart-icon"
            aria-label="Cart"
          >
            🛍

            <span className="cart-count">
              {cartCount}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;