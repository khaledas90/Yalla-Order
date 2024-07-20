import React from "react";
import imgContact from "../../assets/contact us.png";
import "./ContactUs.css";
import { Link } from "react-router-dom";
import NavRestaurants from "../NavRestaurants/NavRestaurants";
export default function ContactUsDone() {
  return (
    <>
      <div className="ContactUs  Main_bg">
        <NavRestaurants />
        <div className="container p-5">
          <div className="row justify-content-center">
            <div className=" col-lg-7 ">
              <div className="card p-4">
                <h1 className="text-center my-2">CONTACT US</h1>
                <h6>
                  Need <span>help?</span>
                </h6>
                <div className="img_contact d-flex justify-content-center">
                  <img src={imgContact} alt="img contact" />
                </div>
                <div className="Btn d-grid">
                  <Link to={"/"}>
                    <button className="btn btn-primary btn-contact btn-block rounded-pill py-3 font-weight-bold display-6">
                      Done
                    </button>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
