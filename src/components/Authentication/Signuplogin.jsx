import React, { useState } from "react";
import { database } from "./firebaseconfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signuplogin({setUser}) {
  const [login, setLogin] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const birthdate = type === "signup" ? e.target.birthdate.value : null;

    // Form validation
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Invalid email format";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
      errors.password =
        "Password must contain at least 8 characters with one uppercase letter and one number";
    }
    if (type === "signup" && !birthdate) {
      errors.birthdate = "Birthdate is required";
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      if (type === "signup") {
        createUserWithEmailAndPassword(database, email, password)
          .then((data) => {
            console.log(data, "authData");
            history("/");
            setUser('')
          })
          .catch((err) => {
            alert(err.code);
            setLogin(true);

          });
      } else {
        signInWithEmailAndPassword(database, email, password)
          .then((data) => {
            console.log(data.user.uid, "authData");
            setUser(data.user.uid);
            history("/home");
          })
          .catch((err) => {
            alert(err.code);
          });
      }
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">
            {login ? "Sign In" : "Sign Up"}
          </h1>
          <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
            <div className="form-group my-2">
              <input
                name="email"
                type="email"
                className={`form-control ${
                  formErrors.email ? "is-invalid" : ""
                }`}
                placeholder="Email"
              />
              {formErrors.email && (
                <div className="invalid-feedback">{formErrors.email}</div>
              )}
            </div>
            <div className="form-group my-2">
              <input
                name="password"
                type="password"
                className={`form-control ${
                  formErrors.password ? "is-invalid" : ""
                }`}
                placeholder="Password"
              />
              {formErrors.password && (
                <div className="invalid-feedback">{formErrors.password}</div>
              )}
            </div>
            {login ? null : (
              <div className="form-group my-2">
                <input
                  name="birthdate"
                  type="text"
                  className={`form-control ${
                    formErrors.birthdate ? "is-invalid" : ""
                  }`}
                  placeholder="Birthdate (MM/YYYY)"
                />
                {formErrors.birthdate && (
                  <div className="invalid-feedback">{formErrors.birthdate}</div>
                )}
              </div>
            )}
            <button className="btn btn-primary btn-block text-center">
              {login ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <p className="text-center mt-3">
            {login ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              className="text-primary font-weight-bold"
              onClick={() => setLogin(!login)}
              style={{ cursor: "pointer" }}
            >
              {login ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signuplogin;
