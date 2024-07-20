import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Partner from "../components/partner/Partner";
import OurWork from "../components/How-work/OurWork";
import TopBeAPartner from "../components/TopBeAPartner/TopBeAPartner";
import { Helmet } from "react-helmet";
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
// import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import NavRestaurants from "../components/NavRestaurants/NavRestaurants";
import NavClinics from "../components/NavClinics/NavClinics";
import { useSelector } from "react-redux";
function BeAPartner() {
  const { typePage } = useSelector((state) => state.User);

  return (
    <div className="BeAPartner">
      <Helmet>
        <title>Be Partner With Insta Order</title>
        <meta
          name="description"
          content="Welcome to our service. Here you can find the best restaurants and clinics."
        />
      </Helmet>
      <div className="Main_bg">
        {typePage === "restaurant" ? <NavRestaurants /> : <NavClinics />}
        <TopBeAPartner />
      </div>
      <Partner />
      <OurWork />
    </div>
  );
}

export default BeAPartner;
