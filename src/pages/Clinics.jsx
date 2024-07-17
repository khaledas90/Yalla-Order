import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import SearchRestaurants from "../components/SearchRestaurants/SearchRestaurants";
import Search from "../assets/search.svg";
import Header from "../components/header/Header";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AllClinics from "../components/AllClinics/AllClinics";
function Clinics() {
  return (
    <div className="Clinics">
      <Helmet>
        <title>Clinics</title>
        <meta name="description" content="Discover the best Clinics around you." />
      </Helmet>
      <div className="Main_bg">
        <Header MainPage={'Clinics'} IconOne={< FavoriteBorderOutlinedIcon />} IconTwo={<LanguageOutlinedIcon />} IconThree={<ShoppingBagOutlinedIcon />} />
        <div className='inputDiv'>
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
