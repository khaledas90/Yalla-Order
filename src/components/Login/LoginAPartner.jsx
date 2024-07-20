import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./login.css";
import { Link } from "react-router-dom";
import {
  faApple,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import NavRestaurants from "../NavRestaurants/NavRestaurants";

export default function LoginAPartner() {
  return (
    <>
      <div className="Login LoginAPartner Main_bg">

        <NavRestaurants />

        <div className="container p-5">
          <div className="row justify-content-center">
            <div className=" col-lg-7 ">
              <div className="card p-4">
                <form className="py-2 px-2">
                  <h2 className="text-center mb-4">LOGIN A PARTNER</h2>
                  <h5 className="text-center mb-4">
                    Welcome to the foodc Portal
                  </h5>
                  <div className="form-group my-4">
                    <input
                      type="text"
                      required
                      placeholder="Email Address "
                      className="form-control rounded-pill px-4 py-3 border-secondary"
                    />
                  </div>
                  <div className="form-group my-2">
                    <input
                      type="text"
                      required
                      placeholder="Password"
                      className="form-control rounded-pill px-4 py-3 border-secondary"
                    />
                  </div>
                  <div className="text-end forgetPass mb-3">
                    <Link exact="true" to="/Forgot_password">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary btnLogin btn-block"
                    >
                      Login
                    </button>
                  </div>
                  <div className="text-center mt-4">
                    <div class="separator">
                      <hr class="line" />
                      <span>Or</span>
                      <hr class="line" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <Link to="www.facebook.com" className=" me-2">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="me-2 social-icon"
                      />
                    </Link>
                    <Link to="www.twitter.com" className="me-2">
                      <FontAwesomeIcon
                        icon={faApple}
                        className="me-2 social-icon social-icon2"
                      />
                    </Link>
                    <Link to="www.google.com" id="google">
                      <FontAwesomeIcon
                        icon={faGoogle}
                        className="me-2 social-icon  social-icon3"
                      />
                    </Link>
                  </div>
                  <div className="text-center SignUp ">
                    <span>
                      Don’t have an account?{" "}
                      <Link exact="true" to="/Sign Up">
                        Sign Up
                      </Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
