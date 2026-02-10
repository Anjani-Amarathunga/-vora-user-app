import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getFeaturedProducts, getCategories } from "../services/productService";
import "./styles/HomePage.css";

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newArrivalProducts, setNewArrivalProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch featured products - will use mock data if backend not ready
        const mockProducts = [
          {
            id: 1,
            name: "Vintage Coffee Mug",
            price: 12.99,
            category: "Drinkware",
            imageUrl: "https://via.placeholder.com/300x300?text=Coffee+Mug",
          },
          {
            id: 2,
            name: "Retro Poster",
            price: 24.99,
            category: "Posters",
            imageUrl: "https://via.placeholder.com/300x300?text=Retro+Poster",
          },
          {
            id: 3,
            name: "Canvas Print",
            price: 34.99,
            category: "Prints",
            imageUrl: "https://via.placeholder.com/300x300?text=Canvas+Print",
          },
          {
            id: 4,
            name: "Design Journal",
            price: 18.99,
            category: "Stationery",
            imageUrl: "https://via.placeholder.com/300x300?text=Design+Journal",
          },
        ];
        setFeaturedProducts(mockProducts);

        const mockNewArrivals = [
          {
            id: 5,
            name: "Botanical Print",
            price: 28.99,
            category: "Prints",
            imageUrl:
              "https://via.placeholder.com/300x300?text=Botanical+Print",
          },
          {
            id: 6,
            name: "Vintage Tea Set",
            price: 45.99,
            category: "Drinkware",
            imageUrl: "https://via.placeholder.com/300x300?text=Tea+Set",
          },
          {
            id: 7,
            name: "Minimalist Planner",
            price: 22.99,
            category: "Stationery",
            imageUrl: "https://via.placeholder.com/300x300?text=Planner",
          },
          {
            id: 8,
            name: "Abstract Wall Art",
            price: 32.99,
            category: "Posters",
            imageUrl: "https://via.placeholder.com/300x300?text=Wall+Art",
          },
        ];
        setNewArrivalProducts(mockNewArrivals);

        const mockCategories = [
          { id: 1, name: "Drinkware" },
          { id: 2, name: "Posters" },
          { id: 3, name: "Prints" },
          { id: 4, name: "Stationery" },
        ];
        setCategories(mockCategories);
        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load featured products");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-image-left">
              <img
                src="/images/V1.jpg"
                alt="Vintage props"
                className="hero-image-portrait"
              />
              <div className="decorative-flower flower-1"></div>
              <div className="decorative-flower flower-2"></div>
            </div>
          </div>
          <div className="hero-center">
            {/*<p className="hero-mission">Évora</p>*/}
            <h1 className="hero-title">Évora</h1>
            <p className="hero-subtitle">Elegance Beyond Ordinary</p>
            <Link to="/products" className="hero-button">
              SHOP NOW
            </Link>
          </div>
          <div className="hero-right">
            <div className="hero-image-right">
              <img
                src="/images/V4.jpg"
                alt="Person portrait"
                className="hero-image-portrait"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="new-arrivals-section">
        <h2 className="section-title">New Arrivals</h2>
        {loading && <div className="loading">Loading new arrivals...</div>}
        {error && <div className="error-message">{error}</div>}
        {!loading && !error && (
          <>
            <div className="products-grid">
              {newArrivalProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="view-all">
              <Link to="/products" className="view-all-button">
                View All New Arrivals
              </Link>
            </div>
          </>
        )}
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <h2 className="section-title">Featured Products</h2>
        {loading && <div className="loading">Loading featured products...</div>}
        {error && <div className="error-message">{error}</div>}
        {!loading && !error && (
          <>
            <div className="products-grid">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="view-all">
              <Link to="/products" className="view-all-button">
                View All Products
              </Link>
            </div>
          </>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Subscribe to our Newsletter</h2>
          <p className="newsletter-desc">
            Be the first to know about new collections and exclusive offers
          </p>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-item">
          <div className="feature-icon">🚚</div>
          <h3>Fast Shipping</h3>
          <p>Get your order delivered within 5-7 business days</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔒</div>
          <h3>Secure Checkout</h3>
          <p>Your information is safe and secure with us</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">↩️</div>
          <h3>Easy Returns</h3>
          <p>30-day return policy for your peace of mind</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">💬</div>
          <h3>24/7 Support</h3>
          <p>Our customer service team is always here to help</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
