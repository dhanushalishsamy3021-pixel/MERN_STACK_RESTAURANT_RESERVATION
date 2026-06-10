import React from "react";
import { data } from "../restApi.json";

const WhoAreWe = () => {
  return (
    <section className="who_are_we" id="who_are_we">

      <div className="heading_section">

        <span>WHO WE ARE</span>

        <h1 className="heading">
          Bringing People Together Through Food
        </h1>

        <p>
          We are passionate about serving delicious food,
          creating memorable experiences, and delivering
          exceptional hospitality every day.
        </p>

      </div>

      <div className="container">

        <div className="text_banner">

          {data[0].who_we_are.slice(0, 2).map((element) => (
            <div className="card" key={element.id}>

              <h1 className="number">
                {element.number}
              </h1>

              <p>{element.title}</p>

            </div>
          ))}

        </div>

        <div className="image_banner">

          <img
            className="gradient_bg"
            src="center.svg"
            alt="gradientBg"
          />

          <img
            className="center_food"
            src="whoweare.png"
            alt="food"
          />

        </div>

        <div className="text_banner">

          {data[0].who_we_are.slice(2).map((element) => (
            <div className="card" key={element.id}>

              <h1 className="number">
                {element.number}
              </h1>

              <p>{element.title}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhoAreWe;