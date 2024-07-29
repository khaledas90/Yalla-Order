import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import Modal from "../modal/Modal";
import { toast, Toaster } from "react-hot-toast";
import CommentIcon from "../../assets/revClinic.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import apiAuthenticate from "../../services/authentication/apiAuthenticate";
import Spinner from "../loader/Spinner";

const ReviewSection = ({ doctore_id }) => {
    const { t } = useTranslation();
    const lang = localStorage.getItem("i18nextLng");
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

    const [comment, setComment] = useState("");
    const [restaurantRating, setRestaurantRating] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showReview, setShowReview] = useState(false);

    const ratingChanged = (newRating) => {
        setRestaurantRating(newRating);
    };

    const handleAddReview = async (event) => {
        event.preventDefault();
        try {
            const result = await apiAuthenticate.post(`/places/clinic/rate/add`, {
                doctore_id: doctore_id,
                rate: restaurantRating,
                comment: comment,
            });
            toast.success("Review added successfully!");
            console.log(result.data);
            setComment("");
            setRestaurantRating(0);
            fetchReviews();
        } catch (error) {
            toast.error("Failed to add review.");
        }
    };

    const fetchReviews = async () => {
        setLoading(true);
        try {
            const result = await apiAuthenticate.get(`/places/clinic/rate/show/${doctore_id}`);
            if (result.data.status === 200) {
                setReviews(result.data.data);
                setShowReview(true);
            } else {
                setShowReview(false);
            }
        } catch (error) {
            console.error("Failed to fetch reviews", error);
            setShowReview(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, [doctore_id]);

    return (
        <div className="reviews">
            <div className="reviewsHeader">
                <p>{t("Reviews")}</p>
                <div className="add-review">
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
                                            {restaurantRating} {t("Rating")}
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
                                            value={restaurantRating}
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
            </div>
            <Toaster />

            {loading ? (
                <Spinner />
            ) : showReview ? (
                <Slider {...settings}>
                    {reviews.map((e) => (
                        <div key={e.id}>
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
                                    <p>{e.userratetime}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            ) : (
                <p className="no-review">{t("No reviews yet")}</p>
            )}
        </div>
    );
};

export default ReviewSection;
