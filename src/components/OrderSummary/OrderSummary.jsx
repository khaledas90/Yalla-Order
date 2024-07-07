import "./OrderSummary.css";
function OrderSummary() {
  return (
    <form className="orderSummary">
      <div className="orderHeader">
        <p>Order Summary</p>
        <button>MODIFY ORDER</button>
      </div>
      <div className="itemsForEachRestaurant">
        <div className="restaurant-name">El Maqam</div>
        <table>
          <tr className="tableHeader">
            <th>Item</th>
            <th>Size</th>
            <th>Special Request</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>Sausage Hawawshi</td>
            <td>Large</td>
            <td>Add special request</td>
            <td>1</td>
            <td>EGP 95.00</td>
            <td>EGP 95.00</td>
          </tr>

        </table>
      </div>

      <div className="DeliveryAddress">
        <div className="addressHeader">
          <p>Delivery Address</p>
          <button>Add New Address</button>
        </div>
        <div className="Address">
          Alexandria, Smouha, Smouha Circle, Zohour Bargout Building, fourth 4, Apartment 2
        </div>
      </div>
      <div className="requests">
        <p>Add special requests here</p>
        <textarea cols="50" rows="6" placeholder="Add special requests here"></textarea>
      </div>
      <div className="PaymentSummary">
        <p>Payment Summary</p>
        <div>
          <p>Got a voucher code? Place your order from the foodc app to be able to use it. *</p>
          <p className="cash">Cash</p>
          <div className="inputs">
            <div >
              <input type="radio" id="Delivery" name="DeliveryOrOnSite" value="Delivery" />
              <label htmlFor="Delivery">Delivery</label>
            </div>
            <div >
              <input type="radio" id="On Site" name="DeliveryOrOnSite" value="On Site" />
              <label htmlFor="On Site">On Site</label>
            </div>
          </div>
        </div>

      </div>
      <ul className="orderOverview">
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
      <div className="text-center mt-5">
        <button className="confBtn">Confirm</button>
      </div>
    </form>
  )
}

export default OrderSummary
