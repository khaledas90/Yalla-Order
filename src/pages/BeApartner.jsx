import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Partner from "../components/partner/Partner";
import OurWork from "../components/How-work/OurWork";
import Header from "../components/header/Header";
import TopBeAPartner from "../components/TopBeAPartner/TopBeAPartner";
import { Helmet } from "react-helmet";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from "react-redux";
function BeAPartner() {
    const { token } = useSelector(state => state.User);
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);

    useEffect(() => {
        setIsLoggedIn(!!token);
    }, [token]);
    return (
        <div className="BeAPartner">
            <Helmet>
                <title>FoODc</title>
                <meta name="description" content="Welcome to our service. Here you can find the best restaurants and clinics." />
            </Helmet>
            <div className="Main_bg">
                <Header
                    MainPage={'Restaurants'}
                    IconOne={<FavoriteBorderOutlinedIcon />}
                    IconTwo={<LanguageOutlinedIcon />}
                    IconThree={isLoggedIn ? <LocalMallIcon /> : ''}
                    IconFour={isLoggedIn ? <AccountCircleIcon /> : ''}
                />
                <TopBeAPartner />
            </div>
            <Partner />
            <OurWork />
        </div>
    );
}

export default BeAPartner;
