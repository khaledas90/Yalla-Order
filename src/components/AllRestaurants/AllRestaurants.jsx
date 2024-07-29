import { Link, useLocation } from "react-router-dom";
import "./AllRestaurants.css";
import { RESTAURANTS } from "./FakeData";
import { useEffect, useState } from "react";
import { fetchAllRestaurants } from "../../services/apiRestaurant";
import { useTranslation } from "react-i18next";
import { text } from "@fortawesome/fontawesome-svg-core";
import Loader from "../loader/Loader";
import NetworkError from "../loader/NetworkError";

function AllRestaurants({restaurants,loading,error,setRestaurants,setLoading,setError}) {
    const [numToShow, setNumToShow] = useState(8)
    const { t } = useTranslation();
  const { pathname } = useLocation();
  const RestaurantsToshow = restaurants?.slice(0, numToShow);
  const lang = localStorage.getItem("i18nextLng");
  useEffect(() => {
    const getRestaurants = async () => {
      try {
        setLoading(true); // Start loading
        const data = await fetchAllRestaurants();
        setRestaurants(data.data);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error('Error fetching restaurants:', error);
        setError('Failed to fetch restaurants');
      } finally {
        setLoading(false); // End loading
      }
    };

    getRestaurants();
  }, []);

    function handleIncrease() {
        if (numToShow <= restaurants.length) {
            setNumToShow((state) => state + 4)

        }
    }
    const handleSearchResults = (results) => {
        setRestaurants(results);
      };
    useEffect(() => {

        window.scrollTo(0, 0);
    }, [pathname]);

    if(loading) return <Loader/>
    if(error) return (<NetworkError/>)
    return (
        <div className={`allRestaurants w-100 overflow-hidden ${lang === "ar" ? "ar" : ""}`}>
                <div className="container">
                <div className={`d-flex justify-content-between align-items-center`}>
                {lang === "ar" ? 
                    <>
                    <Link to={'/promocodes'}>{t("Show Offers")}</Link>
                    <h1><span>{t('all')}</span> {t('restaurants')}</h1>
                    </>
                    :
                     <>
                    <h1><span>{t('all')}</span> {t('restaurants')}</h1>
                    <Link to={'/promocodes'}>{t("Show Offers")}</Link>
                   
                    </>

                }
                
               
                </div>
                   
                </div>
            <div className="restaurantsList">
                <div className="container">
                    <div className="row">
                        {RestaurantsToshow?.map((restaurant) =>
                            <div key={restaurant.id} className="col-12 col-md-6 col-lg-3 mb-5">
                                <div className="restaurant">
                                    <Link to={`${restaurant.id}?restaurant=${restaurant.name}`}>
                                        <img src={restaurant.logo} alt="restaurant" />
                                        <div className="details">
                                            <div>
                                                <p>{restaurant.name}</p>
                                                <p>{restaurant.descrption}</p>
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
                {numToShow <= RESTAURANTS.length ? <button onClick={() => handleIncrease()} className="seeMoreBtn">{t("see more")}</button> : <p>{t("no more")}</p>}
            </div>
        </div>
    )
}

export default AllRestaurants
