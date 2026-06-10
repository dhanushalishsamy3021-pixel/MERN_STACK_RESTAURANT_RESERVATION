import React from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../restApi.json";
import { FaStar, FaArrowRight } from "react-icons/fa";

const Team = () => {
  const navigate = useNavigate();

  const handleChefClick = (chef) => {
    navigate(`/chef/${chef.id}`, { state: chef });
  };

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <span>INDIA&apos;S FINEST CULINARY MASTERS</span>
          <h1 className="heading">Our Celebrity Chefs</h1>
          <p>
            Meet India&apos;s No. 1 chefs who bring world-class expertise,
            authentic flavors, and decades of culinary excellence to Flavour
            Restaurant.
          </p>
        </div>

        <div className="team_container">
          {data[0].team.map((chef) => (
            <div
              className="card chef-card"
              key={chef.id}
              onClick={() => handleChefClick(chef)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleChefClick(chef)}
            >
              <div className="image-box">
                <img src={chef.image} alt={chef.name} />
                <span className="chef-rank">#{chef.id}</span>
              </div>

              <div className="team-info">
                <h3>{chef.name}</h3>
                <p className="chef-designation">{chef.designation}</p>

                <div className="chef-meta">
                  <span className="chef-specialty">{chef.specialty}</span>
                  <span className="chef-rating">
                    <FaStar /> {chef.rating}
                  </span>
                </div>

                <button className="view-profile-btn" type="button">
                  View Profile <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
