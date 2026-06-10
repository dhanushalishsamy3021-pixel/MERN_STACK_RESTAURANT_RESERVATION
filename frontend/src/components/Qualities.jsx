import React from "react";
import { data } from "../restApi.json";

const Qualities = () => {
  return (
    <section className="qualities" id="qualities">

      <div className="heading_section">
        <span>WHY CHOOSE US</span>

        <h1 className="heading">
          Our Special Qualities
        </h1>

        <p>
          We focus on quality, freshness, and excellent
          customer service to provide the best dining
          experience.
        </p>
      </div>

      <div className="container">
        {data[0].ourQualities.map((element) => (
          <div className="card" key={element.id}>

            <div className="quality-image">
              <img
                src={element.image}
                alt={element.title}
              />
            </div>

            <h3 className="title">
              {element.title}
            </h3>

            <p className="description">
              {element.description}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Qualities;