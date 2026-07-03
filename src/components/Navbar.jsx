import { useState } from "react";
import { useAuth } from "../context/useAuth";

import "./Navbar.css";

const Navbar = ({ onCategoryChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const {
    currentUser,
    cartCount,
    favoritesCount,
    ordersCount,
    openAuthModal,
    logout,
  } = useAuth();

  const navItems = [
    "All",
    "Dresses",
    "Tops",
    "Bottoms",
    "Accessories",
    "Sale",
    "Survey",
  ];

  const handleNavClick = (item) => {
    if (onCategoryChange) {
      onCategoryChange(item);
    }

    setIsMenuOpen(false);
    setIsAccountOpen(false);
  };

  const handleAccountClick = () => {
    if (!currentUser) {
      openAuthModal();
      return;
    }

    setIsAccountOpen((currentState) => !currentState);
  };

  const handleCartClick = () => {
    if (onCategoryChange) {
      onCategoryChange("Cart");
    }

    setIsMenuOpen(false);
    setIsAccountOpen(false);
  };

  const handleFavoritesClick = () => {
    if (onCategoryChange) {
      onCategoryChange("Favorites");
    }

    setIsAccountOpen(false);
  };

  const handleCartDropdownClick = () => {
    if (onCategoryChange) {
      onCategoryChange("Cart");
    }

    setIsAccountOpen(false);
  };

  const handleOrdersClick = () => {
    if (onCategoryChange) {
      onCategoryChange("Orders");
    }

    setIsAccountOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsAccountOpen(false);
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
          <span className="cherie-logo-main">Chérie’s</span>
          <span className="cherie-logo-sub">CLOTHING</span>
        </button>

        <div className={`cherie-nav-links ${isMenuOpen ? "show-menu" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              className="cherie-nav-link"
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="cherie-nav-icons">
          <div className="account-menu-wrap">
            <button
              type="button"
              className="nav-icon-btn account-icon"
              aria-label="Account"
              onClick={handleAccountClick}
            >
              ♙
            </button>

            {currentUser && isAccountOpen && (
              <div className="account-dropdown">
                <p className="account-dropdown-label">
                  Signed in as
                </p>

                <h4>{currentUser.name}</h4>

                <p className="account-dropdown-email">
                  {currentUser.email}
                </p>

                <div className="account-dropdown-stats">
                  <button
                    type="button"
                    onClick={handleFavoritesClick}
                  >
                    Favorites: {favoritesCount}
                  </button>

                  <button
                    type="button"
                    onClick={handleCartDropdownClick}
                  >
                    Cart: {cartCount}
                  </button>

                  <button
                    type="button"
                    onClick={handleOrdersClick}
                  >
                    Orders: {ordersCount}
                  </button>
                </div>

                <button
                  type="button"
                  className="account-dropdown-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            className="nav-icon-btn cart-icon"
            aria-label="Cart"
            onClick={handleCartClick}
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