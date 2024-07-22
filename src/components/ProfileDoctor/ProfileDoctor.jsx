// Components

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Modal from "../modal/Modal";
import { addReview } from "../../store/addReview/AddReview";
import { useTranslation } from "react-i18next";
import CommentIcon from "../../assets/commentsIcon.svg";

import "./ProfileDoctor.css";
import { useState } from "react";

const ProfileDoctor = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [RestaurantRating, setRestaurantRating] = useState(0);
  const [type, setType] = useState("");
  const [location, setLoction] = useState("");
  const [formData, setFormData] = useState({
    bookingDate: new Date(),
    bookingTime: "",
  });

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleAddClick = () => {
    if (rating === 0) {
      alert("Please select a rating");
      return;
    }
    if (comment.trim() === "") {
      alert("Please add a comment");
      return;
    }

    console.log("Rating:", rating);
    console.log("Comment:", comment);
  };

  const ratingChanged = (newRating) => {
    setRestaurantRating(newRating);
  };

  const handleAddReview = async (event) => {
    event.preventDefault();
    try {
      const result = await addReview(id, comment, RestaurantRating);
      console.log("Review added successfully:", result);
      setComment("");
      setRestaurantRating(0);
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const lang = localStorage.getItem("i18nextLng");
  const { t } = useTranslation();

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleLoctionChange = (event) => {
    setLoction(event.target.value);
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, bookingDate: date });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  return (
    <>
      <div className="my-5 profileDoctor">
        <div className="row overflow-hidden w-100">
          <div className="text-center">
            <button
              type="button"
              className={`btn ${"Bttn"}`}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Reservation now
            </button>
          </div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog ">
              <div className={`modal-content `}>
                <div className="modal-header Book ">
                  <h1
                    className="modal-title fw-bold px-5"
                    id="exampleModalLabel"
                  >
                    Booking
                  </h1>
                </div>
                <div className="modal-body my-4">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 mb-4">
                        <div className="from-group d-flex align-items-center justify-content-around">
                          <label
                            htmlFor="exampleInputName"
                            className="fs-6 fw-normal w-25"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="w-75 rounded-2 input-group px-2"
                            id="exampleInputName"
                            placeholder="ahmed naser"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-4">
                        <div className="from-group d-flex align-items-center justify-content-around">
                          <label
                            htmlFor="exampleInputNumber"
                            className="fs-6 fw-normal w-25"
                          >
                            phone number
                          </label>
                          <input
                            type="text"
                            className="w-25 rounded-3 mx-1 px-2 input-group"
                            id="exampleInputNumber"
                            aria-describedby="emailHelp"
                            placeholder="+20"
                          />
                          <input
                            type="text"
                            className="w-50 rounded-2 input-group px-2"
                            id="exampleInputNumber"
                            aria-describedby="emailHelp"
                            placeholder="1142399186"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-4">
                        <div className="from-group d-flex align-items-center justify-content-around">
                          <label
                            htmlFor="exampleInputAge"
                            className="fs-6 fw-normal w-25"
                          >
                            Age
                          </label>
                          <input
                            type="text"
                            className="w-75 rounded-2 input-group px-2"
                            id="exampleInputAge"
                            placeholder="20"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-4">
                        <div className="from-group d-flex align-items-center justify-content-around">
                          <label
                            htmlFor="defaultCheck1"
                            className="fw-normal fs-6 input-group"
                          >
                            Detection location
                          </label>
                          <div className="d-flex align-items-center mx-4">
                            <input
                              type="radio"
                              id="home"
                              name="loction"
                              value="home"
                              checked={location === "home"}
                              onChange={handleLoctionChange}
                              className=""
                            />
                            <label
                              htmlFor="home"
                              className="w-100 d-flex align-items-center mx-1"
                            >
                              <i class="fa-solid  fa-house mx-1"></i>
                              <span className="">Home</span>
                            </label>
                          </div>
                          <div className="d-flex align-items-center mx-4 ">
                            <input
                              type="radio"
                              id="clinic"
                              name="loction"
                              value="clinic"
                              checked={location === "clinic"}
                              onChange={handleLoctionChange}
                              className=""
                            />
                            <label
                              htmlFor="clinic"
                              className="w-100 d-flex align-items-center mx-1"
                            >
                              <i class="fa-regular fa-hospital mx-1"></i>
                              <span className="">Clinic</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 mb-4">
                        <div className="from-group d-flex align-items-center justify-content-around">
                          <label className="fs-6 fw-normal w-25">
                            Day of booking
                          </label>
                          <input
                            type="date"
                            className="w-75 rounded-2 px-2"
                            selected={formData.bookingDate}
                            onChange={handleDateChange}
                            dateFormat="MM/dd/yyyy"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-4">
                        <div className="from-group d-flex align-items-center justify-content-around">
                          <label className="fs-6 fw-normal w-25">
                            Booking timey
                          </label>
                          <input
                            type="time"
                            className="w-75 rounded-2 px-2"
                            name="bookingTime"
                            value={formData.bookingTime}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-4">
                        <div className="form-input d-flex align-items-center justify-content-around ">
                          <label
                            htmlFor="defaultCheck2"
                            className="fs-6 fw-normal w-50 me-auto"
                          >
                            Detection Type
                          </label>

                          <div className=" ms-auto  d-flex align-items-center justify-content-center">
                            <input
                              type="radio"
                              id="normal"
                              name="type"
                              value="normal"
                              checked={type === "normal"}
                              onChange={handleTypeChange}
                              className="w-100"
                            />
                            <label htmlFor="normal" className="btn">
                              normal
                            </label>
                          </div>
                          <div className=" d-flex justify-content-center align-items-center ">
                            <input
                              className=""
                              type="radio"
                              id="urgent"
                              name="type"
                              value="urgent"
                              checked={type === "urgent"}
                              onChange={handleTypeChange}
                            />
                            <label htmlFor="urgent" className="btn me-auto">
                              urgent
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mb-5 ro">
                  <button
                    type="button"
                    className="btnConfirm w-50 rounded-pill"
                    data-bs-dismiss="modal"
                  >
                    confirm Reservation
                  </button>
                </div>
              </div>
            </div>
          </div>
          ]
          <div className="reviews px-5">
            <div className="reviewsHeader">
              {lang === "ar" ? <p>{t("Reviews")}</p> : <p>{t("Reviews")}</p>}

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
                      <button
                        className="add-review-btn"
                        onClick={handleAddClick}
                      >
                        {t("Add")}
                      </button>
                    </div>
                  </form>
                </Modal.Window>
              </Modal>
            </div>
            <Slider {...settings}>
              <div>
                <div className="review">
                  <div className="icon">
                    <img src={CommentIcon} alt="icon" />
                  </div>
                  <div className="userDetails">
                    <div>
                      <p style={{ fontWeight: "500" }}>ssssssssssssssssss</p>
                      <p style={{ color: "#ddd", fontWeight: "500" }}>
                        {t("customer")}
                      </p>
                    </div>
                  </div>
                  <div className="comment">
                    <p>ddddddd</p>
                    <p>bbbbbbbbbbbbbb</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDoctor;
