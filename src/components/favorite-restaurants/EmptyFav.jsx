import EmptyFavIcon from "../../assets/emptyFav.svg";
import "./FavRestaurant.css";
function EmptyFav() {
  return (
    <div className="fav">
      <p className="favHeader">My Favorite</p>
      <div className="fav-content">
        <div className="emptyFav">
          <img src={EmptyFavIcon} alt="emptyFav" />
          <p>Add what you like to your fav list</p>
        </div>
      </div>
    </div>
  )
}

export default EmptyFav
