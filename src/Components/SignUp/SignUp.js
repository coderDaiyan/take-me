import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import Google from "../../assets/icon/search.svg";
import Github from "../../assets/icon/github.svg";

import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";

firebase.initializeApp(firebaseConfig);

const SignUp = () => {
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleGithubSignIn = () => {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="container">
      <div className="signup">
        <h2 className="fw-bold m-3">Create Account</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="name"
              placeholder="Name..."
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              placeholder="Email..."
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Type Your Password..."
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password Confirmation
            </label>
            <input
              type="password"
              placeholder="Type Again..."
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Submit
          </button>
          <p className="text-center mt-4">
            Already Have an Account ?{" "}
            <Link to="/login" style={{ color: "#157347" }}>
              Log In
            </Link>
          </p>
        </form>
        <p className="text-center">OR</p>
        <div className="social-signin">
          <div className="google-sign-in">
            <img className="social" src={Google} alt="" />
            <h5>
              <Link
                onClick={handleGoogleSignIn}
                style={{ textDecoration: "none", color: "black" }}
              >
                Sign in with google
              </Link>
            </h5>
          </div>
          <div className="github-sign-in">
            <img className="social" src={Github} alt="" />
            <h5>
              <Link
                onClick={handleGithubSignIn}
                style={{ textDecoration: "none", color: "black" }}
              >
                Sign in with github
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
