import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import toast from "react-hot-toast";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/reservation/send", {
        firstName,
        lastName,
        email,
        phone,
        date,
        time,
        guests,
        message,
      });

      toast.success(data.message);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDate("");
      setTime("");
      setGuests("");
      setMessage("");

      navigate("/success", {
        state: {
          type: "reservation",
          name: `${firstName} ${lastName}`,
          date,
          time,
          guests,
        },
      });
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Reservation Failed"
      );
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">

        {/* Left Image */}
        <div className="banner">
          <img
            src="/reservation.png"
            alt="reservation"
          />
        </div>

        {/* Right Form */}
        <div className="banner">
          <div className="reservation_form_box">

            <h1>Reserve Your Table</h1>

            <p>
              Book your table today and enjoy an
              unforgettable dining experience.
            </p>

            <div className="reservation-benefits">
              <span>✓ Instant Confirmation</span>
              <span>✓ Fresh Ingredients</span>
              <span>✓ Premium Dining Experience</span>
            </div>

            <form onSubmit={handleReservation}>

              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) =>
                    setFirstName(e.target.value)
                  }
                  required
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) =>
                    setLastName(e.target.value)
                  }
                  required
                />
              </div>

              <div>
                <input
                  type="date"
                  value={date}
                  onChange={(e) =>
                    setDate(e.target.value)
                  }
                  required
                />

                <input
                  type="time"
                  value={time}
                  onChange={(e) =>
                    setTime(e.target.value)
                  }
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  required
                />
              </div>

              <div>
                <select
                  value={guests}
                  onChange={(e) =>
                    setGuests(e.target.value)
                  }
                  required
                >
                  <option value="">
                    Select Guests
                  </option>
                  <option value="1">
                    1 Guest
                  </option>
                  <option value="2">
                    2 Guests
                  </option>
                  <option value="3">
                    3 Guests
                  </option>
                  <option value="4">
                    4 Guests
                  </option>
                  <option value="5+">
                    5+ Guests
                  </option>
                </select>
              </div>

              <textarea
                placeholder="Special Request"
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
              />

              <button type="submit">
                RESERVE NOW
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Reservation;