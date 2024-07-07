import "./Bag.css";

function Bag() {
  return (
    <div className="bag">
      <p className="bagHeader">My Bag</p>
      <div className="bag-content">
        <p className="restaurant-name">El Maqam - <span>Semouha</span></p>
        <div className="bagItem">
          <p>Sausage Hawawshi</p>
          <button className="clearBtn">-</button>
          <div className="increaseAndDecrease">
            <button className="decreaseBtn">-</button>
            <div>1</div>
            <button className="increaseBtn">+</button>
          </div>
        </div>
        <ul className="bagOverview">
          <li>
            <div>subTotal</div>
            <div className="value">95.00 EGP</div>
          </li>
          <li>
            <div>Delivery fee</div>
            <div className="value">11.99 EGP</div>
          </li>
          <li>
            <div>Total amount</div>
            <div className="value">106.99 EGP</div>
          </li>

        </ul>
        <button className="checkBtn">Check Order</button>
      </div>
    </div>
  )
}

export default Bag
