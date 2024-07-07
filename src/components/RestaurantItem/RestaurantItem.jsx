import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { Helmet } from "react-helmet";
import SearchRestaurants from "../SearchRestaurants/SearchRestaurants";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RestaurantItem.css";
import '../AllRestaurants/AllRestaurants.css';
import CommentIcon from "../../assets/commentsIcon.svg";
import { RESTAURANTS } from "../AllRestaurants/FakeData";
import { useEffect, useState } from "react";
import locationOne from '../../assets/Location-One.svg';
import location from '../../assets/Location.svg';

function RestaurantItems() {

    // slick slider
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [searchParams] = useSearchParams();
    const RestaurantName = searchParams.get('restaurant');
    const [RestaurantRating, setRestaurantRating] = useState();
    const [CurrentRestaurant, setCurrentRestaurant] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    const ratingChanged = (newRating) => {
        setRestaurantRating(newRating)
    };
    const navigateToMenu = () => {
        navigate(`/restaurants/${id}/menu?restaurant=${CurrentRestaurant.name}`);
    };
    useEffect(() => {
        console.log(id);
        setCurrentRestaurant((RESTAURANTS.find((el) => el.id === 1)))
    }, [id])
    return (
        <div>
            <Helmet>
                <title>{RestaurantName} Restaurant</title>
            </Helmet>
            <div className='inputDiv inputDivRestaurantItem'>
                <SearchRestaurants
                    Pagetext={"Select your area to see the restaurant menu"}
                    pageAddress={"RESTAURANTES"}
                    placeholder={"Find your Restaurant.."}
                    btnText={"Branch Menu"}
                    icon={locationOne}
                    locIcon={location}

                />
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
            <div className="container">
                <div className="restaurant-deliver mb-5">
                    <p><span>{CurrentRestaurant.name}</span> delivers to you</p>
                    <p>El Maqam is a restaurant located in Egypt, serving a selection of Pies, Pizza, Pasta that delivers across Semouha - Sidi Gaber Station, Semouha - Sidi Gaber Station 2 and Sidi Besher Bahary.
                        Their best selling dishes are Margherita Pizza, Oriental Sausage And Pastrami Pie, Pastrami Pie and Oriental Sausage Pie, although they have a variety of dishes and meals to choose from like Pies, Pizza, Pasta.</p>
                </div>

                <div className="dishes">
                    <p>Best Seller Dishes</p>
                    <div className="row">
                        {CurrentRestaurant.bestDishes?.map((e =>
                            <div key={e.DishName} className="col-12 col-md-6 col-lg-3 mb-5">
                                <div className="dish">
                                    <div><img src={e.img} alt="dish" /></div>
                                    <p>{e.DishName}</p>

                                </div>
                            </div>))}
                    </div>
                    <div className="text-center">
                        <button onClick={navigateToMenu}>View Menu</button>
                    </div>
                </div>
                <div className="reviews">
                    <div className="reviewsHeader">
                        <p>{CurrentRestaurant.name} Reviews</p>
                        <p>Add Review</p>
                    </div>
                    <Slider {...settings}>
                        {CurrentRestaurant.Reviews?.map((e) =>
                            <div key={e.user}>
                                <div className="review">
                                    <div className="icon" ><img src={CommentIcon} alt="icon" /></div>
                                    <div className="userDetails">
                                        <div className="userImg"><img src={e.userImg} alt="userImg" /></div>
                                        <div>
                                            <p>{e.user}</p>
                                            <p>customer</p>
                                        </div>
                                    </div>
                                    <div className="comment">
                                        <p>{e.comment}</p>
                                        <p>{e.createdAt}</p>
                                    </div>
                                </div>
                            </div>
                        )}


                    </Slider>


                </div>
            </div>


        </div>
    )
}

export default RestaurantItems
