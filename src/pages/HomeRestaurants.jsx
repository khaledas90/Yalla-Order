import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import HeroRestaurant from "../components/Hero/HeroRestaurant";
import Header from "../components/header/Header.jsx";
import HowWorkHomeRestaurant from "../components/How-Work-Home/HowWorkHomeRestaurant.jsx";
import FavCuisinesRestaurant from "../components/FavCuisines/FavCuisinesRestaurant.jsx";
import NavToPartnerRestaurant from "../components/NavToPartner/NavToPartnerRestaurant.jsx";
import DownloadAppRestaurant from "../components/DownloadApp/DownloadAppRestaurant.jsx";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Explore from "../components/Explore/Explore.jsx";
import NavRestaurants from "../components/NavRestaurants/NavRestaurants.jsx";



function HomeRestaurants() {
    const { token } = useSelector(state => state.User);
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);

    useEffect(() => {
        setIsLoggedIn(!!token);
    }, [token]);
    console.log(token);
    return (
        <main className="HomeRestaurants">

            <Helmet>
                <title>insta Order</title>
                <meta name="description" content="Welcome to our service. Here you can find the best restaurants and clinics." />
            </Helmet>
            <div className="Main_bg">
                {/* <Header MainPage={'Restaurants'} IconOne={< FavoriteBorderOutlinedIcon />} IconTwo={<LanguageOutlinedIcon />} /> */}
                <NavRestaurants />
                <HeroRestaurant />
            </div>
            <HowWorkHomeRestaurant />
            <FavCuisinesRestaurant />
            <NavToPartnerRestaurant />
            <div className="bgEndHome">
                <Explore />
                <DownloadAppRestaurant />
            </div>
        </main>
    );
}

export default HomeRestaurants
