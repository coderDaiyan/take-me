import React, { useContext } from "react";
import "./Navbar.css";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../App";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let { vehicleId } = useParams();
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                <Link
                  // to={`/destination/${vehicleId}`}
                  to=""
                  onClick={() => alert("Please select a ride")}
                  className="nav-link text-dark"
                >
                  Destination
                </Link>
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
      </nav> */}
      {/* <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-dark fw-bold" to="/">
            Take-Me
          </Link>
          <button
            style={{ marginRight: "30px" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link nav-font active me-5"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link nav-font active me-5"
                  onClick={() => alert("Please select at least one ride")}
                >
                  Destination
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-font active me-5" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Take-Me
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() => alert("Hey! Select a Ride First!")}
                >
                  Destination
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  Contact
                </Link>
              </li>
              {loggedInUser.name || loggedInUser.email ? (
                <li className="nav-item text-dark mt-2">
                  {loggedInUser.name || loggedInUser.email}
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <button
                      style={{ marginTop: "-9px" }}
                      className="btn btn-outline-success login-btn"
                    >
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
