import React from "react";
import facebook from "../../assets/faceBook.svg";
import instagram from "../../assets/instagram.svg";
import appStore from "../../assets/logo appstore.png";
import googlePlay from "../../assets/logo googlestore.png";
import logoImg from "../../assets/Insta Order.svg";

import "./footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const lang = localStorage.getItem("i18nextLng");
  return (
    <>
      <div
        className={`d-flex flex-column justify-content-center gap-3 py-5 pt-3 pt-lg-5 footer ${
          lang === "ar" ? "ar" : ""
        }`}
      >
        <div className="d-flex justify-content-between container flex-column flex-lg-row flex-md-row">
          <div className="logo d-lg-block d-flex justify-content-center align-items-center">
            <img src={logoImg} className="footerLogo" alt="" />
          </div>
          <div className="footer-icon d-flex flex-column gap-3 gap-lg-5 mt-3 mt-lg-5">
            <div className="contact text-white d-flex gap-3 align-items-center justify-content-center justify-content-lg-start ms-0 ms-lg-3">
              <p className="mb-0 ps-0">
                <Link to={"/ContactUs"}>{t(`Contact us`)}</Link>
              </p>
              <p className="mb-0 ps-0">{t(`Follow Us`)}</p>
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
            </div>
            <div
              className={`d-flex justify-content-center align-items-center appDownload`}
            >
              <button className="border-0 btn">
                <img src={appStore} alt="" />
              </button>
              <button className="border-0 btn">
                <img src={googlePlay} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className={`container cobyRight`}>
          <p className="mb-0 text-text-black-50 text-center text-lg-start ">
            {t(`Copyright © 2023 LOGO. Design & Develop by All Safe`)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
