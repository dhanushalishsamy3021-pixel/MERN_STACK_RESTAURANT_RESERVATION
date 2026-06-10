import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUtensils,
  FaStar,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="royal-footer">
      <div className="footer-gold-line" />

      <div className="footer-main">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <FaUtensils />
              <span>FLAVOUR</span>
            </div>

            <div className="footer-stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span>5-Star Fine Dining</span>
            </div>

            <p className="footer-tagline">
              An exquisite culinary journey where tradition meets
              elegance. Experience royal hospitality and world-class
              cuisine in an atmosphere of timeless luxury.
            </p>

            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <ScrollLink to="heroSection" smooth={true} duration={500} offset={-80}>
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="about" smooth={true} duration={500} offset={-80}>
                  About Us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="menu" smooth={true} duration={500} offset={-80}>
                  Our Menu
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="team" smooth={true} duration={500} offset={-80}>
                  Our Chefs
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="reservation" smooth={true} duration={500} offset={-80}>
                  Reservations
                </ScrollLink>
              </li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <FaMapMarkerAlt />
                <span>
                  42 Royal Avenue, T. Nagar
                  <br />
                  Chennai, Tamil Nadu 600017
                </span>
              </li>
              <li>
                <FaPhoneAlt />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <FaEnvelope />
                <span>reservations@flavour.in</span>
              </li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Opening Hours</h4>
            <ul className="footer-hours">
              <li>
                <span className="day">Monday – Friday</span>
                <span className="time">11:00 AM – 11:00 PM</span>
              </li>
              <li>
                <span className="day">Saturday</span>
                <span className="time">10:00 AM – 12:00 AM</span>
              </li>
              <li>
                <span className="day">Sunday</span>
                <span className="time">10:00 AM – 11:00 PM</span>
              </li>
            </ul>

            <Link to="/login" className="footer-cta">
              Member Login
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© 2026 Flavour Restaurant. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="footer-dot">·</span>
            <a href="#">Terms of Service</a>
            <span className="footer-dot">·</span>
            <a href="#">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
