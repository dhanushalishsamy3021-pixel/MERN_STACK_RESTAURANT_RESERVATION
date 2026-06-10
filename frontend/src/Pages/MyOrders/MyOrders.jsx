import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../api/api";
import { useAuth } from "../../context/AuthContext";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchOrders = async () => {
      try {
        const { data } = await api.get("/order/my-orders");
        setOrders(data.orders);
      } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user, navigate]);

  if (loading) {
    return (
      <section className="orders-page">
        <div className="container">
          <p className="loading-text">Loading your orders...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="orders-page">
      <div className="container">
        <h1>My Orders</h1>
        <p className="subtitle">Track all your food orders in one place</p>

        {orders.length === 0 ? (
          <div className="empty-orders">
            <p>You haven&apos;t placed any orders yet.</p>
            <Link to="/" className="auth-btn">
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="orders-grid">
            {orders.map((order) => (
              <div className="order-card" key={order._id}>
                <div className="order-card-header">
                  <span className="order-id">#{order.orderId}</span>
                  <span className={`status-badge ${order.status}`}>
                    {order.status}
                  </span>
                </div>
                <h3>{order.dishName}</h3>
                <p className="order-meta">
                  {order.category} · Qty: {order.quantity}
                </p>
                <p className="order-total">₹{order.totalAmount}</p>
                <p className="order-date">
                  {new Date(order.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <Link
                  to={`/track-order/${order.orderId}`}
                  className="menuBtn outline track-btn"
                >
                  Track Order
                </Link>
              </div>
            ))}
          </div>
        )}

        <Link to="/" className="auth-back">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
};

export default MyOrders;
