import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast, Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { ReservationClinic } from "../../store/BookingSlice";
import ReviewSection from "./ReviewSection";
import HomeIcon from "@mui/icons-material/Home";
import MedicationIcon from "@mui/icons-material/Medication";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import { AddFavClinic, DeleteFavClinic } from "../../store/favClinics/favSlice";
import "./ProfileDoctor.css";

const ProfileDoctor = ({ DoctorAndClinicId }) => {

  const { id } = useParams();
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
    doctore_id: DoctorAndClinicId.doctorId,
    place_id: Number(DoctorAndClinicId.clinicId),
  });
  const [isLoading, setIsLoading] = useState(false);

  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'age' ? Number(value) : value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    const { detection_type, detection_location, day_booking, time_booking } = formData;

    if (!detection_type || !detection_location || !day_booking || !time_booking) {
      toast.error("Please fill all fields");
      return;
    } else if (!formData.name || !formData.phone || !formData.gender || !formData.age) {
      toast.error("Please fill all fields");
      return;
    } else if (!formData.detection_type || !formData.detection_location || !formData.day_booking || !formData.time_booking) {
      toast.error("Please fill all fields");
      return;
    }

    setIsLoading(true);
    dispatch(ReservationClinic({ formData, navigate }))
      .then(() => {
        setIsLoading(false);
        localStorage.removeItem("orderConfirmed");
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
                                  placeholder={t(field.charAt(0).toUpperCase() + field.slice(1))}
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
                <Toaster />
              </div>
            </div>
          </div>

          <ReviewSection doctore_id={id} />
        </div>
      </div>
    </>
  );
};

export default ProfileDoctor;
