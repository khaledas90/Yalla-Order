import { useState } from "react";
import "./FavRestaurant.css";
import { fetchFavoritesList } from "../../services/apiRestaurant";
import EmptyFav from "./EmptyFav";
import { Spinner } from "react-bootstrap";
function FavRestaurant({ favorites, loadingFavorites, favoritesError }) {
  if (favorites.length === 0) return <EmptyFav />;
  if (loadingFavorites) return <Spinner />;
  return (
    <div className="fav">
      <p className="favHeader">My Favorite</p>
      <div className="fav-content">
        {favorites?.map((fav) => (
          <div key={favorites.indexOf(fav)}>
            <p  className="restaurant-name">
              {fav.restaurant_name}- <span>{fav.restaurant_address}</span>
            </p>
            <div  className="favItem">
              <p>{fav.product_name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavRestaurant;
