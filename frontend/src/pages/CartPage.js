import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import "./styles/CartPage.css";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <h1>Your Cart is Empty</h1>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="page-title">Shopping Cart</h1>

      <div className="cart-container">
        {/* Cart Items */}
        <div className="cart-items-section">
          <div className="cart-header">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
            <span></span>
          </div>

          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img
                    src={item.imageUrl || "/placeholder.jpg"}
                    alt={item.name}
                  />
                </div>

                <div className="item-details">
                  <Link to={`/products/${item.id}`} className="item-name">
                    {item.name}
                  </Link>
                  <p className="item-category">{item.category}</p>
                </div>

                <span className="item-price">${item.price?.toFixed(2)}</span>

                <div className="item-quantity">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    className="qty-btn"
                  >
                    <FiMinus size={16} />
                  </button>
                  <input type="number" value={item.quantity} readOnly />
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                    className="qty-btn"
                  >
                    <FiPlus size={16} />
                  </button>
                </div>

                <span className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                  title="Remove from cart"
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <Link to="/products" className="continue-shopping-link">
              ← Continue Shopping
            </Link>
            <button onClick={clearCart} className="clear-cart-btn">
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-details">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span className="shipping-free">Free</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>${(cartTotal * 0.1).toFixed(2)}</span>
            </div>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row total">
            <span>Total</span>
            <span>${(cartTotal * 1.1).toFixed(2)}</span>
          </div>

          <div className="coupon-section">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="coupon-input"
            />
            <button className="apply-coupon-btn">Apply</button>
          </div>

          <button onClick={handleCheckout} className="checkout-btn">
            Proceed to Checkout
          </button>

          <div className="security-badge">
            <p>🔒 Secure checkout with SSL encryption</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
