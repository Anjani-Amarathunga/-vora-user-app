import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import "./styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.imageUrl || "/placeholder.jpg"}
            alt={product.name}
            className="product-image"
          />
        </Link>
        <div className="product-overlay">
          <button className="quick-add-btn" onClick={handleAddToCart}>
            <FiShoppingCart size={20} />
            Add to Cart
          </button>
          <button className="wishlist-btn">
            <FiHeart size={20} />
          </button>
        </div>
      </div>
      <div className="product-info">
        <Link to={`/products/${product.id}`} className="product-name">
          {product.name}
        </Link>
        <p className="product-category">{product.category}</p>
        <div className="product-footer">
          <span className="product-price">${product.price?.toFixed(2)}</span>
          <span className="product-rating">★ 4.5</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
