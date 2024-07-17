import { Helmet } from "react-helmet";

import Header from "../components/header/Header.jsx";


import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import HeroMedical from "../components/Hero/HeroMedical.jsx";
import HowWorkHomeMedical from "../components/How-Work-Home/HowWorkHomeMedical.jsx";
import FavCuisinesMedical from "../components/FavCuisines/FavCuisinesMedical.jsx";
import NavToPartnerMedical from "../components/NavToPartner/NavToPartnerMedical.jsx";
import Explore from "../components/Explore/Explore.jsx";
import DownloadAppMedical from "../components/DownloadApp/DownloadAppMedical.jsx";
import { useSelector } from "react-redux";
function HomeMedical() {
  return (
    <main className="HomeMedical">
      <Helmet>
        <title>Medical</title>
        <meta name="description" content="Welcome to our service. Here you can find the best  clinics." />
      </Helmet>
      <div className="Main_bg">
        <Header MainPage={'Clinks'} IconOne={< FavoriteBorderOutlinedIcon />} IconTwo={<LanguageOutlinedIcon />} IconThree={<ShoppingBagOutlinedIcon />} />
        <HeroMedical />
      </div>
      <HowWorkHomeMedical />
      <FavCuisinesMedical />
      <NavToPartnerMedical />
      <div className="bgEndHome">
        <Explore />
        <DownloadAppMedical />
      </div>


    </main>
  )
}

export default HomeMedical;
