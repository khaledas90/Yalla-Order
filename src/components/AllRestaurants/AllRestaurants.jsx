import { Link, useLocation } from "react-router-dom";
import "./AllRestaurants.css";
import { RESTAURANTS } from "./FakeData";
import { useEffect, useState } from "react";

function AllRestaurants() {
    const [numToShow, setNumToShow] = useState(8)
    const RestaurantsToshow = RESTAURANTS.slice(0, numToShow);
    const { pathname } = useLocation();

    function handleIncrease() {
        if (numToShow <= RESTAURANTS.length) {
            setNumToShow((state) => state + 4)

        }
    }
    useEffect(() => {

        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="allRestaurants w-100 overflow-hidden">
            <div className="container">
                <h1><span>All</span> Restaurants</h1>
            </div>
            <div className="restaurantsList">
                <div className="container">
                    <div className="row">
                        {RestaurantsToshow?.map((restaurant) =>
                            <div key={restaurant.id} className="col-12 col-md-6 col-lg-3 mb-5">
                                <div className="restaurant">
                                    <Link to={`${restaurant.id}?restaurant=${restaurant.name}`}>
                                        <img src={restaurant.image} alt="restaurant" />
                                        <div className="details">
                                            <div>
                                                <p>{restaurant.name}</p>
                                                <p>{restaurant.food.join(",")}</p>
                                            </div>

                                        </div>
                                    </Link>
                                </div>

                            </div>
                        )}

                    </div>
                </div>
            </div>
            <div className="text-center">
                {numToShow <= RESTAURANTS.length ? <button onClick={() => handleIncrease()} className="seeMoreBtn">See More</button> : <p>No More</p>}
            </div>
        </div>
    )
}

export default AllRestaurants
