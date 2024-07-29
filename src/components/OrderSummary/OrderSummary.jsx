import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./OrderSummary.css";
import ReactStars from "react-rating-stars-component";
import NavRestaurants from "../NavRestaurants/NavRestaurants";
import openIcon from "../../assets/open.svg";
import { useTranslation } from "react-i18next";
import { confirmOrder, fetchOrderSummary } from "../../services/apiRestaurant";
import Loader from "../loader/Loader";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import MopedOutlinedIcon from '@mui/icons-material/MopedOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import { use } from "i18next";
import { useConfirmedOrder } from "../../context/ConfirmedOrderProvider";
import { useOrders } from "../../context/OrderProvider";
import { read_cookie } from "sfcookies";
function OrderSummary() {
  const [orderSummary, setOrderSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const [selectedDeliveryMethod,setSelectedDeliveryMethod] = useState('delivery');
const [selectedPayMethod,setSelectedPayMethod] = useState('cash');
const [specail_request,setSpecail_request] = useState("");
const {orderId}  = useParams();
const [searchParams,setSearchParams] = useSearchParams()
const restaurantName = searchParams.get("restaurantName");
const productName = searchParams.get("productName");
const {t} = useTranslation();
const lang = localStorage.getItem("i18nextLng");
const Navigate = useNavigate();
const [confirmLoading, setConfirmLoading] = useState(false);
const [confirmError, setConfirmError] = useState(null);
const [successMessage, setSuccessMessage] = useState('');
const {confirmedOrders,addConfirmedOrder} = useConfirmedOrder();
const {deleteOrder} = useOrders();
const address = JSON.parse(localStorage.getItem('locations'));
console.log(address)
const Lastaddress = address?.at(0);
// const TotalPrice = selectedDeliveryMethod === "delivery" ? Number(orderSummary.Total) + Number(orderSummary['Delivery Fee']) : Number(orderSummary.Total);
useEffect(() => {
  const getOrderSummary = async () => {
    try {
      setLoading(true); // Start loading
      const data = await fetchOrderSummary(orderId);
      setOrderSummary(data.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching order summary:', error);
      setError('Failed to fetch order summary');
    } finally {
      setLoading(false); // End loading
    }
  };

  getOrderSummary();
}, [orderId]);


const handleConfirmOrder = async (e) => {
  try {
    e.preventDefault()
    setConfirmLoading(true);
    setConfirmError(null);
    setSuccessMessage('');

    const data = await confirmOrder(orderId, {
      
      specail_request: specail_request,
      delivery_method: selectedDeliveryMethod,
      pay_method: selectedPayMethod
    });

    setSuccessMessage('Order confirmed successfully!');
    console.log(data)
    addConfirmedOrder({...data.data,restaurantName,productName})
    deleteOrder(data.data.id)
    Navigate(`/trackOrders/${data.data.id}`)
    
  } catch (error) {
    console.error('Error confirming order:', error);
    setConfirmError('Failed to confirm order');
  } finally {
    setConfirmLoading(false);
  }
};
const handleConfirmOrderAndPay = async (e) => {
  try {
    e.preventDefault()
    setConfirmLoading(true);
    setConfirmError(null);
    setSuccessMessage('');

    const data = await confirmOrder(orderId, {
      
      specail_request: specail_request,
      delivery_method: selectedDeliveryMethod,
      pay_method: selectedPayMethod,
      address : Lastaddress.placeName
    });

    setSuccessMessage('Order confirmed successfully!');
    if(data.data) window.open(data.data)
    console.log(data)
    addConfirmedOrder({...data.data,restaurantName,productName})
    deleteOrder(data.data.id)
    
    
  } catch (error) {
    console.error('Error confirming order:', error);
    setConfirmError('Failed to confirm order');
  } finally {
    setConfirmLoading(false);
  }
};


if (loading) {
  return <Loader/>;
}


  return (

    <div className="OrderSummaryPage">
    <Helmet>
    {lang === "ar" ? <title>{t("order")} {orderSummary['Product Name']} </title>
    : <title>{orderSummary['Product Name']} order</title>  }
    </Helmet>
    <div className="Main_bg">
    <NavRestaurants/>
    <div className="TitleMenuPage">
    <div className="content text-center">
        <h1>{t("restaurants")}</h1>
    </div>
    </div>
    </div>
    <div className="restaurant-overview">
        <div className="img-wrapper">
            <img src={orderSummary.Resturant_image} alt={orderSummary['Resturant Name']} />
        </div>

    </div>

    <div className="RestaurantDetails">
        <div className="details">
            <p>{orderSummary['Resturant Name']}</p>
            <p>{orderSummary['Resturant Address']}</p>
            <p></p>
            <div><div className="back"></div><img src={openIcon} alt="" /></div>
        </div>

    </div>   
     <div className="container">
    <form className={`orderSummary ${lang === "ar"? "ar" : ""}`}>
      <div className="orderHeader">
        <p>{t("Order Summary")}</p>
      </div>
      <div className="itemsForEachRestaurant">
        <div className="restaurant-name">{orderSummary['Resturant Name']}</div>
        <table>
          <tr className="tableHeader">
            <th>{t("Item")}</th>
            <th>{t("Size")}</th>
            <th>{t("Qty")}</th>
            <th>{t("Price")}</th>
            <th>{t("Total")}</th>
          </tr>
          <tr>
            <td>{orderSummary['Product Name']}</td>
            <td>{orderSummary.Size}</td>
            <td>{orderSummary['Order QTY']}</td>
            <td>{orderSummary.Total}</td>
            <td>{orderSummary.Total}</td>
          </tr>

        </table>
      </div>

      <div className="DeliveryAddress">
        <div className="addressHeader">
          <p>{t("Delivery Address")}</p>
          <button>{t("Add New Address")}</button>
        </div>
        <div className="Address">
            {Lastaddress?.placeName}
        </div>
      </div>
      <div className="requests">
        <p>{t("Add special requests here")}</p>
        <textarea onChange={(e) => setSpecail_request(e.target.value)} value={specail_request} style={{resize:"none",width:"60%",height:"200px"}} placeholder={t("Add special requests here")}></textarea>
      </div>
      <div className="PaymentSummary">
        <p>{t("Payment Summary")}</p>
        <div>
          <p>{t("Got a voucher code? Place your order from the insta order app to be able to use it. *")}</p>
          <div className="inputs">
          <div className="payContainer">
            <input type="radio" id="Cash" name="pay_method" value="cash" onChange={()=> setSelectedPayMethod('cash')} checked={selectedPayMethod === "cash"} />
            <label htmlFor="Cash"><PaymentsOutlinedIcon/>{t("Cash")}</label>
          </div>
          <div className="payContainer">
            <input type="radio" id="card" name="pay_method" value="card"  onChange={()=> setSelectedPayMethod('card')}checked={selectedPayMethod === "card"}/>
            <label htmlFor="card"><PaymentOutlinedIcon/>{t("Visa Card")}</label>
          </div>
        </div>
          <div className="inputs">
            <div className="deliveryContainer">
              <input type="radio" id="Delivery" name="delivery_method" value="delivery" onChange={() => setSelectedDeliveryMethod('delivery')} checked={selectedDeliveryMethod === "delivery"} />
              <label htmlFor="Delivery"><MopedOutlinedIcon/> {t("Delivery")}</label>
            </div>
            <div className="deliveryContainer">
              <input type="radio" id="onsite" name="delivery_method" value="onsite" onChange={() => setSelectedDeliveryMethod('onsite')} checked={selectedDeliveryMethod === "onsite"} />
              <label htmlFor="onsite"><StorefrontOutlinedIcon/>{t("On Site")}</label>
            </div>
          </div>
        </div>

      </div>
      <ul className="orderOverview">
        <li>
        {selectedDeliveryMethod === 'delivery' && 
          <>
          <div>{t("Delivery fee")}</div>
          <div className="value">{orderSummary['Delivery Fee']} EGP</div>
          </>
        }
          
        </li>
        <li>
          <div>{t("Total")}</div>
          <div className="value">{orderSummary.Total} EGP</div>
        </li>

      </ul>
      <div className="text-center mt-5">
        {selectedPayMethod === "cash"? 
        <button onClick={handleConfirmOrder} className="confBtn">{confirmLoading ? t("Order in progress...") : t("Confirm Order")}</button> : 
        <button onClick={handleConfirmOrderAndPay} className="confBtn">{confirmLoading ? t("Order in progress...") : t("Go to payment")}</button>
 }
      </div>
    </form>
    </div>
    </div>
  )
}

export default OrderSummary
