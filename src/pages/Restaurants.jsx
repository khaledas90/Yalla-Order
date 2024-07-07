// import { Helmet } from "react-helmet"
import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import SearchRestaurants from "../components/SearchRestaurants/SearchRestaurants";
import AllRestaurants from "../components/AllRestaurants/AllRestaurants";
import Search from '../assets/search.svg';
import Header from "../components/header/Header";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
function Restaurants() {
    return (
        <div className="Restaurants">
            <Helmet>
                <title>Restaurants</title>
                <meta name="description" content="Discover the best restaurants around you." />
            </Helmet>
            <div className="Main_bg">
                <Header MainPage={'Restaurants'} IconOne={< FavoriteBorderOutlinedIcon />} IconTwo={<LanguageOutlinedIcon />} />
                <div className='inputDiv'>
                    <SearchRestaurants
                        pageAddress={"RESTAURANTES"}
                        placeholder={"Find your Restaurant.."}
                        btnText={"Search"}
                        icon={Search}

                    />
                </div>
            </div>

            <AllRestaurants />
        </div>
    );
}

export default Restaurants;


