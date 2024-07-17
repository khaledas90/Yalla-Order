import { Link, useParams, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState, useTransition } from "react";
import { RESTAURANTS } from "../AllRestaurants/FakeData";
import ReactStars from "react-rating-stars-component";
import "./RestaurantMenu.css";
import openIcon from "../../assets/open.svg";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import InfoIcon from '@mui/icons-material/Info';
import SausageHawawshi1 from "../../assets/Sausage Hawawshi 1.png";
import SausageHawawshi2 from "../../assets/Sausage Hawawshi2.png";
import rate from "../../assets/rate.svg";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { addItemToFavorites, fetchAllCategories, fetchAllMenuItems, fetchMenuItems, fetchRestaurantById } from "../../services/apiRestaurant";
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import { useTranslation } from "react-i18next";
import Loader from "../loader/Loader";
import Spinner from "../loader/Spinner";
const Menu = [
    {
        id: 1, DishName: "Sausage Hawawshi", category: "Hawawshi", image: SausageHawawshi1, ingradiantes: "Dough stuffed with Oriental susage , Mozzarella cheese , Roumi cheese and vegetables", price: "EGP 95.00"
    },
    {
        id: 2, DishName: "Sausage Hawawshi", category: "Hawawshi", image: SausageHawawshi2, ingradiantes: "Dough stuffed with Oriental susage , Mozzarella cheese , Roumi cheese and vegetables", price: "EGP 95.00"
    }
]

