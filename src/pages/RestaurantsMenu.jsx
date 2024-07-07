
import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import Header from "../components/header/Header";
import RestaurantMenu from "../components/RestaurantMenu/RestaurantMenu";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
function RestaurantsMenu() {
    return (
        <div className="Restaurants">
            <Helmet>
                <title>Restaurants</title>
                <meta name="description" content="Discover the best restaurants around you." />
            </Helmet>
            <div className="Main_bg">
                <Header MainPage={'Restaurants'} IconOne={< FavoriteBorderOutlinedIcon />} IconTwo={<LanguageOutlinedIcon />} />
            </div>
            <RestaurantMenu />
        </div>
    );
}

export default RestaurantsMenu;











