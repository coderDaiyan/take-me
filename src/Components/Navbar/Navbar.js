import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";
import { UserContext } from "../../App";
import "./Navbar.css";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let { vehicleId } = useParams();

  console.log(loggedInUser);
  return (
    <>
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
                  to={
                    loggedInUser.isSignedIn === false
                      ? `/login`
                      : swal("Hey!", "Select a Vehicle First", "warning")
                  }
                >
                  Destination
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/contact">
                  Contact
                </Link>
              </li>
              {loggedInUser.name || loggedInUser.email ? (
                <li className="nav-item text-dark mt-2">
                  Name/Email: {loggedInUser.name || loggedInUser.email}
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
