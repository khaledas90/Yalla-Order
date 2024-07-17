// import { Helmet } from "react-helmet"
import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import SearchRestaurants from "../components/SearchRestaurants/SearchRestaurants";
import AllRestaurants from "../components/AllRestaurants/AllRestaurants";
import Search from '../assets/search.svg';
import Header from "../components/header/Header";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import NavRestaurants from "../components/NavRestaurants/NavRestaurants";

function Restaurants() {
     const {t} = useTranslation()
     const [restaurants, setRestaurants] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
     const handleSearchResults = (results) => {
        setRestaurants(results);
      };
    return (
        <div className="Restaurants">
            <Helmet>
                <title>{t("restaurants")}</title>
                <meta name="description" content="Discover the best restaurants around you." />
            </Helmet>
            <div className="Main_bg">
              <NavRestaurants/>
                <div className='inputDiv'>
                    <SearchRestaurants
                        pageAddress={"RESTAURANTES"}
                        placeholder={"Find your Restaurant.."}
                        btnText={"Search"}
                        icon={Search}
                        onSearchResults={handleSearchResults}

                    />
                </div>
            </div>

            <AllRestaurants
              restaurants={restaurants} 
              loading={loading} 
              error={error}
              setRestaurants={setRestaurants}
              setLoading={setLoading}
              setError={setError}
               />
        </div>
    );
}

export default Restaurants;


