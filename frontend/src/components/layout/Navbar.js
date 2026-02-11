import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import "../styles/Navbar.css";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useContext(AuthContext);
  const { cartItemCount } = useContext(CartContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      navigate("/");
      setIsMenuOpen(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/#hero" className="navbar-logo">
          <span className="logo-text">Évora</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Navigation Menu */}
        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <a
            href="/#hero"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </a>
          <Link
            to="/products"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            ALL PRODUCTS
          </Link>
          <a
            href="/#skincare"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            SKINCARE
          </a>
          <a
            href="/#accessories"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            ACCESSORIES
          </a>
          <a
            href="/#casual-wear"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            CASUAL WEAR
          </a>
          <a
            href="/#contact"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </a>
        </div>

        {/* Icons Section */}
        <div className="navbar-icons">
          {/* Search Bar */}
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-btn">
              <FiSearch size={20} />
            </button>
          </form>

          {/* Right Icons */}
          <div className="navbar-actions">
            <Link to="/cart" className="icon-link cart-link">
              <FiShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="user-menu">
                <button
                  className="user-btn"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <FiUser size={24} />
                </button>
                <div className={`user-dropdown ${isMenuOpen ? "active" : ""}`}>
                  <div className="user-info">
                    <p className="user-name">{user?.name || "User"}</p>
                    <p className="user-email">{user?.email}</p>
                  </div>
                  <Link
                    to="/profile"
                    className="dropdown-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="dropdown-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Orders
                  </Link>
                  <button
                    className="dropdown-link logout-btn"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="auth-links">
                <Link to="/login" className="nav-link">
                  LOGIN
                </Link>
                <Link to="/register" className="nav-link signup">
                  SIGN UP
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
