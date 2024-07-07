import React from "react";

import "./ContactUs.css";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export default function ContactUs() {
  return (
    <>
      <div className="ContactUs Main_bg">
        <Header MainPage={"Restaurants" ? "restaurants" : "CLinics"} IconOne={< FavoriteBorderOutlinedIcon />} IconTwo={<LanguageOutlinedIcon />} IconThree={<ShoppingBagOutlinedIcon />} />

        <div className="container p-5">
          <div className="row justify-content-center">
            <div className=" col-lg-7 ">
              <div className="card p-4">
                <h1 className="text-center my-2">CONTACT US</h1>
                <h6>
                  Need <span>help?</span>
                </h6>
                <form className="py-5 px-4">
                  <div className="form-group my-2">
                    <input
                      type="text"
                      required
                      placeholder="First Name *"
                      className="form-control rounded-pill px-4 py-3 border-secondary"
                    />
                  </div>
                  <div className="form-group my-2">
                    <input
                      type="text"
                      required
                      placeholder="Last Name *"
                      className="form-control rounded-pill px-4 py-3 border-secondary"
                    />
                  </div>
                  <div className="form-group my-2">
                    <input
                      type="email "
                      required
                      placeholder="Business Email *"
                      className="form-control rounded-pill px-4 py-3 border-secondary"
                    />
                  </div>
                  <div className="form-group d-flex align-items-center my-2">
                    <span className="Code_country">+20</span>

                    <input
                      type="number "
                      required
                      placeholder={`Phone Number *`}
                      className="form-control rounded-pill px-4 py-3 border-secondary"
                    />
                  </div>
                  <div className="form-group my-2">
                    <textarea
                      required
                      placeholder="message"
                      className="form-control rounded-pill px-4 py-3 border-secondary"
                    />
                  </div>
                  <div className="Btn d-grid">
                    <Link to="ContactUsDone">
                      <button className="btn btn-primary btn-contact btn-block rounded-pill py-3 font-weight-bold display-6">
                        Send
                      </button>
                    </Link>
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
