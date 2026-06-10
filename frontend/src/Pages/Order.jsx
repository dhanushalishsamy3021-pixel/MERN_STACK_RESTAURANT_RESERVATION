import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api/api";
import { useAuth } from "../context/AuthContext";

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const dish = location.state;

  const [customerName, setCustomerName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!dish) {
      navigate("/");
    }
  }, [dish, navigate]);

  if (!dish) return null;

  const totalAmount = dish.price * quantity;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { data } = await api.post("/order/create", {
        dishId: dish.id,
        dishName: dish.title,
        category: dish.category,
        price: dish.price,
        quantity: Number(quantity),
        customerName,
        email,
        phone,
        address,
      });

      toast.success(data.message);
      navigate("/success", {
        state: {
          type: "order",
          orderId: data.order.orderId,
          dishName: data.order.dishName,
          quantity: data.order.quantity,
          totalAmount: data.order.totalAmount,
        },
      });
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Order failed. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="order-page">
      <div className="order-container">
        <div className="order-summary">
          <img src={dish.image} alt={dish.title} />
          <div className="order-dish-info">
            <span className="category-tag">{dish.category}</span>
            <h2>{dish.title}</h2>
            <p className="unit-price">₹{dish.price} per item</p>
          </div>
        </div>

        <div className="order-form-card">
          <h1>Complete Your Order</h1>
          <p>Fill in your details and we&apos;ll prepare your meal fresh.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  minLength={10}
                  maxLength={15}
                />
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Delivery Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your full delivery address"
                required
                rows={3}
              />
            </div>

            <div className="order-total-bar">
              <span>Total Amount</span>
              <strong>₹{totalAmount}</strong>
            </div>

            <button type="submit" className="auth-btn" disabled={submitting}>
              {submitting ? "Placing Order..." : "Confirm Order"}
            </button>
          </form>

          <Link to="/" className="auth-back">
            ← Back to Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Order;
