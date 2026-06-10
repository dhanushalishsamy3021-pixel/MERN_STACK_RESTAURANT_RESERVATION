import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import {
  FaUtensils,
  FaUsers,
  FaAward,
  FaLeaf,
} from "react-icons/fa";


const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">

        {/* Left Side */}
        <div className="banner">

          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>

          <p className="mid">
            Welcome to Flavour Restaurant. We believe that food is
            more than a meal—it is an experience. Our chefs prepare
            every dish using fresh ingredients, authentic recipes,
            and a passion for excellence.
          </p>

          <div className="about-features">

            <div className="feature">
              <FaLeaf />
              <div>
                <h4>Fresh Ingredients</h4>
                <p>100% fresh and organic products.</p>
              </div>
            </div>

            <div className="feature">
              <FaUtensils />
              <div>
                <h4>Expert Chefs</h4>
                <p>Professional chefs with years of experience.</p>
              </div>
            </div>

            <div className="feature">
              <FaAward />
              <div>
                <h4>Best Quality</h4>
                <p>Serving premium quality dishes every day.</p>
              </div>
            </div>

          </div>

          <Link to="/menu">
            Explore Menu
            <span>
              <HiOutlineArrowRight />
            </span>
          </Link>
        </div>

        {/* Right Side */}
        <div className="banner image-banner">
          <img src="about.png" alt="about" />

          <div className="stats">

            <div className="stat-box">
              <FaUsers />
              <h3>10K+</h3>
              <p>Happy Customers</p>
            </div>

            <div className="stat-box">
              <FaUtensils />
              <h3>500+</h3>
              <p>Recipes Served</p>
            </div>

            <div className="stat-box">
              <FaAward />
              <h3>15+</h3>
              <p>Awards Won</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;