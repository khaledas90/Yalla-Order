import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Helmet from "react-helmet";
import SearchRestaurants from "../components/SearchRestaurants/SearchRestaurants";
import AllRestaurants from "../components/AllRestaurants/AllRestaurants";
import Search from "../assets/search.svg";
import { useTranslation } from "react-i18next";
import { fetchAllRestaurants } from "../services/apiRestaurant";
import NavRestaurants from "../components/NavRestaurants/NavRestaurants";

function Restaurants() {
  const { t } = useTranslation();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      setLoading(true);
      const data = await fetchAllRestaurants();
      setRestaurants(data.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setError("Failed to fetch restaurants");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchResults = (results) => {
    setRestaurants(results);
  };
  return (
    <div className="Restaurants">
      <Helmet>
        <title>{t("restaurants")}</title>
        <meta
          name="description"
          content="Discover the best restaurants around you."
        />
      </Helmet>
      <div className="Main_bg">
        <NavRestaurants />
        <div className="inputDiv">
          <SearchRestaurants
            pageAddress={t("restaurants")}
            placeholder={"Find your Restaurant.."}
            btnText={t("Search")}
            icon={Search}
            onSearchResults={handleSearchResults}
            type={"order"}
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
