import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import SearchRestaurants from "../components/SearchRestaurants/SearchRestaurants";
import Search from "../assets/search.svg";
import AllClinics from "../components/AllClinics/AllClinics";
import NavClinics from "../components/NavClinics/NavClinics";
import { useTranslation } from "react-i18next";
function Clinics() {
  const { t } = useTranslation();

  const lang = localStorage.getItem("i18nextLng");
  return (
    <div className={`Clinics ${lang === "ar" ? "ar" : ""}`}>
      <Helmet>
        <title>{t(`Clinics`)}</title>
        <meta
          name="description"
          content="Discover the best Clinics around you."
        />
      </Helmet>
      <div className="Main_bg">
        <NavClinics />
        <div className="inputDiv">
          <SearchRestaurants
            pageAddress={t(`Clinics`)}
            placeholder={t(`Find your Location..`)}
            btnText={t(`Search`)}
            icon={Search}
          />
        </div>
      </div>

      <AllClinics />
    </div>
  );
}

export default Clinics;
