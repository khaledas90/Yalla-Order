import React from "react";
import "./successPass.css";
import { Link } from "react-router-dom";
import imgSuccess from "../../assets/success.png";
import Header from "../header/Header";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export default function SuccessPass() {
  return (
    <>
      <div className="SuccessPass Main_bg">
        <Header MainPage={"Restaurants" ? "Restaurants" : "CLinics"} IconOne={< FavoriteBorderOutlinedIcon />} IconTwo={<LanguageOutlinedIcon />} IconThree={<ShoppingBagOutlinedIcon />} />

        <div className="container p-5">
          <div className="row justify-content-center">
            <div className=" col-lg-7 ">
              <div className="card p-4">
                <form className="py-5 px-4">
                  <div className="text-center mt-5 mb-3">
                    <img src={imgSuccess} alt="imgSuccess" className="w-80" />
                  </div>
                  <p className="mt-2 text-center">
                    Your Password has been successfully
                  </p>

                  <div className="d-grid gap-2 mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary btnLogin btn-block"
                    >
                      <Link exact="true" to="/Login">
                        Reset Password
                      </Link>
                    </button>
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
