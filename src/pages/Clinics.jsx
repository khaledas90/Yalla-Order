import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import SearchRestaurants from "../components/SearchRestaurants/SearchRestaurants";
import Search from "../assets/search.svg";
import AllClinics from "../components/AllClinics/AllClinics";
import NavClinics from "../components/NavClinics/NavClinics";
function Clinics() {
  return (
    <div className="Clinics">
      <Helmet>
        <title>Clinics</title>
        <meta
          name="description"
          content="Discover the best Clinics around you."
        />
      </Helmet>
      <div className="Main_bg">
        <NavClinics />
        <div className="inputDiv">
          <SearchRestaurants
            pageAddress={"Clinics"}
            placeholder={"Find your Clinics.."}
            btnText={"Search"}
            icon={Search}
          />
        </div>
      </div>

      <AllClinics />
    </div>
  );
}

export default Clinics;
