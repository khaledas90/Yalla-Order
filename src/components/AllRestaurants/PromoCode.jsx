import { Link, useLocation } from "react-router-dom";
import "./AllRestaurants.css";
import "./PromoCode.css";
import { useEffect, useState } from "react";
import { fetchPromoCodes, storePromoCode } from "../../services/apiRestaurant";
import { useTranslation } from "react-i18next";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import Loader from "../loader/Loader";
import NetworkError from "../loader/NetworkError";
import NavRestaurants from "../NavRestaurants/NavRestaurants";
import toast, { Toaster } from "react-hot-toast";

function PromoCode() {
    const [numToShow, setNumToShow] = useState(8)
    const { t } = useTranslation();
  const { pathname } = useLocation();
  const [promoCodes, setPromoCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const lang = localStorage.getItem("i18nextLng");
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loadingStore, setLoadingStore] = useState(false);

  const handleStorePromoCode = async (e,promoCodeId) => {
    try {
        setLoadingStore(true);
      setSuccessMessage('');
      setErrorMessage('');

      navigator.clipboard.writeText(e.target.title).then(() => {
        toast.success('promo code copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy title: ', err);
      });

      // Call the async function to store the promo code
      const data = await storePromoCode(promoCodeId);


      // Set a success message if the request is successful
      setSuccessMessage(`Promo code ${e.target.title} stored successfully!`);
    } catch (error) {
      // Set an error message if there's an issue
      setErrorMessage('Failed to store promo code. Please try again.');
    } finally {
        setLoadingStore(false);
    }
  };






  useEffect(() => {
    const getPromoCodes = async () => {
      try {
        setLoading(true);
        const data = await fetchPromoCodes();
        setPromoCodes(data.data);
        setError(null);
      } catch (error) {
        setError('Failed to fetch promo codes');
      } finally {
        setLoading(false);
      }
    };

    getPromoCodes();
  }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    if(loading) return <Loader/>
    if(error) return (<NetworkError/>)
    return (
        <>
        <div className="Main_bg">
        <NavRestaurants/>
        <div className="TitleMenuPage">
        <div className="content text-center">
            <h1>{t("offers")}</h1>
        </div>
        </div>
        </div>
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
        
        <div className={`allRestaurants promo w-100 overflow-hidden ${lang === "ar" ? "ar" : ""}`}>
        
                <div className="container">
                    <h1 className={`text-center ${lang === "ar" ? "text-md-end" : ""}  text-md-start`}>{t("Promo Code")} <LocalOfferOutlinedIcon/></h1>
                    <p className={`text-center ${lang === "ar" ? "text-md-end" : ""}  text-md-start`}>{t("Click On order to get Promo Code")}</p>
                </div>
            <div className="restaurantsList">
                <div className="container">
                    <div className="row">
                        {promoCodes?.map((restaurant) =>
                            <div key={restaurant.id} className="col-12 col-md-6 col-lg-3 mb-5">
                                <div onClick={(e) => handleStorePromoCode(e,restaurant.promocodeid)} title={restaurant.promocodename} className={`restaurant promo ${restaurant.status === "ON"? "active" : ""}`}>
                                        <img src={restaurant.logo} alt="restaurant" />
                                        <div className="details">
                                            <div>
                                                <p>{restaurant.name}</p>
                                                <p>{restaurant.descrption}</p>
                                            </div>

                                        </div>
                                </div>

                            </div>
                        )}

                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default PromoCode
