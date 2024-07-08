import { Helmet } from "react-helmet"
import { useEffect } from "react";
import HeroRestaurant from "../components/Hero/HeroRestaurant";
import Header from "../components/header/Header.jsx";
import HowWorkHomeRestaurant from "../components/How-Work-Home/HowWorkHomeRestaurant.jsx";
import FavCuisinesRestaurant from "../components/FavCuisines/FavCuisinesRestaurant.jsx";
import NavToPartnerRestaurant from "../components/NavToPartner/NavToPartnerRestaurant.jsx";
import DownloadAppRestaurant from "../components/DownloadApp/DownloadAppRestaurant.jsx";

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Explore from "../components/Explore/Explore.jsx";



// api

import { getRestaurants } from "../services/apiRestaurant.js";
let apiUrl = "https://insta-order-site.web-allsafeeg.com/api";
let token = "313|lQZW0WC2iV5cuamyL4ReqboYJvMtPHXsGoG7fM5Q25578c7e";
let language = "en";


function HomeRestaurants() {
    useEffect(() => {
        getRestaurants(token, apiUrl, language).then((result) => {
            console.log(result);
        }).catch((err) => {

        });
    }, [])

    return (
        <main className="HomeRestaurants">
            <Helmet>
                <title>FoODc</title>
                <meta name="description" content="Welcome to our service. Here you can find the best restaurants and clinics." />
            </Helmet>
            <div className="Main_bg">
                <Header MainPage={'Restaurants'} IconOne={< FavoriteBorderOutlinedIcon />} IconTwo={<LanguageOutlinedIcon />} />
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
    )
}

export default HomeRestaurants
