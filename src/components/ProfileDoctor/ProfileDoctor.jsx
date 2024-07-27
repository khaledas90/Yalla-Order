import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import Modal from "../modal/Modal";
import { addReview } from "../../store/addReview/AddReview";
import { useTranslation } from "react-i18next";
import CommentIcon from "../../assets/revClinic.svg";
import "./ProfileDoctor.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MedicationIcon from "@mui/icons-material/Medication";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import { actClinicsCategoryById } from "../../store/ClinicsCategoryById/ClinicsCategoryByIdSlice";
import confirmReservation from "../../store/reservation/confirmationSlice.js";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const ProfileDoctor = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [restaurantRating, setRestaurantRating] = useState(0);
  const [location, setLocation] = useState("");
  const [restaurant, setRestaurant] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gender: "",
    age: "",
    detection_type: "",
    detection_location: "",
    day_booking: "",
    time_booking: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const ratingChanged = (newRating) => {
    setRestaurantRating(newRating);
  };

  const handleAddReview = async (event) => {
    event.preventDefault();
    try {
      const result = await addReview(id, comment, restaurantRating);
      console.log("Review added successfully:", result);
      setComment("");
      setRestaurantRating(0);
    } catch (error) {
      console.error("Error adding review:", error);
      toast.error("Failed to add review.");
    }
  };

  const lang = localStorage.getItem("i18nextLng");
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData);  // Debugging line
    const { detection_type, detection_location, day_booking, time_booking } = formData;

    if (!detection_type || !detection_location || !day_booking || !time_booking) {
      toast.error("Please fill all fields");
      return;
    }

    setIsLoading(true);
    dispatch(confirmReservation({ formData, navigate }))
      .then(() => {
        setIsLoading(false);
        toast.success("Reservation confirmed.");
      })
      .catch(() => {
        toast.error("An error occurred. Please try again.");
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="my-5 profileDoctor">
        <div className="row overflow-hidden w-100">
          <div className="text-center">
            <button
              type="button"
              className={`btn Bttn`}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Reservation now
            </button>

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
                      <button
                        type="button"
                        className="btn-close btnCloseModel"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body my-2">
                      <div className="container">
                        <div className="row">
                          {['name', 'phone', 'age'].map((field, idx) => (
                            <div className="col-lg-12 mb-4" key={idx}>
                              <div className="form-group d-flex align-items-center justify-content-around">
                                <label htmlFor={`exampleInput${field.charAt(0).toUpperCase() + field.slice(1)}`} className="fs-6 fw-normal w-25">
                                  {t(field.charAt(0).toUpperCase() + field.slice(1))}
                                </label>
                                <input
                                  type={field === 'age' ? 'number' : 'text'}
                                  className="w-75 rounded-2 form-control input-group px-2"
                                  id={`exampleInput${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                  name={field}
                                  value={formData[field]}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          ))}

                          <div className="col-lg-12 mb-4">
                            <div className="form-group d-flex align-items-center justify-content-around">
                              <label className="fs-6 fw-normal w-25">
                                {t("Gender")}
                              </label>
                              <div className="select_time_wrapper">
                                {['male', 'female'].map(gender => (
                                  <label className="rounded-0 text-white" key={gender}>
                                    <input
                                      type="radio"
                                      name="gender"
                                      value={gender}
                                      checked={formData.gender === gender}
                                      onChange={handleChange}
                                      className="d-none"
                                    />
                                    <span className="text-center d-block py-3">
                                      {gender === 'male' ? <MaleIcon /> : <FemaleIcon />}
                                      {t(gender.charAt(0).toUpperCase() + gender.slice(1))}
                                    </span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          </div>

                          {['detection_type', 'detection_location'].map(field => (
                            <div className="col-lg-12 mb-4" key={field}>
                              <div className="form-group d-flex align-items-center justify-content-around">
                                <label htmlFor={`exampleInput${field.charAt(0).toUpperCase() + field.slice(1)}`} className="fs-6 fw-normal w-25">
                                  {t(field.charAt(0).toUpperCase() + field.slice(1).replace('_', ' '))}
                                </label>
                                <div className="select_time_wrapper">
                                  {field === 'detection_type' ? (
                                    ['normal', 'urgent'].map(type => (
                                      <label className="rounded-0 text-white" key={type}>
                                        <input
                                          type="radio"
                                          name="detection_type"
                                          value={type}
                                          checked={formData.detection_type === type}
                                          onChange={handleChange}
                                          className="d-none"
                                        />
                                        <span className="text-center d-block py-3">
                                          {t(type.charAt(0).toUpperCase() + type.slice(1))}
                                        </span>
                                      </label>
                                    ))
                                  ) : (
                                    ['home', 'clinic'].map(location => (
                                      <label className="rounded-0 text-white" key={location}>
                                        <input
                                          type="radio"
                                          name="detection_location"
                                          value={location}
                                          checked={formData.detection_location === location}
                                          onChange={handleChange}
                                          className="d-none"
                                        />
                                        <span className="text-center d-block py-3">
                                          {location === 'home' ? <HomeIcon /> : <MedicationIcon />}
                                          {t(location.charAt(0).toUpperCase() + location.slice(1))}
                                        </span>
                                      </label>
                                    ))
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}

                          <div className="col-lg-12 mb-4">
                            <div className="form-group d-flex align-items-center justify-content-around">
                              <label className="fs-6 fw-normal w-25">
                                {t("Day of Booking")}
                              </label>
                              <input
                                type="date"
                                className="w-75 rounded-2 form-control px-2"
                                name="day_booking"
                                value={formData.day_booking}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="col-lg-12 mb-4">
                            <div className="form-group d-flex align-items-center justify-content-around">
                              <label className="fs-6 fw-normal w-25">
                                {t("Booking Time")}
                              </label>
                              <input
                                type="time"
                                className="w-75 rounded-2 form-control px-2"
                                name="time_booking"
                                value={formData.time_booking}
                                onChange={handleChange}
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
          </div>

          <div className="reviews">
            <div className="reviewsHeader">
              <p>{t("Reviews")}</p>

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

            <Slider {...settings}>
              <div>
                <div className="review">
                  <div className="icon">
                    <img src={CommentIcon} alt="icon" />
                  </div>
                  <div className="userDetails">
                    <div>
                      <p style={{ fontWeight: "500" }}>ahmed</p>
                      <p style={{ color: "#ddd", fontWeight: "500" }}>
                        {t("customer")}
                      </p>
                    </div>
                  </div>
                  <div className="comment">
                    <p>rrr</p>
                    <p>fffffffff</p>
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
