import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleLogout = () => {
    logout();
    setShow(false);
    navigate("/");
  };

  return (
    <nav>
      <Link to="/" className="logo">
        <FaUtensils />
        <span>FLAVOUR</span>
      </Link>

      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) =>
            isHome ? (
              <ScrollLink
                key={element.id}
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setShow(false)}
              >
                {element.title}
              </ScrollLink>
            ) : (
              <Link
                key={element.id}
                to={`/?scroll=${element.link}`}
                onClick={() => setShow(false)}
                className="nav-link"
              >
                {element.title}
              </Link>
            ),
          )}

          {isHome ? (
            <ScrollLink
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setShow(false)}
            >
              MENU
            </ScrollLink>
          ) : (
            <Link
              to="/?scroll=menu"
              onClick={() => setShow(false)}
              className="nav-link"
            >
              MENU
            </Link>
          )}
        </div>

        <div className="nav-actions">
          {user ? (
            <>
              <span className="user-greeting">
                Hi, {user.name.split(" ")[0]}
              </span>
              <button
                className="menuBtn outline"
                onClick={() => {
                  setShow(false);
                  navigate("/my-orders");
                }}
              >
                My Orders
              </button>
              <button className="menuBtn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="menuBtn outline"
                onClick={() => {
                  setShow(false);
                  navigate("/login");
                }}
              >
                Login
              </button>
              <button
                className="menuBtn"
                onClick={() => {
                  setShow(false);
                  navigate("/register");
                }}
              >
                Register
              </button>
            </>
          )}

          <ScrollLink
            to="reservation"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="menuBtn book-btn"
            onClick={() => setShow(false)}
          >
            Book Table
          </ScrollLink>
        </div>
      </div>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
