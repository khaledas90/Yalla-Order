import { useState } from "react";
import "./FavRestaurant.css";
import { fetchFavoritesList } from "../../services/apiRestaurant";
import EmptyFav from "./EmptyFav";
import { Spinner } from "react-bootstrap";
function FavRestaurant({ favorites, loadingFavorites, favoritesError }) {
  // console.log("fav from fav",favorites)
  if (favorites.length === 0) return <EmptyFav />;
  if (loadingFavorites) return <Spinner />;
  return (
    <div className="fav">
      <p className="favHeader">My Favorite</p>
      <div className="fav-content">
        {favorites?.map((fav) => (
          <>
            <p key={fav.product_name} className="restaurant-name">
              {fav.restaurant_name}- <span>{fav.restaurant_address}</span>
            </p>
            <div key={fav.product_name} className="favItem">
              <p>{fav.product_name}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default FavRestaurant;
