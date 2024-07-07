import React from "react";

import "./FrogrtPasss.css";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export default function ForgetPass() {
  return (
    <>
      <div className="ForgetPass Main_bg">
        <Header MainPage={"Restaurants" ? "restaurants" : "CLinics"} IconOne={< FavoriteBorderOutlinedIcon />} IconTwo={<LanguageOutlinedIcon />} IconThree={<ShoppingBagOutlinedIcon />} />

        <div className="container p-5">
          <div className="row justify-content-center">
            <div className=" col-lg-7 ">
              <div className="card p-4">
                <form className="py-5 px-4">
                  <h2 className="text-center mt-5 mb-3">Forgot Password?</h2>
                  <p className="mt-2 text-center">
                    Don't worry, we'll send you reset instructions
                  </p>
                  <div className="form-group my-4">
                    <input
                      type="text"
                      required
                      placeholder="Enter your email address "
                      className="form-control rounded-pill px-4 py-3 border-secondary"
                    />
                  </div>

                  <div className="d-grid gap-2 mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary btnLogin btn-block"
                    >
                      Reset Password
                    </button>
                  </div>

                  <div className="text-center mt-3 BackLogin ">
                    <span>
                      <Link exact="true" to="/Login">
                        Back to login
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
