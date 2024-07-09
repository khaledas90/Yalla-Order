import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./signUp.css";
import { Link } from "react-router-dom";
import {
  faApple,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Header from "../header/Header";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { signUp } from "../../services/apiAuth";

export default function SignUp() {
  const [email,setEmail] = useState("");
  const [Password,setPassword] = useState("");
  const [phone,setPhone] = useState("010123456789");
  const [name,setName] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    signUp("https://insta-order-site.web-allsafeeg.com/api",email, name , Password, phone)
    .then(result => {
        console.log('User signed up successfully:', result);
    })
    .catch(error => {
        console.error('Sign up failed:', error);
    });
  }
  return (
    <>
      <div className="SignUp Main_bg">
        <Header MainPage={"Restaurants" ? "restaurants" : "CLinics"} IconOne={< FavoriteBorderOutlinedIcon />} IconTwo={<LanguageOutlinedIcon />} IconThree={<ShoppingBagOutlinedIcon />} />

        <div className="container p-5">
          <div className="row justify-content-center">
            <div className=" col-lg-7 ">
              <div className="card p-4">
                <form onSubmit={handleSubmit} className="py-2 px-2">
                  <h2 className="text-center mb-5">Create Account</h2>
                  <div className="form-group my-4">
                    <input
                      type="text"
                      required
                      placeholder="Name "
                      className="form-control rounded-pill px-4 py-3 border-secondary"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group my-4">
                    <input
                      type="text"
                      required
                      placeholder="Email "
                      className="form-control rounded-pill px-4 py-3 border-secondary"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group my-2">
                    <input
                      type="text"
                      required
                      placeholder="Password"
                      className="form-control rounded-pill px-4 py-3 border-secondary"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="d-grid gap-2 mt-4">
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
                    <a href="www.facebook.com" className=" me-2">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="me-2 social-icon"
                      />
                    </a>
                    <a href="www.twitter.com" className="me-2">
                      <FontAwesomeIcon
                        icon={faApple}
                        className="me-2 social-icon social-icon2"
                      />
                    </a>
                    <a href="www.google.com" id="google">
                      <FontAwesomeIcon
                        icon={faGoogle}
                        className="me-2 social-icon  social-icon3"
                      />
                    </a>
                  </div>
                  <div className="text-center SignUp ">
                    <span>
                      Already have an account?
                      <Link exact="true" to="/Login">
                        Log in
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
