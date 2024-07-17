import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import SearchRestaurants from "../components/SearchRestaurants/SearchRestaurants";
import Search from '../assets/search.svg';
import Header from "../components/header/Header";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AllClinics from "../components/AllClinics/AllClinics";
import { useSelector } from "react-redux";
function Clinics() {
    const { token } = useSelector(state => state.User);
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);

    useEffect(() => {
        setIsLoggedIn(!!token);
    }, [token]);
    return (
        <div className="Clinics">
            <Helmet>
                <title>Clinics</title>
                <meta name="description" content="Discover the best Clinics around you." />
            </Helmet>
            <div className="Main_bg">
                <Header
                    MainPage={'Restaurants'}
                    IconOne={<FavoriteBorderOutlinedIcon />}
                    IconTwo={<LanguageOutlinedIcon />}
                    IconThree={isLoggedIn ? <LocalMallIcon /> : ''}
                    IconFour={isLoggedIn ? <AccountCircleIcon /> : ''}
                />
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


