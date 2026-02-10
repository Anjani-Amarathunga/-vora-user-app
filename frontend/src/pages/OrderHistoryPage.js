import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserOrders } from "../services/orderService";
import "./styles/OrderHistoryPage.css";

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        // Mock orders data
        const mockOrders = [
          {
            id: "ORD-001",
            date: "2024-01-15",
            status: "Delivered",
            total: 89.98,
            items: 3,
            estimatedDelivery: "2024-01-20",
            trackingNumber: "TRK-123456789",
            products: [
              { name: "Vintage Camera Print", quantity: 1, price: 29.99 },
              { name: "Coffee Shop Aesthetic Mug", quantity: 2, price: 15.99 },
            ],
          },
          {
            id: "ORD-002",
            date: "2024-01-20",
            status: "Processing",
            total: 54.99,
            items: 1,
            estimatedDelivery: "2024-01-28",
            trackingNumber: "TRK-987654321",
            products: [{ name: "Retro 70s Poster", quantity: 2, price: 24.99 }],
          },
          {
            id: "ORD-003",
            date: "2024-01-10",
            status: "Cancelled",
            total: 45.99,
            items: 1,
            estimatedDelivery: "2024-01-17",
            trackingNumber: null,
            products: [
              { name: "Botanical Canvas Art", quantity: 1, price: 45.99 },
            ],
          },
          {
            id: "ORD-004",
            date: "2023-12-25",
            status: "Delivered",
            total: 32.98,
            items: 2,
            estimatedDelivery: "2024-01-05",
            trackingNumber: "TRK-456789123",
            products: [
              { name: "Minimalist Notebook", quantity: 1, price: 12.99 },
              { name: "Floral Bookmark Set", quantity: 2, price: 9.99 },
            ],
          },
        ];

        setOrders(mockOrders);
        setError(null);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "status-delivered";
      case "Processing":
        return "status-processing";
      case "Cancelled":
        return "status-cancelled";
      case "Shipped":
        return "status-shipped";
      default:
        return "";
    }
  };

  const filteredOrders = orders.filter((order) => {
    if (filter === "all") return true;
    return order.status.toLowerCase() === filter.toLowerCase();
  });

  if (loading) {
    return <div className="loading">Loading your orders...</div>;
  }

  return (
    <div className="order-history-page">
      <h1 className="page-title">Order History</h1>

      {error && <div className="error-message">{error}</div>}

      {orders.length === 0 ? (
        <div className="empty-orders">
          <p>You haven't placed any orders yet.</p>
          <Link to="/products" className="btn-primary">
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button
              className={`tab ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Orders {orders.length > 0 && `(${orders.length})`}
            </button>
            <button
              className={`tab ${filter === "processing" ? "active" : ""}`}
              onClick={() => setFilter("processing")}
            >
              Processing (
              {orders.filter((o) => o.status === "Processing").length})
            </button>
            <button
              className={`tab ${filter === "delivered" ? "active" : ""}`}
              onClick={() => setFilter("delivered")}
            >
              Delivered ({orders.filter((o) => o.status === "Delivered").length}
              )
            </button>
            <button
              className={`tab ${filter === "cancelled" ? "active" : ""}`}
              onClick={() => setFilter("cancelled")}
            >
              Cancelled ({orders.filter((o) => o.status === "Cancelled").length}
              )
            </button>
          </div>

          {/* Orders List */}
          <div className="orders-container">
            {filteredOrders.length === 0 ? (
              <div className="no-orders">
                <p>No orders found in this category.</p>
              </div>
            ) : (
              filteredOrders.map((order) => (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <div className="order-id-date">
                      <h3 className="order-id">{order.id}</h3>
                      <p className="order-date">
                        {new Date(order.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="order-status">
                      <span
                        className={`status-badge ${getStatusColor(order.status)}`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className="order-total">
                      <p className="total-amount">${order.total.toFixed(2)}</p>
                      <p className="item-count">{order.items} item(s)</p>
                    </div>
                  </div>

                  <div className="order-details">
                    <div className="products-list">
                      <h4>Products</h4>
                      <ul>
                        {order.products.map((product, index) => (
                          <li key={index}>
                            <span className="product-name">
                              {product.name} x {product.quantity}
                            </span>
                            <span className="product-price">
                              ${(product.price * product.quantity).toFixed(2)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="delivery-info">
                      {order.trackingNumber && (
                        <div className="tracking-info">
                          <h4>Tracking Number</h4>
                          <p className="tracking-number">
                            {order.trackingNumber}
                          </p>
                          <button className="track-btn">Track Order</button>
                        </div>
                      )}

                      {order.status !== "Cancelled" && (
                        <div className="delivery-estimate">
                          <h4>Est. Delivery</h4>
                          <p className="estimate-date">
                            {new Date(
                              order.estimatedDelivery,
                            ).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="order-actions">
                    <button className="action-btn primary">View Details</button>
                    {order.status !== "Cancelled" && (
                      <button className="action-btn">Download Invoice</button>
                    )}
                    <button className="action-btn">Contact Support</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default OrderHistoryPage;
