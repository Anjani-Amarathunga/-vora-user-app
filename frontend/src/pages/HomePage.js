import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getFeaturedProducts, getCategories } from "../services/productService";
import "./styles/HomePage.css";

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newArrivalProducts, setNewArrivalProducts] = useState([]);
  const [skincareProducts, setSkincareProducts] = useState([]);
  const [accessoriesProducts, setAccessoriesProducts] = useState([]);
  const [casualWearProducts, setCasualWearProducts] = useState([]);
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
            id: 5,
            name: "Bag",
            price: 12.99,
            category: "Accessories",
            imageUrl: "/images/Ac2.jpg",
            inStock: true,
          },
          {
            id: 6,
            name: "Bracelet",
            price: 32.99,
            category: "Accessories",
            imageUrl: "/images/Ac3.jpg",
            inStock: true,
          },
          {
            id: 7,
            name: "Outfits1",
            price: 38.99,
            category: "Casual Wear",
            imageUrl: "/images/CW1.jpg",
            inStock: true,
          },
          {
            id: 8,
            name: "Outfits2",
            price: 9.99,
            category: "Casual Wear",
            imageUrl: "/images/CW2.jpg",
            inStock: true,
          },
          {
            id: 9,
            name: "The Glycolic Acid Toner",
            price: 29.99,
            category: "Skincare",
            imageUrl: "/images/S1.jpg",
            inStock: true,
          },
          {
            id: 10,
            name: "Facemask",
            price: 15.99,
            category: "Skincare",
            imageUrl: "/images/S2.jpg",
            inStock: true,
          },
          {
            id: 11,
            name: "Moisturizing Toner",
            price: 24.99,
            category: "Skincare",
            imageUrl: "/images/S3.jpg",
            inStock: true,
          },
          {
            id: 12,
            name: "Headphone Keychain Charm",
            price: 45.99,
            category: "Accessories",
            imageUrl: "/images/Ac1.jpg",
            inStock: false,
          },
        ];

        // Organize products by category
        const skincare = mockProducts
          .filter((p) => p.category === "Skincare")
          .slice(0, 4);
        const accessories = mockProducts
          .filter((p) => p.category === "Accessories")
          .slice(0, 4);
        const casualWear = mockProducts
          .filter((p) => p.category === "Casual Wear")
          .slice(0, 4);

        setSkincareProducts(skincare);
        setAccessoriesProducts(accessories);
        setCasualWearProducts(casualWear);

        const mockNewArrivals = [
          {
            id: 1,
            name: "The Glycolic Acid Toner",
            price: 29.99,
            category: "Skincare",
            imageUrl: "/images/S1.jpg",
            inStock: true,
          },
          {
            id: 2,
            name: "Facemask",
            price: 15.99,
            category: "Skincare",
            imageUrl: "/images/S2.jpg",
            inStock: true,
          },
          {
            id: 3,
            name: "Moisturizing Toner",
            price: 24.99,
            category: "Skincare",
            imageUrl: "/images/S3.jpg",
            inStock: true,
          },
          {
            id: 4,
            name: "Headphone Keychain Charm",
            price: 45.99,
            category: "Accessories",
            imageUrl: "/images/Ac1.jpg",
            inStock: false,
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
    <div className="home-page" id="hero">
      {/* Hero Section */}
      <section className="hero-section" id="hero">
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
                src="/images/V2.jpg"
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

      {/* Our Categories Section */}
      <section className="our-categories-section">
        <h2 className="section-title">Our Categories</h2>
        <div className="categories-grid">
          <Link to="/products?category=1" className="category-card">
            <div className="category-image">
              <img src="/images/V1.jpg" alt="Skincare" />
            </div>
            <h3 className="category-name">Skincare</h3>
          </Link>
          <Link to="/products?category=2" className="category-card">
            <div className="category-image">
              <img src="/images/Ac0.jpg" alt="Accessories" />
            </div>
            <h3 className="category-name">Accessories</h3>
          </Link>
          <Link to="/products?category=3" className="category-card">
            <div className="category-image">
              <img src="/images/CW0.jpg" alt="Casual Wear" />
            </div>
            <h3 className="category-name">Casual Wear</h3>
          </Link>
        </div>
      </section>

      {/* Skincare Section */}
      <section className="featured-section" id="skincare">
        <h2 className="section-title">Skincare</h2>
        {loading && <div className="loading">Loading skincare products...</div>}
        {error && <div className="error-message">{error}</div>}
        {!loading && !error && (
          <>
            <div className="products-grid">
              {skincareProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="view-all">
              <Link to="/products?category=1" className="view-all-button">
                View All Skincare
              </Link>
            </div>
          </>
        )}
      </section>

      {/* Accessories Section */}
      <section className="featured-section" id="accessories">
        <h2 className="section-title">Accessories</h2>
        {loading && <div className="loading">Loading accessories...</div>}
        {error && <div className="error-message">{error}</div>}
        {!loading && !error && (
          <>
            <div className="products-grid">
              {accessoriesProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="view-all">
              <Link to="/products?category=2" className="view-all-button">
                View All Accessories
              </Link>
            </div>
          </>
        )}
      </section>

      {/* Casual Wear Section */}
      <section className="featured-section" id="casual-wear">
        <h2 className="section-title">Casual Wear</h2>
        {loading && <div className="loading">Loading casual wear...</div>}
        {error && <div className="error-message">{error}</div>}
        {!loading && !error && (
          <>
            <div className="products-grid">
              {casualWearProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="view-all">
              <Link to="/products?category=3" className="view-all-button">
                View All Casual Wear
              </Link>
            </div>
          </>
        )}
      </section>

      {/* Newsletter Section 
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
      </section>*/}

      {/* Features Section 
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
      </section>*/}

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a question? Our team is here to ensure your Évora experience is effortless and refined.
          </p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Your Phone Number" />
            </div>
            <div className="form-group">
              <label htmlFor="comment">Comment</label>
              <textarea
                id="comment"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-send-btn">
              SEND
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
