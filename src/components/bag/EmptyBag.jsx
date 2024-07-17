import "./Bag.css";
import shoppingBag from "../../assets/shopping-bag.png";
function EmptyBag() {
  return (
    <div className="bag">
      <p className="bagHeader">My Bag</p>
      <div className="bag-content">
        <div className="emptyBag">
          <img src={shoppingBag} alt="emptyBag" />
          <p>There are no items in your Bag</p>
        </div>
      </div>
    </div>
  )
}

export default EmptyBag
