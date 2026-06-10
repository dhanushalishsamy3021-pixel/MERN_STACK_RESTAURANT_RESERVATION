import React, { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { data } from "../../restApi.json";
import {
  FaStar,
  FaAward,
  FaUtensils,
  FaMapMarkerAlt,
  FaClock,
  FaArrowLeft,
} from "react-icons/fa";

const ChefDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const chef =
    location.state ||
    data[0].team.find((c) => c.id === Number(id));

  useEffect(() => {
    if (!chef) {
      navigate("/");
    }
  }, [chef, navigate]);

  if (!chef) return null;

  return (
    <section className="chef-detail-page">
      <div className="chef-detail-container">
        <Link to="/" className="chef-back-link">
          <FaArrowLeft /> Back to Home
        </Link>

        <div className="chef-detail-header">
          <div className="chef-detail-image">
            <img src={chef.image} alt={chef.name} />
            <span className="chef-detail-rank">Chef #{chef.id}</span>
          </div>

          <div className="chef-detail-intro">
            <span className="chef-detail-tag">India&apos;s Top Chef</span>
            <h1>{chef.name}</h1>
            <p className="chef-detail-designation">{chef.designation}</p>

            <div className="chef-detail-stats">
              <div className="stat-item">
                <FaClock />
                <div>
                  <strong>{chef.experience}</strong>
                  <span>Experience</span>
                </div>
              </div>
              <div className="stat-item">
                <FaStar />
                <div>
                  <strong>{chef.rating}</strong>
                  <span>Rating</span>
                </div>
              </div>
              <div className="stat-item">
                <FaMapMarkerAlt />
                <div>
                  <strong>{chef.location}</strong>
                  <span>Based In</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="chef-detail-body">
          <div className="chef-detail-section">
            <h2>
              <FaUtensils /> About the Chef
            </h2>
            <p>{chef.bio}</p>
          </div>

          <div className="chef-detail-grid">
            <div className="chef-detail-card">
              <h3>Specialty</h3>
              <p>{chef.specialty}</p>
            </div>
            <div className="chef-detail-card">
              <h3>Restaurant</h3>
              <p>{chef.restaurant}</p>
            </div>
          </div>

          <div className="chef-detail-section">
            <h2>
              <FaAward /> Awards & Recognition
            </h2>
            <ul className="awards-list">
              {chef.awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </div>

          <div className="chef-detail-section">
            <h2>Signature Dishes</h2>
            <div className="signature-dishes">
              {chef.signatureDishes.map((dish) => (
                <span className="dish-tag" key={dish}>
                  {dish}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="chef-detail-actions">
          <Link to="/" className="auth-btn">
            Browse Menu
          </Link>
          <Link to="/" className="chef-book-btn">
            Book a Table
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChefDetail;
