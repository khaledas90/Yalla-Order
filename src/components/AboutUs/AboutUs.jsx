import React, { useEffect, useState } from "react";

import "./AboutUs.css";
import Header from "../header/Header";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from "react-redux";
// import Lang from "./Lang.js";

export default function AboutUs() {
  const { token } = useSelector(state => state.User);
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);
  return (
    <>
      <div className="AboutUs Main_bg">
        <Header
          MainPage={'Restaurants'}
          IconOne={<FavoriteBorderOutlinedIcon />}
          IconTwo={<LanguageOutlinedIcon />}
          IconThree={isLoggedIn ? <LocalMallIcon /> : ''}
          IconFour={isLoggedIn ? <AccountCircleIcon /> : ''}
        />
        <div className="container p-5">
          <div className="row justify-content-center">
            <div className=" col-lg-7 ">
              <div className="card p-4">
                <form className="py-5 px-4">
                  <h1 className="text-center my-3">About Us</h1>
                  <p className="mt-2 text-center">
                    Foodc is a website and mobile app for ordering food and
                    booking medical consultations, and it provides its services
                    in various locations. Whether you find yourself immersed in
                    the bustling heart of the city, residing in the suburbs, or
                    in the surrounding areas, our services are readily available
                    to meet your needs. Enjoy the unparalleled convenience of
                    having food delivered directly to your door and booking your
                    medical consultations with ease.
                  </p>

                  <div className="d-grid gap-2 mt-4"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Lang /> */}
    </>
  );
}
