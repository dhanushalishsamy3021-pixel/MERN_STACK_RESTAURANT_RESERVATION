import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../api/api";

const statusSteps = ["pending", "preparing", "delivered"];

const TrackOrder = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const { data } = await api.get(`/order/${orderId}`);
        setOrder(data.order);
      } catch (error) {
        toast.error(
          error?.response?.data?.message || "Unable to load order details.",
        );
      } finally {
        setLoading(false);
      }
    };

    if (!orderId) {
      navigate("/my-orders");
      return;
    }

    fetchOrder();
  }, [orderId, navigate]);

  if (loading) {
    return (
      <section className="orders-page">
        <div className="container">
          <p className="loading-text">Loading order tracking details...</p>
        </div>
      </section>
    );
  }

  if (!order) {
    return (
      <section className="orders-page">
        <div className="container">
          <div className="empty-orders">
            <p>Order not found or the tracking link is invalid.</p>
            <Link to="/my-orders" className="auth-btn">
              Back to My Orders
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const currentStepIndex = statusSteps.indexOf(order.status);

  return (
    <section className="track-order-page">
      <div className="container">
        <h1>Track Order #{order.orderId}</h1>
        <p className="subtitle">See real-time status for your meal.</p>

        <div className="track-summary">
          <div>
            <h2>{order.dishName}</h2>
            <p>
              {order.category} · Qty: {order.quantity}
            </p>
          </div>
          <div>
            <p className="order-total">Total: ₹{order.totalAmount}</p>
            <p className="order-date">
              Placed on{" "}
              {new Date(order.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>

        <div className="tracking-steps">
          {statusSteps.map((step, index) => (
            <div
              key={step}
              className={`tracking-step ${step} ${index <= currentStepIndex ? "active" : ""}`}
            >
              <div className="step-marker">{index + 1}</div>
              <div className="step-content">
                <h3>{step.charAt(0).toUpperCase() + step.slice(1)}</h3>
                <p>
                  {index < currentStepIndex
                    ? "Completed"
                    : index === currentStepIndex
                      ? "In progress"
                      : "Pending"}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link to="/my-orders" className="auth-back">
          ← Back to My Orders
        </Link>
      </div>
    </section>
  );
};

export default TrackOrder;
