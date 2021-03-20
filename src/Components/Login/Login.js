import React, { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import Google from "../../assets/icon/search.svg";
import Github from "../../assets/icon/github.svg";

import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";
import { UserContext } from "../../App";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const SignUp = () => {
  let passwordMatched = false;
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || {
    from: { pathname: `/` },
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    message: "",
  });
  const [newUser, setNewUser] = useState(false);
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res.user);
        // ? Sign in successful
        const { displayName, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          password: "",
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleGithubSignIn = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const { displayName, email } = user;
        const signedInUser = {
          name: displayName,
          email: email,
        };
        setLoggedInUser(signedInUser);
        setUser(signedInUser);
        console.log(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  let isFieldValid = true;
  const handleBlur = (e) => {
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    } else if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      const passwordHasSpecialCharacter = /\W|_/g.test(e.target.value);
      isFieldValid =
        isPasswordValid && passwordHasNumber && passwordHasSpecialCharacter;
    } else if (e.target.name === "passwordConfirm") {
      passwordMatched = true;
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      const passwordHasSpecialCharacter = /\W|_/g.test(e.target.value);
      isFieldValid =
        passwordMatched &&
        isPasswordValid &&
        passwordHasNumber &&
        passwordHasSpecialCharacter;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    if (!isFieldValid) {
      alert("Error: Not Valid Email or Password Or Password Not Matched");
    }
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          // Signed in
          const newUser = userCredential.user;
          const { displayName, email } = newUser;
          let userInfo = { ...user };
          userInfo = {
            name: displayName,
            email: email,
          };
          userInfo.message = (
            <p style={{ color: "green" }}>
              Congratulations! Account is Created
            </p>
          );
          console.log(userInfo);
          setUser(userInfo);
          updateUserName(userInfo.name);
          history.replace(from);
          // setLoggedInUser(userInfo);
        })
        .catch((error) => {
          const errorMessage = error.message;
          const userInfo = { ...user };
          userInfo.message = <p style={{ color: "red" }}>{errorMessage}</p>;
          setUser(userInfo);
        });
    }
    if (!newUser && user.email && user.password) {
      console.log(user.email, user.password);
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          let userInfo = { ...user };
          // userInfo = {
          //   // name: displayName,
          //   // email: email,
          // };

          userInfo.message = (
            <p style={{ color: "green" }}>Account Logged In Successfully</p>
          );
          setUser(userInfo);
          setLoggedInUser(userInfo);
          history.replace(from);
        })
        .catch((error) => {
          const errorMessage = error.message;
          const userInfo = { ...user };
          userInfo.message = <p style={{ color: "red" }}>{errorMessage}</p>;
          setUser(userInfo);
        });
    }
    e.preventDefault();

    const updateUserName = (name) => {
      const user = firebase.auth().currentUser;

      user
        .updateProfile({
          displayName: name,
        })
        .then(() => {
          // Update successful.
          console.log("updated successfully");
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    };
  };

  return (
    <>
      <div className="container">
        <div className="signup">
          <h2 className="fw-bold m-3">
            {newUser ? "Create Account" : "Login"}
          </h2>
          <form onSubmit={handleSubmit}>
            {newUser && (
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  onBlur={handleBlur}
                  type="name"
                  name="name"
                  placeholder="Name..."
                  className="form-control"
                  id="exampleInputEmail1"
                  required
                  aria-describedby="emailHelp"
                />
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                onBlur={handleBlur}
                type="email"
                name="email"
                placeholder="Email..."
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                onBlur={handleBlur}
                type="password"
                name="password"
                id="password"
                required
                placeholder="Type Your Password..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password Confirmation
              </label>
              <input
                onBlur={handleBlur}
                type="password"
                name="passwordConfirm"
                id="password-confirm"
                required
                placeholder="Type Again..."
                className="form-control"
              />
            </div>
            <div className="requirements-for-pass">
              <h5>Characteristics for strong password</h5>
              <ul>
                <li>Minimum 8 Characters</li>
                <li>Minimum 1 Special Character</li>
                <li>Minimum 1 Number</li>
              </ul>
            </div>
            {user.message && user.message}
            <button type="submit" className="btn btn-success w-100">
              {newUser ? "Sign Up" : "Sign In"}
            </button>
            <p className="text-center mt-4">
              {newUser
                ? "Already Have an Account ?"
                : `Don't Have an Account ?`}{" "}
              <Link
                onClick={() => setNewUser(!newUser)}
                to="/login"
                style={{ color: "#157347" }}
              >
                {newUser ? "Log In" : "Create Account"}
              </Link>
            </p>
          </form>
          {/* <button
            onClick={handleSignIn}
            type="submit"
            className="btn btn-success w-100"
          >
            Sign In
          </button> */}
          <div style={{ marginTop: "12rem" }}>
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
      </div>
    </>
  );
};

export default SignUp;
