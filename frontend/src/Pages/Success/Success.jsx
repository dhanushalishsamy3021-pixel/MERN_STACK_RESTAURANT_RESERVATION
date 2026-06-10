import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();
  const location = useLocation();
  const details = location.state;

  const isReservation = details?.type === "reservation";
  const isOrder = details?.type === "order";

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <section className="success-page">
      <div className="container">
        <FaCheckCircle className="success-icon" />

        <h1>
          {isReservation
            ? "Table Reserved Successfully!"
            : "Order Successfully Placed!"}
        </h1>

        <p>Thank you for choosing Flavour Restaurant.</p>

        <div className="order-info">
          {isOrder && (
            <>
              <h3>Order ID: #{details.orderId}</h3>
              <p>
                {details.dishName} × {details.quantity}
              </p>
              <p>Total: ₹{details.totalAmount}</p>
            </>
          )}

          {isReservation && (
            <>
              <h3>Reservation for {details.name}</h3>
              <p>
                Date: {details.date} at {details.time}
              </p>
              <p>Guests: {details.guests}</p>
            </>
          )}

          {!isOrder && !isReservation && (
            <>
              <h3>Request Confirmed</h3>
              <p>Estimated Preparation Time: 20-30 Minutes</p>
            </>
          )}

          <p className="status-note">
            {isReservation
              ? "We look forward to welcoming you!"
              : "Our chef has started preparing your meal."}
          </p>
        </div>

        <p className="countdown">
          Redirecting to Home in {countdown} seconds...
        </p>

        <Link to="/" className="success-link">
          Back to Home
          <HiOutlineArrowNarrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Success;
