import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{ backgroundColor: "rgba(244,249,249)" }}
      className="navbar navbar-light navbar-expand-lg  "
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <div className="d-flex">
            <img className="nav-img" src="./images/tominejo.png" alt="bird" />
            <p style={{ color: "black" }} className="pt-3">
              <b>TOMI</b>
            </p>
          </div>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li style={{ textDecoration: "none" }} className="nav-item">
              <NavLink className="nav-link mx-3 " to="/">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-3" to="/">
                APE DICE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-3" to="/">
                WHITEPAPER
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-3" to="/">
                JUST SWAP
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                AUDITS
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/">
                    Action
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/">
                    Another action
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/">
                    Something else here
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <NavLink to="/">
              <NavLink to="/">
                <img
                  className="mx-2"
                  src="https://apetron.com/_nuxt/3e5378bfd937308591b5cc281156826d.svg"
                  alt="/"
                />
              </NavLink>
            </NavLink>

            <NavLink to="/">
              <img src="https://apetron.com/_nuxt/f1a23ee63dadc88fd04b3a1d62361e84.svg" alt="bird" />
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
