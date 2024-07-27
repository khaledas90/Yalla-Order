import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import SearchRestaurants from "../SearchRestaurants/SearchRestaurants";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

import "./RestaurantItem.css";
import "../AllRestaurants/AllRestaurants.css";
import CommentIcon from "../../assets/commentsIcon.svg";
import { RESTAURANTS } from "../AllRestaurants/FakeData";
import { useEffect, useState } from "react";
import locationOne from "../../assets/Location-One.svg";
import location from "../../assets/Location.svg";
import { addReview, fetchRestaurantById } from "../../services/apiRestaurant";
import { useTranslation } from "react-i18next";
import Modal from "../modal/Modal";
import Loader from "../loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import NetworkError from "../loader/NetworkError";

function RestaurantItems() {
  // slick slider
  const settings = {
    dots: false,
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
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [searchParams] = useSearchParams();
  const RestaurantName = searchParams.get("restaurant");

  const [CurrentRestaurant, setCurrentRestaurant] = useState({});
  const lang = localStorage.getItem("i18nextLng");
  const navigate = useNavigate();
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  const [comment, setComment] = useState("");
  const [RestaurantRating, setRestaurantRating] = useState();

  const ratingChanged = (newRating) => {
    setRestaurantRating(newRating);
  };

  const handleAddReview = async (event) => {
    event.preventDefault();
    try {
      const result = await addReview(id, comment, RestaurantRating);
      toast.success("Review added successfully!");

      setComment("");
      setRestaurantRating(0);
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        setLoading(true); // Start loading
        const data = await fetchRestaurantById(id);
        setRestaurant(data.data);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error("Error fetching restaurant:", error);
        setError("Failed to fetch restaurant");
      } finally {
        setLoading(false); // End loading
      }
    };

    getRestaurant();
  }, [id]);

  if (loading) return <Loader />;

  const {
    "Total rate": totalRate,
    "best selling": bestSelling,
    "resturant info": restaurantInfo,
    reviwes,
  } = restaurant;
  const navigateToMenu = () => {
    navigate(`/restaurants/${id}/menu?restaurant=${restaurantInfo.name}`);
  };


  if (error) return (<NetworkError />)

  return (
    <div className={`Restaurant-item ${lang === "ar" ? "ar" : ""}`}>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <Helmet>
        {lang === "ar" ? (
          <title>
            {t("Restaurant")} {RestaurantName}
          </title>
        ) : (
          <title>
            {restaurantInfo.name} {t("Restaurant")}
          </title>
        )}
      </Helmet>
      <div className="inputDiv inputDivRestaurantItem">
        <SearchRestaurants
          Pagetext={t("Select your area to see the restaurant menu")}
          pageAddress={t("Restaurant")}
          placeholder={"Find your Restaurant.."}
          btnText={"Branch Menu"}
          icon={locationOne}
          locIcon={location}
        />
      </div>

      <div className="restaurant-overview">
        <div className="img-wrapper">
          <img src={restaurantInfo.logo} alt={CurrentRestaurant.name} />
        </div>
      </div>

      <div className="container">
        <div className="restaurant-deliver mb-5">
          <p>
            <span>{restaurantInfo.name}</span> {t("delivers to you")}
          </p>
          <p>{restaurantInfo.address}</p>
        </div>
        {bestSelling.length !== 0 ? (
          <div className="dishes">
            <p>{t("Best Seller Dishes")}</p>
            <div className="row">
              {bestSelling?.map((e) => (
                <div key={e.id} className="col-12 col-md-6 col-lg-3 mb-5">
                  <div className="dish">
                    <div>
                      <img src={e.image} alt="dish" />
                    </div>
                    <p>{e.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        <div className="text-center">
          <button className="navToMenu" onClick={navigateToMenu}>
            {t("View Menu")}
          </button>
        </div>

        <div className="reviews">
          <div className="reviewsHeader">
            {lang === "ar" ? (
              <p>
                {t("Reviews")} {restaurantInfo.name}
              </p>
            ) : (
              <p>
                {restaurantInfo.name} {t("Reviews")}
              </p>
            )}

            <Modal>
              <Modal.Open opens="add-review">
                <button className="add-outer">{t("Add Review")}</button>
              </Modal.Open>
              <Modal.Window name="add-review">
                <form
                  onSubmit={handleAddReview}
                  className={`add-review-form ${lang === "ar" ? "ar" : ""}`}
                >
                  <h3 className="review-form-header">{t("Add Review")}</h3>
                  <div>
                    <div className="rating">
                      <span>
                        {RestaurantRating} {t("Rating")}
                      </span>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={30}
                        a11y={true}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star" />}
                        halfIcon={<i className="fa fa-star-half-alt" />}
                        fullIcon={<i className="fa fa-star" />}
                        activeColor="#ffd700"
                        value={0}
                      />
                    </div>
                  </div>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows="6"
                    placeholder={t("Comment")}
                  ></textarea>
                  <div className="text-center">
                    <button className="add-review-btn">{t("Add")}</button>
                  </div>
                </form>
              </Modal.Window>
            </Modal>
          </div>
          <Slider {...settings}>
            {reviwes?.map((e) => (
              <div key={e["user name"]}>
                <div className="review">
                  <div className="icon">
                    <img src={CommentIcon} alt="icon" />
                  </div>
                  <div className="userDetails">
                    <div>
                      <p style={{ fontWeight: "500" }}>{e["user name"]}</p>
                      <p style={{ color: "#ddd", fontWeight: "500" }}>
                        {t("customer")}
                      </p>
                    </div>
                  </div>
                  <div className="comment">
                    <p>{e["user comment"]}</p>
                    <p>{e["user rate time"]}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default RestaurantItems;
