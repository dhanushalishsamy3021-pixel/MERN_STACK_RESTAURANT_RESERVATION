import React from "react";
import { data } from "../restApi.json";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const handleOrder = (dish) => {
    navigate("/order", { state: dish });
  };

  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <span>OUR SPECIAL MENU</span>
          <h1 className="heading">Popular Dishes</h1>
          <p>
            Discover our chef&apos;s carefully selected dishes made with fresh
            ingredients and authentic flavors.
          </p>
        </div>

        <div className="dishes_container">
          {data[0].dishes.map((dish) => (
            <div className="card" key={dish.id}>
              <div className="image-box">
                <img src={dish.image} alt={dish.title} />
                <span className="dish-badge">{dish.category}</span>
              </div>

              <div className="card-content">
                <h3>{dish.title}</h3>

                <p>
                  Delicious freshly prepared dish from our special menu.
                </p>

                <div className="card-footer">
                  <h4>₹{dish.price}</h4>
                  <button onClick={() => handleOrder(dish)}>Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
