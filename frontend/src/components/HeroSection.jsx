import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <div className="container">
        {/* Left Side */}
        <div className="banner">
          <div className="largeBox">
            <span className="welcome-tag">
              ★ Five-Star Fine Dining Experience
            </span>

            <h1 className="title">Royal</h1>

            <p className="hero-desc">
              Indulge in an exquisite culinary journey crafted by India&apos;s
              finest chefs. Timeless elegance, impeccable service, and
              world-class cuisine await you.
            </p>

            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              <button className="hero-btn" type="button">
                Explore Menu
              </button>
            </Link>
          </div>

          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./hero1.png" alt="hero" />
            </div>

            <div className="textAndLogo">
              <div className="textWithSvg">
                <span className="food-badge">Est. 2010 · Chennai</span>

                <h1 className="title">Cuisine</h1>

                <h1 className="title dishes_title">Dishes</h1>

                <img src="./threelines.svg" alt="threelines" />
              </div>

              <img className="logo" src="logo.svg" alt="logo" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="banner">
          <div className="imageBox">
            <img src="hero2.png" alt="hero" />
          </div>

          <div className="hero-right-content">
            <h1 className="title dishes_title">Dishes</h1>

            <p>
              Freshly cooked meals made with passion, creativity, and premium
              ingredients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
