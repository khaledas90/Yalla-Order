import "./FavRestaurant.css";
function FavRestaurant() {
  return (
    <div className="fav">
      <p className="favHeader">My Favorite</p>
      <div className="fav-content">
        <p className="restaurant-name">El Maqam - <span>Semouha</span></p>
        <div className="favItem">
          <p>Sausage Hawawshi</p>
          <button className="clearBtn">-</button>
          <div className="increaseAndDecrease">
            <button className="decreaseBtn">-</button>
            <div>1</div>
            <button className="increaseBtn">+</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default FavRestaurant
