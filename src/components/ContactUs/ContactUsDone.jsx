import React from "react";
import imgContact from "../../assets/contact us.png";
import "./ContactUs.css";
import Header from "../header/Header";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export default function ContactUsDone() {
  return (
    <>
      <div className="ContactUs  Main_bg">
        <Header MainPage={"Restaurants" ? "Restaurants" : "CLinics"} IconOne={< FavoriteBorderOutlinedIcon />} IconTwo={<LanguageOutlinedIcon />} IconThree={<ShoppingBagOutlinedIcon />} />

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
                  <button className="btn btn-primary btn-contact btn-block rounded-pill py-3 font-weight-bold display-6">
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
