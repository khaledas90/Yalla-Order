import React, { useEffect, useState } from 'react'
import NavRestaurants from '../components/NavRestaurants/NavRestaurants'
import "../components/TrackOrders/TrackOrders.css";
import shoppingBag from "../assets/shopping-bag.png";
import { useConfirmedOrder } from '../context/ConfirmedOrderProvider';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchOrdersList } from '../services/apiRestaurant';
import Loader from '../components/loader/Loader';
function TrackOrders() {
  const { confirmedOrders } = useConfirmedOrder();
  const { t } = useTranslation();
  const Navigate = useNavigate();
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [ordersError, setOrdersError] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoadingOrders(true);
        setOrdersError(null);

        const data = await fetchOrdersList();

        setOrders(data.data);
      } catch (error) {
        console.error('Error fetching orders list:', error);
        setOrdersError('Failed to fetch orders list');
      } finally {
        setLoadingOrders(false);
      }
    };

    fetchOrders();
  }, []);

  if (loadingOrders) return <Loader />

  return (
    <div className='trackOrders'>
      <div className='Main_bg'>
        <NavRestaurants />
        <h1 className='MainTitle'>{t("TRACK ORDERS")}</h1>
      </div>
      <div className='container my-5'>
        {confirmedOrders.length === 0 ?
          <div className='no-orders'>
            <img src={shoppingBag} alt='no orders' />
            <h1>There is no orders to track</h1>
          </div> :

          <div className='row'>
            {orders?.map((order =>
              <div key={order.id} className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>

                <div className='confirmedOrder'>
                  <p>My Order</p>
                  <div className='details'>
                    <ul>
                      <li>
                        <p>Restaurant</p>
                        <p>{order['Resturant Name']}</p>
                      </li>
                      <li>
                        <p>Delivery fee</p>
                        <p>{order['Delivery Fee']} EGP</p>
                      </li>
                      <li>
                        <p>Price</p>
                        <p>{order['Price']} EGP</p>
                      </li>
                      <li>
                        <p>Total</p>
                        <p>{order['Total']} EGP</p>
                      </li>
                      <li>
                        <p>order</p>
                        <p>{order['Product Name']}</p>
                      </li>
                      <li>
                        <p>Date</p>
                        <p>{order['Date']}</p>
                      </li>
                    </ul>
                    <div className='text-center'>
                      <button onClick={() => Navigate(`${order['Order Id']}`)} className='trackBtn'>Track Order</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>


        }

      </div>
    </div>
  )
}

export default TrackOrders
