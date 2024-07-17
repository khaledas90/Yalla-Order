import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import Header from "../components/header/Header";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchRestaurants from "../components/SearchRestaurants/SearchRestaurants";
import Search from '../assets/search.svg';
import ClinicsItems from "../components/ClinicsItem/ClinicsItem";
import { useSelector } from "react-redux";
function ClinicItem() {
    const { token } = useSelector(state => state.User);
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);

    useEffect(() => {
        setIsLoggedIn(!!token);
    }, [token]);
    return (
        <div className="Clinics ClinicsItems">
            <Helmet>
                <title>Clinics</title>
                <meta name="description" content="Discover the best Clinic around you." />
            </Helmet>
            <div className="Main_bg">
                <Header
                    MainPage={'Restaurants'}
                    IconOne={<FavoriteBorderOutlinedIcon />}
                    IconTwo={<LanguageOutlinedIcon />}
                    IconThree={isLoggedIn ? <LocalMallIcon /> : ''}
                    IconFour={isLoggedIn ? <AccountCircleIcon /> : ''}
                />
                <SearchRestaurants
                    Pagetext={"Select your area to see the clinics near you"}
                    pageAddress={"Clinics"}
                    placeholder={"Find your Location.."}
                    btnText={"View Doctors"}
                    icon={Search}

                />
            </div>
            <ClinicsItems />
        </div>
    );
}

export default ClinicItem;
