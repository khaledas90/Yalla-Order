
import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import Header from "../components/header/Header";
import RestaurantItems from "../components/RestaurantItem/RestaurantItem";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NavRestaurants from "../components/NavRestaurants/NavRestaurants";
function RestaurantItem() {
    return (
        <div className="Restaurants">
            <Helmet>
                <title>Restaurants</title>
                <meta name="description" content="Discover the best restaurants around you." />
            </Helmet>
            <div className="Main_bg">
            <NavRestaurants/>

            </div>
            <RestaurantItems />
        </div>
    );
}

export default RestaurantItem;
