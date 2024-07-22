import React, { useEffect, useState } from 'react'
import "./TrackOrders.css"
import NavRestaurants from '../NavRestaurants/NavRestaurants'
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import { trackOrder } from '../../services/apiRestaurant';
import { useParams } from 'react-router-dom';
import Loader from '../loader/Loader';
import { useTranslation } from 'react-i18next';
function TrackedOrderItem() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [orderStatus, setOrderStatus] = useState(null);
    const {id} = useParams();
    const {t} = useTranslation();


    function handleStatus(data){
    data.accept_statue === "1" ? 
    setOrderStatus("accept") : 
    data.ready_statue === "1" ?
     setOrderStatus("ready") : 
     data.pickup_statue === "1" ?
      setOrderStatus("pickedUp") :
       setOrderStatus("delivered")     
    }
    useEffect(() => {
        const fetchOrderStatus = async () => {
          try {
            setLoading(true);
            setError(null);
    
            const data = await trackOrder(id);
            handleStatus(data.data);
          } catch (error) {
            setError('Failed to track order');
          } finally {
            setLoading(false);
          }
        };
    
        fetchOrderStatus();
      }, [id]);

 if(loading) return <Loader/>
  return (
    <div className='trackOrders'>
    <div className='Main_bg'>
    <NavRestaurants/>
    <h1 className='MainTitle'>{t("TRACK ORDERS")}</h1>
    </div>
    <div className='container my-5'>
        <div className='phases'>

        <div className='phase'> 
        <div className={`icon dashed ${orderStatus === "accept" || orderStatus === "ready" || orderStatus === "pickedUp" ? "active" : ""}`}><InventoryOutlinedIcon/></div>
            <div>
                    <p>{t("Order Accept")}</p>
                    <p className=''>{t("preparing your Order")}</p>
            </div>
        
        </div>
        <div className='phase'> 
        <div className={`icon dashed ${orderStatus === "ready" ? "active" || orderStatus === "pickedUp" : ""}`}><SoupKitchenOutlinedIcon/></div>
            <div>
                    <p>{t("Order Ready")}</p>
                    <p className=''>{t("Captain is Picking your order")}</p>
            </div>
        
        </div>
        <div className='phase'> 
        <div className={`icon dashed ${orderStatus === "pickedUp" || orderStatus === "delivered" ? "active" : ""}`}><DeliveryDiningOutlinedIcon/></div>
            <div>
                    <p>{t("Order Picked up")}</p>
                    <p className=''>{t("Captain is on this way")}</p>
            </div>
        
        </div>
        <div className='phase'> 
        <div className={`icon ${orderStatus === "delivered" ? "active" : ""}`}><CheckCircleOutlineOutlinedIcon/></div>
            <div>
                    <p>{t("order delivered")}</p>
            </div>
        
        </div>
            
        </div>
    
    </div>


    </div>
  )
}

export default TrackedOrderItem
