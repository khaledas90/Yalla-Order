import Helmet from "react-helmet";
import ReactStars from "react-rating-stars-component";
// import loction from "../assets/locationDoctor.svg";

import NavClinics from "../NavClinics/NavClinics";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { actProfileDoctors } from "../../store/ProfilsDoctors/profileDoctorsSlice";
import "./ConfirmBooking.css";
// import MaleIcon from "@mui/icons-material/Male";
// import HomeIcon from "@mui/icons-material/Home";
// import MedicationIcon from "@mui/icons-material/Medication";
// import FemaleIcon from "@mui/icons-material/Female";

const ConfirmBooking = ({ reservation }) => {
  //   const [location, setLoction] = useState("");
  //   const [formData, setFormData] = useState({
  //     bookingDate: new Date(),
  //     bookingTime: "",
  //   });
  const [clinicRating, setClinicRating] = useState();
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  const doctorData = useSelector(
    (state) => state.doctorData.profileDoctors.Doctordetails
  );

  const ratingChanged = (newRating) => {
    setClinicRating(newRating);
  };

  useEffect(() => {
    dispatch(actProfileDoctors(id));
  }, [dispatch, id]);

  //   const handleLoctionChange = (event) => {
  //     setLoction(event.target.value);
  //   };

  //   const handleDateChange = (date) => {
  //     setFormData({ ...formData, bookingDate: date });
  //   };

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  return (
    <div className="ProfileDoctors">
      <Helmet>
        <title>Profile Doctors</title>
        <meta
          name="description"
          content="Discover the best restaurants around you."
        />
      </Helmet>
      <div className="Main_bg">
        <NavClinics />
        <h1 className="text-center TitlePage">Clinics</h1>
      </div>
      <div className="container" style={{ marginTop: "-14pc" }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <img src={doctorData.image} alt="" className="w-100" />

              <img src="" alt="" className="w-25 mt-5" />
              <div className="pt-5 d-flex align-items-center justify-content-center">
                <div className="rating">
                  <div className="rating">
                    <span className="fw-blod text-warning">
                      {clinicRating} Rating
                    </span>
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
                </div>
              </div>
              <h4 className="mt-2 lh-1 fs-3 ">Dr. {doctorData.name}</h4>
            </div>
          </div>

          <div className="reservation-summary my-5">
            <div>
              <h2 className="header w-100 text-white bg-black p-2 rounded-3">
                Reservation Summary
              </h2>
            </div>
            <div className="clinic-info ">
              <h3 className="my-4">Eye Clinic</h3>
              <div className="info-row  bg-body-secondary ">
                <span>Dr. Name</span>
                <span>Specialty Dr.</span>
              </div>
              <div className="info-row text-black-50">
                <span>Dr. Ramy Shokry </span>
                <span>ophthalmologist</span>
              </div>
              <div className="info-row  bg-body-secondary">
                <span>Waiting Time</span>
                <span>Detection per</span>
              </div>
              <div className="info-row  text-black-50">
                <span>10</span>
                <span>20</span>
              </div>
              <div className="info-row bg-body-secondary">
                <span>Home address</span>
                <span className="text-info text-end">Add New Address</span>
              </div>
              <p className="text-black-50">
                Alexandria, Cleopatra, in front of the tram, Building No. 16,
                second floor, Apartment 4
              </p>
            </div>
            <hr />
            <div className="patient-data my-4 ">
              <h3>Patient Data</h3>
              <div className="info-row bg-body-secondary">
                <span>Patient Name</span>
                <span>Phone Number</span>
              </div>
              <div className="info-row text-black-50">
                <span>Nada Ahmed</span>
                <span>0114239****</span>
              </div>

              <div className="info-row bg-body-secondary">
                <span>Gender</span>
                <span>Age</span>
              </div>
              <div className="info-row  text-black-50">
                <span>Male</span>
                <span>20 Year</span>
              </div>
            </div>
            <div className="reservation-details my-3">
              <div className="info-row bg-body-secondary">
                <span>Day Reservation</span>
                <span>Reservation Time</span>
              </div>
              <div className="info-row text-black-50">
                <span>Sun: 17/11/2023</span>
                <span>11:00 Am</span>
              </div>
            </div>
            <div className="payment-summary ">
              <h3 className=" bg-body-secondary">Payment Summary</h3>
              <div className="info-row">
                <p className="text-black-50">
                  Got a voucher code? Place your order from the foodc app to be
                  able to use it. *
                </p>
              </div>
              <div className="info-row">
                <span>Cash</span>
                <i class="fa-solid fa-cash-register text-info"></i>
                <span> reservation.fees</span>
              </div>
            </div>
            <div className="d-flex  justify-content-center">
              <button className="confirm-button rounded-pill">
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
