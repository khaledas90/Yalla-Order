import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import RestaurantMenu from "../components/RestaurantMenu/RestaurantMenu";
import NavRestaurants from "../components/NavRestaurants/NavRestaurants";
function RestaurantsMenu() {
    return (
        <div className="Restaurants">
            <Helmet>
                <title>Restaurants</title>
                <meta name="description" content="Discover the best restaurants around you." />
            </Helmet>
            <div className="Main_bg">
                <NavRestaurants />
            </div>
            <RestaurantMenu />
        </div>
    );
}

export default RestaurantsMenu;











