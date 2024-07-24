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
import toast, { Toaster } from "react-hot-toast";
import "./ProfileDoctor.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import MedicationIcon from "@mui/icons-material/Medication";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import { useNavigate } from "react-router-dom";
import { ReservationClinic } from "../../store/BookingSlice";
const ProfileDoctor = (DoctorAndClinicId) => {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [RestaurantRating, setRestaurantRating] = useState(0);
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [DoctorId, setDoctorId] = useState();
  const [placeId, setplaceId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  // Reservations
  const [formData, setFormData] = useState({
    name: "",
    phone: '',
    gender: "",
    age: '',
    detection_type: "",
    detection_location: "",
    day_booking: "",
    time_booking: "",
    doctore_id: DoctorAndClinicId.DoctorAndClinicId.doctorId,
    place_id: parseInt(DoctorAndClinicId.DoctorAndClinicId.clinicId)
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === "age" ? parseInt(value) || "" : value;
    setFormData({ ...formData, [name]: parsedValue });
  };

  const handleTypeChange = (event) => {
    const value = event.target.value;
    setType(value);
    setFormData({ ...formData, detection_type: value });
  };

  const handleLocationChange = (event) => {
    const value = event.target.value;
    setLocation(value);
    setFormData({ ...formData, detection_location: value });
  };

  const handleDateChange = (e) => {
    setFormData({ ...formData, day_booking: e.target.value });
  };
  const handleTimeChange = (e) => {
    setFormData({ ...formData, time_booking: e.target.value });
  };


  const handleSubmit = () => {
    console.log(formData);
    if (formData.detection_type === "" || formData.detection_location === "" || formData.day_booking === "" || formData.time_booking === "") {
      toast.error("Please fill all fields");
      return;
    } else if (formData.detection_type === "Select" || formData.detection_location === "Select" || formData.day_booking === "Select" || formData.time_booking === "Select") {
      toast.error("Please fill all fields");
      return;
    } else {

      setIsLoading(true);
      dispatch(ReservationClinic({ formData, navigate }))
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          toast.error("An error occurred. Please try again.");
          setIsLoading(false);
        });
    }

  };




  return (
    <>
      <div className="my-5 profileDoctor">
        <div className="row overflow-hidden w-100">
          <div className="text-center">

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
              <div className="ModelBooking">
                <div className="modal-dialog w-100" id="BookingModal">
                  <div className="modal-content">
                    <div className="modal-header Bookg bgBooking">
                      <h1 className="modal-title fw-bold px-5 text-white" id="exampleModalLabel">
                        Booking
                      </h1>
                      <button type="button" class="btn-close btnCloseModel" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body my-2">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-12 mb-4 gap-5">
                            <div className="from-group d-flex align-items-center justify-content-around">
                              <label htmlFor="exampleInputName" className="fs-6 fw-normal w-25">
                                Full Name
                              </label>
                              <input
                                type="text"
                                className="w-75 rounded-2 form-control input-group px-2"
                                id="exampleInputName"
                                placeholder="ahmed naser"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 mb-4">
                            <div className="from-group d-flex align-items-center justify-content-around">
                              <label htmlFor="exampleInputNumber" className="fs-6 fw-normal w-25">
                                Phone Number
                              </label>
                              <input
                                type="text"
                                className="w-75 rounded-2 form-control input-group px-2"
                                id="exampleInputNumber"
                                placeholder="+20 1142399186"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 mb-4">
                            <div className="from-group d-flex align-items-center justify-content-around">
                              <label htmlFor="exampleInputGender" className="fs-6 fw-normal w-25">
                                Gender
                              </label>
                              <div className="select_time_wrapper">
                                <label className="rounded-0 text-white">
                                  <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === "male"}
                                    onChange={handleInputChange}
                                    className="d-none"
                                  />
                                  <span className="text-center d-block py-3">
                                    <MaleIcon />
                                    Male
                                  </span>
                                </label>
                                <label className="rounded-0 text-white">
                                  <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === "female"}
                                    onChange={handleInputChange}
                                    className="d-none"
                                  />
                                  <span className="text-center d-block py-3">
                                    <FemaleIcon />
                                    Female
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 mb-4">
                            <div className="from-group d-flex align-items-center justify-content-around">
                              <label htmlFor="exampleInputAge" className="fs-6 fw-normal w-25">
                                Age
                              </label>
                              <input
                                type="number"
                                className="w-75 rounded-2 form-control input-group px-2"
                                id="exampleInputAge"
                                placeholder="20"
                                name="age"
                                value={parseInt(formData.age) || formData.age}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 mb-4">
                            <div className="from-group d-flex align-items-center justify-content-around">
                              <label htmlFor="exampleInputType" className="fs-6 fw-normal w-25">
                                Detection Type
                              </label>
                              <div className="select_time_wrapper">
                                <label className="rounded-0 text-white">
                                  <input
                                    type="radio"
                                    name="type"
                                    value="normal"
                                    checked={formData.detection_type === "normal"}
                                    onChange={handleTypeChange}
                                    className="d-none"
                                  />
                                  <span className="text-center d-block py-3">
                                    Normal
                                  </span>
                                </label>
                                <label className="rounded-0 text-white">
                                  <input
                                    type="radio"
                                    name="type"
                                    value="urgent"
                                    checked={formData.detection_type === "urgent"}
                                    onChange={handleTypeChange}
                                    className="d-none"
                                  />
                                  <span className="text-center d-block py-3">
                                    Urgent
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 mb-4">
                            <div className="from-group d-flex align-items-center justify-content-around">
                              <label htmlFor="defaultCheck1" className="fw-normal fs-6 input-group">
                                Detection Location
                              </label>
                              <div className="d-flex align-items-center mx-4">
                                <input
                                  type="radio"
                                  id="home"
                                  name="location"
                                  value="home"
                                  checked={formData.detection_location === "home"}
                                  onChange={handleLocationChange}
                                  className=""
                                />
                                <label htmlFor="home" className="w-100 d-flex align-items-center mx-1">
                                  <HomeIcon />
                                  <span className="">Home</span>
                                </label>
                              </div>
                              <div className="d-flex align-items-center mx-4 ">
                                <input
                                  type="radio"
                                  id="clinic"
                                  name="location"
                                  value="clinic"
                                  checked={formData.detection_location === "clinic"}
                                  onChange={handleLocationChange}
                                  className=""
                                />
                                <label htmlFor="clinic" className="w-100 d-flex align-items-center mx-1">
                                  <MedicationIcon />
                                  <span className="">Clinic</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 mb-4">
                            <div className="from-group d-flex align-items-center justify-content-around">
                              <label className="fs-6 fw-normal w-25">
                                Day of Booking
                              </label>
                              <input
                                type="date"
                                className="w-75 rounded-2 form-control px-2"
                                name="bookingDate"
                                value={formData.day_booking}
                                onChange={handleDateChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 mb-4">
                            <div className="from-group d-flex align-items-center justify-content-around">
                              <label className="fs-6 fw-normal w-25">
                                Booking Time
                              </label>
                              <input
                                type="time"
                                className="w-75 rounded-2 form-control px-2"
                                name="bookingTime"
                                value={formData.time_booking}
                                onChange={handleTimeChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mb-5 ro">
                      <button
                        type="button"
                        className="btnReservation w-50 rounded-pill"
                        onClick={handleSubmit}
                      >
                        {isLoading ? "Loading..." : t("Confirm Reservation")}
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <Toaster
              position="top-center"
              reverseOrder={false}
            />

          </div>


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
                      <p style={{ fontWeight: "500" }}>f</p>
                      <p style={{ color: "#ddd", fontWeight: "500" }}>
                        {t("customer")}
                      </p>
                    </div>
                  </div>
                  <div className="comment">
                    <p>r</p>
                    <p>12</p>
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
