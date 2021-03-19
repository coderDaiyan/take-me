import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
        <div class="container">
          <Link class="navbar-brand text-dark fw-bold" href="/">
            Web Zone
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="mx-auto"></div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link text-dark" href="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-dark" href="/">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-dark" href="/">
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-dark" href="/">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-dark" href="/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
