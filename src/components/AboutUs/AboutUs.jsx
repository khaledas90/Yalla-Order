import React from "react";

import "./AboutUs.css";
import NavRestaurants from "../NavRestaurants/NavRestaurants";

import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");
  return (
    <>
      <div className={` AboutUs Main_bg`}>
        <NavRestaurants />
        <div className={`container p-5 ${lang === "ar" ? "ar" : ""}`}>
          <div className="row justify-content-center">
            <div className=" col-lg-7 ">
              <div className="card p-4">
                <form className="py-5 px-4">
                  <h1 className="text-center my-3">{t("About Us")}</h1>
                  <p className="mt-2 text-center">
                    {t(
                      "Foodc is a website and mobile app for ordering food and booking medical consultations, and it provides its services in various locations. Whether you find yourself immersed in the bustling heart of the city, residing in the suburbs, or in the surrounding areas, our services are readily available to meet your needs. Enjoy the unparalleled convenience of having food delivered directly to your door and booking your medical consultations with ease."
                    )}
                  </p>

                  <div className="d-grid gap-2 mt-4"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
