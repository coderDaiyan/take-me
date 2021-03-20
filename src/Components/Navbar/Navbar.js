import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3 mb-5">
        <div className="container">
          <Link className="navbar-brand text-dark fw-bold" to="/">
            Take-Me
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mx-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-dark">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark">Destination</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark">Contact</Link>
              </li>
              {loggedInUser.name || loggedInUser.email ? (
                <li
                  className="nav-item text-dark mt-2"
                  style={{ marginLeft: "10px" }}
                >
                  {loggedInUser.name || loggedInUser.email}
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <button className="btn btn-outline-success login-btn">
                      Login
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
