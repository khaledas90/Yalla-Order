import React, { useEffect, useState } from 'react'
import "./orderPage.css";
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ReactStars from "react-rating-stars-component";
import openIcon from "../../assets/open.svg";
import NavRestaurants from '../NavRestaurants/NavRestaurants';
import CreateOrder from '../CreateOrder/CreateOrder';
import { fetchOrderDetails } from '../../services/apiRestaurant';
import { useSearchParams } from 'react-router-dom';
import Loader from '../loader/Loader';
function OrderPage() {
    const lang = localStorage.getItem("i18nextLng");
    const {t} = useTranslation();
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const  restaurantId = searchParams.get("restaurantId");
    const  productId = searchParams.get("productId");
    const  productName = searchParams.get("productName");


    useEffect(() => {
    const getOrderDetails = async () => {
        try {
          setLoading(true); // Start loading
          const data = await fetchOrderDetails(restaurantId,productId );
          setOrderDetails(data.data);
          setError(null); // Clear any previous errors
        } catch (error) {
          console.error('Error fetching order details:', error);
          setError('Failed to fetch order details');
        } finally {
          setLoading(false); // End loading
        }
      };
  
      getOrderDetails();
    }, [restaurantId, productId]);
    console.log(orderDetails)

    if(loading) return <Loader/>
    const {additem,addsaui,resturant,sizes} = orderDetails;
  return (
    <div className='orderPage'>
    <Helmet>
    {lang === "ar"? <title>طلب {productName}</title> : 
    <title>{productName} order</title>
    }
        
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
            <img src="" alt="" />
        </div>

    </div>
    <div className="rating">
        <span> Rating</span>
        <ReactStars
            count={5}
            size={40}
            a11y={true}
            isHalf={true}
            emptyIcon={<i className="far fa-star" />}
            halfIcon={<i className="fa fa-star-half-alt" />}
            fullIcon={<i className="fa fa-star" />}
            activeColor="#ffd700"
            value={4}
        />

    </div>

    <div className="RestaurantDetails">
        <div className="details">
            <p>{resturant.name}</p>
            <p>{resturant.address}</p>
            <p>{resturant.descrption}</p>
            <div><div className="back"></div><img src={openIcon} alt="" /></div>
        </div>

    </div>
    <div className='container mb-5 mt-3'>
        <CreateOrder orderDetails={orderDetails} productName={productName} productId={productId}/>
    </div>
    </div>
  )
}

export default OrderPage