const Category = ["Best selling", "Hawawshi", "Pies", "Pizza", "Pasta", "Sweet Pies", "Kids Meals", "Appetizers", "Beverages"];
function RestaurantMenu() {

    const [searchParams] = useSearchParams();
    const RestaurantName = searchParams.get('restaurant');
    const { id } = useParams();
    const [CurrentRestaurant, setCurrentRestaurant] = useState({});
    const [RestaurantRating, setRestaurantRating] = useState();
    const [activeTab, setActiveTab] = useState('menu');
    
    const [restaurant, setRestaurant] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([]);
    const [showCategory, setShowCategory] = useState("All");
    const [loadCategories,setLoadCategories] = useState(true)
    const [erorrCategories,setErorrCategories] = useState(true)
    const [selectedCategoryId,setSelectedCategoryId] = useState();
    const [menuItems, setMenuItems] = useState([]);
    const [loadMenuItems,setLoadMenuItems] = useState(false);
    const [errorMenuItems,setErrorMenuItems] = useState(true);
    const [AllMenuItems, setAllMenuItems] = useState([]);
    const [loadingMenu, setLoadingMenu] = useState(false);
    const [menuError, setMenuError] = useState(null);
    const [loadingFavorite, setLoadingFavorite] = useState(false);
    const [favoriteError, setFavoriteError] = useState(null);
    const [favoriteSuccess, setFavoriteSuccess] = useState(false);
  
    const {t} = useTranslation()
    const lang = localStorage.getItem("i18nextLng");

    const ratingChanged = (newRating) => {
        setRestaurantRating(newRating)
    };
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    async function handleAddToFavorites(e,productId) {
      try {
        e.preventDefault();
        setLoadingFavorite(true);
        setFavoriteError(null);
        setFavoriteSuccess(false);
  
        const response = await addItemToFavorites(productId);
  
        setFavoriteSuccess(true);
        console.log('Product added to favorites successfully');
        return response;
      } catch (error) {
        console.error('Error adding product to favorites:', error);
        setFavoriteError('Failed to add product to favorites');
        throw error;
      } finally {
        setLoadingFavorite(false);
      }
    }
  



    useEffect(() => {
        const getRestaurant = async () => {
          try {
            setLoading(true); 
            const data = await fetchRestaurantById(id);
            setRestaurant(data.data);
            setError(null); 
          } catch (error) {
            console.error('Error fetching restaurant:', error);
            setError('Failed to fetch restaurant');
          } finally {
            setLoading(false);
          }
        };
    
        getRestaurant();
      }, [id]);
    

      useEffect(() => {
        const getCategories = async () => {
          try {
            setLoadCategories(true); // Start loading
            const data = await fetchAllCategories();
            setCategories(data.data);
            setErorrCategories(null); // Clear any previous errors
          } catch (error) {
            console.error('Error fetching categories:', error);
            setErorrCategories('Failed to fetch categories');
          } finally {
            setLoadCategories(false); // End loading
          }
        };
    
        getCategories();
      }, []);

      useEffect(() => {
        const fetchMenu = async () => {
          try {
            setLoadingMenu(true);
            setMenuError(null);
    
            const data = await fetchAllMenuItems(id);
    
            setMenuItems(data.data);
          
          } catch (error) {
            console.error('Error fetching menu items:', error);
            setMenuError('Failed to fetch menu items');
          } finally {
            setLoadingMenu(false);
          }
        };
    
        fetchMenu();
      }, [id]);


      if(loading) return <Loader/>

      const { "Total rate": totalRate, "best selling": bestSelling, "resturant info": restaurantInfo, reviwes } = restaurant;

      const handleShowCategory = async (e,id) => {
        setShowCategory(e.target.title);
        setSelectedCategoryId(null);
        setMenuItems([]);
        setErrorMenuItems("")
        try {
            setLoadMenuItems(true); // Start loading
            let data;
            showCategory === "All" || id === -1 ? data = await fetchAllMenuItems(restaurantInfo.id) : data = await fetchMenuItems(restaurantInfo.id, id)
            setMenuItems(data.data);
            setErrorMenuItems(null); 
          } catch (error) {
            console.error(`Error fetching menu items for category ${id}:`, error);
            setErrorMenuItems('Failed to fetch menu items');
          } finally {
            setLoadMenuItems(false); // End loading
          }
          
        };

        

        // const handleFetchMenu = async () => {
        //     try {
        //       setLoadingMenu(true);
        //       setMenuError(null);
        
        //       const data = await fetchAllMenuItems(restaurantId);
        
        //       setMenuItems(data);
        //       console.log('Menu items:', data);
        //     } catch (error) {
        //       console.error('Error fetching menu items:', error);
        //       setMenuError('Failed to fetch menu items');
        //     } finally {
        //       setLoadingMenu(false);
        //     }
        //   };
    

    return (

        <div className="restaurantsMenu">
            <Helmet>
            {lang === "ar"? <title>{t("Menu")} {restaurantInfo.name}</title> : 
            <title>{restaurantInfo.name} {t("Menu")}</title>
            }
                
            </Helmet>
            <div className='inputDiv inputDivRestaurantItem'>

            </div>
            <div className="TitleMenuPage">
                <div className="content text-center">
                    <h1>{t("restaurants")}</h1>
                </div>
            </div>

            <div className="restaurant-overview">
                <div className="img-wrapper">
                    <img src={CurrentRestaurant.image} alt={CurrentRestaurant.name} />
                </div>

            </div>
            <div className="rating">
                <span>{RestaurantRating} Rating</span>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
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
                    <p>{restaurantInfo.name}</p>
                    <p>{restaurantInfo.address}</p>
                    <p>{restaurantInfo.descrption}</p>
                    <div><div className="back"></div><img src={openIcon} alt="" /></div>
                </div>

            </div>
            <div className="container">
                <div className="tabs">
                    <div className="tab-headers">
                        <div
                            className={`tab-header ${activeTab === 'menu' ? 'active menu' : ''}`}
                            onClick={() => handleTabClick('menu')}
                        >
                            <RestaurantIcon /> Menu
                        </div>
                        <div
                            className={`tab-header ${activeTab === 'info' ? 'active info' : ''}`}
                            onClick={() => handleTabClick('info')}
                        >
                            <InfoIcon /> Info
                        </div>
                    </div>
                    <div className="tab-content">
                        {activeTab === 'menu' &&
                            <div className="menuContent">
                                <div className="categories">
                                    <p>{t("Categories")}</p>
                                    <ul className="categoriesList">
                                        <li title="All" onClick={(e) => handleShowCategory(e,-1)} className={`${showCategory === "All" ? "active" : ""}`}>All Menu</li>
                                        {categories?.map((el => <li onClick={(e) => handleShowCategory(e,el.id)} title={el.name} className={`${showCategory === el.name ? "active" : ""}`}  key={el.id}>{el.name}</li>))}
                                    </ul>
                                </div>
                                <div className="menuBasedCategory">
                                    <p>{showCategory}</p>
                                    <div className="dishesList">
                                    {errorMenuItems === "Failed to fetch menu items"? <h2 className="no-menu-items">{t("No Items From This Category")}</h2> : null}
                                        { loadMenuItems ? <Spinner/>  : menuItems?.map((el =>
                                            <Link to={`orderPage?restaurantId=${restaurantInfo.id}&productId=${el.id}&productName=${el['product name']}`}>
                                            <div key={el.id} className="dish">
                                                <div className="dishImg"><img src={el.logo} alt={el['product name']} /></div>
                                                <div className="dish-details">
                                                    <p className="dish-name">{el['product name']}</p>
                                                    <p className="ingradiantes">{el['product descrption']}</p>
                                                    <p className="price">{el['product price']} EGP</p>
                                                </div>
                                                <button onClick={(e)=> handleAddToFavorites(e,el.id) } className="favBtn"><FavoriteBorderOutlinedIcon /></button>

                                            </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center mt-5">
                                    </div>

                                </div>
                            </div>
                        }
                        {activeTab === 'info' &&
                            <div className={`infoContent ${lang === "ar" ? "ar" : ""}`}>
                                <p>{restaurantInfo.name}</p>
                                <ul className="infoList">
                                    <li>
                                        <p>{t("Working Hours")}</p>
                                        <p>{restaurantInfo.starttime}PM - {restaurantInfo.endtime}AM</p>
                                    </li>
                                    <li>
                                        <p>{t("Address")}</p>
                                        <p>{restaurantInfo.address}</p>
                                    </li>
                                    <li>
                                        <p>{t("Delivery fee")}</p>
                                        <p>EGP {restaurantInfo.delivery_fee}</p>
                                    </li>
                                    <li>
                                        <p>{t("Payment")}</p>
                                        <p>Cash <PaymentsOutlinedIcon/></p>
                                    </li>
                                    <li>
                                        <p>{t("Rating")}</p>
                                        <p>{totalRate} ⭐</p>
                                    </li>
                                    <li>
                                        <p>{t("Description")}</p>
                                        <p>{restaurantInfo.descrption}</p>
                                    </li>

                                </ul>
                            </div>}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RestaurantMenu
