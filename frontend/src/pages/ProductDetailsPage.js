import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FiShoppingCart, FiHeart, FiShare2 } from "react-icons/fi";
import "./styles/ProductDetailsPage.css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        // Mock product data
        const mockProduct = {
          id: parseInt(id),
          name: "Vintage Camera Print",
          price: 29.99,
          originalPrice: 39.99,
          rating: 4.5,
          reviews: 48,
          category: "Prints",
          description:
            "Beautiful vintage camera print that captures the essence of retro photography. This high-quality print is perfect for photographers and vintage enthusiasts.",
          longDescription:
            "This stunning vintage camera print is a perfect addition to any room. Made with premium materials and attention to detail, it brings a touch of nostalgia and style to your space. The print features a classic camera design with warm, earthy tones that complement any decor.\n\nEach print is carefully produced on high-quality paper to ensure vibrant colors and longevity. Perfect as a gift or for personal collection.",
          images: [
            "https://via.placeholder.com/500x500?text=Camera+Print+1",
            "https://via.placeholder.com/500x500?text=Camera+Print+2",
            "https://via.placeholder.com/500x500?text=Camera+Print+3",
          ],
          inStock: true,
          sku: "VCP-001",
          dimensions: '11" x 14"',
          material: "Premium Matte Paper",
          specifications: [
            { label: "Size", value: '11" x 14"' },
            { label: "Material", value: "Premium Matte Paper" },
            { label: "Frame", value: "Not Included" },
            { label: "Colors", value: "Natural" },
          ],
          tags: ["vintage", "photography", "print", "retro"],
          relatedProducts: [
            {
              id: 2,
              name: "Retro 70s Poster",
              price: 24.99,
              image: "https://via.placeholder.com/300x300?text=70s+Poster",
            },
            {
              id: 3,
              name: "Botanical Canvas Art",
              price: 45.99,
              image: "https://via.placeholder.com/300x300?text=Botanical",
            },
          ],
        };

        setProduct(mockProduct);
        setError(null);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/checkout");
  };

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!product) {
    return <div className="error-message">Product not found</div>;
  }

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        {/* Product Images */}
        <div className="product-images-section">
          <div className="main-image">
            <img src={product.images[selectedImage]} alt={product.name} />
          </div>
          <div className="thumbnail-images">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className={`thumbnail ${selectedImage === index ? "active" : ""}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info-section">
          <div className="product-header">
            <h1 className="product-name">{product.name}</h1>
            <p className="product-category">{product.category}</p>
            <div className="product-rating">
              <span className="stars">★★★★★</span>
              <span className="rating-text">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="product-pricing">
            <span className="current-price">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <>
                <span className="original-price">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="discount">
                  -
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100,
                  )}
                  %
                </span>
              </>
            )}
          </div>

          <p className="product-description">{product.description}</p>

          {/* Stock Status */}
          <div className="stock-status">
            {product.inStock ? (
              <span className="in-stock">✓ In Stock</span>
            ) : (
              <span className="out-of-stock">Out of Stock</span>
            )}
          </div>

          {/* Quantity Selector */}
          <div className="quantity-selector">
            <label>Quantity:</label>
            <div className="quantity-input">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </button>
              <input type="number" value={quantity} readOnly />
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button
              className={`btn-primary ${addedToCart ? "success" : ""}`}
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <FiShoppingCart size={20} />
              {addedToCart ? "Added to Cart!" : "Add to Cart"}
            </button>
            <button
              className="btn-secondary"
              onClick={handleBuyNow}
              disabled={!product.inStock}
            >
              Buy Now
            </button>
            <button className="btn-icon">
              <FiHeart size={20} />
            </button>
            <button className="btn-icon">
              <FiShare2 size={20} />
            </button>
          </div>

          {/* Specifications */}
          <div className="specifications">
            <h3>Specifications</h3>
            <div className="specs-list">
              {product.specifications?.map((spec, index) => (
                <div key={index} className="spec-item">
                  <span className="spec-label">{spec.label}:</span>
                  <span className="spec-value">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Info */}
          <div className="shipping-info">
            <div className="info-item">
              <span className="icon">🚚</span>
              <div>
                <p className="label">Fast Shipping</p>
                <p className="text">5-7 business days</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">🔄</span>
              <div>
                <p className="label">Easy Returns</p>
                <p className="text">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Description */}
      <section className="detail-description">
        <h2>About This Product</h2>
        <p>{product.longDescription}</p>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <h2>Customer Reviews</h2>
        <div className="reviews-container">
          <div className="review-item">
            <div className="review-header">
              <div className="reviewer-info">
                <p className="reviewer-name">Sarah Johnson</p>
                <span className="review-date">2 weeks ago</span>
              </div>
              <span className="review-stars">★★★★★</span>
            </div>
            <p className="review-text">
              Beautiful print! The quality is excellent and it arrived quickly.
              Highly recommend!
            </p>
          </div>
          <div className="review-item">
            <div className="review-header">
              <div className="reviewer-info">
                <p className="reviewer-name">Michael Chen</p>
                <span className="review-date">1 month ago</span>
              </div>
              <span className="review-stars">★★★★☆</span>
            </div>
            <p className="review-text">
              Great product, very happy with my purchase. The colors are vibrant
              and true to the listing.
            </p>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <section className="related-products">
          <h2>You Might Also Like</h2>
          <div className="related-grid">
            {product.relatedProducts.map((relProduct) => (
              <div key={relProduct.id} className="related-item">
                <img src={relProduct.image} alt={relProduct.name} />
                <h4>{relProduct.name}</h4>
                <p className="price">${relProduct.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailsPage;
