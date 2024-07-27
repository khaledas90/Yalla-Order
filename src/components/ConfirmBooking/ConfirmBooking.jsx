import Helmet from "react-helmet";
import ReactStars from "react-rating-stars-component";
import { useLocation, useParams } from "react-router-dom";
import NavClinics from "../NavClinics/NavClinics";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { actProfileDoctors } from "../../store/ProfilsDoctors/profileDoctorsSlice";
import Loader from "../loader/Loader";
import "./ConfirmBooking.css";
import { fetchReservationDetails } from "../../store/reservation/reservationSlice";
import { confirmReservation } from "../../store/reservation/confirmationSlice";
import toast, { Toaster } from "react-hot-toast";

const ConfirmBooking = () => {
  const [clinicRating, setClinicRating] = useState(0);
  const [dataReservation, setDataReservation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [isLoadPayment, setIsLoadPayment] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  const location = useLocation();
  const { idReservation } = location.state || {};
  const doctorData = useSelector((state) => state.doctorData.profileDoctors.Doctordetails);
  const confirmation = useSelector((state) => state.confirmation);

  useEffect(() => {
    const buttonDisabled = localStorage.getItem("orderConfirmed");
    if (buttonDisabled) {
      setIsClicked(true);
    }

    if (id) {
      dispatch(actProfileDoctors(id));
    }

    if (idReservation) {
      fetchReservationDetails(idReservation)
        .then((response) => {
          if (response.status === 200) {
            toast.success(response.data.message);
            setDataReservation(response.data.data);
          }
        })
        .catch((err) => {
          console.error(err);
          toast.error("Failed to fetch reservation details.");
        })
        .finally(() => setLoading(false));
    }
  }, [dispatch, id, idReservation]);

  const handleConfirmOrder = async (e) => {
    e.preventDefault();
    if (isClicked) return;
    localStorage.setItem("orderConfirmed", "true");
    setIsClicked(true);
    setIsLoadPayment(true);
    try {
      await dispatch(confirmReservation(idReservation)).unwrap();
      setShowIframe(true);
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setIsLoadPayment(false);
    }
  };

  useEffect(() => {
    if (confirmation.url) {
      fetch(confirmation.url)
        .then(response => console.log(response))
        .catch(error => console.error(error));
    }
  }, [confirmation.url]);

  if (loading) return <Loader />;

  return (
    <div className="ProfileDoctors">
      <Helmet>
        <title>Profile Doctors</title>
        <meta name="description" content="Discover the best clinics around you." />
      </Helmet>
      <div className="Main_bg">
        <NavClinics />
        <h1 className="text-center TitlePage">Clinics</h1>
      </div>
      <div className="container" style={{ marginTop: "-14pc" }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <img src={doctorData.image} alt="Doctor" className="w-100" />
              <div className="pt-5 d-flex align-items-center justify-content-center">
                <div className="rating">
                  <span className="fw-bold text-warning">
                    {clinicRating} Rating
                  </span>
                  <ReactStars
                    count={5}
                    onChange={setClinicRating}
                    size={40}
                    a11y={true}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star" />}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    fullIcon={<i className="fa fa-star" />}
                    activeColor="#ffd700"
                    value={clinicRating}
                  />
                </div>
              </div>
            </div>
            <h4 className="mt-2 lh-1 fs-3">Dr. {doctorData.name}</h4>
          </div>
        </div>

        <div className="reservation-summary p-2 my-5">
          <div>
            <h2 className="header w-100 text-white bg-black p-2 rounded-3">
              Reservation Summary
            </h2>
          </div>
          <div className="clinic-info">
            <h3 className="my-4">
              {dataReservation?.clinicName || "--------"}
            </h3>
            <div className="info-row bg-body-secondary p-2">
              <span>Dr. Name</span>
              <span>Specialty</span>
            </div>
            <div className="info-row text-black-50">
              <span>{dataReservation?.doctorName || "Dr. --------"}</span>
              <span>{dataReservation?.department || "---------"}</span>
            </div>
            <div className="info-row bg-body-secondary p-2">
              <span>Waiting Time</span>
              <span>Detection per</span>
            </div>
            <div className="info-row text-black-50">
              <span>{dataReservation?.waitingTime || "--"}</span>
              <span>{dataReservation?.detectionTime || "--"}</span>
            </div>
            <div className="info-row bg-body-secondary p-2">
              <span>Home Address</span>
            </div>
            <p className="text-black-50">
              {dataReservation?.clinicAddress || "--------------------------------------------------------------"}
            </p>
          </div>

          <div className="info-row">
            <span>Cash</span>
            <i className="fa-solid fa-cash-register text-info"></i>
            <span>Fees</span>
            <hr />
            <div className="patient-data p-2 my-4">
              <h3>Patient Data</h3>
              <div className="info-row bg-body-secondary p-2">
                <span>Patient Name</span>
                <span>Phone Number</span>
              </div>
              <div className="info-row text-black-50">
                <span>{dataReservation?.patientName || "-----------------"}</span>
                <span>{dataReservation?.patientPhone || "01************"}</span>
              </div>
              <div className="info-row bg-body-secondary p-2">
                <span>Gender</span>
                <span>Age</span>
              </div>
              <div className="info-row text-black-50">
                <span>{dataReservation?.patientGender || "---------"}</span>
                <span>{dataReservation?.patientAge || "--- Years"}</span>
              </div>
            </div>
            <div className="reservation-details my-3">
              <div className="info-row bg-body-secondary p-2">
                <span>Day Reservation</span>
                <span>Reservation Time</span>
              </div>
              <div className="info-row text-black-50">
                <span>{dataReservation?.patientDayBooking || "00/00/0000"}</span>
                <span>{dataReservation?.patientTimeBooking || "00:00"}</span>
              </div>
            </div>
            <div className="payment-summary p-2">
              <h3 className="bg-body-secondary p-2">Payment Summary</h3>
              <div className="info-row">
                <p className="text-black-50">
                  Got a voucher code? Place your order from the app to use it.
                </p>
              </div>
              <div className="info-row p-2">
                <span>Cash</span>
                <i className="fa-solid fa-cash-register text-info"></i>
                <span>{dataReservation?.totalPrice || "reservation.fees"}</span>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className={`confirm-button rounded-pill ${isClicked ? 'disabledBtn' : ''}`}
                onClick={handleConfirmOrder}
                disabled={isClicked}
              >
                {isLoadPayment ? "Loading..." : "Confirm Order"}
              </button>
            </div>
            {showIframe && confirmation.url && (
              <div className="iframe_container">
                <div className={`overlayIframe ${confirmation.url ? 'activeOverlayIframe' : ''}`}></div>
                <iframe
                  title="Payment View"
                  src={confirmation.url}
                  style={{ width: '100%', height: '100vh', border: 'none', position: 'relative', zIndex: 999999 }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default React.memo(ConfirmBooking);
