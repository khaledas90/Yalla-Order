import { Link, useParams, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { RESTAURANTS } from "../AllRestaurants/FakeData";
import ReactStars from "react-rating-stars-component";
import "./RestaurantMenu.css";
import openIcon from "../../assets/open.svg";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import InfoIcon from '@mui/icons-material/Info';
import SausageHawawshi1 from "../../assets/Sausage Hawawshi 1.png";
import SausageHawawshi2 from "../../assets/Sausage Hawawshi2.png";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
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
    const [showCategory, setShowCategory] = useState(Category[0]);

    const ratingChanged = (newRating) => {
        setRestaurantRating(newRating)
    };
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const handleShowCategory = (e) => {
        setShowCategory(e.target.title)
        console.log(showCategory)
    }

    useEffect(() => {
        console.log(id);
        setCurrentRestaurant((RESTAURANTS.find((el) => el.id === 1)))
    }, [id])
    return (

        <div className="restaurantsMenu">
            <Helmet>
                <title>{RestaurantName} Menu</title>
            </Helmet>
            <div className='inputDiv inputDivRestaurantItem'>

            </div>
            <div className="TitleMenuPage">
                <div className="content text-center">
                    <h1>Restaurants</h1>
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
                    <p>{CurrentRestaurant.name}</p>
                    <p>in Sidi Gaber, Alex</p>
                    <p>{CurrentRestaurant?.food?.join(",")}</p>
                    <div><div className="back"></div><img src={openIcon} alt="" /></div>
                    <p>Min. order: EGP 20.00</p>
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
                                    <p>Categories</p>
                                    <ul className="categoriesList">
                                        {Category?.map((e => <li title={e} className={`${showCategory === e ? "active" : ""}`} onClick={handleShowCategory} key={e}>{e}</li>))}
                                    </ul>
                                </div>
                                <div className="menuBasedCategory">
                                    <p>{showCategory}</p>
                                    <div className="dishesList">
                                        {Menu.filter((e => e.category === showCategory)).map((e =>
                                            <div key={e.id} className="dish">
                                                <div className="dishImg"><img src={e.image} alt={e.DishName} /></div>
                                                <div className="dish-details">
                                                    <p className="dish-name">{e.DishName}</p>
                                                    <p className="ingradiantes">{e.ingradiantes}</p>
                                                    <p className="price">{e.price}</p>
                                                </div>
                                                <button className="favBtn"><FavoriteBorderOutlinedIcon /></button>
                                                <button className="bagBtn"><ShoppingBagOutlinedIcon /></button>

                                            </div>
                                        ))}
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center mt-5">
                                        <button type="button" className="checkBagBtn"><Link to={`CreateOrder`}>Check your bag</Link></button>
                                    </div>

                                </div>
                            </div>
                        }
                        {activeTab === 'info' &&
                            <div className="infoContent">
                                <p>{CurrentRestaurant.name}</p>
                                <ul className="infoList">
                                    <li>
                                        <p>Minimum Order Amount</p>
                                        <p>EGP 20.00</p>
                                    </li>
                                    <li>
                                        <p>Working Hours</p>
                                        <p>1:00PM - 2:30AM</p>
                                    </li>
                                    <li>
                                        <p>Delivery Time</p>
                                        <p>38 mins</p>
                                    </li>
                                    <li>
                                        <p>Delivery fee</p>
                                        <p>EGP 4.99</p>
                                    </li>
                                    <li>
                                        <p>Payment</p>
                                        <p>Cash</p>
                                    </li>
                                    <li>
                                        <p>Rating</p>
                                        <p></p>
                                    </li>
                                    <li>
                                        <p>Cuisines</p>
                                        <p>Pies, Pizza, Pasta</p>
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
